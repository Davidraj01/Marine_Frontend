// src/data/speciesData.js
export const SPECIES_DB = {
  "marine-mammals": {
    title: "Marine Mammals",
    subtitle:
      "Whales, Dolphins, Seals, Sea Lions, Walrus, Manatees, Otters & Polar Bear",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "blue-whale",
          name: "Blue Whale",
          image:
            "https://images.unsplash.com/photo-1698472505070-6d3b90afb530?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMHdoYWxlfGVufDB8fDB8fHww",
          status: "Endangered",
          about:
            "Largest animal on Earth; recovering slowly after historic whaling.",
        },
        {
          id: "humpback-whale",
          name: "Humpback Whale",
          image:
            "https://images.unsplash.com/photo-1504641020507-a9992d81dd1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bXBiYWNrJTIwd2hhbGV8ZW58MHx8MHx8fDA%3D",
          status: "Endangered",
          about:
            "Iconic whale known for singing and breaching; threatened by ship strikes & entanglement.",
        },
        {
          id: "north-atlantic-right-whale",
          name: "North Atlantic Right Whale",
          image:
            "https://images.pexels.com/photos/14019457/pexels-photo-14019457.jpeg",
          status: "Endangered",
          about:
            "Among the world's most endangered whales — fewer than 350 remain.",
        },
        {
          id: "sperm-whale",
          name: "Sperm Whale",
          image:
            "https://images.pexels.com/photos/7767973/pexels-photo-7767973.jpeg",
          status: "Endangered",
          about:
            "Deep-diving giant known for hunting squid; threatened by noise pollution & entanglement.",
        },
        {
          id: "vaquita",
          name: "Vaquita Porpoise",
          image:
            "https://images.pexels.com/photos/23229104/pexels-photo-23229104.png",
          status: "Endangered",
          about:
            "Critically endangered porpoise — fewer than 10 individuals remain in the wild.",
        },
        {
          id: "hawaiian-monk-seal",
          name: "Hawaiian Monk Seal",
          image:
            "https://images.pexels.com/photos/3402385/pexels-photo-3402385.jpeg",
          status: "Endangered",
          about:
            "One of the rarest seals; facing entanglement, low prey availability, and habitat loss.",
        },
        {
          id: "sea-otter",
          name: "Sea Otter",
          image:
            "https://images.pexels.com/photos/31651317/pexels-photo-31651317.jpeg",
          status: "Endangered",
          about:
            "Crucial kelp-forest predator; extremely vulnerable to oil spills and pollution.",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "greenland-seal",
          name: "Greenland Seal",
          image:
            "https://images.pexels.com/photos/28531135/pexels-photo-28531135.jpeg",
          status: "Threatened",
          about:
            "Ice-dependent seal vulnerable to climate-driven habitat loss.",
        },
        {
          id: "steller-sea-lion",
          name: "Steller Sea Lion",
          image:
            "https://images.pexels.com/photos/230956/pexels-photo-230956.jpeg",
          status: "Threatened",
          about:
            "Largest sea lion; populations declining due to ecosystem and prey changes.",
        },
        {
          id: "west-indian-manatee",
          name: "West Indian Manatee",
          image:
            "https://images.pexels.com/photos/10962931/pexels-photo-10962931.jpeg",
          status: "Threatened",
          about:
            "Gentle herbivore threatened by boat collisions and habitat destruction.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "common-dolphin",
          name: "Common Dolphin",
          image:
            "https://images.pexels.com/photos/11342079/pexels-photo-11342079.jpeg",
          status: "Least Concern",
          about:
            "Fast and social dolphins found in warm-temperate oceans worldwide.",
        },
        {
          id: "bottlenose-dolphin",
          name: "Bottlenose Dolphin",
          image:
            "https://images.pexels.com/photos/966966/pexels-photo-966966.jpeg",
          status: "Least Concern",
          about:
            "Extremely intelligent and widespread; known for friendly behavior.",
        },
        {
          id: "harbor-porpoise",
          name: "Harbor Porpoise",
          image:
            "https://images.pexels.com/photos/23914518/pexels-photo-23914518.jpeg",
          status: "Least Concern",
          about: "Small shy porpoise species common in cold coastal waters.",
        },
        {
          id: "ringed-seal",
          name: "Ringed Seal",
          image:
            "https://images.pexels.com/photos/10207851/pexels-photo-10207851.jpeg",
          status: "Least Concern",
          about:
            "Smallest Arctic seal species; essential prey for polar bears.",
        },
        {
          id: "california-sea-lion",
          name: "California Sea Lion",
          image:
            "https://images.pexels.com/photos/17817262/pexels-photo-17817262.jpeg",
          status: "Least Concern",
          about:
            "Agile, playful, and very social species native to the Pacific coast.",
        },
        {
          id: "northern-fur-seal",
          name: "Northern Fur Seal",
          image:
            "https://images.pexels.com/photos/35686417/pexels-photo-35686417.jpeg",
          status: "Least Concern",
          about: "Fur seal with dense underfur; once heavily hunted.",
        },
        {
          id: "dugong",
          name: "Dugong",
          image:
            "https://images.pexels.com/photos/8026838/pexels-photo-8026838.jpeg",
          status: "Least Concern",
          about: "Herbivorous marine mammal feeding exclusively on seagrass.",
        },
        {
          id: "marine-otter",
          name: "Marine Otter",
          image:
            "https://images.pexels.com/photos/33983384/pexels-photo-33983384.jpeg",
          status: "Least Concern",
          about: "Rare coastal otter species found along rocky shorelines.",
        },
      ],
    },
  },
  fish: {
    title: "Fish",
    subtitle:
      "Sharks, Rays, Tunas, Eels & Reef Fish (IUCN-based conservation status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * Includes CR + EN species from IUCN Red List
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "european-eel",
          name: "European Eel",
          image:
            "https://images.pexels.com/photos/6123087/pexels-photo-6123087.jpeg",
          status: "Critically Endangered",
          about:
            "Migratory eel whose numbers collapsed due to overfishing, barriers (dams), pollution and illegal trade.",
        },
        {
          id: "smalltooth-sawfish",
          name: "Smalltooth Sawfish",
          image:
            "https://images.pexels.com/photos/7825842/pexels-photo-7825842.jpeg",
          status: "Critically Endangered",
          about:
            "Ancient ray-like fish extremely vulnerable to entanglement in nets; lost from much of its historic range.",
        },
        {
          id: "oceanic-whitetip-shark",
          name: "Oceanic Whitetip Shark",
          image:
            "https://images.pexels.com/photos/11348767/pexels-photo-11348767.jpeg",
          status: "Critically Endangered",
          about:
            "Pelagic shark heavily impacted by longline fishing and fin trade; has suffered major global decline.",
        },
        {
          id: "whale-shark",
          name: "Whale Shark",
          image:
            "https://images.pexels.com/photos/7001499/pexels-photo-7001499.jpeg",
          status: "Endangered",
          about:
            "Largest fish on Earth; threatened mainly by bycatch, ship strikes, and targeted fishing in some regions.",
        },
        {
          id: "great-hammerhead",
          name: "Great Hammerhead Shark",
          image:
            "https://images.pexels.com/photos/4781942/pexels-photo-4781942.jpeg",
          status: "Endangered",
          about:
            "Largest hammerhead species; threatened by overfishing and demand for fins.",
        },
        {
          id: "manta-ray-giant",
          name: "Giant Oceanic Manta Ray",
          image:
            "https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg",
          status: "Endangered",
          about:
            "Slow-reproducing ray targeted for gill plate trade; also impacted by bycatch.",
        },
        {
          id: "scalloped-hammerhead",
          name: "Scalloped Hammerhead Shark",
          image:
            "https://images.pexels.com/photos/11533264/pexels-photo-11533264.jpeg",
          status: "Critically Endangered",
          about:
            "Schooling hammerhead shark facing intense fishing pressure; populations have declined sharply.",
        },
        {
          id: "green-sawfish",
          name: "Green Sawfish",
          image:
            "https://images.pexels.com/photos/4810629/pexels-photo-4810629.jpeg",
          status: "Critically Endangered",
          about:
            "Large sawfish species declining due to habitat loss and widespread net entanglement.",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * IUCN category: Vulnerable (VU)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "great-white-shark",
          name: "Great White Shark",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
          status: "Vulnerable",
          about:
            "Iconic apex predator; threatened mainly by accidental capture in fishing gear and slow reproduction.",
        },
        {
          id: "wild-common-carp",
          name: "Wild Common Carp",
          image:
            "https://images.pexels.com/photos/9728431/pexels-photo-9728431.png",
          status: "Vulnerable",
          about:
            "Wild populations have declined in parts of its native range due to habitat alteration and genetic pollution.",
        },
        {
          id: "zebra-shark",
          name: "Zebra Shark",
          image:
            "https://images.pexels.com/photos/34027148/pexels-photo-34027148.jpeg",
          status: "Endangered",
          about:
            "Reef-associated shark impacted by fishing pressure and habitat loss; slow-growing and vulnerable.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "atlantic-bluefin-tuna",
          name: "Atlantic Bluefin Tuna",
          image:
            "https://images.pexels.com/photos/12829694/pexels-photo-12829694.jpeg",
          status: "Least Concern",
          about:
            "Highly valued tuna species; improved management helped it move to Least Concern on IUCN (2021).",
        },
        {
          id: "clownfish-ocellaris",
          name: "Ocellaris Clownfish",
          image:
            "https://images.pexels.com/photos/12861719/pexels-photo-12861719.jpeg",
          status: "Least Concern",
          about:
            "Popular reef fish living with sea anemones; widely distributed in the Indo-Pacific.",
        },
        {
          id: "blue-tang",
          name: "Blue Tang",
          image:
            "https://images.pexels.com/photos/6949171/pexels-photo-6949171.jpeg",
          status: "Least Concern",
          about:
            "Reef fish found in Indo-Pacific; known for bright blue body and yellow tail.",
        },
        {
          id: "atlantic-cod",
          name: "Atlantic Cod",
          image:
            "https://media.istockphoto.com/id/1400475244/photo/cod-fish-floating-in-aquarium-alesund-norway.jpg?s=612x612&w=0&k=20&c=kv-PPCVS6Tc1egjR-_B0uusXqMxwJ-g467fsbirwVMc=",
          status: "Least Concern",
          about:
            "Cold-water fish important for fisheries; conservation varies by region though globally listed LC.",
        },
        {
          id: "great-barracuda",
          name: "Great Barracuda",
          image:
            "https://images.pexels.com/photos/7001705/pexels-photo-7001705.jpeg",
          status: "Least Concern",
          about:
            "Fast predatory fish found in tropical and subtropical seas; known for speed and sharp teeth.",
        },
        {
          id: "rainbow-trout",
          name: "Rainbow Trout",
          image:
            "https://images.pexels.com/photos/3311091/pexels-photo-3311091.jpeg",
          status: "Least Concern",
          about:
            "Widely distributed fish; native to North America and introduced in many regions.",
        },
      ],
    },
  },

  reptiles: {
    title: "Reptiles",
    subtitle:
      "Sea Turtles, Sea Snakes, Marine Iguana & Saltwater Crocodile (IUCN-based status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * Includes CR + EN species
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "hawksbill-turtle",
          name: "Hawksbill Sea Turtle",
          image:
            "https://images.pexels.com/photos/12173784/pexels-photo-12173784.jpeg",
          status: "Critically Endangered",
          about:
            "Reef-associated turtle heavily impacted by illegal shell trade, bycatch, and nesting habitat loss.",
        },
        {
          id: "kemp-ridley-turtle",
          name: "Kemp’s Ridley Sea Turtle",
          image:
            "https://images.pexels.com/photos/4728995/pexels-photo-4728995.jpeg",
          status: "Critically Endangered",
          about:
            "Rarest sea turtle species; threatened by bycatch and limited nesting range.",
        },
        {
          id: "loggerhead-turtle",
          name: "Loggerhead Sea Turtle",
          image:
            "https://images.pexels.com/photos/30383324/pexels-photo-30383324.jpeg",
          status: "Vulnerable",
          about:
            "Large-headed sea turtle impacted by fisheries bycatch, plastic ingestion and coastal development.",
        },
        {
          id: "green-sea-turtle-subpops",
          name: "Green Sea Turtle (some subpopulations)",
          image:
            "https://images.pexels.com/photos/38452/pexels-photo-38452.jpeg",
          status: "Least Concern (Global, 2025)",
          about:
            "Globally listed as Least Concern after 2025 IUCN reassessment; some regional populations remain at higher risk.",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * IUCN category: Vulnerable (VU)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "leatherback-turtle",
          name: "Leatherback Sea Turtle",
          image:
            "https://www.fisheries.noaa.gov/s3//2024-08/750x500-leatherback-sea-turtle.jpg?itok=ss6utMk8",
          status: "Vulnerable",
          about:
            "Largest sea turtle; threatened mainly by fisheries bycatch, habitat loss, and plastic ingestion.",
        },
        {
          id: "olive-ridley-turtle",
          name: "Olive Ridley Sea Turtle",
          image:
            "https://images.pexels.com/photos/19261157/pexels-photo-19261157.jpeg",
          status: "Vulnerable",
          about:
            "Known for mass nesting (arribadas); vulnerable due to egg harvesting and bycatch.",
        },
        {
          id: "saltwater-crocodile",
          name: "Saltwater Crocodile",
          image:
            "https://images.pexels.com/photos/6477294/pexels-photo-6477294.jpeg",
          status: "Least Concern",
          about:
            "Largest living reptile; occurs in coastal waters and estuaries. Protection helped population recovery in many areas.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "green-sea-turtle",
          name: "Green Sea Turtle",
          image:
            "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
          status: "Least Concern",
          about:
            "Seagrass-grazing turtle; moved from Endangered to Least Concern in 2025 due to conservation success.",
        },
        {
          id: "marine-iguana",
          name: "Marine Iguana",
          image:
            "https://images.pexels.com/photos/2289497/pexels-photo-2289497.jpeg",
          status: "Vulnerable",
          about:
            "Unique Galápagos lizard adapted to marine algae feeding; threatened by climate impacts and introduced predators.",
        },
        {
          id: "yellow-bellied-sea-snake",
          name: "Yellow-bellied Sea Snake",
          image:
            "https://images.pexels.com/photos/17554968/pexels-photo-17554968.jpeg",
          status: "Least Concern",
          about:
            "Highly pelagic sea snake found across tropical oceans; one of the most widespread sea snakes.",
        },
        {
          id: "annulated-sea-snake",
          name: "Turtle-headed Sea Snake",
          image:
            "https://images.pexels.com/photos/17843996/pexels-photo-17843996.jpeg",
          status: "Least Concern",
          about:
            "Reef-associated sea snake that feeds on fish eggs; commonly found in Indo-Pacific reefs.",
        },
      ],
    },
  },

  crustaceans: {
    title: "Crustaceans",
    subtitle:
      "Crabs, Lobsters, Shrimp & Krill (IUCN-based conservation status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "tri-spine-horseshoe-crab",
          name: "Tri-spine Horseshoe Crab",
          image:
            "https://media.gettyimages.com/id/1363866361/photo/close-up-of-horseshoe-crab-shell-on-the-beach.jpg?s=612x612&w=0&k=20&c=1YEiKdbrYrGB-Z8aI4rVxz5vxs3RfQ5L6d4suabeb-0=",
          status: "Endangered",
          about:
            "Ancient coastal arthropod declining due to habitat loss, pollution and overharvesting.",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "american-horseshoe-crab",
          name: "American Horseshoe Crab",
          image:
            "https://media.gettyimages.com/id/2252892994/photo/horseshoe-crab.jpg?s=612x612&w=0&k=20&c=GOvk-lzsaT-zIeYp1UkBfXd3UMQ7qTHGslY-OtlAx3o=",
          status: "Vulnerable",
          about:
            "Important coastal species threatened by harvest pressure and habitat degradation in parts of its range.",
        },
        {
          id: "coconut-crab",
          name: "Coconut Crab",
          image:
            "https://media.gettyimages.com/id/96932859/photo/coconut-crab.jpg?s=612x612&w=0&k=20&c=s42dfD3tWb-fxGDlHLxHNm3oW-OgZOsf30U9EkFpSn4=",
          status: "Vulnerable",
          about:
            "Largest terrestrial arthropod; vulnerable due to hunting/harvesting and habitat pressures on islands.",
        },
        {
          id: "european-spiny-lobster",
          name: "European Spiny Lobster",
          image:
            "https://media.gettyimages.com/id/2239633530/photo/close-up-of-a-spiny-lobster-on-a-rocky-seabed.jpg?s=612x612&w=0&k=20&c=MWpn36M1v2BBJt4j7Mguxofu9TmnEK2jlAKhDdx4gWg=",
          status: "Vulnerable",
          about:
            "Mediterranean & East Atlantic spiny lobster; threatened by overexploitation.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "american-lobster",
          name: "American Lobster",
          image:
            "https://images.pexels.com/photos/32096100/pexels-photo-32096100.jpeg",
          status: "Least Concern",
          about:
            "Well-known North Atlantic lobster species; IUCN lists it as Least Concern globally.",
        },
        {
          id: "antarctic-krill",
          name: "Antarctic Krill",
          image:
            "https://media.gettyimages.com/id/528711192/photo/krill.jpg?s=612x612&w=0&k=20&c=XWfqXZLT7LpoQw89DjpxATXK-ATlrZF0YvyOrFiQ19U=",
          status: "Least Concern",
          about:
            "Key species in the Southern Ocean ecosystem; currently listed as Least Concern.",
        },
        {
          id: "caribbean-spiny-lobster",
          name: "Caribbean Spiny Lobster",
          image:
            "https://media.gettyimages.com/id/2188921466/photo/caribbean-spiny-lobster-at-night.jpg?s=612x612&w=0&k=20&c=YcFGq8iNmdqIwmOkmXLH6yii04yu8vkqOLImlN5WiB8=",
          status: "Data Deficient",
          about:
            "Major fishery species in the Caribbean; IUCN lists it as Data Deficient (not enough global data).",
        },
      ],
    },
  },

  mollusks: {
    title: "Mollusks",
    subtitle:
      "Clams, Mussels, Snails, Abalone, Octopus & Squid (IUCN-based conservation status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * Includes CR + EN species
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "giant-clam-tridacna-gigas",
          name: "Giant Clam",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tridacna_gigas_-_Michaelmas_Cay.jpg",
          status: "Critically Endangered",
          about:
            "Largest living bivalve mollusk; populations declined heavily due to overharvesting and habitat loss.",
        },
        {
          id: "noble-pen-shell",
          name: "Noble Pen Shell (Fan Mussel)",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Pinna_nobilis.jpg",
          status: "Critically Endangered",
          about:
            "Mediterranean endemic bivalve devastated by disease outbreaks and mass mortality events.",
        },
        {
          id: "white-abalone",
          name: "White Abalone",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/White_abalone.jpg",
          status: "Critically Endangered",
          about:
            "Marine sea snail with extremely low remaining populations; threatened by historic overfishing and slow recovery.",
        },
        {
          id: "smooth-giant-clam",
          name: "Smooth Giant Clam",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Tridacna_derasa_-_Oceania.JPG",
          status: "Endangered",
          about:
            "Large reef clam threatened by exploitation and reef habitat degradation.",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * IUCN category: Vulnerable (VU)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "queen-conch",
          name: "Queen Conch",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/Queen_conch_Strombus_gigas.jpg",
          status: "Threatened (ESA - 2024)",
          about:
            "Caribbean sea snail heavily exploited for meat and shell trade; listed as threatened under the U.S. Endangered Species Act in 2024.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "common-octopus",
          name: "Common Octopus",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9f/Octopus_vulgaris_2.jpg",
          status: "Least Concern",
          about:
            "Highly intelligent cephalopod found across temperate and tropical seas worldwide.",
        },
        {
          id: "european-squid",
          name: "European Squid",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Loligo_vulgaris.jpg",
          status: "Data Deficient",
          about:
            "Common coastal squid in Europe; listed as Data Deficient due to limited global assessment certainty.",
        },
      ],
    },
  },

  cnidaria: {
    title: "Cnidaria",
    subtitle:
      "Corals, Jellyfish, Sea Anemones & Hydrozoans (IUCN-based conservation status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * (CR + EN from IUCN Red List, mostly reef-building corals)
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "elkhorn-coral",
          name: "Elkhorn Coral",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7f/Acropora_palmata.jpg",
          status: "Critically Endangered",
          about:
            "Major reef-building coral in the Caribbean; severely declined from disease, warming, hurricanes and pollution.",
        },
        {
          id: "staghorn-coral",
          name: "Staghorn Coral",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0a/Acropora_cervicornis.jpg",
          status: "Critically Endangered",
          about:
            "Fast-growing branching coral; dramatic population collapse due to coral disease, warming and water pollution.",
        },
        {
          id: "pillar-coral",
          name: "Pillar Coral",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Dendrogyra_cylindrus.jpg",
          status: "Critically Endangered",
          about:
            "Caribbean coral suffering rapid losses, especially due to stony coral tissue loss disease (SCTLD).",
        },
      ],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * (common IUCN threatened group for anthozoans)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "reef-building-corals",
          name: "Many Reef-Building Corals",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Coral_Reef_Fish.jpg",
          status: "Threatened (varies by species)",
          about:
            "Over 40% of reef-building coral species are threatened with extinction due to warming seas and human impacts.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * Also includes species listed as Not Evaluated (NE),
       * since many jellyfish/anemones are not globally assessed.
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "beadlet-anemone",
          name: "Beadlet Anemone",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Actinia_equina.jpg",
          status: "Least Concern (regional assessments exist)",
          about:
            "Common intertidal sea anemone found on rocky coasts; generally not considered threatened.",
        },
        {
          id: "moon-jelly",
          name: "Moon Jelly",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aurelia_aurita_%28Moon_jelly%29.jpg",
          status: "Not Evaluated",
          about:
            "Very common jellyfish in many oceans; not globally evaluated by the IUCN Red List.",
        },
        {
          id: "mauve-stinger",
          name: "Mauve Stinger (Purple-striped Jellyfish)",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Pelagia_noctiluca.jpg",
          status: "Not Evaluated",
          about:
            "Open-ocean jellyfish known for painful stings; IUCN status commonly recorded as Not Evaluated.",
        },
      ],
    },
  },

  echinoderms: {
    title: "Echinoderms",
    subtitle:
      "Starfish, Sea Urchins & Sea Cucumbers (IUCN-based conservation status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [
        {
          id: "sandfish-sea-cucumber",
          name: "Sandfish Sea Cucumber",
          image:
            "https://media.gettyimages.com/id/1316391936/photo/sea-cucumber-echinoderms-holothuroidea.jpg?s=612x612&w=0&k=20&c=3GmhqkuCZ9a2hhO-jkc2ltqSKMLllsIqklb9BpPDyBg=",
          status: "Endangered",
          about:
            "High-value sea cucumber harvested for bêche-de-mer; populations reduced heavily by overexploitation.",
        },
        {
          id: "black-teatfish",
          name: "Black Teatfish",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAXl0kd5RbqsOAxu4JCYTPVpH-Xjn-dPqQFRGIejRp64z92xLr7Q8uViAOKTzxtxobPGL6wEChjyTMGpG6J9ZiT3vWvLhGqlU5Y7E3g&s=10",
          status: "Endangered",
          about:
            "Commercially targeted sea cucumber in the Indo-Pacific; threatened by intense fishing pressure.",
        },
        {
          id: "brown-sea-cucumber",
          name: "Brown Sea Cucumber",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Sa1eslF_vt_dOi1rrz60d7QJOcxQ86xcVw&s",
          status: "Endangered",
          about:
            "Eastern Pacific sea cucumber; overharvested and classified Endangered due to major population decline.",
        },
      ],

      Threatened: [
        {
          id: "crown-of-thorns-starfish",
          name: "Crown-of-thorns Starfish",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/78/Acanthaster_planci_2019.jpg",
          status: "Not Evaluated",
          about:
            "Coral-eating starfish known for destructive outbreaks on reefs; IUCN global conservation status is not evaluated.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "stony-sea-urchin",
          name: "Stony Sea Urchin",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/3a/Paracentrotus_lividus.jpg",
          status: "Not Evaluated",
          about:
            "Common Mediterranean/Atlantic sea urchin; widely present but not yet assessed globally by IUCN.",
        },
        {
          id: "long-spined-sea-urchin",
          name: "Long-spined Sea Urchin",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Diadema_antillarum.jpg",
          status: "Not Evaluated",
          about:
            "Important Caribbean reef grazer; suffered major die-offs but global IUCN status is not evaluated.",
        },
      ],
    },
  },

  plankton: {
    title: "Plankton",
    subtitle:
      "Microscopic drifting organisms — Phytoplankton & Zooplankton (IUCN-based status where available)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "antarctic-krill",
          name: "Antarctic Krill",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/77/Euphausia_superba2.jpg",
          status: "Least Concern",
          about:
            "Foundation species of the Southern Ocean food web; IUCN assessed as Least Concern.",
        },
        {
          id: "calanus-finmarchicus",
          name: "Calanus finmarchicus (Copepod)",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/02/Copepod.jpg",
          status: "Not Evaluated",
          about:
            "Key North Atlantic zooplankton species; not evaluated on the IUCN Red List.",
        },
      ],
    },
  },

  algae: {
    title: "Algae",
    subtitle:
      "Macroalgae (Seaweeds) — Kelp, Brown Algae, Red Algae & Green Algae (IUCN-based status where available)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "giant-kelp",
          name: "Giant Kelp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/63/Macrocystis_pyrifera_2.jpg",
          status: "Not Evaluated",
          about:
            "One of the world’s largest seaweeds; forms kelp forests that support rich marine biodiversity.",
        },
        {
          id: "bull-kelp",
          name: "Bull Kelp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Nereocystis_luetkeana.jpg",
          status: "Not Evaluated",
          about:
            "Large brown algae forming underwater forests along the Pacific coast; important habitat species.",
        },
        {
          id: "gelidium-corneum",
          name: "Gelidium corneum",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/Gelidium_corneum.jpg",
          status: "Not Evaluated",
          about:
            "Red algae harvested in some regions for agar production; IUCN status recorded as Not Evaluated.",
        },
      ],
    },
  },

  seagrass: {
    title: "Seagrass",
    subtitle:
      "Marine flowering plants forming seagrass meadows — eelgrass, turtlegrass & Neptune grass (IUCN-based status)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [
        {
          id: "zostera-capensis",
          name: "Southern African Eelgrass",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/Zostera_capensis.jpg",
          status: "Vulnerable",
          about:
            "Highly fragmented coastal seagrass along African shores; impacted by coastal development, pollution, sedimentation and habitat loss.",
        },
        {
          id: "halophila-hawaiiana",
          name: "Halophila hawaiiana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Halophila.jpg",
          status: "Vulnerable",
          about:
            "Rare seagrass endemic to Hawai‘i with restricted distribution; sensitive to disturbance and habitat degradation.",
        },
      ],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "posidonia-oceanica",
          name: "Posidonia oceanica (Neptune Grass)",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Posidonia_oceanica.jpg",
          status: "Least Concern",
          about:
            "Mediterranean endemic seagrass forming major carbon-rich meadows; declining locally due to anchors, pollution and warming seas.",
        },
        {
          id: "thalassia-testudinum",
          name: "Turtle Grass",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Thalassia_testudinum.jpg",
          status: "Least Concern",
          about:
            "Dominant Caribbean seagrass; forms extensive meadows that support fish nurseries and turtle feeding grounds.",
        },
        {
          id: "zostera-marina",
          name: "Eelgrass",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Zostera_marina.jpg",
          status: "Least Concern",
          about:
            "Foundation seagrass in temperate coastal ecosystems; important habitat but threatened regionally by eutrophication and coastal stress.",
        },
      ],
    },
  },

  porifera: {
    title: "Porifera (Sponges)",
    subtitle:
      "Marine sponges — Bath sponges, tube sponges, reef sponges (IUCN-based status where available)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "greek-bathing-sponge",
          name: "Greek Bathing Sponge",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/85/Spongia_officinalis.jpg",
          status: "Not Evaluated",
          about:
            "Commercially harvested natural bath sponge from the Mediterranean; widely known but not assessed by IUCN Red List.",
        },
        {
          id: "tube-sponge",
          name: "Tube Sponge",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/57/Tube_sponges.jpg",
          status: "Not Evaluated",
          about:
            "Common reef sponge group providing filtration and habitat; most tube sponge species remain unassessed globally.",
        },
      ],
    },
  },

  bryozoa: {
    title: "Bryozoa (Moss Animals)",
    subtitle:
      "Colonial marine invertebrates — encrusting & branching bryozoans (IUCN-based status where available)",

    groups: {
      /* ----------------------------------------------------
       * 1) ENDANGERED (Always show first)
       * ---------------------------------------------------- */
      Endangered: [],

      /* ----------------------------------------------------
       * 2) THREATENED (Always show second)
       * ---------------------------------------------------- */
      Threatened: [],

      /* ----------------------------------------------------
       * 3) LEAST CONCERN (Always last)
       * ---------------------------------------------------- */
      "Least Concern": [
        {
          id: "bugula-neritina",
          name: "Bugula neritina (Branching Moss Animal)",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Bugula_neritina_01.jpg",
          status: "Not Evaluated",
          about:
            "Common fouling bryozoan forming branching colonies on hard surfaces; widely distributed but not evaluated by IUCN.",
        },
        {
          id: "celleporella-hyalina",
          name: "Celleporella hyalina",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bryozoa_microscopic_colony.jpg",
          status: "Not Evaluated",
          about:
            "Encrusting bryozoan found in cold/temperate coastal waters; IUCN status recorded as Not Evaluated.",
        },
      ],
    },
  },

  // add more groups (crustaceans, mollusks, etc.) here if needed
};

export default SPECIES_DB;
