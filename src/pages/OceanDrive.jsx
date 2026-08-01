import { useEffect, useState } from "react";
import BubbleLayer from "../components/ocean/BubbleLayer";
import DepthMeter from "../components/ocean/DepthMeter";
import TitanicWreck from "../components/ocean/TitanicWreck";
import ZoneLabel from "../components/ocean/ZoneLabel";

// 🌞 Surface (0–200m)
import dolphin from "../assets/ocean/dolphin.png";
import turtle from "../assets/ocean/turtle.png";
import clownfish from "../assets/ocean/clownfish.png";
import surgeonfish from "../assets/ocean/surgeonfish.png";
import manta from "../assets/ocean/manta.png";
import shark from "../assets/ocean/shark.png";

// placeholders for new species (add real images)
const orca = "../assets/ocean/orca.png";
const seahorse = "../assets/ocean/seahorse.png";
const coral = "../assets/ocean/coral.png";
const stingray = "../assets/ocean/stingray.png";
const seaLion = "../assets/ocean/sealion.png";
const starfish = "../assets/ocean/starfish.png";
const barracuda = "../assets/ocean/barracuda.png";
const parrotfish = "../assets/ocean/parrotfish.png";
const whale = "../assets/ocean/whale.png";

// 🌗 Twilight (200–1000m)
import jellyfish from "../assets/ocean/jellyfish.png";
import lanternfish from "../assets/ocean/lanternfish.png";
import hatchetfish from "../assets/ocean/hatchetfish.jfif";
import squid from "../assets/ocean/squid.jfif";
const combJelly = "../assets/ocean/combJelly.png";
const oarfish = "../assets/ocean/oarfish.png";
const fireflySquid = "../assets/ocean/fireflySquid.png";
const snipeEel = "../assets/ocean/snipeEel.png";
const glassOctopus = "../assets/ocean/glassOctopus.png";

// 🌑 Deep (1000–3500m)
import viperfish from "../assets/ocean/viperfish.jfif";
import anglerfish from "../assets/ocean/angelerfish.png";
import gulper from "../assets/ocean/gulper.png";
import fangtooth from "../assets/ocean/fangtooth.jpeg";
import giantSquid from "../assets/ocean/giantSquid.png";
const dragonfish = "../assets/ocean/dragonfish.png";
const tripodFish = "../assets/ocean/tripodFish.png";
const blackdevil = "../assets/ocean/blackdevil.png";
const rattail = "../assets/ocean/rattail.png";
const cuskEel = "../assets/ocean/cuskEel.png";
const blobfish = "../assets/ocean/blobfish.png";

// ⚫ Abyss (3500–6000m)
import crab from "../assets/ocean/deepcrab.png";
const dumbo = "../assets/ocean/dumbo.png";
const seaCucumber = "../assets/ocean/seaCucumber.png";
const basketStar = "../assets/ocean/basketStar.png";
const ghostShark = "../assets/ocean/ghostShark.png";
const snailfish = "../assets/ocean/snailfish.png";
const amphipod = "../assets/ocean/amphipod.png";
const seaSpider = "../assets/ocean/seaSpider.png";
const tubeWorm = "../assets/ocean/tubeWorm.png";
const abyssalOctopus = "../assets/ocean/abyssalOctopus.png";

// ⚓ Titanic zone (3800m)
const MAX_DEPTH = 6000;
const PX_PER_METER = 2.5;

