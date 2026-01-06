export type CuratedDestination = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  vibes: string[];
  experiences: string[];
  description: string;
  imageUrl: string;
};

export const curatedDestinations: CuratedDestination[] = [
  // ============================================
  // 🌴 CARIBBEAN
  // ============================================
  {
    name: "Punta Cana",
    country: "Dominikanska republiken",
    lat: 18.58,
    lon: -68.40,
    vibes: ["tropical", "relaxation", "family-friendly"],
    experiences: ["beach", "snorkeling", "golf"],
    description: "Känd för sina kritvita stränder och kristallklara vatten. Punta Cana är ett paradis med all-inclusive-resorts och palmkantade kuster.",
    imageUrl: "https://images.unsplash.com/photo-1569700946659-fe1941c71fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Nassau",
    country: "Bahamas",
    lat: 25.05,
    lon: -77.35,
    vibes: ["tropical", "luxury", "party"],
    experiences: ["beach", "diving", "casino"],
    description: "Bahamas huvudstad blandar kolonial charm med moderna lyxresorts och den berömda Atlantis Paradise Island.",
    imageUrl: "https://images.unsplash.com/photo-1615839901889-c828c4a96c15?q=80&w=2490&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Montego Bay",
    country: "Jamaica",
    lat: 18.47,
    lon: -77.92,
    vibes: ["tropical", "relaxation", "culture"],
    experiences: ["beach", "snorkeling", "nightlife"],
    description: "Känd som 'MoBay' erbjuder detta jamaicanska paradis reggaemusik, jerk-mat och några av Karibiens vackraste stränder.",
    imageUrl: "https://images.unsplash.com/photo-1700807307391-444e76b0e2ff?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Aruba",
    country: "Aruba",
    lat: 12.52,
    lon: -69.97,
    vibes: ["tropical", "relaxation", "romantic"],
    experiences: ["beach", "windsurfing", "snorkeling"],
    description: "One Happy Island - Aruba är känt för sina vita stränder, året-runt-sol och ständigt svalkande passadvindar.",
    imageUrl: "https://images.unsplash.com/photo-1633421332483-1aa89f0c6b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "San Juan",
    country: "Puerto Rico",
    lat: 18.47,
    lon: -66.10,
    vibes: ["tropical", "culture", "party"],
    experiences: ["beach", "history", "nightlife"],
    description: "Puerto Ricos livliga huvudstad med färgglad kolonialarkitektur, fantastiska stränder och legendariskt nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1650764798436-7c7debbdc697?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌏 SOUTHEAST ASIA
  // ============================================
  {
    name: "Phuket",
    country: "Thailand",
    lat: 7.89,
    lon: 98.39,
    vibes: ["tropical", "party", "budget"],
    experiences: ["beach", "diving", "nightlife"],
    description: "Thailands största ö erbjuder fantastiska stränder, pulserande nattliv och dykning i världsklass i Andamansjön.",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Koh Samui",
    country: "Thailand",
    lat: 9.51,
    lon: 100.06,
    vibes: ["tropical", "relaxation", "wellness"],
    experiences: ["beach", "spa", "temples"],
    description: "Ett tropiskt öparadis känt för palmkantade stränder, lyxiga spa och det ikoniska Big Buddha-templet.",
    imageUrl: "https://images.unsplash.com/photo-1556463207-5f043fc03306?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bali",
    country: "Indonesien",
    lat: -8.41,
    lon: 115.19,
    vibes: ["tropical", "culture", "wellness"],
    experiences: ["beach", "temples", "yoga"],
    description: "Gudarnas ö förtrollar med uråldriga tempel, terrasserade risfält, surfing i världsklass och spirituella retreats.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Boracay",
    country: "Filippinerna",
    lat: 11.97,
    lon: 121.92,
    vibes: ["tropical", "party", "romantic"],
    experiences: ["beach", "diving", "nightlife"],
    description: "Hem till den världsberömda White Beach. Boracay är Filippinernas främsta ödestination med puderviit sand.",
    imageUrl: "https://images.unsplash.com/photo-1708195559744-c2b3e60dbe27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Langkawi",
    country: "Malaysia",
    lat: 6.35,
    lon: 99.80,
    vibes: ["tropical", "relaxation", "family-friendly"],
    experiences: ["beach", "nature", "cable-car"],
    description: "En ögrupp med 99 öar som erbjuder tax-free shopping, orörda stränder och den berömda Sky Bridge.",
    imageUrl: "https://images.unsplash.com/photo-1669812849320-283db1bf8216?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Da Nang",
    country: "Vietnam",
    lat: 16.05,
    lon: 108.22,
    vibes: ["tropical", "culture", "budget"],
    experiences: ["beach", "history", "food"],
    description: "En kuststad med fantastiska stränder, den berömda Gyllene bron och porten till det antika Hoi An.",
    imageUrl: "https://images.unsplash.com/photo-1663684591502-93887202a863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Goa",
    country: "Indien",
    lat: 15.50,
    lon: 73.83,
    vibes: ["tropical", "party", "budget"],
    experiences: ["beach", "nightlife", "yoga"],
    description: "Indiens strandparadis kombinerar portugisiskt kolonialt arv med legendariska strandfester och spirituella retreats.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🏝️ INDIAN OCEAN
  // ============================================
  {
    name: "Maldiverna",
    country: "Maldiverna",
    lat: 3.20,
    lon: 73.22,
    vibes: ["tropical", "luxury", "romantic"],
    experiences: ["beach", "diving", "overwater-villa"],
    description: "Det ultimata tropiska paradiset med kristallklara laguner, övervattenbungalows och världens bästa dykning.",
    imageUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Seychellerna",
    country: "Seychellerna",
    lat: -4.68,
    lon: 55.49,
    vibes: ["tropical", "luxury", "romantic"],
    experiences: ["beach", "nature", "snorkeling"],
    description: "En ögrupp med 115 öar med dramatiska granitklippor, orörda stränder och sällsynt djurliv.",
    imageUrl: "https://images.unsplash.com/photo-1596250470244-d172e7eb4054?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Mauritius",
    country: "Mauritius",
    lat: -20.35,
    lon: 57.55,
    vibes: ["tropical", "romantic", "luxury"],
    experiences: ["beach", "nature", "golf"],
    description: "En paradisö känd för sina stränder, laguner, rev och den häpnadsväckande undervattensvattenfalls-illusionen.",
    imageUrl: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Zanzibar",
    country: "Tanzania",
    lat: -6.16,
    lon: 39.19,
    vibes: ["tropical", "culture", "relaxation"],
    experiences: ["beach", "history", "spices"],
    description: "Kryddön erbjuder orörda stränder, Stone Towns UNESCO-arv och aromatiska kryddplantager.",
    imageUrl: "https://images.unsplash.com/photo-1549035092-33b2937b075a?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌊 MEDITERRANEAN
  // ============================================
  {
    name: "Santorini",
    country: "Grekland",
    lat: 36.39,
    lon: 25.46,
    vibes: ["mediterranean", "romantic", "luxury"],
    experiences: ["sightseeing", "wine", "sunset"],
    description: "Den ikoniska grekiska ön med vitkalkade byggnader, blå kupoler och hisnande caldera-vyer vid solnedgång.",
    imageUrl: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Mykonos",
    country: "Grekland",
    lat: 37.45,
    lon: 25.33,
    vibes: ["mediterranean", "party", "luxury"],
    experiences: ["beach", "nightlife", "sightseeing"],
    description: "De grekiska öarnas festhuvudstad, känd för sina väderkvarnar, strandklubbar och legendariska nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ibiza",
    country: "Spanien",
    lat: 38.91,
    lon: 1.43,
    vibes: ["mediterranean", "party", "luxury"],
    experiences: ["beach", "nightlife", "wellness"],
    description: "Världens klubbhuvudstad erbjuder också gömda vikar, yoga-retreats och fantastiska Medelhavssolnedgångar.",
    imageUrl: "https://images.unsplash.com/photo-1563784462030-fe92bbdcf857?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Mallorca",
    country: "Spanien",
    lat: 39.57,
    lon: 2.65,
    vibes: ["mediterranean", "relaxation", "family-friendly"],
    experiences: ["beach", "cycling", "sightseeing"],
    description: "Balearernas största ö med varierade landskap från bergsbyar till orörda vikar och livliga Palma.",
    imageUrl: "https://images.unsplash.com/photo-1566993850067-bb8df9c9807e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Amalfikusten",
    country: "Italien",
    lat: 40.63,
    lon: 14.60,
    vibes: ["mediterranean", "romantic", "luxury"],
    experiences: ["sightseeing", "food", "beach"],
    description: "Dramatiska klippor, pastellfärgade byar och det djupblå Medelhavet gör denna UNESCO-plats oförglömlig.",
    imageUrl: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sardinien",
    country: "Italien",
    lat: 40.12,
    lon: 9.01,
    vibes: ["mediterranean", "luxury", "relaxation"],
    experiences: ["beach", "sailing", "food"],
    description: "Italiens näst största ö med den berömda Costa Smeralda, antika ruiner och kristallklart vatten.",
    imageUrl: "https://images.unsplash.com/photo-1591103000599-50f5b4ec7d3d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Dubrovnik",
    country: "Kroatien",
    lat: 42.65,
    lon: 18.09,
    vibes: ["mediterranean", "culture", "romantic"],
    experiences: ["history", "sightseeing", "beach"],
    description: "Adriatiska havets pärla med fantastiska medeltida murar, Game of Thrones-inspelningsplatser och öhopping.",
    imageUrl: "https://images.unsplash.com/photo-1610104052927-ed67e7faefc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bodrum",
    country: "Turkiet",
    lat: 37.03,
    lon: 27.43,
    vibes: ["mediterranean", "party", "culture"],
    experiences: ["beach", "nightlife", "history"],
    description: "Turkiets Saint-Tropez kombinerar antika ruiner, vitkalkad arkitektur och legendariska strandklubbar.",
    imageUrl: "https://images.unsplash.com/photo-1684858504602-677ac40eadfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cypern",
    country: "Cypern",
    lat: 34.92,
    lon: 33.62,
    vibes: ["mediterranean", "culture", "relaxation"],
    experiences: ["beach", "history", "wine"],
    description: "Afrodites ö erbjuder antika ruiner, vackra stränder och bergsbyar med vintraditioner.",
    imageUrl: "https://images.unsplash.com/photo-1677023484291-005b9840132f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌎 MEXICO & CENTRAL AMERICA
  // ============================================
  {
    name: "Cancún",
    country: "Mexiko",
    lat: 21.16,
    lon: -86.85,
    vibes: ["tropical", "party", "family-friendly"],
    experiences: ["beach", "nightlife", "ruins"],
    description: "Mexikos mest kända semesterdestination erbjuder vita stränder, Maya-ruiner och resorts i världsklass.",
    imageUrl: "https://images.unsplash.com/photo-1695385246146-1e12a7479410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Tulum",
    country: "Mexiko",
    lat: 20.21,
    lon: -87.43,
    vibes: ["tropical", "wellness", "culture"],
    experiences: ["beach", "ruins", "yoga"],
    description: "Bohemisk strandstad känd för klippkantade Maya-ruiner, cenoter och miljömedvetna lyxresorts.",
    imageUrl: "https://images.unsplash.com/photo-1504814532849-cff240bbc503?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cabo San Lucas",
    country: "Mexiko",
    lat: 22.89,
    lon: -109.91,
    vibes: ["tropical", "party", "luxury"],
    experiences: ["beach", "fishing", "nightlife"],
    description: "Där öknen möter havet erbjuder Cabo dramatiska klippformationer, sportfiske och pulserande nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1645735308116-d12ac96798a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Costa Rica",
    country: "Costa Rica",
    lat: 9.93,
    lon: -84.08,
    vibes: ["tropical", "adventure", "wellness"],
    experiences: ["nature", "surfing", "wildlife"],
    description: "Pura Vida! Regnskogar, vulkaner och både Stilla havs- och Karibiska stränder i ett ekoparadis.",
    imageUrl: "https://images.unsplash.com/photo-1552727131-5fc6af16796d?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Roatán",
    country: "Honduras",
    lat: 16.32,
    lon: -86.53,
    vibes: ["tropical", "adventure", "budget"],
    experiences: ["diving", "snorkeling", "beach"],
    description: "Del av världens näst största barriärrev. Roatán är ett dykarparadis med prisvärd karibisk charm.",
    imageUrl: "https://images.unsplash.com/photo-1505760112740-45991f3e9339?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌴 USA & HAWAII
  // ============================================
  {
    name: "Miami Beach",
    country: "USA",
    lat: 25.79,
    lon: -80.13,
    vibes: ["tropical", "party", "luxury"],
    experiences: ["beach", "nightlife", "art"],
    description: "Art deco-arkitektur, South Beach-glamour och världsberömda nattklubbar gör Miami till en ikonisk destination.",
    imageUrl: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Maui",
    country: "USA",
    lat: 20.80,
    lon: -156.32,
    vibes: ["tropical", "romantic", "adventure"],
    experiences: ["beach", "hiking", "whale-watching"],
    description: "Dalens ö erbjuder vägen till Hana, soluppgång vid Haleakala och några av Hawaiis bästa stränder.",
    imageUrl: "https://images.unsplash.com/photo-1558983731-16245204a27d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Honolulu",
    country: "USA",
    lat: 21.31,
    lon: -157.86,
    vibes: ["tropical", "culture", "family-friendly"],
    experiences: ["beach", "surfing", "history"],
    description: "Hem till Waikiki Beach, Diamond Head och Pearl Harbor - Hawaiis livliga huvudstad.",
    imageUrl: "https://images.unsplash.com/photo-1573992554018-83e7853bd45f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Key West",
    country: "USA",
    lat: 24.56,
    lon: -81.78,
    vibes: ["tropical", "relaxation", "culture"],
    experiences: ["beach", "history", "sunset"],
    description: "USA:s sydligaste punkt, känd för Hemingway, solnedgångar och avslappnad östämning.",
    imageUrl: "https://images.unsplash.com/photo-1531429957-9e7c26e39c84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🏜️ MIDDLE EAST & AFRICA
  // ============================================
  {
    name: "Dubai",
    country: "Förenade Arabemiraten",
    lat: 25.20,
    lon: 55.27,
    vibes: ["luxury", "family-friendly", "culture"],
    experiences: ["shopping", "beach", "sightseeing"],
    description: "Ultramodern arkitektur, lyxshopping och konstgjorda öar i Persiska viken.",
    imageUrl: "https://images.unsplash.com/photo-1611577810610-642f8ac05c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sharm El Sheikh",
    country: "Egypten",
    lat: 27.91,
    lon: 34.33,
    vibes: ["tropical", "adventure", "budget"],
    experiences: ["diving", "snorkeling", "desert"],
    description: "Resortstad vid Röda havet känd för dykning i världsklass, korallrev och ökenexkursioner.",
    imageUrl: "https://images.unsplash.com/photo-1578327254130-f16b8e7202aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Marrakech",
    country: "Marocko",
    lat: 31.63,
    lon: -8.01,
    vibes: ["culture", "romantic", "adventure"],
    experiences: ["sightseeing", "food", "shopping"],
    description: "Den röda staden förtrollar med sin medina, souker, palats och det berömda Jemaa el-Fnaa-torget.",
    imageUrl: "https://images.unsplash.com/photo-1569370088252-c26ef022594c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kapstaden",
    country: "Sydafrika",
    lat: -33.92,
    lon: 18.42,
    vibes: ["adventure", "culture", "luxury"],
    experiences: ["nature", "wine", "beach"],
    description: "Taffelberget, pingvinkolonier, vindistrikt och fantastiska stränder i en otrolig stad.",
    imageUrl: "https://images.unsplash.com/photo-1563560698934-562b0cbf3436?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌊 PACIFIC & AUSTRALIA
  // ============================================
  {
    name: "Fiji",
    country: "Fiji",
    lat: -17.77,
    lon: 177.95,
    vibes: ["tropical", "romantic", "relaxation"],
    experiences: ["beach", "diving", "culture"],
    description: "333 tropiska öar med kristallklara laguner, korallrev och världens varmaste välkomnande.",
    imageUrl: "https://images.unsplash.com/photo-1730440009903-d1e810ead901?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bora Bora",
    country: "Franska Polynesien",
    lat: -16.50,
    lon: -151.74,
    vibes: ["tropical", "luxury", "romantic"],
    experiences: ["beach", "snorkeling", "overwater-villa"],
    description: "Den ultimata bröllopsdestinationen med ikoniska övervattenbungalows och en fantastisk turkos lagun.",
    imageUrl: "https://images.unsplash.com/photo-1652842183703-47c2f7bb8c3c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Gold Coast",
    country: "Australien",
    lat: -28.02,
    lon: 153.43,
    vibes: ["tropical", "party", "family-friendly"],
    experiences: ["beach", "surfing", "theme-parks"],
    description: "Australiens lekplats med 70 km gyllene stränder, surfing i världsklass och berömda nöjesparker.",
    imageUrl: "https://images.unsplash.com/photo-1661674753163-0f8bca582509?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cairns",
    country: "Australien",
    lat: -16.92,
    lon: 145.77,
    vibes: ["tropical", "adventure", "family-friendly"],
    experiences: ["diving", "rainforest", "nature"],
    description: "Porten till Stora barriärrevet och Daintree-regnskogen - två UNESCO-världsarv.",
    imageUrl: "https://images.unsplash.com/photo-1688337707006-64d5a1f6582c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // ============================================
  // 🌴 SOUTH AMERICA
  // ============================================
  {
    name: "Rio de Janeiro",
    country: "Brasilien",
    lat: -22.91,
    lon: -43.17,
    vibes: ["tropical", "party", "culture"],
    experiences: ["beach", "sightseeing", "nightlife"],
    description: "Cidade Maravilhosa - Kristusstatyn, Copacabana Beach, samba och karneval i en otrolig stad.",
    imageUrl: "https://images.unsplash.com/photo-1700677866571-43199bcbc593?q=80&w=2530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cartagena",
    country: "Colombia",
    lat: 10.39,
    lon: -75.51,
    vibes: ["tropical", "culture", "romantic"],
    experiences: ["beach", "history", "food"],
    description: "En färgglad kolonial muromgärdad stad vid Karibiska kusten med kullerstensgator och tropiska stränder.",
    imageUrl: "https://images.unsplash.com/photo-1536308037887-165852797016?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Galápagosöarna",
    country: "Ecuador",
    lat: -0.74,
    lon: -90.30,
    vibes: ["adventure", "nature", "luxury"],
    experiences: ["wildlife", "diving", "nature"],
    description: "Evolutionens levande laboratorium - simma med sjölejon, vandra bland jättesköldpaddor och snorkla med pingviner.",
    imageUrl: "https://images.unsplash.com/photo-1595517930215-d2778a56ac93?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

// Available vibes for filtering
export const availableVibes = [
  { value: "tropical", label: "Tropiskt" },
  { value: "mediterranean", label: "Medelhavet" },
  { value: "luxury", label: "Lyx" },
  { value: "budget", label: "Budgetvänligt" },
  { value: "party", label: "Fest & Nattliv" },
  { value: "relaxation", label: "Avkoppling" },
  { value: "romantic", label: "Romantiskt" },
  { value: "adventure", label: "Äventyr" },
  { value: "culture", label: "Kultur" },
  { value: "wellness", label: "Wellness" },
  { value: "family-friendly", label: "Familjevänligt" },
];

// Available experiences for filtering
export const availableExperiences = [
  { value: "beach", label: "Strand" },
  { value: "diving", label: "Dykning" },
  { value: "snorkeling", label: "Snorkling" },
  { value: "nightlife", label: "Nattliv" },
  { value: "history", label: "Historia" },
  { value: "nature", label: "Natur" },
  { value: "food", label: "Mat & Dryck" },
  { value: "sightseeing", label: "Sightseeing" },
  { value: "surfing", label: "Surfing" },
  { value: "yoga", label: "Yoga & Wellness" },
  { value: "wine", label: "Vin & Vingårdar" },
  { value: "wildlife", label: "Djurliv" },
  { value: "temples", label: "Tempel" },
  { value: "ruins", label: "Ruiner" },
  { value: "golf", label: "Golf" },
  { value: "sailing", label: "Segling" },
];

// Helper function to filter destinations
export const filterDestinations = (
  selectedVibes: string[],
  selectedExperiences: string[]
): CuratedDestination[] => {
  return curatedDestinations.filter((dest) => {
    const matchesVibes = selectedVibes.length === 0 || 
      selectedVibes.some((vibe) => dest.vibes.includes(vibe));
    
    const matchesExperiences = selectedExperiences.length === 0 || 
      selectedExperiences.some((exp) => dest.experiences.includes(exp));
    
    return matchesVibes && matchesExperiences;
  });
};

