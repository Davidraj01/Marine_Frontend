const oceanCountries = [
  // 🌏 Oceania & Asia
  {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Home to the Great Barrier Reef, the largest coral ecosystem on Earth.",
    oceanFacts:
      "🇦🇺 **Australia's Oceanic Heritage**\n• Surrounded by the Pacific & Indian Oceans\n• Home to the Great Barrier Reef\n• Beautiful beaches: Bondi, Whitehaven\n• Global leader in marine protection",
    marineBiodiversity:
      "🇦🇺 **Marine Biodiversity**\n• Largest coral ecosystem — Great Barrier Reef\n• Species: Manta rays, turtles, reef sharks, colorful corals\n• Huge marine protected areas\n• Famous whale migration routes",
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
    image:
      "https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg",
    desc: "An island nation known for its deep-rooted respect for oceans.",
    oceanFacts:
      "🇯🇵 **Japan's Oceanic Wonders**\n• An island archipelago surrounded by the Pacific\n• Famous for the Seto Inland Sea\n• Deep cultural connection to the ocean (Satoumi)",
    marineBiodiversity:
      "🇯🇵 **Marine Biodiversity**\n• Over 30,000+ marine species\n• Coral reefs in Okinawa\n• Species: Tuna, dolphins, sea turtles\n• Productive fishing zones & deep-sea ecosystems",
  },
  {
    name: "Indonesia",
    flag: "https://flagcdn.com/w320/id.png",
    image: "https://etimg.etb2bimg.com/photo/115997634.cms",
    desc: "Located in the Coral Triangle with the highest marine diversity.",
    oceanFacts:
      "🇮🇩 **Indonesia's Archipelagic Waters**\n• World's largest island country\n• Located between Indian & Pacific Oceans\n• Famous for Bali & Komodo Island coasts",
    marineBiodiversity:
      "🇮🇩 **Marine Biodiversity**\n• Center of the Coral Triangle\n• 76% of Earth's coral species live here\n• Amazing spots: Raja Ampat, Bali Sea\n• Species: Whale sharks, manta rays, rare corals",
  },
  {
    name: "Philippines",
    flag: "https://flagcdn.com/w320/ph.png",
    image: "https://etimg.etb2bimg.com/photo/95545719.cms",
    desc: "Known for coral reefs, clear waters, and over 7,000 islands.",
    oceanFacts:
      "🇵🇭 **Philippines' 7,000 Islands**\n• Located in the heart of the Coral Triangle\n• Famous for Palawan and Boracay beaches\n• Tubbataha Reefs Natural Park is a UNESCO site",
    marineBiodiversity:
      "🇵🇭 **Marine Biodiversity**\n• 'Center of the Center' of marine biodiversity\n• Home to thresher sharks (Malapascua)\n• Rich in sea turtles, dugongs, and giant clams",
  },
  {
    name: "New Zealand",
    flag: "https://flagcdn.com/w320/nz.png",
    image:
      "https://beantowntraveller.com/wp-content/uploads/2018/07/IMG_2484-scaled.jpg",
    desc: "Famous for clean beaches and strong ocean conservation.",
    oceanFacts:
      "🇳🇿 **New Zealand's Pristine Waters**\n• Isolated in the South Pacific\n• Famous for Milford Sound and Bay of Islands\n• Huge Exclusive Economic Zone (EEZ)",
    marineBiodiversity:
      "🇳🇿 **Marine Biodiversity**\n• Unique species: Hector's dolphins, Yellow-eyed penguins\n• Abundant fur seals and sperm whales (Kaikoura)\n• Strong marine reserve protections",
  },
  {
    name: "Sri Lanka",
    flag: "https://flagcdn.com/w320/lk.png",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg",
    desc: "An island nation rich in corals, tropical fish, and coastal heritage.",
    oceanFacts:
      "🇱🇰 **Pearl of the Indian Ocean**\n• Surrounded by warm tropical waters\n• Famous for Mirissa and Trincomalee beaches\n• Key stop on maritime silk routes",
    marineBiodiversity:
      "🇱🇰 **Marine Biodiversity**\n• Blue Whale capital of the world\n• Five species of sea turtles nest here\n• Rich coral reefs at Hikkaduwa and Pigeon Island",
  },
  {
    name: "Maldives",
    flag: "https://flagcdn.com/w320/mv.png",
    image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    desc: "A coral paradise of turquoise waters and atolls.",
    oceanFacts:
      "🇲🇻 **Maldives' Atoll Paradise**\n• 99% Water, 1% Land\n• Composed of 26 ring-shaped atolls\n• Crystal clear lagoons and white sands",
    marineBiodiversity:
      "🇲🇻 **Marine Biodiversity**\n• Baa Atoll is a UNESCO Biosphere Reserve\n• Largest population of Reef Manta Rays\n• Whale sharks seen year-round",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f",
    desc: "Bordered by three major water bodies and rich marine ecosystems.",
    oceanFacts:
      "🇮🇳 **India's Oceanic Wonders**\n• Surrounded by Indian Ocean, Arabian Sea & Bay of Bengal\n• Famous shores: Goa, Marina Beach, Kovalam\n• Supports blue economy",
    marineBiodiversity:
      "🇮🇳 **Marine Biodiversity**\n• Rich corals in Andaman & Lakshadweep\n• World's largest mangroves — Sundarbans\n• Species: Dugongs, Olive Ridley Turtles",
  },
  {
    name: "Malaysia",
    flag: "https://flagcdn.com/w320/my.png",
    image: "https://images.pexels.com/photos/22804/pexels-photo.jpg",
    desc: "Known for mangroves, coral reefs, and the South China Sea biodiversity.",
    oceanFacts:
      "🇲🇾 **Malaysia's Coastal Beauty**\n• Split between Peninsular and Borneo coasts\n• Sipadan Island is a world-class dive site\n• Strait of Malacca is a key shipping lane",
    marineBiodiversity:
      "🇲🇾 **Marine Biodiversity**\n• Part of the Coral Triangle\n• Sipadan: Barracuda vortexes and turtles\n• Tun Mustapha Park protects huge coral areas",
  },
  {
    name: "Vietnam",
    flag: "https://flagcdn.com/w320/vn.png",
    image: "https://cdn.tourradar.com/s3/serp/original/5032_Gia44gKW.jpg",
    desc: "Home to tropical coasts, mangroves, and rich marine life.",
    oceanFacts:
      "🇻🇳 **Vietnam's Long Coastline**\n• Over 3,000 km of coastline facing the East Sea\n• Ha Long Bay is a UNESCO World Heritage site\n• Famous for Nha Trang and Phu Quoc",
    marineBiodiversity:
      "🇻🇳 **Marine Biodiversity**\n• Rich seagrass beds and coral reefs\n• Home to dugongs in Con Dao\n• Diverse mollusk and reef fish populations",
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/w320/sg.png",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    desc: "Small island nation with coral nurseries and strong marine protection.",
    oceanFacts:
      "🇸🇬 **Singapore's Island Waters**\n• Busy port city with hidden marine gems\n• Pulau Hantu and Sisters' Islands Marine Park\n• Strategic location for ocean trade",
    marineBiodiversity:
      "🇸🇬 **Marine Biodiversity**\n• Surprisingly rich coral reefs in southern islands\n• Home to sea turtles and reef sharks\n• Active coral restoration projects",
  },
  {
    name: "Brunei",
    flag: "https://flagcdn.com/w320/bn.png",
    image:
      "https://images.squarespace-cdn.com/content/v1/58ce9b5d29687fc957d50613/1557624631230-B7KAS3S1A48Y20ZX55LG/Visiting+Brunei+-+Should+you+go%2C+and+what+to+do.jpg?format=1000w",
    desc: "South China Sea coastline with mangroves and reef ecosystems.",
    oceanFacts:
      "🇧🇳 **Brunei's Protected Coast**\n• Located on the island of Borneo\n• Features pristine beaches along the South China Sea\n• Strong focus on forest and coastal conservation",
    marineBiodiversity:
      "🇧🇳 **Marine Biodiversity**\n• Extensive mangrove forests free from development\n• Rich macro-diving sites\n• Healthy populations of dugongs and coastal dolphins",
  },
  {
    name: "South Korea",
    flag: "https://flagcdn.com/w320/kr.png",
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/05145003/busan.jpeg",
    desc: "Bordered by three seas with vibrant marine biodiversity.",
    oceanFacts:
      "🇰🇷 **Korea's Three Seas**\n• Surrounded by Yellow Sea, East Sea, and South Sea\n• Famous for Jeju Island's volcanic coast\n• Strong maritime industry",
    marineBiodiversity:
      "🇰🇷 **Marine Biodiversity**\n• Jeju Island: Soft coral gardens and Haenyeo divers\n• Rich tidal flats (Getbol) for migratory birds\n• Diverse cold and warm water species",
  },
  {
    name: "Thailand",
    flag: "https://flagcdn.com/w320/th.png",
    image:
      "https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "Famous for coral reefs, mangroves, and marine tourism in the Andaman Sea.",
    oceanFacts:
      "🇹🇭 **Thailand's Tropical Seas**\n• Andaman Sea (West) and Gulf of Thailand (East)\n• Famous islands: Phuket, Koh Phi Phi, Koh Tao\n• Stunning limestone karsts",
    marineBiodiversity:
      "🇹🇭 **Marine Biodiversity**\n• Similan Islands: Manta rays and whale sharks\n• Vibrant soft corals and sea fans\n• Critical nesting grounds for sea turtles",
  },
  {
    name: "Cambodia",
    flag: "https://flagcdn.com/w320/kh.png",
    image:
      "https://cdn.kimkim.com/files/a/images/e6613dccb0bb304c99ddaaf6d4363fb3c3c29b0d/original-92ed21c37474b5a06e87cab5056e6144.jpg",
    desc: "Home to growing marine sanctuaries and coastal biodiversity.",
    oceanFacts:
      "🇰🇭 **Cambodia's Coastal Charm**\n• Coastline along the Gulf of Thailand\n• Famous for Koh Rong and pristine islands\n• Emerging eco-tourism destination",
    marineBiodiversity:
      "🇰🇭 **Marine Biodiversity**\n• Koh Rong Archipelago Marine Fisheries Management Area\n• Seagrass beds supporting Dugongs\n• Diverse seahorse populations",
  },
  {
    name: "Myanmar",
    flag: "https://flagcdn.com/w320/mm.png",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    desc: "Long coastline along the Bay of Bengal with mangroves and coral areas.",
    oceanFacts:
      "🇲🇲 **Myanmar's Untouched Archipelago**\n• Mergui Archipelago features 800+ islands\n• Bay of Bengal and Andaman Sea coastlines\n• Home to the 'Sea Gypsies' (Moken people)",
    marineBiodiversity:
      "🇲🇲 **Marine Biodiversity**\n• Largely unexplored coral reefs\n• Healthy shark populations in remote areas\n• Significant mangrove cover in the Ayeyarwady Delta",
  },
  {
    name: "Timor-Leste",
    flag: "https://flagcdn.com/w320/tl.png",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Part of the Coral Triangle with some of the healthiest reefs on Earth.",
    oceanFacts:
      "🇹🇱 **Timor-Leste's Deep Waters**\n• Deep channels close to shore\n• Atauro Island has incredible biodiversity\n• Situated between Indonesia and Australia",
    marineBiodiversity:
      "🇹🇱 **Marine Biodiversity**\n• Atauro Island: World's most biodiverse waters (per site)\n• Regular sightings of Blue Whales and Sperm Whales\n• Pristine coral gardens",
  },

  // 🌍 Middle East
  {
    name: "Oman",
    flag: "https://flagcdn.com/w320/om.png",
    image:
      "https://www.outlooktravelmag.com/media/oman-1-1587121317.profileImage.2x-jpg-webp.webp",
    desc: "Famous for turtles, dolphins, and pristine Arabian Sea coasts.",
    oceanFacts:
      "🇴🇲 **Oman's Arabian Sea**\n• Stunning fjords of Musandam\n• Daymaniyat Islands Nature Reserve\n• Long, untouched coastline",
    marineBiodiversity:
      "🇴🇲 **Marine Biodiversity**\n• Five species of sea turtles nest here\n• Arabian Humpback Whales (non-migratory)\n• Vibrant coral reefs unaffected by bleaching",
  },
  {
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/w320/ae.png",
    image: "https://images.unsplash.com/photo-1504272017915-32d1bd315a59",
    desc: "Protects coral reefs, seagrass, and mangrove forests along the Gulf.",
    oceanFacts:
      "🇦🇪 **UAE's Gulf Waters**\n• Persian Gulf and Gulf of Oman coastlines\n• Artificial reefs and mangrove restoration\n• Abu Dhabi's extensive island network",
    marineBiodiversity:
      "🇦🇪 **Marine Biodiversity**\n• Largest population of Indian Ocean Humpback Dolphins\n• Huge dugong population in Marawah\n• Mangrove forests support fish nurseries",
  },
  {
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w320/sa.png",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    desc: "Home to Red Sea coral reefs with high heat tolerance.",
    oceanFacts:
      "🇸🇦 **Saudi's Red Sea**\n• Pristine, unexplored Red Sea coastline\n• The Red Sea Project for regenerative tourism\n• Warm, high-salinity waters",
    marineBiodiversity:
      "🇸🇦 **Marine Biodiversity**\n• Heat-resistant 'Super Corals'\n• Endemic Red Sea fish species\n• Thriving shark populations and healthy reefs",
  },

  // 🌍 Europe
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
    image: "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8",
    desc: "An island nation with strong ocean research and conservation efforts.",
    oceanFacts:
      "🇬🇧 **UK's Atlantic Isles**\n• Surrounded by Atlantic, North Sea, Irish Sea\n• Rugged coastlines of Cornwall and Scotland\n• Strong maritime history",
    marineBiodiversity:
      "🇬🇧 **Marine Biodiversity**\n• Grey Seal colonies (half the world's population)\n• Puffins and seabird cities\n• Basking sharks in summer",
  },
  {
    name: "Greece",
    flag: "https://flagcdn.com/w320/gr.png",
    image: "https://images.pexels.com/photos/1010640/pexels-photo-1010640.jpeg",
    desc: "Surrounded by the Mediterranean Sea with ancient maritime heritage.",
    oceanFacts:
      "🇬🇷 **Greece's Aegean Blue**\n• Thousands of islands (Cyclades, Ionian)\n• Crystal clear Mediterranean waters\n• Cradle of western maritime civilization",
    marineBiodiversity:
      "🇬🇷 **Marine Biodiversity**\n• Home to the rare Mediterranean Monk Seal\n• Sea grass (Posidonia) meadows\n• Loggerhead turtles (Zakynthos)",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/w320/it.png",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv_kuK614syoOc6eBp9JV8R3ZLpq3ov79Lg&s",
    desc: "Coasts touching three seas with beautiful marine ecosystems.",
    oceanFacts:
      "🇮🇹 **Italy's Mediterranean Heart**\n• Peninsula surrounded by 5 seas\n• Amalfi Coast and Sardinia\n• Historic ports like Venice and Genoa",
    marineBiodiversity:
      "🇮🇹 **Marine Biodiversity**\n• Pelagos Sanctuary for Mediterranean marine mammals\n• Sperm whales and Fin whales\n• Red coral colonies",
  },
  {
    name: "Spain",
    flag: "https://flagcdn.com/w320/es.png",
    image:
      "https://www.cuddlynest.com/blog/wp-content/uploads/2021/01/shutterstock_662563231-1.jpg",
    desc: "Bordered by both the Mediterranean Sea and the Atlantic Ocean.",
    oceanFacts:
      "🇪🇸 **Spain's Dual Coasts**\n• Mediterranean (warm) and Atlantic (wild)\n• Canary Islands in the Atlantic\n• Costa Brava and Balearic Islands",
    marineBiodiversity:
      "🇪🇸 **Marine Biodiversity**\n• Atlantic: Orcas chasing tuna in Gibraltar\n• Med: Groupers and Moray eels in marine reserves\n• Canary Islands: Pilot whales and dolphins",
  },
  {
    name: "Croatia",
    flag: "https://flagcdn.com/w320/hr.png",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Adriatic Sea coastline with 1,000+ islands and clear blue waters.",
    oceanFacts:
      "🇭🇷 **Croatia's Dalmatian Coast**\n• Over 1,200 islands along the Adriatic\n• Famous for crystal clear limestone waters\n• Kornati National Park is a nautical paradise",
    marineBiodiversity:
      "🇭🇷 **Marine Biodiversity**\n• Bottlenose dolphins in Lošinj\n• Rich Pinna nobilis (Noble Pen Shell) populations\n• Diverse underwater caves and reefs",
  },
  {
    name: "Ireland",
    flag: "https://flagcdn.com/w320/ie.png",
    image:
      "https://assets.cntraveller.in/photos/66e67ae07488d7df93854de3/16:9/w_1024%2Cc_limit/GettyImages-1962772436.jpg",
    desc: "An island nation with cold-water coral reefs and marine sanctuaries.",
    oceanFacts:
      "🇮🇪 **Ireland's Wild Atlantic Way**\n• Rugged cliffs and crashing Atlantic waves\n• Skellig Michael and Aran Islands\n• Deep-sea canyons off the shelf",
    marineBiodiversity:
      "🇮🇪 **Marine Biodiversity**\n• Cold-water coral reefs (Lophelia)\n• Basking sharks and Sunfish (Mola mola)\n• Rich cetacean diversity off Cork and Kerry",
  },
  {
    name: "Sweden",
    flag: "https://flagcdn.com/w320/se.png",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    desc: "Baltic Sea coastline known for protected marine areas.",
    oceanFacts:
      "🇸🇪 **Sweden's Archipelagos**\n• Stockholm archipelago has 30,000 islands\n• Coastlines on the Baltic Sea and Skagerrak\n• Brackish water ecosystems",
    marineBiodiversity:
      "🇸🇪 **Marine Biodiversity**\n• Kosterhavet National Park (cold water coral)\n• Baltic herring and cod stocks\n• Grey seals and harbor porpoises",
  },
  {
    name: "Denmark",
    flag: "https://flagcdn.com/w320/dk.png",
    image:
      "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/europe/denmark/denmark-main.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704280926%201920w",
    desc: "Bordered by Baltic & North Sea with strong marine policies.",
    oceanFacts:
      "🇩🇰 **Denmark's Maritime Soul**\n• No point is more than 52km from the sea\n• Meeting of North Sea and Baltic at Skagen\n• Wadden Sea National Park (UNESCO)",
    marineBiodiversity:
      "🇩🇰 **Marine Biodiversity**\n• Wadden Sea: Crucial stop for migratory birds\n• Harbor seals and grey seals\n• Rich shellfish beds (oysters, mussels)",
  },
  {
    name: "Norway",
    flag: "https://flagcdn.com/w320/no.png",
    image:
      "https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights.jpg",
    desc: "Known for fjords, Arctic ecosystems & rich marine life.",
    oceanFacts:
      "🇳🇴 **Norway's Fjords**\n• Deep, glacial fjords and rugged coast\n• Arctic waters in the north (Svalbard)\n• Rich fishing heritage",
    marineBiodiversity:
      "🇳🇴 **Marine Biodiversity**\n• Orcas and Humpback whales (winter herring run)\n• Cold-water corals (Lophelia pertusa)\n• King Crabs and abundant cod stocks",
  },
  {
    name: "Portugal",
    flag: "https://flagcdn.com/w320/pt.png",
    image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
    desc: "Atlantic coastline with strong marine research and ocean heritage.",
    oceanFacts:
      "🇵🇹 **Portugal's Atlantic Edge**\n• Famous giant waves at Nazaré\n• Azores and Madeira archipelagos\n• Historic age of discovery launchpad",
    marineBiodiversity:
      "🇵🇹 **Marine Biodiversity**\n• Azores: 'Aquarium of the world' (whales, mobulas)\n• Madeira: Monk seals and deep sea life\n• Rich sardine and tuna fisheries",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w320/fr.png",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    desc: "Marine territories across the Atlantic, Pacific, and Indian Oceans.",
    oceanFacts:
      "🇫🇷 **France's Global Oceans**\n• Second largest Exclusive Economic Zone (EEZ) in the world\n• Mediterranean Riviera and Atlantic Brittany coasts\n• Corsica's preserved waters",
    marineBiodiversity:
      "🇫🇷 **Marine Biodiversity**\n• Mediterranean: Groupers in Port-Cros National Park\n• Atlantic: Dolphins and seabirds\n• Overseas territories host massive coral reefs",
  },
  {
    name: "Iceland",
    flag: "https://flagcdn.com/w320/is.png",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc: "Cold-water marine ecosystems and sustainable ocean practices.",
    oceanFacts:
      "🇮🇸 **Iceland's Cold Seas**\n• Located on the Mid-Atlantic Ridge\n• Geothermal vents in the ocean\n• Meeting of cold Arctic and warm Atlantic currents",
    marineBiodiversity:
      "🇮🇸 **Marine Biodiversity**\n• Top whale watching destination (Minke, Humpback)\n• Rich plankton blooms feed massive fish stocks\n• Puffins nesting on cliffs",
  },

  // 🌍 Africa
  {
    name: "Seychelles",
    flag: "https://flagcdn.com/w320/sc.png",
    image:
      "https://cdn.conscious-explorer.com/keycdn/file/a51da0068065eaead885f44f4e029d36835038a5d42082201d17f28559b2d4b5/SJoUTslQaytZjQm0.webp",
    desc: "A marine conservation leader with coral reefs and protected waters.",
    oceanFacts:
      "🇸🇨 **Seychelles' Granite Islands**\n• 115 islands in the Indian Ocean\n• Aldabra Atoll (UNESCO site)\n• Pioneer in Blue Economy bonds",
    marineBiodiversity:
      "🇸🇨 **Marine Biodiversity**\n• Aldabra Giant Tortoises and sea turtles\n• Pristine coral reefs and seagrass beds\n• Sanctuary for sharks and rays",
  },
  {
    name: "Mauritius",
    flag: "https://flagcdn.com/w320/mu.png",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/GettyImages-1205111263-RS.jpg",
    desc: "Island nation known for lagoons, reefs, and marine biodiversity.",
    oceanFacts:
      "🇲🇺 **Mauritius' Turquoise Lagoons**\n• Surrounded by the third largest coral reef in the world\n• Famous for the 'Underwater Waterfall' illusion\n• Volcanic island in the Indian Ocean",
    marineBiodiversity:
      "🇲🇺 **Marine Biodiversity**\n• Blue Bay Marine Park (diverse corals)\n• Resident Sperm Whales year-round\n• Spinner dolphins in Tamarin Bay",
  },
  {
    name: "South Africa",
    flag: "https://flagcdn.com/w320/za.png",
    image:
      "https://afar.brightspotcdn.com/dims4/default/f3f7b7d/2147483647/strip/false/crop/1440x764+0+0/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F86%2Fba%2F808972c94fb289b1cc2819f4defb%2Fsouthafrica-marcreation-unsplash.jpg",
    desc: "Where the Indian & Atlantic Oceans meet, home to great marine wildlife.",
    oceanFacts:
      "🇿🇦 **Where Oceans Meet**\n• Meeting point of Atlantic and Indian Oceans\n• Dangerous but nutrient-rich Cape of Good Hope\n• Famous Sardine Run",
    marineBiodiversity:
      "🇿🇦 **Marine Biodiversity**\n• Great White Sharks and Cape Fur Seals\n• Southern Right Whales breeding ground\n• Kelp forests and African Penguins",
  },
  {
    name: "Kenya",
    flag: "https://flagcdn.com/w320/ke.png",
    image:
      "https://f7c6x3u6.delivery.rocketcdn.me/wp-content/uploads/2022/07/Hells-Gate-Kenya-Nataliya-Ulyanikhina-shutterstock_1112432165-1024x684.jpg",
    desc: "Indian Ocean coastline with coral reefs & mangroves.",
    oceanFacts:
      "🇰🇪 **Kenya's Swahili Coast**\n• Warm Indian Ocean waters\n• Diani Beach and Malindi Marine Park\n• Traditional Dhow sailing culture",
    marineBiodiversity:
      "🇰🇪 **Marine Biodiversity**\n• Watamu Marine Park: Turtles and dolphins\n• Extensive mangrove forests (Lamu)\n• Coral gardens protecting the coast",
  },
  {
    name: "Tanzania",
    flag: "https://flagcdn.com/w320/tz.png",
    image:
      "https://www.outlooktravelmag.com/media/tanzania-1-1582275012.profileImage.2x-1536x884.webp",
    desc: "Zanzibar’s turquoise waters and coral gardens are world famous.",
    oceanFacts:
      "🇹🇿 **Tanzania's Zanzibar Archipelago**\n• Famous for Zanzibar and Pemba islands\n• Mafia Island Marine Park\n• Crystal clear turquoise waters",
    marineBiodiversity:
      "🇹🇿 **Marine Biodiversity**\n• Whale sharks in Mafia Island\n• Coelacanths found in deep waters\n• Critical turtle nesting sites",
  },
  {
    name: "Mozambique",
    flag: "https://flagcdn.com/w320/mz.png",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvC9L9PI3-Pdoeua-548HKzZyraoFu-e5oQ&s",
    desc: "Whale sharks, coral reefs, and pristine Indian Ocean coastline.",
    oceanFacts:
      "🇲🇿 **Mozambique's Mega-Fauna Coast**\n• Bazaruto Archipelago (sand dunes and reefs)\n• Tofo Beach: Scuba diving capital\n• Long Indian Ocean coastline",
    marineBiodiversity:
      "🇲🇿 **Marine Biodiversity**\n• Marine Big 5: Whales, Sharks, Rays, Turtles, Dugongs\n• One of the largest Whale Shark aggregations\n• Pristine coral reefs",
  },
  {
    name: "Madagascar",
    flag: "https://flagcdn.com/w320/mg.png",
    image:
      "https://www.wildvoyager.com/wp-content/uploads/2022/05/islands-1.jpg",
    desc: "Unique coral reefs and endemic marine species surround the island.",
    oceanFacts:
      "🇲🇬 **Madagascar's Island Life**\n• Fourth largest island in the world\n• Nosy Be archipelago\n• Massive coastline along Indian Ocean",
    marineBiodiversity:
      "🇲🇬 **Marine Biodiversity**\n• Toliara Reef System (3rd largest in world)\n• Migratory route for Humpback Whales\n• Coelacanths and endemic marine species",
  },

  // 🌎 North & South America
  {
    name: "United States",
    flag: "https://flagcdn.com/w320/us.png",
    image:
      "https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york.jpg",
    desc: "Coasts on the Atlantic & Pacific with vast marine biodiversity.",
    oceanFacts:
      "🇺🇸 **USA's Two Oceans**\n• Coastlines on Atlantic, Pacific, and Gulf of Mexico\n• Florida Keys Reef Tract\n• Hawaiian Islands in the central Pacific",
    marineBiodiversity:
      "🇺🇸 **Marine Biodiversity**\n• California Kelp Forests (Otters, Sea Lions)\n• Florida Manatees and Alligators\n• Humpback whales in Hawaii and Alaska",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    image:
      "https://www.gokitetours.com/wp-content/uploads/2024/04/The-amazing-places-to-visit-in-Canada-for-a-summer-vacation.webp",
    desc: "Bordered by three oceans with rich cold-water ecosystems.",
    oceanFacts:
      "🇨🇦 **Canada's Longest Coastline**\n• Longest coastline in the world\n• Pacific, Atlantic, and Arctic Oceans\n• Bay of Fundy has highest tides",
    marineBiodiversity:
      "🇨🇦 **Marine Biodiversity**\n• Orcas (Killer Whales) in British Columbia\n• Belugas and Narwhals in the Arctic\n• Polar bears hunting on sea ice",
  },
  {
    name: "Mexico",
    flag: "https://flagcdn.com/w320/mx.png",
    image:
      "https://www.gokitetours.com/wp-content/uploads/2024/04/The-amazing-places-to-visit-in-Canada-for-a-summer-vacation.webp",
    desc: "Caribbean reefs, Pacific beaches & diverse marine habitats.",
    oceanFacts:
      "🇲🇽 **Mexico's Diverse Waters**\n• Baja California (Pacific) vs Riviera Maya (Caribbean)\n• Sea of Cortez: 'Aquarium of the World'\n• Famous cenotes connecting to ocean",
    marineBiodiversity:
      "🇲🇽 **Marine Biodiversity**\n• Mesoamerican Barrier Reef (2nd largest)\n• Grey Whale breeding lagoons in Baja\n• Vaquita porpoise (critically endangered)",
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLQ7Z7TyTxZ-dB_D-eJXYb8Ja8FiswSxiBg&s",
    desc: "Atlantic coastline featuring mangroves, reefs & warm waters.",
    oceanFacts:
      "🇧🇷 **Brazil's Blue Amazon**\n• Massive Atlantic coastline\n• Fernando de Noronha archipelago\n• Amazon River mouth meets the ocean",
    marineBiodiversity:
      "🇧🇷 **Marine Biodiversity**\n• Abrolhos Bank: South Atlantic's largest reef complex\n• Spinner dolphins in Fernando de Noronha\n• Humpback whale breeding grounds",
  },
  {
    name: "Colombia",
    flag: "https://flagcdn.com/w320/co.png",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Coastlines on both Pacific & Caribbean rich in marine biodiversity.",
    oceanFacts:
      "🇨🇴 **Colombia's Two Oceans**\n• Only South American nation with Pacific & Caribbean coasts\n• San Andres and Providencia islands (Seaflower Biosphere)\n• Dense jungles meeting the sea",
    marineBiodiversity:
      "🇨🇴 **Marine Biodiversity**\n• Hammerhead sharks in Malpelo (Pacific)\n• Extensive coral reefs in Caribbean\n• Sea turtles nesting on both coasts",
  },
  {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    image:
      "https://images.squarespace-cdn.com/content/v1/5acd5b31f407b409c638be6a/1570805136191-EAMNV29U8XRBG4YQ9UEE/machu-picchu-golden-hour.jpg",
    desc: "Cold Pacific waters home to penguins and sea lions.",
    oceanFacts:
      "🇵🇪 **Peru's Humboldt Current**\n• Cold, nutrient-rich waters\n• Paracas National Reserve\n• One of the world's most productive fisheries",
    marineBiodiversity:
      "🇵🇪 **Marine Biodiversity**\n• Humboldt Penguins and Sea Lions\n• Massive flocks of guano birds (Cormorants, Boobies)\n• Anchoveta schools feeding whales",
  },
  {
    name: "Ecuador",
    flag: "https://flagcdn.com/w320/ec.png",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Virgin-of-Quito-Ecuador.jpg",
    desc: "Home to the Galápagos Islands—marine life hotspot.",
    oceanFacts:
      "🇪🇨 **Ecuador's Living Laboratory**\n• Home to the Galápagos Islands (UNESCO)\n• Convergence of major ocean currents\n• Pacific coast beaches",
    marineBiodiversity:
      "🇪🇨 **Marine Biodiversity**\n• Galápagos: Marine Iguanas, Hammerheads, Giant Tortoises\n• Manta Ray aggregations\n• Blue-footed Boobies",
  },
  {
    name: "Panama",
    flag: "https://flagcdn.com/w320/pa.png",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpSjL16Vm0N0Odkh0Xmm5Jhw-kJyujarrcA&s",
    desc: "Two-ocean country with reefs, mangroves, and abundant marine life.",
    oceanFacts:
      "🇵🇦 **Panama's Ocean Bridge**\n• Isthmus connecting N. & S. America\n• Panama Canal connects Atlantic & Pacific\n• Bocas del Toro archipelago",
    marineBiodiversity:
      "🇵🇦 **Marine Biodiversity**\n• Coiba National Park (Pacific Gem)\n• Spawning grounds for many fish species\n• Mangroves protecting both coasts",
  },
  {
    name: "Chile",
    flag: "https://flagcdn.com/w320/cl.png",
    image:
      "https://www.grayline.com/wp-content/uploads/2025/01/Gray-Line-Chile-5-scaled.jpg",
    desc: "Long Pacific coastline with penguins, whales, and cold-water reefs.",
    oceanFacts:
      "🇨🇱 **Chile's Endless Coast**\n• 4,000 km of Pacific coastline\n• Patagonian fjords and glaciers\n• Easter Island (Rapa Nui) in remote Pacific",
    marineBiodiversity:
      "🇨🇱 **Marine Biodiversity**\n• Blue Whales in the Gulf of Corcovado\n• Humboldt Penguins\n• Giant Kelp forests supporting ecosystem",
  },
  {
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png",
    image:
      "https://images.squarespace-cdn.com/content/v1/58cf00b21b631bf52d2edc0e/1495020222866-T0IQ6FX4NB3OVIZMH3DS/buenos-aires-obelisk.jpg?format=2500w",
    desc: "Atlantic coastline rich in seals, whales, and marine species.",
    oceanFacts:
      "🇦🇷 **Argentina's Atlantic Wilds**\n• Peninsula Valdes (UNESCO site)\n• Beagle Channel in Tierra del Fuego\n• Wide continental shelf",
    marineBiodiversity:
      "🇦🇷 **Marine Biodiversity**\n• Orcas beaching to hunt seals\n• Southern Right Whales breeding\n• Magellanic Penguins and Elephant Seals",
  },

  // 🌊 Pacific Islands
  {
    name: "Fiji",
    flag: "https://flagcdn.com/w320/fj.png",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475190955.jpg?k=969887d33a46868be809586de08b5227d8000c34b3ed734737030a4f9bca9685&o=",
    desc: "A Pacific paradise with coral reefs, lagoons & rich marine life.",
    oceanFacts:
      "🇫🇯 **Fiji's Soft Coral Capital**\n• 333 tropical islands\n• Famous for Beqa Lagoon and Great Astrolabe Reef\n• Strong indigenous stewardship of ocean",
    marineBiodiversity:
      "🇫🇯 **Marine Biodiversity**\n• Vibrant soft corals (Dendronephthya)\n• Bull Shark diving in Beqa Lagoon\n• Sea turtles and reef sharks",
  },
  {
    name: "Papua New Guinea",
    flag: "https://flagcdn.com/w320/pg.png",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    desc: "Part of the Coral Triangle, home to incredible coral biodiversity.",
    oceanFacts:
      "🇵🇬 **PNG's Untamed Seas**\n• Eastern half of New Guinea island\n• Bismarck Sea and Solomon Sea\n• Incredible diving in Kimbe Bay",
    marineBiodiversity:
      "🇵🇬 **Marine Biodiversity**\n• Photographers' paradise (Macro life)\n• Black Bass and pelagic fish\n• Extremely high coral species count",
  },
  {
    name: "Samoa",
    flag: "https://flagcdn.com/w320/ws.png",
    image:
      "https://www.virginaustralia.com/content/dam/vaa/images/destinations/samoa/things-to-do/vaa-1440x620-samoa-things-to-do.jpg/_jcr_content/renditions/vaacore.web.720.0.jpg",
    desc: "Coral reefs, lagoons, and strong traditional ocean conservation.",
    oceanFacts:
      "🇼🇸 **Samoa's Fa'a Samoa**\n• Volcanic islands with fringing reefs\n• To Sua Ocean Trench\n• Strong community-managed marine areas",
    marineBiodiversity:
      "🇼🇸 **Marine Biodiversity**\n• Green turtles and Hawksbill turtles\n• Palolo worm rising phenomenon\n• Tropical reef fish diversity",
  },
  {
    name: "Tonga",
    flag: "https://flagcdn.com/w320/to.png",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/213000/213688-Tonga.jpg",
    desc: "Pacific islands known for whale migrations and clear waters.",
    oceanFacts:
      "🇹🇴 **Tonga's Friendly Islands**\n• 170+ islands in the South Pacific\n• Deep trenches and volcanic arcs\n• One of the few places to swim with whales",
    marineBiodiversity:
      "🇹🇴 **Marine Biodiversity**\n• Humpback Whale nursery (calving grounds)\n• Pristine hard coral gardens\n• Rich pelagic life (Tuna, Marlin)",
  },
  {
    name: "Solomon Islands",
    flag: "https://flagcdn.com/w320/sb.png",
    image:
      "https://www.emperordivers.com/wp-content/uploads/2024/11/Solomon-Islands-islands-1024x683.jpg",
    desc: "One of the richest coral reef regions in the Pacific Ocean.",
    oceanFacts:
      "🇸🇧 **Solomons' WWII Wrecks**\n• Iron Bottom Sound (Historical wrecks)\n• Marovo Lagoon (World's largest saltwater lagoon)\n• Remote and unspoiled",
    marineBiodiversity:
      "🇸🇧 **Marine Biodiversity**\n• Wrecks acting as artificial reefs\n• Massive schools of Barracuda and Jacks\n• Pygmy seahorses and ghost pipefish",
  },
  {
    name: "Vanuatu",
    flag: "https://flagcdn.com/w320/vu.png",
    image:
      "https://www.kayak.co.in/rimg/dimg/85/4b/7706fa93-city-47390-16911fe40e6.jpg?crop=true&width=400&height=300",
    desc: "Pristine reefs, volcanic islands, and strong marine traditions.",
    oceanFacts:
      "🇻🇺 **Vanuatu's Fire and Water**\n• Archipelago of 83 islands\n• SS President Coolidge (Famous wreck dive)\n• Blue holes and active volcanoes",
    marineBiodiversity:
      "🇻🇺 **Marine Biodiversity**\n• Dugongs commonly sighted\n• Reef sharks and Nautilus\n• Very healthy coral coverage",
  },
];

export default oceanCountries;