const speciesData = [
  // 🌞 Surface
  // 🌞 Surface (0–200m)
  {
    name: "Dolphin",
    img: dolphin,
    depth: 40,
    desc: "Graceful navigators of the sunlit sea, dolphins leap through sapphire waves with intelligence and joy unmatched.",
    left: "8%",
    width: "w-32",
  },
  {
    name: "Sea Turtle",
    img: turtle,
    depth: 70,
    desc: "Ancient voyagers gliding between continents — sea turtles have roamed Earth's oceans for 100 million years.",
    left: "65%",
    width: "w-28",
  },
  {
    name: "Clownfish",
    img: clownfish,
    depth: 100,
    desc: "Tiny guardians of coral sanctuaries, dancing among anemones in brilliant armor of orange and white.",
    left: "40%",
    width: "w-24",
  },
  {
    name: "Surgeonfish",
    img: surgeonfish,
    depth: 140,
    desc: "Blue blades of motion, surgeonfish sweep the reefs, trimming life and balance in the shallows.",
    left: "20%",
    width: "w-24",
  },

  // 🌤️ Sunlight Extension (200–300m)
  {
    name: "Manta Ray",
    img: manta,
    depth: 210,
    desc: "Wings wide as clouds, mantas drift in silence — gentle giants of the sea.",
    left: "35%",
    width: "w-40",
  },
  {
    name: "Orca",
    img: orca,
    depth: 220,
    desc: "Lords of the ocean — orcas hunt in harmony, their echoes singing through the deep.",
    left: "75%",
    width: "w-40",
  },
  {
    name: "Sea Lion",
    img: seaLion,
    depth: 230,
    desc: "Playful hunters of the surf, balancing grace with raw power in every dive.",
    left: "50%",
    width: "w-32",
  },
  {
    name: "Parrotfish",
    img: parrotfish,
    depth: 240,
    desc: "Architects of coral sand, parrotfish sculpt reefs with every bite.",
    left: "25%",
    width: "w-28",
  },
  {
    name: "Barracuda",
    img: barracuda,
    depth: 250,
    desc: "Silver lightning in motion — the barracuda strikes with unblinking precision.",
    left: "55%",
    width: "w-36",
  },
  {
    name: "Starfish",
    img: starfish,
    depth: 260,
    desc: "Five-armed wonders clinging to rock and coral, regenerating life from fragments.",
    left: "10%",
    width: "w-20",
  },
  {
    name: "Seahorse",
    img: seahorse,
    depth: 270,
    desc: "Drifting upright in coral forests — fathers carry life within.",
    left: "70%",
    width: "w-20",
  },
  {
    name: "Stingray",
    img: stingray,
    depth: 280,
    desc: "Wings of sand and grace, gliding along seabeds in silent stealth.",
    left: "80%",
    width: "w-36",
  },
  {
    name: "Coral",
    img: coral,
    depth: 290,
    desc: "Builders of the ocean's citadels — coral reefs pulse with color and life.",
    left: "35%",
    width: "w-28",
  },
  {
    name: "Blue Whale",
    img: whale,
    depth: 300,
    desc: "The largest creature to ever live — its heartbeat echoes across oceans.",
    left: "45%",
    width: "w-44",
  },

  // 🌗 Twilight (starts ~350m)
  {
    name: "Jellyfish",
    img: jellyfish,
    depth: 350,
    desc: "Drifting lanterns of the twilight zone — fragile, eternal, glowing softly in the dark.",
    left: "25%",
    width: "w-24 opacity-80",
  },

  {
    name: "Lanternfish",
    img: lanternfish,
    depth: 650,
    desc: "Tiny lights in endless darkness — the lanternfish ascends nightly beneath the silver moon.",
    left: "40%",
    width: "w-28",
  },
  {
    name: "Hatchetfish",
    img: hatchetfish,
    depth: 820,
    desc: "Mirror-bodied ghosts reflecting faint light — hatchetfish shimmer where the sun dares not reach.",
    left: "70%",
    width: "w-26",
  },
  {
    name: "Squid",
    img: squid,
    depth: 1000,
    desc: "Masters of ink and motion — squid twist through dim blue with jet-propelled grace.",
    left: "50%",
    width: "w-28",
  },
  {
    name: "Comb Jelly",
    img: combJelly,
    depth: 400,
    desc: "Glass-like and radiant — comb jellies ripple rainbows through the gloom.",
    left: "60%",
    width: "w-24",
  },
  {
    name: "Oarfish",
    img: oarfish,
    depth: 900,
    desc: "Serpents of myth and truth — oarfish undulate through twilight depths up to 11 meters long.",
    left: "15%",
    width: "w-36",
  },
  {
    name: "Firefly Squid",
    img: fireflySquid,
    depth: 750,
    desc: "A galaxy in miniature — firefly squid illuminate Japan's coasts each spring.",
    left: "45%",
    width: "w-24",
  },
  {
    name: "Snipe Eel",
    img: snipeEel,
    depth: 950,
    desc: "Long as a ribbon, delicate as silk — the snipe eel drifts in perpetual twilight.",
    left: "25%",
    width: "w-28",
  },
  {
    name: "Glass Octopus",
    img: glassOctopus,
    depth: 870,
    desc: "Almost invisible, only organs glow — a transparent ghost among shadows.",
    left: "65%",
    width: "w-28",
  },

  // 🌑 Deep
  {
    name: "Anglerfish",
    img: anglerfish,
    depth: 1500,
    desc: "A demon of the deep — her luminous lure flickers in the eternal night.",
    left: "55%",
    width: "w-28",
  },
  {
    name: "Viperfish",
    img: viperfish,
    depth: 1900,
    desc: "Needle teeth and silver scales — the viperfish strikes from the dark abyss.",
    left: "30%",
    width: "w-28",
  },
  {
    name: "Gulper Eel",
    img: gulper,
    depth: 2400,
    desc: "Its enormous mouth yawns wide — the gulper eel swallows prey whole.",
    left: "65%",
    width: "w-32",
  },
  {
    name: "Fangtooth",
    img: fangtooth,
    depth: 2900,
    desc: "Teeth like daggers, eyes like shadows — the fangtooth survives where few can.",
    left: "40%",
    width: "w-26",
  },
  {
    name: "Dragonfish",
    img: dragonfish,
    depth: 2200,
    desc: "A predator cloaked in black scales — its chin glows to lure the lost.",
    left: "70%",
    width: "w-30",
  },
  {
    name: "Blackdevil",
    img: blackdevil,
    depth: 2500,
    desc: "The blackdevil angler drifts with a single light — beauty born of darkness.",
    left: "45%",
    width: "w-28",
  },
  {
    name: "Tripod Fish",
    img: tripodFish,
    depth: 3100,
    desc: "Balancing on spindly fins, tripod fish waits for drifting prey — motionless elegance.",
    left: "25%",
    width: "w-28",
  },
  {
    name: "Blobfish",
    img: blobfish,
    depth: 3200,
    desc: "The deep's soft survivor — compressed into shape only by crushing pressure.",
    left: "55%",
    width: "w-28",
  },
  {
    name: "Cusk Eel",
    img: cuskEel,
    depth: 2800,
    desc: "Eel-like and elusive — haunting trenches in ghostly silence.",
    left: "65%",
    width: "w-28",
  },

  // ⚫ Abyss
  {
    name: "Deep-Sea Crab",
    img: crab,
    depth: 3600,
    desc: "Armored survivor of the abyss, feeding among wrecks and volcanic vents.",
    left: "55%",
    width: "w-24 opacity-80",
  },
  {
    name: "Dumbo Octopus",
    img: dumbo,
    depth: 4000,
    desc: "Flapping fins like ears — the dumbo octopus drifts gracefully in the dark.",
    left: "30%",
    width: "w-32",
  },
  {
    name: "Sea Cucumber",
    img: seaCucumber,
    depth: 4200,
    desc: "Slow recyclers of the deep — sea cucumbers feed on the ocean’s floor dust.",
    left: "70%",
    width: "w-24",
  },
  {
    name: "Basket Star",
    img: basketStar,
    depth: 4400,
    desc: "An intricate tangle of arms — basket stars unfurl like deep-sea lace.",
    left: "45%",
    width: "w-28",
  },
  {
    name: "Ghost Shark",
    img: ghostShark,
    depth: 4600,
    desc: "An ancient relative of sharks — ghostly skin shimmering in darkness.",
    left: "25%",
    width: "w-32",
  },
  {
    name: "Snailfish",
    img: snailfish,
    depth: 5000,
    desc: "Living beyond light — snailfish thrive where no bones should survive.",
    left: "60%",
    width: "w-24",
  },
  {
    name: "Sea Spider",
    img: seaSpider,
    depth: 5300,
    desc: "Spindly, alien, delicate — sea spiders crawl across abyssal plains.",
    left: "40%",
    width: "w-24",
  },
  {
    name: "Tube Worm",
    img: tubeWorm,
    depth: 5500,
    desc: "Crimson plumes waving near volcanic vents — life from fire, not sunlight.",
    left: "70%",
    width: "w-28",
  },
  {
    name: "Abyssal Octopus",
    img: abyssalOctopus,
    depth: 5800,
    desc: "Solitary and calm — the abyssal octopus drifts like a dream beneath all life.",
    left: "30%",
    width: "w-36",
  },
];

