/**
 * Gallery albums data for Marine Moments section.
 *
 * ── How to add images ──
 * 1. Drop your photos into  public/gallery/<albumId>/
 * 2. Name the cover image  cover.jpg  (shown on the album card)
 * 3. List every filename in the `images` array below
 */
import axios from "axios";
export const GALLERY_ALBUMS = [
  {
    id: "vedantangal",
    title: "Vedantangal Awareness",
    location: "Vedantangal Bird Sanctuary",
    description:
      "Spreading awareness about marine and bird biodiversity conservation at the iconic Vedantangal Bird Sanctuary.",
    coverImage: "/gallery/vedantangal/vedan1.webp",
    images: [
      "vedan1.webp",
      "vedan2.webp",
      "vedan3.webp",
      "vedan4.webp",
      "vedan5.webp",
      "vedan6.webp",
      "vedan7.webp",
      "vedan8.webp",
    ],
  },
  {
    id: "kovalam",
    title: "Kovalam Awareness",
    location: "Kovalam Beach, Chennai",
    description:
      "Coastal clean-up and awareness drive at Kovalam Beach — educating communities about ocean conservation.",
    coverImage: "/gallery/kovalam/kovalam5.webp",
    images: [
      "kovalam1.webp",
      "kovalam2.webp",
      "kovalam3.webp",
      "kovalam4.webp",
      "kovalam5.webp",
      "kovalam6.webp",
      "kovalam7.webp",
      "kovalam8.webp",
    ],
  },
  {
    id: "nainarkuppam",
    title: "Nainarkuppam Awareness",
    location: "Nainarkuppam, chennai",
    description:
      "Community-driven coastal clean-up and environmental awareness initiative at Nainarkuppam, Chennai — empowering local residents to protect marine ecosystems, reduce plastic pollution, and promote sustainable coastal living.",
    coverImage:
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453119/nainarkuppam1_mafcj2.webp",
    images: [
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453119/nainarkuppam1_mafcj2.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453119/nainarkuppam2_wcaxsb.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453120/nainarkuppam3_it5gy8.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453120/nainarkuppam4_jx7ko1.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453120/nainarkuppam5_wk5pgl.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453120/nainarkuppam6_b8uc0g.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453120/nainarkuppam7_nuqmjb.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453121/nainarkuppam8_cj5cak.webp",
    ],
  },
  {
    id: "thiruvanmiyur",
    title: "Thiruvanmiyur Awareness",
    location: "Thiruvanmiyur, chennai",
    description:
      "Beach clean-up and environmental awareness drive along the Chennai coastline — inspiring communities to reduce plastic waste, protect marine life, and adopt eco-friendly practices for a cleaner and healthier coastal environment.",
    coverImage:
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur1_wzsyro.webp",
    images: [
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur1_wzsyro.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur2_n9cvam.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur3_reevgo.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur4_lsnpxr.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur5_xd5byn.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453157/thiruvanmiyur6_bjfwvw.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453158/thiruvanmiyur7_kvrmrt.webp",
      "https://res.cloudinary.com/dkffyert6/image/upload/q_auto/f_auto/v1775453158/thiruvanmiyur8_u7l9u3.webp",
    ],
  },
];
console.log(GALLERY_ALBUMS);
