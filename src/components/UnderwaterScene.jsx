// src/components/UnderwaterScene.jsx
import React, { useRef, useEffect } from "react";

/**
 * UnderwaterScene.jsx — 3D organic coral clusters + bubbles + fish + caustics
 * Updated: loads public/assets/fish.glb and uses AnimationMixers when available.
 *
 * Drop into src/components and import <UnderwaterScene />.
 * Requires `three` installed. For Draco-compressed GLBs, uncomment DRACOLoader setup.
 */

export default function UnderwaterScene({
  fishCount = 12,
  jellyCount = 2,
  coralCount = 7,
  particleCount = 200,
  bubbleCount = 60,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let raf = null;

    let renderer, scene, camera;
    let particleGeo, particleMat, particlePoints;
    let bubbleGeo, bubbleMat, bubblePoints;
    let fishGroup, coralGroup, grassGroup, jellyGroup;
    let causticTexture;
    let mixersToDispose = [];

    // pointer state
    let mouseX = 0,
      mouseY = 0;

    function onResize() {
      if (!camera || !renderer) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    function onPointer(e) {
      const mount = mountRef.current;
      if (!mount) return;
      const r = mount.getBoundingClientRect();
      mouseX = (e.clientX - r.left) / r.width - 0.5;
      mouseY = (e.clientY - r.top) / r.height - 0.5;
    }

    (async () => {
      if (!mounted || !mountRef.current) return;
      const THREE = await import("three");

      const isMobile = window.innerWidth < 900;
      const DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.2);

      const P_COUNT = isMobile ? Math.min(particleCount, 100) : particleCount;
      const F_COUNT = isMobile ? Math.min(fishCount, 8) : fishCount;
      const J_COUNT = isMobile ? Math.min(jellyCount, 2) : jellyCount;
      const C_COUNT = isMobile ? Math.min(coralCount, 4) : coralCount;
      const B_COUNT = isMobile ? Math.min(bubbleCount, 30) : bubbleCount;

      const mount = mountRef.current;
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(DPR);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      mount.appendChild(renderer.domElement);

      // scene + camera
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x001427, 0.0065);
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 6, isMobile ? 75 : 90);

      // lights
      scene.add(new THREE.AmbientLight(0x88dfff, isMobile ? 0.45 : 0.6));
      const sun = new THREE.DirectionalLight(0xffffff, isMobile ? 0.6 : 0.95);
      sun.position.set(-30, 60, 40);
      scene.add(sun);
      const fill = new THREE.PointLight(0xa0e6ff, 0.35);
      fill.position.set(20, -10, 30);
      scene.add(fill);

      // caustic canvas
      const cCan = document.createElement("canvas");
      cCan.width = 256;
      cCan.height = 256;
      const cCtx = cCan.getContext("2d");
      causticTexture = new THREE.CanvasTexture(cCan);
      causticTexture.wrapS = causticTexture.wrapT = THREE.RepeatWrapping;
      causticTexture.repeat.set(1.3, 0.9);
      const causticMat = new THREE.MeshBasicMaterial({
        map: causticTexture,
        transparent: true,
        opacity: isMobile ? 0.22 : 0.38,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const causticPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(380, 160),
        causticMat
      );
      causticPlane.position.set(0, 10, 20);
      causticPlane.rotation.x = -0.12;
      scene.add(causticPlane);

      function drawCaustics(t) {
        const w = cCan.width,
          h = cCan.height;
        cCtx.clearRect(0, 0, w, h);
        const g = cCtx.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, "rgba(190,230,255,0.04)");
        g.addColorStop(1, "rgba(8,18,30,0.02)");
        cCtx.fillStyle = g;
        cCtx.fillRect(0, 0, w, h);
        for (let i = 0; i < 12; i++) {
          const r = 20 + Math.abs(Math.sin((t * 0.001 + i) * 1.3)) * 20;
          const x = (Math.sin(t * 0.0009 + i * 0.8) * 0.5 + 0.5) * w;
          const y = (Math.cos(t * 0.0011 + i * 0.7) * 0.5 + 0.5) * h;
          const grd = cCtx.createRadialGradient(x, y, r * 0.08, x, y, r);
          grd.addColorStop(0, "rgba(255,255,255,0.14)");
          grd.addColorStop(1, "rgba(160,220,255,0.03)");
          cCtx.fillStyle = grd;
          cCtx.beginPath();
          cCtx.arc(x, y, r, 0, Math.PI * 2);
          cCtx.fill();
        }
      }

      // light shafts
      const shaftMat = new THREE.MeshBasicMaterial({
        color: 0xcff2ff,
        transparent: true,
        opacity: isMobile ? 0.02 : 0.045,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      for (let i = 0; i < 2; i++) {
        const shaft = new THREE.Mesh(
          new THREE.PlaneGeometry(240, 480),
          shaftMat
        );
        shaft.position.set(-20 + i * 40, 45, -12 + i * -6);
        shaft.rotation.x = -0.36;
        shaft.rotation.z = (i - 0.5) * 0.14;
        scene.add(shaft);
      }

      // small particles (dust)
      particleGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(P_COUNT * 3);
      const pSp = new Float32Array(P_COUNT);
      for (let i = 0; i < P_COUNT; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 420;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 220;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 340;
        pSp[i] = 0.002 + Math.random() * 0.02;
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      particleGeo.setAttribute("aSpeed", new THREE.BufferAttribute(pSp, 1));
      const partSprite = new THREE.TextureLoader().load(
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12'><circle cx='6' cy='6' r='4' fill='white' opacity='0.45'/></svg>"
      );
      particleMat = new THREE.PointsMaterial({
        size: isMobile ? 0.75 : 1.4,
        map: partSprite,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0xd7f6ff,
      });
      particlePoints = new THREE.Points(particleGeo, particleMat);
      scene.add(particlePoints);

      // bubbles (larger)
      bubbleGeo = new THREE.BufferGeometry();
      const bPos = new Float32Array(B_COUNT * 3);
      const bSpeed = new Float32Array(B_COUNT);
      const bSize = new Float32Array(B_COUNT);
      for (let i = 0; i < B_COUNT; i++) {
        bPos[i * 3] = (Math.random() - 0.5) * 300;
        bPos[i * 3 + 1] = -40 + Math.random() * 160;
        bPos[i * 3 + 2] = (Math.random() - 0.5) * 260;
        bSpeed[i] = 0.3 + Math.random() * 1.0;
        bSize[i] = 0.6 + Math.random() * 1.6;
      }
      bubbleGeo.setAttribute("position", new THREE.BufferAttribute(bPos, 3));
      bubbleGeo.setAttribute("aSpeed", new THREE.BufferAttribute(bSpeed, 1));
      bubbleGeo.setAttribute("aSize", new THREE.BufferAttribute(bSize, 1));
      const bubbleSprite = new THREE.TextureLoader().load(
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><g><circle cx='32' cy='32' r='18' fill='rgba(255,255,255,0.12)' stroke='rgba(255,255,255,0.25)' stroke-width='2'/></g></svg>"
      );
      bubbleMat = new THREE.PointsMaterial({
        size: 8,
        map: bubbleSprite,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.NormalBlending,
      });
      bubblePoints = new THREE.Points(bubbleGeo, bubbleMat);
      scene.add(bubblePoints);

      // ---------- CORAL (procedural organic clusters) ----------
      coralGroup = new THREE.Group();

      const mergeAndPerturb = (geos, matColorHSL) => {
        const merged = THREE.BufferGeometryUtils
          ? THREE.BufferGeometryUtils.mergeBufferGeometries(geos, false)
          : (function fallbackMerge() {
              return geos[0].clone();
            })();

        const posAttr = merged.getAttribute("position");
        const len = posAttr.count;
        for (let i = 0; i < len; i++) {
          const ix = i * 3;
          const rx = (Math.random() - 0.5) * 0.08;
          const ry = (Math.random() - 0.5) * 0.08;
          const rz = (Math.random() - 0.5) * 0.08;
          posAttr.array[ix] += rx;
          posAttr.array[ix + 1] += ry;
          posAttr.array[ix + 2] += rz;
        }
        merged.computeVertexNormals();
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(
            matColorHSL.h,
            matColorHSL.s,
            matColorHSL.l
          ),
          roughness: 0.75,
          metalness: 0.02,
        });
        return new THREE.Mesh(merged, mat);
      };

      try {
        const { BufferGeometryUtils } = await import(
          "three/examples/jsm/utils/BufferGeometryUtils.js"
        );
        THREE.BufferGeometryUtils = BufferGeometryUtils;
      } catch (err) {
        console.info(
          "BufferGeometryUtils not available; using fallback merge."
        );
      }

      for (let i = 0; i < C_COUNT; i++) {
        const baseX = -72 + Math.random() * 160;
        const baseZ = -24 + Math.random() * 45;
        const baseY = -36 + Math.random() * 6;

        const pieces = [];

        const trunkSegments = 2 + Math.floor(Math.random() * 3);
        let trunkRadius = 0.6 + Math.random() * 1.2;
        for (let s = 0; s < trunkSegments; s++) {
          const h = 0.9 + Math.random() * 1.8;
          const cyl = new THREE.CylinderGeometry(
            trunkRadius * (1 - s * 0.12),
            trunkRadius * (1 - (s + 1) * 0.12) + 0.08,
            h,
            10,
            1
          );
          cyl.translate(
            baseX + (Math.random() - 0.5) * 0.6,
            baseY + s * (h * 0.75),
            baseZ + (Math.random() - 0.5) * 1.5
          );
          pieces.push(cyl);
        }

        const knobCount = 1 + Math.floor(Math.random() * 3);
        for (let k = 0; k < knobCount; k++) {
          const r = 0.7 + Math.random() * 1.4;
          const sph = new THREE.SphereGeometry(r, 10, 8);
          sph.translate(
            baseX + (Math.random() - 0.5) * 2.2,
            baseY + Math.random() * 1.6 - 0.4,
            baseZ + (Math.random() - 0.5) * 2.4
          );
          pieces.push(sph);
        }

        const branchCount = 2 + Math.floor(Math.random() * 4);
        for (let b = 0; b < branchCount; b++) {
          const len = 0.9 + Math.random() * 2.2;
          const thickness = 0.12 + Math.random() * 0.22;
          const branch = new THREE.CylinderGeometry(
            thickness,
            thickness,
            len,
            8
          );
          const angle = Math.random() * Math.PI * 2;
          branch.translate(
            baseX + Math.cos(angle) * (0.6 + Math.random() * 1.4),
            baseY + Math.random() * 1.6,
            baseZ + Math.sin(angle) * (0.6 + Math.random() * 1.4)
          );
          branch.rotateZ(-0.3 + Math.random() * 0.9);
          branch.rotateY(angle + (Math.random() - 0.5) * 0.6);
          pieces.push(branch);
        }

        const plateCount = 1 + Math.floor(Math.random() * 2);
        for (let p = 0; p < plateCount; p++) {
          const tor = new THREE.TorusGeometry(
            0.6 + Math.random() * 1.6,
            0.18,
            6,
            14
          );
          tor.rotateX(Math.PI / 2);
          tor.translate(
            baseX + Math.random() * 0.8 - 0.4,
            baseY - 0.9 - Math.random() * 0.6,
            baseZ + Math.random() * 0.6 - 0.3
          );
          pieces.push(tor);
        }

        const hue = 0.02 + Math.random() * 0.12;
        const mesh = mergeAndPerturb(pieces, { h: hue, s: 0.6, l: 0.42 });

        mesh.position.set(0, 0, 0);
        mesh.rotation.y = Math.random() * Math.PI * 2;
        mesh.scale.setScalar(0.85 + Math.random() * 1.4);
        mesh.userData = {
          baseY,
          bobOffset: Math.random() * Math.PI * 2,
          sway: 0.01 + Math.random() * 0.04,
        };

        coralGroup.add(mesh);
      }
      scene.add(coralGroup);

      // SEAGRASS
      grassGroup = new THREE.Group();
      for (let i = 0; i < 16; i++) {
        const g = new THREE.PlaneGeometry(0.5, 6, 6, 1);
        for (let v = 0; v < g.attributes.position.count; v++) {
          const y = g.attributes.position.getY(v);
          g.attributes.position.setX(
            v,
            g.attributes.position.getX(v) + Math.sin((y / 6) * Math.PI) * 0.25
          );
        }
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x1fb089).multiplyScalar(0.9),
          side: THREE.DoubleSide,
          roughness: 0.95,
        });
        const mesh = new THREE.Mesh(g, mat);
        mesh.position.set(
          -80 + i * 10 + Math.random() * 6,
          -36 + Math.random() * 3,
          -30 + Math.random() * 12
        );
        mesh.rotation.y = Math.random() * 0.6 - 0.3;
        mesh.scale.setScalar(1 + Math.random() * 0.4);
        grassGroup.add(mesh);
      }
      scene.add(grassGroup);

      // JELLYFISH (simple)
      jellyGroup = new THREE.Group();
      for (let j = 0; j < J_COUNT; j++) {
        const jelly = new THREE.Mesh(
          new THREE.SphereGeometry(1.1 + Math.random() * 1.4, 10, 8),
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x9be7ff).lerp(
              new THREE.Color(0xffc1e3),
              Math.random()
            ),
            transparent: true,
            opacity: 0.22 + Math.random() * 0.32,
            roughness: 0.6,
            clearcoat: 0.05,
          })
        );
        jelly.position.set(
          -90 + Math.random() * 180,
          -6 + Math.random() * 30,
          -120 + Math.random() * 240
        );
        jelly.scale.setScalar(0.9 + Math.random() * 0.9);
        jellyGroup.add(jelly);
      }
      scene.add(jellyGroup);

      // ------- FISH: load GLB school (replaces sprite-based school) -------
      fishGroup = new THREE.Group();
      scene.add(fishGroup);

      const fishMixers = [];

      function cloneGltfSimple(gltf) {
        return {
          scene: gltf.scene.clone(true),
          animations: gltf.animations ? gltf.animations.slice(0) : [],
        };
      }

      try {
        const { GLTFLoader } = await import(
          "three/examples/jsm/loaders/GLTFLoader.js"
        );
        // If your GLB is Draco-compressed, uncomment and configure DRACOLoader:
        // const { DRACOLoader } = await import('three/examples/jsm/loaders/DRACOLoader.js');
        // const draco = new DRACOLoader(); draco.setDecoderPath('/draco/'); loader.setDRACOLoader(draco);

        const loader = new GLTFLoader();
        loader.load(
          "/assets/fish.glb",
          (gltf) => {
            const animations = gltf.animations || [];
            const spawnCount = Math.min(F_COUNT, 18); // safe cap

            for (let i = 0; i < spawnCount; i++) {
              const cloned = cloneGltfSimple(gltf);
              const instance = cloned.scene;

              instance.scale.setScalar(0.45 + Math.random() * 0.9);
              instance.position.set(
                (Math.random() - 0.5) * 220,
                -6 + Math.random() * 40,
                (Math.random() - 0.5) * 220
              );

              instance.userData = {
                speed: 0.18 + Math.random() * 0.6,
                dir: Math.random() > 0.5 ? 1 : -1,
                offset: Math.random() * 10,
              };

              instance.traverse((n) => {
                if (n.isMesh) {
                  n.castShadow = true;
                  n.receiveShadow = true;
                  if (n.material && n.material.map)
                    n.material.map.encoding = THREE.sRGBEncoding;
                }
              });

              if (animations && animations.length > 0) {
                const mixer = new THREE.AnimationMixer(instance);
                const clip = animations[0];
                try {
                  mixer.clipAction(clip).play();
                } catch (e) {}
                fishMixers.push(mixer);
              }

              fishGroup.add(instance);
            }

            fishGroup.userData.mixers = fishMixers;
            mixersToDispose.push(...fishMixers);
            console.log(
              "Loaded fish.glb — spawned",
              fishGroup.children.length,
              "instances"
            );
          },
          undefined,
          (err) => {
            console.warn(
              "fish.glb failed to load — falling back to sprites:",
              err
            );
            // fallback sprite school (kept small)
            const textureLoader = new THREE.TextureLoader();
            const fallbackFishSVG = encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='56' viewBox='0 0 140 56'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#ffd36b'/><stop offset='1' stop-color='#ff6b9a'/></linearGradient></defs><ellipse cx='70' cy='28' rx='40' ry='18' fill='url(#g)'/><polygon points='110,28 134,18 134,38' fill='#ff9a6b'/><circle cx='58' cy='22' r='3' fill='#111'/></svg>`
            );
            const fishTex = textureLoader.load(
              `data:image/svg+xml;utf8,${fallbackFishSVG}`
            );
            fishTex.minFilter = THREE.LinearFilter;
            const fishMat = new THREE.SpriteMaterial({
              map: fishTex,
              transparent: true,
              depthWrite: false,
            });

            const sprites = [];
            for (let i = 0; i < F_COUNT; i++) {
              const sp = new THREE.Sprite(fishMat);
              sp.scale.set(4 + Math.random() * 4, 2 + Math.random() * 1.5, 1);
              sp.position.set(
                (Math.random() - 0.5) * 220,
                -6 + Math.random() * 40,
                (Math.random() - 0.5) * 220
              );
              sp.userData = {
                speed: 0.2 + Math.random() * 0.6,
                dir: Math.random() > 0.5 ? 1 : -1,
                offset: Math.random() * 10,
              };
              sp.scale.x = Math.abs(sp.scale.x);
              fishGroup.add(sp);
              sprites.push(sp);
            }
            fishGroup.userData.fallbackSprites = sprites;
          }
        );
      } catch (err) {
        console.warn("GLTFLoader import failed — using sprite fallback", err);
        // fallback sprite creation if dynamic import failed
        const textureLoader = new THREE.TextureLoader();
        const fallbackFishSVG = encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='56' viewBox='0 0 140 56'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#ffd36b'/><stop offset='1' stop-color='#ff6b9a'/></linearGradient></defs><ellipse cx='70' cy='28' rx='40' ry='18' fill='url(#g)'/><polygon points='110,28 134,18 134,38' fill='#ff9a6b'/><circle cx='58' cy='22' r='3' fill='#111'/></svg>`
        );
        const fishTex = textureLoader.load(
          `data:image/svg+xml;utf8,${fallbackFishSVG}`
        );
        fishTex.minFilter = THREE.LinearFilter;
        const fishMat = new THREE.SpriteMaterial({
          map: fishTex,
          transparent: true,
          depthWrite: false,
        });
        const sprites = [];
        for (let i = 0; i < F_COUNT; i++) {
          const sp = new THREE.Sprite(fishMat);
          sp.scale.set(4 + Math.random() * 4, 2 + Math.random() * 1.5, 1);
          sp.position.set(
            (Math.random() - 0.5) * 220,
            -6 + Math.random() * 40,
            (Math.random() - 0.5) * 220
          );
          sp.userData = {
            speed: 0.2 + Math.random() * 0.6,
            dir: Math.random() > 0.5 ? 1 : -1,
            offset: Math.random() * 10,
          };
          sp.scale.x = Math.abs(sp.scale.x);
          fishGroup.add(sp);
          sprites.push(sp);
        }
        fishGroup.userData.fallbackSprites = sprites;
      }

      // attach event listeners AFTER handlers defined
      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onPointer);

      // ANIMATE
      let start = performance.now();
      const animate = (time) => {
        if (!mounted) return;
        const t = (time - start) * 0.001;

        // caustics update
        drawCaustics(time);
        causticTexture.needsUpdate = true;
        causticTexture.offset.x = Math.sin(t * 0.12) * 0.12;
        causticTexture.offset.y = Math.cos(t * 0.08) * 0.04;

        // particles drift
        const pArr = particleGeo.attributes.position.array;
        const pS = particleGeo.attributes.aSpeed.array;
        for (let i = 0; i < P_COUNT; i++) {
          const idx = i * 3 + 1;
          pArr[idx] += pS[i] * 0.002 + Math.sin((i + t * 0.6) * 0.08) * 0.001;
          if (pArr[idx] > 120) pArr[idx] = -120;
        }
        particleGeo.attributes.position.needsUpdate = true;

        // bubbles rising
        const bArr = bubbleGeo.attributes.position.array;
        const bS = bubbleGeo.attributes.aSpeed.array;
        for (let i = 0; i < B_COUNT; i++) {
          const i3 = i * 3;
          bArr[i3 + 1] += bS[i] * 0.5 + Math.sin((i + t * 1.2) * 0.18) * 0.02;
          bArr[i3] += Math.sin(t * 0.36 + i) * 0.006;
          if (bArr[i3 + 1] > 120) {
            bArr[i3 + 1] = -80 - Math.random() * 40;
            bArr[i3] = (Math.random() - 0.5) * 300;
            bArr[i3 + 2] = (Math.random() - 0.5) * 260;
            bS[i] = 0.3 + Math.random() * 0.9;
          }
        }
        bubbleGeo.attributes.position.needsUpdate = true;

        // jelly float
        jellyGroup.children.forEach((j, idx) => {
          j.position.y += Math.sin(t * 0.5 + idx) * 0.008;
          j.rotation.y += 0.002 * (idx % 2 ? 1 : -1);
        });

        // coral "breathe" and sway
        coralGroup.children.forEach((c, idx) => {
          const ud = c.userData;
          const bob = Math.sin(t * 0.6 + ud.bobOffset) * (0.08 + ud.sway * 0.6);
          c.position.y = ud.baseY + bob;
          c.rotation.y += Math.sin(t * 0.15 + idx) * 0.0008;
          const s = 1 + Math.sin(t * 0.6 + ud.bobOffset) * 0.007;
          c.scale.setScalar(c.scale.x * (1 + (s - 1) * 0.06));
        });

        // fish: GLB instances or sprite fallback
        if (fishGroup) {
          const children = fishGroup.children;

          // GLB instances (object3D clones)
          if (children.length && !fishGroup.userData.fallbackSprites) {
            for (let i = 0; i < children.length; i++) {
              const inst = children[i];
              const ud = inst.userData || {};
              inst.position.x += (ud.dir || 1) * (ud.speed || 0.25);
              inst.position.y +=
                Math.sin(t * (0.4 + (ud.offset || 0) * 0.03)) * 0.02;
              if (inst.position.x > 140) inst.position.x = -140;
              if (inst.position.x < -140) inst.position.x = 140;
              // simple orientation (tweak if model faces a different axis)
              inst.rotation.y =
                (ud.dir === 1 ? 0 : Math.PI) + Math.sin(t * 2 + i) * 0.03;
            }
          }

          // sprite fallback
          const sprites = fishGroup.userData.fallbackSprites;
          if (sprites && sprites.length) {
            sprites.forEach((sp, i) => {
              const d = sp.userData;
              sp.position.x += d.dir * d.speed;
              sp.position.y += Math.sin(t * (0.4 + d.offset * 0.03)) * 0.02;
              if (sp.position.x > 140) sp.position.x = -140;
              if (sp.position.x < -140) sp.position.x = 140;
              const baseScaleX = Math.abs(sp.scale.x) || 4;
              sp.scale.x =
                d.dir === 1 ? Math.abs(baseScaleX) : -Math.abs(baseScaleX);
              sp.material.rotation =
                (d.dir === 1 ? 0 : Math.PI) + 0.03 * Math.sin(t * 2 + i);
            });
          }

          // advance mixers (if any)
          if (
            fishGroup.userData &&
            fishGroup.userData.mixers &&
            fishGroup.userData.mixers.length
          ) {
            const mixArr = fishGroup.userData.mixers;
            const dt = Math.min(
              0.06,
              (time - (fishGroup.userData._lastMixTime || time)) * 0.001
            );
            for (let m of mixArr) if (m) m.update(dt);
            fishGroup.userData._lastMixTime = time;
          }
        }

        // grass sway
        grassGroup.children.forEach((g, idx) => {
          g.rotation.z = Math.sin(t * 0.6 + idx) * 0.08 + mouseX * 0.06;
        });

        // camera parallax (subtle)
        camera.position.x += (mouseX * 10 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 6 - camera.position.y) * 0.02;
        camera.lookAt(0, -4, 0);

        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);

      // store cleanup
      mount.__uwCleanup = () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointer);
      };
    })();

    // cleanup on unmount
    return () => {
      mounted = false;
      if (raf) cancelAnimationFrame(raf);
      const mount = mountRef.current;
      try {
        if (mount && mount.__uwCleanup) mount.__uwCleanup();
        if (mount && mount.firstChild) mount.removeChild(mount.firstChild);
      } catch (err) {
        console.error(err);
      }

      // dispose Three.js resources
      try {
        // stop and uncache mixers
        try {
          if (mixersToDispose && mixersToDispose.length) {
            mixersToDispose.forEach((m) => {
              try {
                m.stopAllAction && m.stopAllAction();
                // best-effort uncache
                if (m.uncacheRoot && typeof m.getRoot === "function") {
                  try {
                    m.uncacheRoot(m.getRoot());
                  } catch (e) {}
                }
              } catch (ee) {}
            });
          }
          if (fishGroup && fishGroup.userData && fishGroup.userData.mixers) {
            fishGroup.userData.mixers = null;
          }
        } catch (e) {}

        // dispose scene textures, geometries, materials
        if (scene) {
          scene.traverse((obj) => {
            try {
              if (obj.isMesh) {
                if (obj.geometry) {
                  obj.geometry.dispose && obj.geometry.dispose();
                }
                if (obj.material) {
                  const mat = obj.material;
                  // handle Array material
                  if (Array.isArray(mat)) {
                    mat.forEach((m) => {
                      if (m.map) m.map.dispose && m.map.dispose();
                      m.dispose && m.dispose();
                    });
                  } else {
                    if (mat.map) mat.map.dispose && mat.map.dispose();
                    mat.dispose && mat.dispose();
                  }
                }
              } else if (obj.isPoints) {
                if (obj.geometry)
                  obj.geometry.dispose && obj.geometry.dispose();
                if (obj.material)
                  obj.material.dispose && obj.material.dispose();
              }
              // dispose textures on objects
              if (obj.material && obj.material.map) {
                try {
                  obj.material.map.dispose && obj.material.map.dispose();
                } catch {}
              }
            } catch (ee) {}
          });
        }

        // dispose caustic canvas texture
        try {
          causticTexture && causticTexture.dispose && causticTexture.dispose();
        } catch (e) {}

        // finally dispose renderer
        try {
          if (renderer) {
            renderer.forceContextLoss && renderer.forceContextLoss();
            renderer.dispose && renderer.dispose();
          }
        } catch (e) {
          console.warn("Renderer dispose error", e);
        }
      } catch (err) {
        console.error("Error during cleanup:", err);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
}