export default function OceanDrive() {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const ocean = document.getElementById("ocean-drive");
      if (!ocean) return;

      const rect = ocean.getBoundingClientRect();
      const maxScroll = ocean.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
      setScrollRatio(scrolled / maxScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const depth = Math.floor(scrollRatio * MAX_DEPTH);

  return (
    <div
      className="relative w-full text-white"
      style={{
        background: `
        linear-gradient(
          to bottom,
          rgb(135,206,235) 0%,
          rgb(59,130,246) 30%,
          rgb(30,64,175) 55%,
          rgb(15,23,42) 75%,
          rgb(2,6,23) 100%
        )
      `,
      }}
    >
      {/* 🌊 HERO TEXT (OVERLAY) */}
      <section
        className="h-screen flex flex-col items-center justify-center text-center
                        relative z-10 pointer-events-none"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Dive Deep Into the Ocean
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
          Explore marine life from the sunlit surface to the darkest abyss.
        </p>

        <div className="absolute bottom-10 animate-bounce text-white/80 text-sm">
          ↓ Scroll to explore
        </div>
        
      </section>

      {/* 🌊 OCEAN DRIVE */}
      <div
        id="ocean-drive"
        className="relative w-full overflow-hidden"
        style={{ height: `${MAX_DEPTH * PX_PER_METER}px` }}
      >
        <BubbleLayer />
        <DepthMeter progress={scrollRatio} />

        {/* 🌍 ZONE LABELS */}
        <ZoneLabel title="Surface Zone" depth={50} />
        <ZoneLabel title="Sunlight Zone" depth={220} />
        <ZoneLabel title="Twilight Zone" depth={500} />
        <ZoneLabel title="Midnight Zone" depth={1500} />
        <ZoneLabel title="Abyss" depth={4000} />

        {/* 🐠 SPECIES */}
        {speciesData.map((s, i) => (
          <div key={i}>
            <img
              src={s.img}
              className={`absolute ${s.width}`}
              style={{ top: `${s.depth * PX_PER_METER}px`, left: s.left }}
              alt={s.name}
            />

            <p
              className="absolute text-sm md:text-base opacity-0 hover:opacity-100
                       transition-opacity duration-700 text-center w-60"
              style={{
                top: `${(s.depth + 30) * PX_PER_METER}px`,
                left: s.left,
                transform: "translateX(-20%)",
                textShadow: "0 0 8px rgba(255,255,255,0.6)",
              }}
            >
              <span className="font-semibold text-sky-200">{s.name}</span>
              <br />
              {s.desc}
            </p>
          </div>
        ))}

        {/* ⚓ TITANIC */}
        {depth >= 3600 && (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${3800 * PX_PER_METER}px` }}
          >
            <TitanicWreck />
          </div>
        )}
      </div>
    </div>
  );


}
