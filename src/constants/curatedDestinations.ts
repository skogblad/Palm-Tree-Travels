import type { CuratedDestination } from "../models/curatedDestinations";

export const curatedDestinations: CuratedDestination[] = [
  // ============================================
  // 🌴 CARIBBEAN
  // ============================================
  {
    id: 1,
    name: "Punta Cana",
    wikiName: "Punta Cana, Dominikanska republiken",
    country: "Dominikanska republiken",
    lat: 18.58,
    lon: -68.40,
    vibes: ["relaxation", "family-friendly"],
    experiences: ["diving", "snorkeling", "golf", "food"],
    description: "Känd för sina kritvita stränder och kristallklara vatten. Punta Cana är ett paradis med all-inclusive-resorts och palmkantade kuster.",
    imageUrl: "https://images.unsplash.com/photo-1569700946659-fe1941c71fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 26, Mars: 27, April: 27, Maj: 28, Juni: 28, Juli: 29, Augusti: 29, September: 29, Oktober: 28, November: 27, December: 26 }
  },
  {
    id: 2,
    name: "Nassau",
    wikiName: "Nassau, Bahamas",
    country: "Bahamas",
    lat: 25.05,
    lon: -77.35,
    vibes: ["luxury", "party"],
    experiences: ["diving", "snorkeling", "shopping", "food"],
    description: "Bahamas huvudstad blandar kolonial charm med moderna lyxresorts och den berömda Atlantis Paradise Island.",
    imageUrl: "https://images.unsplash.com/photo-1615839901889-c828c4a96c15?q=80&w=2490&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 21, Februari: 22, Mars: 23, April: 25, Maj: 27, Juni: 28, Juli: 29, Augusti: 29, September: 28, Oktober: 27, November: 24, December: 22 }
  },
  {
    id: 3,
    name: "Montego Bay",
    wikiName: "Montego Bay, Jamaica",
    country: "Jamaica",
    lat: 18.47,
    lon: -77.92,
    vibes: ["relaxation", "culture", "party"],
    experiences: ["snorkeling", "food"],
    description: "Känd som 'MoBay' erbjuder detta jamaicanska paradis reggaemusik, jerk-mat och några av Karibiens vackraste stränder.",
    imageUrl: "https://images.unsplash.com/photo-1700807307391-444e76b0e2ff?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 26, Mars: 27, April: 28, Maj: 28, Juni: 29, Juli: 29, Augusti: 29, September: 29, Oktober: 28, November: 27, December: 26 }
  },
  {
    id: 4,
    name: "Aruba",
    country: "Aruba",
    lat: 12.52,
    lon: -69.97,
    vibes: ["relaxation", "romantic"],
    experiences: ["snorkeling", "food"],
    description: "One Happy Island - Aruba är känt för sina vita stränder, året-runt-sol och ständigt svalkande passadvindar.",
    imageUrl: "https://images.unsplash.com/photo-1633421332483-1aa89f0c6b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 28, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 30, September: 30, Oktober: 29, November: 28, December: 27 }
  },
  {
    id: 5,
    name: "San Juan",
    wikiName: "San Juan, Puerto Rico",
    country: "Puerto Rico",
    lat: 18.47,
    lon: -66.10,
    vibes: ["culture", "party"],
    experiences: ["history", "food", "sightseeing"],
    description: "Puerto Ricos livliga huvudstad med färgglad kolonialarkitektur, fantastiska stränder och legendariskt nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1650764798436-7c7debbdc697?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 25, Februari: 25, Mars: 26, April: 27, Maj: 28, Juni: 28, Juli: 28, Augusti: 29, September: 28, Oktober: 28, November: 27, December: 26 }
  },
  {
    id: 6,
    name: "Barbados",
    country: "Barbados",
    lat: 13.19,
    lon: -59.54,
    vibes: ["luxury", "relaxation"],
    experiences: ["surfing", "food", "golf"],
    description: "Karibisk lyx med vita sandstränder, kristallklart vatten och rom-kultur. Perfekt för surfing, cricket och det goda livet.",
    imageUrl: "https://images.unsplash.com/photo-1682289570915-5d6e41ade8bc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 28, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 29, Oktober: 29, November: 28, December: 28 }
  },
  {
    id: 7,
    name: "Saint Lucia",
    country: "Saint Lucia",
    lat: 13.91,
    lon: -60.98,
    vibes: ["romantic", "luxury", "nature-focused"],
    experiences: ["snorkeling", "hiking", "wildlife"],
    description: "Dramatiska Pitons-bergen, regnskogar och vulkaniska stränder. Karibisk pärla perfekt för romantik och naturupplevelser.",
    imageUrl: "https://images.unsplash.com/photo-1617280325974-f9c5721a4862?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 26, Mars: 26, April: 27, Maj: 28, Juni: 28, Juli: 28, Augusti: 28, September: 28, Oktober: 28, November: 27, December: 26 }
  },
  {
    id: 8,
    name: "Turks & Caicos",
    country: "Turks & Caicos",
    lat: 21.80,
    lon: -72.31,
    vibes: ["luxury", "relaxation", "romantic"],
    experiences: ["diving", "snorkeling", "spa"],
    description: "Känt för kritvita sandstränder som Grace Bay Beach och kristallklart turkost vatten. Exklusiv och lugn atmosfär med lyxiga resorter bortom de mest myllrande turiststråken.",
    imageUrl: "https://images.unsplash.com/photo-1514130667032-770bbfe7b7b2?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 24, Mars: 24, April: 25, Maj: 26, Juni: 27, Juli: 28, Augusti: 28, September: 28, Oktober: 27, November: 26, December: 25 }
  },
  {
    id: 9,
    name: "Caymanöarna",
    country: "Caymanöarna",
    lat: 19.34,
    lon: -81.39,
    vibes: ["luxury", "family-friendly", "adventure"],
    experiences: ["diving", "snorkeling", "wildlife"],
    description: "Familjevänligt paradis med den ikoniska Seven Mile Beach, unika möten med rockor i Stingray City och dykplatser i världsklass.",
    imageUrl: "https://images.unsplash.com/photo-1622561700644-babb49d52279?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 26, Mars: 26, April: 27, Maj: 28, Juni: 28, Juli: 29, Augusti: 29, September: 29, Oktober: 28, November: 27, December: 26 }
  },

  // ============================================
  // 🌏 SOUTHEAST ASIA
  // ============================================
  {
    id: 10,
    name: "Phuket",
    country: "Thailand",
    lat: 7.89,
    lon: 98.39,
    vibes: ["party", "budget", "relaxation"],
    experiences: ["diving", "snorkeling", "food", "shopping"],
    description: "Thailands största ö erbjuder fantastiska stränder, pulserande nattliv och dykning i världsklass i Andamansjön.",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 28, Mars: 29, April: 29, Maj: 28, Juni: 28, Juli: 28, Augusti: 28, September: 27, Oktober: 27, November: 27, December: 27 }
  },
  {
    id: 11,
    name: "Koh Samui",
    wikiName: "Ko Samui",
    country: "Thailand",
    lat: 9.51,
    lon: 100.06,
    vibes: ["relaxation", "culture"],
    experiences: ["spa", "food", "sightseeing"],
    description: "Ett tropiskt öparadis känt för palmkantade stränder, lyxiga spa och det ikoniska Big Buddha-templet.",
    imageUrl: "https://images.unsplash.com/photo-1556463207-5f043fc03306?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 27, Mars: 28, April: 29, Maj: 29, Juni: 29, Juli: 28, Augusti: 28, September: 28, Oktober: 27, November: 27, December: 26 }
  },
  {
    id: 12,
    name: "Krabi",
    country: "Thailand",
    lat: 8.08,
    lon: 98.91,
    vibes: ["adventure", "relaxation", "nature-focused"],
    experiences: ["snorkeling", "hiking"],
    description: "Dramatiska kalkstensklippor, turkosa vatten och Maya Bay. Perfekt för både klättring och strandliv i södra Thailand.",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 28, Mars: 29, April: 29, Maj: 28, Juni: 28, Juli: 27, Augusti: 27, September: 27, Oktober: 27, November: 27, December: 27 }
  },
  {
    id: 13,
    name: "Bali",
    country: "Indonesien",
    lat: -8.41,
    lon: 115.19,
    vibes: ["culture", "romantic", "relaxation"],
    experiences: ["surfing", "snorkeling", "spa", "sightseeing"],
    description: "Gudarnas ö förtrollar med uråldriga tempel, terrasserade risfält, surfing i världsklass och spirituella retreats.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 27, April: 27, Maj: 27, Juni: 26, Juli: 26, Augusti: 26, September: 27, Oktober: 28, November: 28, December: 27 }
  },
  {
    id: 14,
    name: "Boracay",
    country: "Filippinerna",
    lat: 11.97,
    lon: 121.92,
    vibes: ["party", "romantic"],
    experiences: ["snorkeling", "food"],
    description: "Hem till den världsberömda White Beach. Boracay är Filippinernas främsta ödestination med puderviit sand.",
    imageUrl: "https://images.unsplash.com/photo-1708195559744-c2b3e60dbe27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 27, Mars: 28, April: 30, Maj: 30, Juni: 29, Juli: 28, Augusti: 28, September: 28, Oktober: 28, November: 27, December: 26 }
  },
  {
    id: 15,
    name: "Langkawi",
    country: "Malaysia",
    lat: 6.35,
    lon: 99.80,
    vibes: ["relaxation", "family-friendly", "nature-focused"],
    experiences: ["sightseeing", "shopping"],
    description: "En ögrupp med 99 öar som erbjuder tax-free shopping, orörda stränder och den berömda Sky Bridge.",
    imageUrl: "https://images.unsplash.com/photo-1669812849320-283db1bf8216?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 28, Februari: 29, Mars: 29, April: 29, Maj: 28, Juni: 28, Juli: 28, Augusti: 28, September: 27, Oktober: 27, November: 27, December: 27 }
  },
  {
    id: 16,
    name: "Da Nang",
    wikiName: "Da Nang, Vietnam",
    country: "Vietnam",
    lat: 16.05,
    lon: 108.22,
    vibes: ["culture", "budget"],
    experiences: ["history", "food", "sightseeing"],
    description: "En kuststad med fantastiska stränder, den berömda Gyllene bron och porten till det antika Hoi An.",
    imageUrl: "https://images.unsplash.com/photo-1663684591502-93887202a863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 22, Februari: 23, Mars: 25, April: 27, Maj: 29, Juni: 30, Juli: 30, Augusti: 29, September: 28, Oktober: 26, November: 24, December: 22 }
  },
  {
    id: 17,
    name: "Nha Trang",
    wikiName: "Nha Trang, Vietnam",
    country: "Vietnam",
    lat: 12.24,
    lon: 109.19,
    vibes: ["budget", "relaxation"],
    experiences: ["diving", "snorkeling", "food", "sightseeing"],
    description: "Vietnams riviera med vackra stränder, ö-hopping och fantastisk street food. Perfekt för dykning och budgetvänlig strandlyx.",
    imageUrl: "https://images.unsplash.com/photo-1570366290364-5e76a15ae408?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 25, Mars: 26, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 28, Oktober: 27, November: 26, December: 25 }
  },

  // ============================================
  // 🏝️ INDIAN OCEAN
  // ============================================
  {
    id: 18,
    name: "Maldiverna",
    country: "Maldiverna",
    lat: 3.20,
    lon: 73.22,
    vibes: ["luxury", "romantic", "relaxation"],
    experiences: ["diving", "snorkeling", "spa", "wildlife"],
    description: "Det ultimata tropiska paradiset med kristallklara laguner, övervattenbungalows och världens bästa dykning.",
    imageUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 28, Februari: 29, Mars: 30, April: 30, Maj: 29, Juni: 29, Juli: 28, Augusti: 28, September: 28, Oktober: 28, November: 28, December: 28 }
  },
  {
    id: 19,
    name: "Seychellerna",
    country: "Seychellerna",
    lat: -4.68,
    lon: 55.49,
    vibes: ["luxury", "romantic", "nature-focused"],
    experiences: ["snorkeling", "wildlife", "hiking"],
    description: "En ögrupp med 115 öar med dramatiska granitklippor, orörda stränder och sällsynt djurliv.",
    imageUrl: "https://images.unsplash.com/photo-1596250470244-d172e7eb4054?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 28, Mars: 28, April: 28, Maj: 28, Juni: 27, Juli: 26, Augusti: 26, September: 27, Oktober: 27, November: 27, December: 27 }
  },
  {
    id: 20,
    name: "Mauritius",
    country: "Mauritius",
    lat: -20.35,
    lon: 57.55,
    vibes: ["romantic", "luxury"],
    experiences: ["snorkeling", "golf", "hiking"],
    description: "En paradisö känd för sina stränder, laguner, rev och den häpnadsväckande undervattensvattenfalls-illusionen.",
    imageUrl: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 27, April: 25, Maj: 23, Juni: 21, Juli: 20, Augusti: 20, September: 21, Oktober: 23, November: 25, December: 26 }
  },
  {
    id: 21,
    name: "Zanzibar",
    wikiName: "Zanzibar, Tanzania",
    country: "Tanzania",
    lat: -6.16,
    lon: 39.19,
    vibes: ["culture", "relaxation"],
    experiences: ["history", "food", "sightseeing", "snorkeling"],
    description: "Kryddön erbjuder orörda stränder, Stone Towns UNESCO-arv och aromatiska kryddplantager.",
    imageUrl: "https://images.unsplash.com/photo-1549035092-33b2937b075a?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 29, Februari: 29, Mars: 29, April: 28, Maj: 27, Juni: 26, Juli: 25, Augusti: 25, September: 26, Oktober: 27, November: 28, December: 29 }
  },
  {
    id: 22,
    name: "Goa",
    wikiName: "Goa, Indien",
    country: "Indien",
    lat: 15.50,
    lon: 73.83,
    vibes: ["party", "budget"],
    experiences: ["food", "spa", "history"],
    description: "Indiens strandparadis kombinerar portugisiskt kolonialt arv med legendariska strandfester och spirituella retreats.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 27, Mars: 29, April: 30, Maj: 30, Juni: 29, Juli: 28, Augusti: 28, September: 28, Oktober: 29, November: 28, December: 27 }
  },
  {
    id: 23,
    name: "Sri Lanka",
    country: "Sri Lanka",
    lat: 7.87,
    lon: 80.77,
    vibes: ["culture", "budget", "nature-focused"],
    experiences: ["wildlife", "history", "hiking"],
    description: "Tropisk pärla med teplantager, buddhistiska tempel och safariupplevelser. Perfekt för elefanter, stränder och kulturella skatter.",
    imageUrl: "https://images.unsplash.com/photo-1705936981588-a4192f66fcfb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 28, April: 29, Maj: 29, Juni: 28, Juli: 28, Augusti: 28, September: 28, Oktober: 28, November: 27, December: 27 }
  },

  // ============================================
  // 🌊 MEDITERRANEAN
  // ============================================
  {
    id: 24,
    name: "Santorini",
    country: "Grekland",
    lat: 36.39,
    lon: 25.46,
    vibes: ["romantic", "luxury"],
    experiences: ["sightseeing", "wine", "food", "hiking"],
    description: "Den ikoniska grekiska ön med vitkalkade byggnader, blå kupoler och hisnande caldera-vyer vid solnedgång.",
    imageUrl: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 12, Februari: 12, Mars: 14, April: 17, Maj: 21, Juni: 25, Juli: 27, Augusti: 27, September: 24, Oktober: 20, November: 16, December: 13 }
  },
  {
    id: 25,
    name: "Mykonos",
    country: "Grekland",
    lat: 37.45,
    lon: 25.33,
    vibes: ["party", "luxury"],
    experiences: ["shopping", "food", "sightseeing"],
    description: "De grekiska öarnas festhuvudstad, känd för sina väderkvarnar, strandklubbar och legendariska nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 11, Februari: 11, Mars: 13, April: 16, Maj: 20, Juni: 24, Juli: 26, Augusti: 26, September: 23, Oktober: 19, November: 15, December: 12 }
  },
  {
    id: 26,
    name: "Kreta",
    country: "Grekland",
    lat: 35.24,
    lon: 24.81,
    vibes: ["culture", "family-friendly"],
    experiences: ["history", "food", "hiking", "snorkeling"],
    description: "Greklands största ö med antika ruiner, vackra stränder och autentisk grekisk kultur. Perfekt kombination av historia och havsliv.",
    imageUrl: "https://images.unsplash.com/photo-1720811247829-08c6b9cb3c24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 12, Februari: 13, Mars: 14, April: 16, Maj: 20, Juni: 24, Juli: 26, Augusti: 26, September: 23, Oktober: 21, November: 17, December: 13 }
  },
  {
    id: 27,
    name: "Ibiza",
    country: "Spanien",
    lat: 38.91,
    lon: 1.43,
    vibes: ["party", "luxury", "relaxation"],
    experiences: ["food", "spa", "sightseeing"],
    description: "Världens klubbhuvudstad erbjuder också gömda vikar, yoga-retreats och fantastiska Medelhavssolnedgångar.",
    imageUrl: "https://images.unsplash.com/photo-1563784462030-fe92bbdcf857?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 12, Februari: 12, Mars: 14, April: 16, Maj: 20, Juni: 24, Juli: 27, Augusti: 28, September: 25, Oktober: 21, November: 16, December: 13 }
  },
  {
    id: 28,
    name: "Mallorca",
    country: "Spanien",
    lat: 39.57,
    lon: 2.65,
    vibes: ["relaxation", "family-friendly"],
    experiences: ["hiking", "sightseeing", "food"],
    description: "Balearernas största ö med varierade landskap från bergsbyar till orörda vikar och livliga Palma.",
    imageUrl: "https://images.unsplash.com/photo-1672264430465-781cd9154896?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 10, Februari: 11, Mars: 13, April: 15, Maj: 19, Juni: 23, Juli: 26, Augusti: 27, September: 24, Oktober: 19, November: 14, December: 11 }
  },
  {
    id: 29,
    name: "Amalfikusten",
    country: "Italien",
    lat: 40.63,
    lon: 14.60,
    vibes: ["romantic", "luxury"],
    experiences: ["sightseeing", "food", "hiking"],
    description: "Dramatiska klippor, pastellfärgade byar och det djupblå Medelhavet gör denna UNESCO-plats oförglömlig.",
    imageUrl: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 10, Februari: 10, Mars: 12, April: 15, Maj: 19, Juni: 23, Juli: 26, Augusti: 27, September: 23, Oktober: 19, November: 14, December: 11 }
  },
  {
    id: 30,
    name: "Sardinien",
    country: "Italien",
    lat: 40.12,
    lon: 9.01,
    vibes: ["luxury", "relaxation"],
    experiences: ["sailing", "food", "snorkeling", "history"],
    description: "Italiens näst största ö med den berömda Costa Smeralda, antika ruiner och kristallklart vatten.",
    imageUrl: "https://images.unsplash.com/photo-1591103000599-50f5b4ec7d3d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 10, Februari: 11, Mars: 13, April: 15, Maj: 19, Juni: 24, Juli: 27, Augusti: 27, September: 24, Oktober: 19, November: 14, December: 11 }
  },
  {
    id: 31,
    name: "Sicilien",
    country: "Italien",
    lat: 37.60,
    lon: 14.02,
    vibes: ["culture", "relaxation"],
    experiences: ["history", "food", "wine"],
    description: "Italiens pärla med vulkanen Etna, antika tempel och maffig matkultur. Perfekt för vinprovning, historia och autentiskt italienskt liv.",
    imageUrl: "https://images.unsplash.com/photo-1524942434100-2b3f200f5b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 12, Februari: 12, Mars: 13, April: 16, Maj: 19, Juni: 23, Juli: 26, Augusti: 26, September: 24, Oktober: 20, November: 17, December: 13 }
  },
  {
    id: 32,
    name: "Split",
    wikiName: "Split, Kroatien",
    country: "Kroatien",
    lat: 43.51,
    lon: 16.44,
    vibes: ["culture", "party"],
    experiences: ["history", "sightseeing", "shopping"],
    description: "Dalmatiens solsäkra pärla med antikt Diocletianus palats, livlig strandpromenad, pulserande nattliv och öhopping i azurblått hav.",
    imageUrl: "https://images.unsplash.com/photo-1555990538-c48ab0a194b5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 8, Februari: 9, Mars: 11, April: 15, Maj: 20, Juni: 24, Juli: 27, Augusti: 27, September: 22, Oktober: 18, November: 13, December: 9 }
  },
  {
    id: 33,
    name: "Hvar",
    wikiName: "Hvar, Kroatien",
    country: "Kroatien",
    lat: 43.17,
    lon: 16.44,
    vibes: ["party", "luxury"],
    experiences: ["snorkeling", "sailing", "wine"],
    description: "Kroatiens exklusiva party-ö med kristallklart hav, livliga beach clubs och doftande lavendelfält.",
    imageUrl: "https://images.unsplash.com/photo-1511097178962-9bab92bc5665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 10, Februari: 10, Mars: 12, April: 15, Maj: 19, Juni: 24, Juli: 26, Augusti: 26, September: 23, Oktober: 19, November: 15, December: 11 }
  },
  {
    id: 34,
    name: "Bodrum",
    wikiName: "Bodrum, Turkiet",
    country: "Turkiet",
    lat: 37.03,
    lon: 27.43,
    vibes: ["party", "culture"],
    experiences: ["food", "history", "shopping"],
    description: "Turkiets Saint-Tropez kombinerar antika ruiner, vitkalkad arkitektur och legendariska strandklubbar.",
    imageUrl: "https://images.unsplash.com/photo-1684858504602-677ac40eadfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 11, Februari: 12, Mars: 14, April: 17, Maj: 22, Juni: 27, Juli: 29, Augusti: 29, September: 25, Oktober: 20, November: 15, December: 12 }
  },
  {
    id: 35,
    name: "Cypern",
    country: "Cypern",
    lat: 34.92,
    lon: 33.62,
    vibes: ["culture", "relaxation"],
    experiences: ["history", "wine", "food", "sightseeing"],
    description: "Afrodites ö erbjuder antika ruiner, vackra stränder och bergsbyar med vintraditioner.",
    imageUrl: "https://images.unsplash.com/photo-1677023484291-005b9840132f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 12, Februari: 12, Mars: 14, April: 18, Maj: 22, Juni: 26, Juli: 29, Augusti: 29, September: 27, Oktober: 23, November: 18, December: 14 }
  },

  // ============================================
  // 🌎 MEXICO & CENTRAL AMERICA
  // ============================================
  {
    id: 36,
    name: "Cancún",
    wikiName: "Cancún, Mexiko",
    country: "Mexiko",
    lat: 21.16,
    lon: -86.85,
    vibes: ["party", "family-friendly"],
    experiences: ["snorkeling", "history", "sightseeing"],
    description: "Mexikos mest kända semesterdestination erbjuder vita stränder, Maya-ruiner och resorts i världsklass.",
    imageUrl: "https://images.unsplash.com/photo-1695385246146-1e12a7479410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 25, Mars: 26, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 28, Oktober: 27, November: 26, December: 24 }
  },
  {
    id: 37,
    name: "Tulum",
    wikiName: "Tulum, Mexiko",
    country: "Mexiko",
    lat: 20.21,
    lon: -87.43,
    vibes: ["culture", "luxury", "relaxation"],
    experiences: ["history", "spa", "sightseeing"],
    description: "Bohemisk strandstad känd för klippkantade Maya-ruiner, cenoter och miljömedvetna lyxresorts.",
    imageUrl: "https://images.unsplash.com/photo-1504814532849-cff240bbc503?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 25, Mars: 26, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 28, Oktober: 27, November: 26, December: 24 }
  },
  {
    id: 38,
    name: "Cabo San Lucas",
    wikiName: "Cabo San Lucas, Mexiko",
    country: "Mexiko",
    lat: 22.89,
    lon: -109.91,
    vibes: ["party", "luxury"],
    experiences: ["snorkeling", "food", "diving"],
    description: "Där öknen möter havet erbjuder Cabo dramatiska klippformationer, sportfiske och pulserande nattliv.",
    imageUrl: "https://images.unsplash.com/photo-1645735308116-d12ac96798a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 19, Februari: 20, Mars: 21, April: 23, Maj: 25, Juni: 28, Juli: 30, Augusti: 30, September: 29, Oktober: 27, November: 23, December: 20 }
  },
  {
    id: 39,
    name: "Playa del Carmen",
    wikiName: "Playa del Carmen, Mexiko",
    country: "Mexiko",
    lat: 20.63,
    lon: -87.07,
    vibes: ["party", "adventure"],
    experiences: ["diving", "snorkeling", "sightseeing", "food"],
    description: "Riviera Mayas livliga hjärta med vita stränder, cenoter och femte avenyn. Perfekt för dykning, nattliv och utforskande av Maya-ruiner.",
    imageUrl: "https://images.unsplash.com/photo-1640617547871-15e4fb41d0c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 24, Mars: 25, April: 26, Maj: 28, Juni: 28, Juli: 29, Augusti: 29, September: 28, Oktober: 27, November: 25, December: 24 }
  },
  {
    id: 40,
    name: "Tamarindo",
    wikiName: "Tamarindo, Costa Rica",
    country: "Costa Rica",
    lat: 10.30,
    lon: -85.84,
    vibes: ["party", "adventure"],
    experiences: ["surfing", "food"],
    description: "Costa Ricas mest kända surfparadis med perfekta vågor för alla nivåer, pulserande nattliv och avslappnad beach town-atmosfär längs Stillahavskusten.",
    imageUrl: "https://images.unsplash.com/photo-1636657795425-0db7a2b0528a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 28, April: 29, Maj: 27, Juni: 27, Juli: 27, Augusti: 27, September: 26, Oktober: 26, November: 26, December: 27 }
  },
  {
    id: 41,
    name: "Manuel Antonio",
    wikiName: "Manuel Antonio, Costa Rica",
    country: "Costa Rica",
    lat: 9.37,
    lon: -84.14,
    vibes: ["family-friendly", "adventure", "nature-focused"],
    experiences: ["wildlife", "hiking", "snorkeling"],
    description: "Nationalpark där vit sandstrand möter frodig regnskog. Observera fyra aparter, sengångare och färgglada fåglar i ett av Costa Ricas mest prisade naturskatter.",
    imageUrl: "https://images.unsplash.com/photo-1665054481578-4e636551c8a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 28, April: 28, Maj: 28, Juni: 27, Juli: 27, Augusti: 27, September: 27, Oktober: 27, November: 27, December: 27 }
  },
  {
    id: 42,
    name: "Roatán",
    wikiName: "Roatán, Honduras",
    country: "Honduras",
    lat: 16.32,
    lon: -86.53,
    vibes: ["adventure", "budget", "nature-focused"],
    experiences: ["diving", "snorkeling", "wildlife"],
    description: "Del av världens näst största barriärrev. Roatán är ett dykarparadis med prisvärd karibisk charm.",
    imageUrl: "https://images.unsplash.com/photo-1505760112740-45991f3e9339?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 26, Februari: 26, Mars: 27, April: 28, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 29, Oktober: 28, November: 27, December: 26 }
  },

  // ============================================
  // 🌴 USA & HAWAII
  // ============================================
  {
    id: 43,
    name: "Miami Beach",
    wikiName: "Miami Beach, USA",
    country: "USA",
    lat: 25.79,
    lon: -80.13,
    vibes: ["party", "luxury"],
    experiences: ["shopping", "sightseeing", "food"],
    description: "Art deco-arkitektur, South Beach-glamour och världsberömda nattklubbar gör Miami till en ikonisk destination.",
    imageUrl: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 20, Februari: 21, Mars: 23, April: 25, Maj: 27, Juni: 28, Juli: 29, Augusti: 29, September: 28, Oktober: 26, November: 24, December: 21 }
  },
  {
    id: 44,
    name: "Maui",
    country: "USA (Hawaii)",
    lat: 20.80,
    lon: -156.32,
    vibes: ["romantic", "adventure", "nature-focused"],
    experiences: ["hiking", "wildlife", "sightseeing"],
    description: "Dalens ö erbjuder vägen till Hana, soluppgång vid Haleakala och några av Hawaiis bästa stränder.",
    imageUrl: "https://images.unsplash.com/photo-1558983731-16245204a27d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 24, Februari: 23, Mars: 23, April: 23, Maj: 24, Juni: 26, Juli: 26, Augusti: 26, September: 26, Oktober: 26, November: 24, December: 23 }
  },
  {
    id: 45,
    name: "Honolulu",
    wikiName: "Honolulu, Hawaii",
    country: "USA (Hawaii)",
    lat: 21.31,
    lon: -157.86,
    vibes: ["culture", "family-friendly"],
    experiences: ["surfing", "history", "sightseeing"],
    description: "Hem till Waikiki Beach, Diamond Head och Pearl Harbor - Hawaiis livliga huvudstad.",
    imageUrl: "https://images.unsplash.com/photo-1573992554018-83e7853bd45f?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 23, Februari: 23, Mars: 24, April: 24, Maj: 25, Juni: 26, Juli: 27, Augusti: 27, September: 27, Oktober: 26, November: 25, December: 23 }
  },
  {
    id: 46,
    name: "Kauai",
    country: "USA (Hawaii)",
    lat: 22.08,
    lon: -159.52,
    vibes: ["adventure", "romantic", "nature-focused"],
    experiences: ["hiking", "snorkeling"],
    description: "The Garden Island med dramatiska Na Pali-klippor, Waimea Canyon och frodiga regnskogar. Hawaiis vackraste och mest orörda ö.",
    imageUrl: "https://images.unsplash.com/photo-1573325216298-f8d47669eee3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 23, Februari: 23, Mars: 23, April: 24, Maj: 25, Juni: 26, Juli: 27, Augusti: 27, September: 27, Oktober: 26, November: 25, December: 23 }
  },
  {
    id: 47,
    name: "Key West",
    wikiName: "Key West, USA",
    country: "USA",
    lat: 24.56,
    lon: -81.78,
    vibes: ["relaxation", "culture"],
    experiences: ["history", "sightseeing", "food"],
    description: "USA:s sydligaste punkt, känd för Hemingway, solnedgångar och avslappnad östämning.",
    imageUrl: "https://images.unsplash.com/photo-1531429957-9e7c26e39c84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 21, Februari: 22, Mars: 24, April: 26, Maj: 28, Juni: 29, Juli: 30, Augusti: 30, September: 29, Oktober: 27, November: 24, December: 22 }
  },

  // ============================================
  // 🏜️ MIDDLE EAST & AFRICA
  // ============================================
  {
    id: 48,
    name: "Dubai",
    country: "Förenade Arabemiraten",
    lat: 25.20,
    lon: 55.27,
    vibes: ["luxury", "culture"],
    experiences: ["shopping", "sightseeing", "food"],
    description: "Ultramodern arkitektur, lyxshopping och konstgjorda öar i Persiska viken.",
    imageUrl: "https://images.unsplash.com/photo-1611577810610-642f8ac05c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 19, Februari: 20, Mars: 23, April: 28, Maj: 33, Juni: 35, Juli: 37, Augusti: 37, September: 34, Oktober: 30, November: 25, December: 21 }
  },
  {
    id: 49,
    name: "Sharm El Sheikh",
    wikiName: "Sharm el-Sheikh",
    country: "Egypten",
    lat: 27.91,
    lon: 34.33,
    vibes: ["adventure", "budget"],
    experiences: ["diving", "snorkeling"],
    description: "Resortstad vid Röda havet känd för dykning i världsklass, korallrev och ökenexkursioner.",
    imageUrl: "https://images.unsplash.com/photo-1578327254130-f16b8e7202aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 17, Februari: 18, Mars: 21, April: 25, Maj: 29, Juni: 32, Juli: 33, Augusti: 33, September: 31, Oktober: 27, November: 23, December: 19 }
  },
  {
    id: 50,
    name: "Abu Dhabi",
    country: "Förenade Arabemiraten",
    lat: 24.47,
    lon: 54.37,
    vibes: ["luxury", "culture", "family-friendly"],
    experiences: ["sightseeing", "spa", "shopping"],
    description: "Förenade Arabemiratens lyxiga huvudstad med magnifika Sheikh Zayed-moskén, Louvre Abu Dhabi, exklusiva spa-resorter och vita sandstränder längs Arabiska golfen.",
    imageUrl: "https://images.unsplash.com/photo-1624317937315-0ced8736c9e9?q=80&w=1974&auto=format&fit=crop",
    avgTempByMonth: { Januari: 20, Februari: 21, Mars: 23, April: 27, Maj: 31, Juni: 33, Juli: 34, Augusti: 34, September: 32, Oktober: 29, November: 25, December: 22 }
  },
  {
    id: 51,
    name: "Muscat",
    wikiName: "Muscat, Oman",
    country: "Oman",
    lat: 23.59,
    lon: 58.37,
    vibes: ["luxury", "culture", "adventure"],
    experiences: ["sightseeing", "hiking"],
    description: "Muscat bjuder på autentisk arabisk kultur, lyxiga upplevelser, vackra stränder längs kusten och äventyr i spektakulära wadis och öknen.",
    imageUrl: "https://images.unsplash.com/photo-1585134339424-0fc98d0bfe86?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 21, Februari: 22, Mars: 26, April: 30, Maj: 34, Juni: 34, Juli: 33, Augusti: 32, September: 31, Oktober: 30, November: 26, December: 22 }
  },

  // ============================================
  // 🌊 PACIFIC & AUSTRALIA
  // ============================================
  {
    id: 52,
    name: "Fiji",
    country: "Fiji",
    lat: -17.77,
    lon: 177.95,
    vibes: ["romantic", "relaxation"],
    experiences: ["diving", "snorkeling", "wildlife"],
    description: "333 tropiska öar med kristallklara laguner, korallrev och världens varmaste välkomnande.",
    imageUrl: "https://images.unsplash.com/photo-1730440009903-d1e810ead901?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 27, April: 26, Maj: 25, Juni: 24, Juli: 23, Augusti: 24, September: 24, Oktober: 25, November: 26, December: 27 }
  },
  {
    id: 53,
    name: "Bora Bora",
    country: "Franska Polynesien",
    lat: -16.50,
    lon: -151.74,
    vibes: ["luxury", "romantic", "relaxation"],
    experiences: ["snorkeling", "spa", "wildlife"],
    description: "Den ultimata bröllopsdestinationen med ikoniska övervattenbungalows och en fantastisk turkos lagun.",
    imageUrl: "https://images.unsplash.com/photo-1652842183703-47c2f7bb8c3c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 28, Februari: 28, Mars: 28, April: 28, Maj: 27, Juni: 26, Juli: 25, Augusti: 25, September: 26, Oktober: 26, November: 27, December: 28 }
  },
  {
    id: 54,
    name: "Gold Coast",
    wikiName: "Gold Coast, Queensland",
    country: "Australien",
    lat: -28.02,
    lon: 153.43,
    vibes: ["party", "family-friendly"],
    experiences: ["surfing", "shopping", "food"],
    description: "Australiens lekplats med 70 km gyllene stränder, surfing i världsklass och berömda nöjesparker.",
    imageUrl: "https://images.unsplash.com/photo-1661674753163-0f8bca582509?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 25, Februari: 25, Mars: 24, April: 22, Maj: 19, Juni: 17, Juli: 16, Augusti: 17, September: 19, Oktober: 21, November: 23, December: 25 }
  },
  {
    id: 55,
    name: "Cairns",
    wikiName: "Cairns, Australien",
    country: "Australien",
    lat: -16.92,
    lon: 145.77,
    vibes: ["adventure", "family-friendly", "nature-focused"],
    experiences: ["diving", "snorkeling", "wildlife"],
    description: "Porten till Stora barriärrevet och Daintree-regnskogen - två UNESCO-världsarv. Perfekt bas för dykning, snorkling med sköldpaddor och möten med exotiskt djurliv i tropisk miljö.",
    imageUrl: "https://images.unsplash.com/photo-1688337707006-64d5a1f6582c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 28, Februari: 28, Mars: 27, April: 26, Maj: 24, Juni: 22, Juli: 22, Augusti: 23, September: 25, Oktober: 27, November: 28, December: 28 }
  },
  {
    id: 56,
    name: "Sydney",
    country: "Australien",
    lat: -33.87,
    lon: 151.21,
    vibes: ["family-friendly", "luxury", "culture"],
    experiences: ["surfing", "shopping", "sightseeing", "food"],
    description: "Australiens hamnstad är känd för sitt ikoniska operahus, sina fantastiska stränder och sin avslappnade utomhuslivsstil.",
    imageUrl: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 23, Februari: 23, Mars: 21, April: 19, Maj: 16, Juni: 14, Juli: 13, Augusti: 14, September: 16, Oktober: 18, November: 20, December: 21 }
  },

  // ============================================
  // 🌴 SOUTH AMERICA
  // ============================================
  {
    id: 57,
    name: "Rio de Janeiro",
    country: "Brasilien",
    lat: -22.91,
    lon: -43.17,
    vibes: ["party", "culture"],
    experiences: ["sightseeing", "food", "hiking"],
    description: "Cidade Maravilhosa - Kristusstatyn, Copacabana Beach, samba och karneval i en otrolig stad.",
    imageUrl: "https://images.unsplash.com/photo-1700677866571-43199bcbc593?q=80&w=2530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 27, Februari: 27, Mars: 26, April: 24, Maj: 22, Juni: 21, Juli: 21, Augusti: 21, September: 22, Oktober: 23, November: 24, December: 26 }
  },
  {
    id: 58,
    name: "Cartagena",
    wikiName: "Cartagena, Colombia",
    country: "Colombia",
    lat: 10.39,
    lon: -75.51,
    vibes: ["culture", "romantic"],
    experiences: ["history", "food", "sightseeing"],
    description: "En färgglad kolonial muromgärdad stad vid Karibiska kusten med kullerstensgator och tropiska stränder.",
    imageUrl: "https://images.unsplash.com/photo-1536308037887-165852797016?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 28, Februari: 28, Mars: 28, April: 29, Maj: 29, Juni: 29, Juli: 29, Augusti: 29, September: 28, Oktober: 28, November: 28, December: 28 }
  },
  {
    id: 59,
    name: "Galápagosöarna",
    country: "Ecuador",
    lat: -0.74,
    lon: -90.30,
    vibes: ["adventure", "luxury", "nature-focused"],
    experiences: ["wildlife", "snorkeling", "hiking"],
    description: "Evolutionens levande laboratorium - simma med sjölejon, vandra bland jättesköldpaddor och snorkla med pingviner.",
    imageUrl: "https://images.unsplash.com/photo-1595517930215-d2778a56ac93?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avgTempByMonth: { Januari: 25, Februari: 26, Mars: 26, April: 26, Maj: 25, Juni: 23, Juli: 22, Augusti: 21, September: 21, Oktober: 22, November: 23, December: 24 }
  },
];

// Available vibes for filtering
export const availableVibes = [
  { value: "relaxation", label: "Avkoppling" },
  { value: "party", label: "Nattliv" },
  { value: "romantic", label: "Romantiskt" },
  { value: "family-friendly", label: "Familjevänligt" },
  { value: "luxury", label: "Lyx" },
  { value: "budget", label: "Budgetvänligt" },
  { value: "culture", label: "Kultur" },
  { value: "adventure", label: "Äventyr" },
  { value: "nature-focused", label: "Naturnära" },
];

// Available experiences for filtering
export const availableExperiences = [
  { value: "diving", label: "Dykning" },
  { value: "snorkeling", label: "Snorkling" },
  { value: "surfing", label: "Surfing" },
  { value: "hiking", label: "Vandring" },
  { value: "wildlife", label: "Djurliv" },
  { value: "spa", label: "Spa" },
  { value: "food", label: "Mat" },
  { value: "wine", label: "Vingårdar" },
  { value: "history", label: "Historia" },
  { value: "shopping", label: "Shopping" },
  { value: "sightseeing", label: "Sightseeing" },
  { value: "sailing", label: "Segling" },
  { value: "golf", label: "Golf" },
];
