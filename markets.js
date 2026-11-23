// Farmers market directory. Facts only, each with sources and a last-checked date.
// status: "listed" = consistent recent source; "check" = old, partial or conflicting info.
// Updated weekly via a reviewed pull request; never edited straight on main.
window.MARKETS = {
  "updated": "2026-11-23",
  "regionsOrder": [
    "Northland",
    "Auckland",
    "Waikato",
    "Bay of Plenty",
    "Gisborne",
    "Hawke's Bay",
    "Taranaki",
    "Manawatū-Whanganui",
    "Wellington",
    "Nelson",
    "Marlborough",
    "West Coast",
    "Canterbury",
    "Otago",
    "Southland"
  ],
  "researchGaps": [
    "West Coast",
    "Wairarapa (Wellington region)",
    "Rotorua",
    "Whakatāne",
    "Whangārei",
    "Queenstown",
    "Wānaka",
    "Motueka"
  ],
  "markets": [
    {
      "name": "Bay of Islands Farmers' Market",
      "region": "Northland",
      "town": "Kerikeri",
      "day": "Sunday",
      "time": "8:30am – 12pm",
      "venue": "Hobson Ave (Post Office carpark)",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://northlandnz.com/listing/bay-of-islands-farmers-markets",
        "https://nzherald.co.nz/travel/farm-fresh-in-the-bay-of-islands/BYYTJKPINJOUI3OUDUYDKAIDQQ"
      ],
      "notes": "Sources differ on start time (8:30am or 9am).",
      "id": "bay-of-islands-farmers-market"
    },
    {
      "name": "Paihia Farmers' Market",
      "region": "Northland",
      "town": "Paihia",
      "day": "Thursday (Oct–Apr)",
      "time": "Times vary by source",
      "venue": "Village Green",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://bay-of-islands.co.nz/events/weekly-markets/"
      ],
      "notes": "Seasonal. Published times conflict.",
      "id": "paihia-farmers-market"
    },
    {
      "name": "Parnell Farmers' Market",
      "region": "Auckland",
      "town": "Parnell",
      "day": "Saturday",
      "time": "8am – 12pm",
      "venue": "Parnell",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.aucklandnz.com/inspire/auckland-farmers-markets-weekend-itineraries"
      ],
      "notes": "",
      "id": "parnell-farmers-market"
    },
    {
      "name": "Matakana Country Market",
      "region": "Auckland",
      "town": "Matakana",
      "day": "Saturday",
      "time": "8:30am – 12pm",
      "venue": "Matakana Village",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.theurbanlist.com/nz/a-list/markets-auckland"
      ],
      "notes": "",
      "id": "matakana-country-market"
    },
    {
      "name": "Grey Lynn Farmers' Market",
      "region": "Auckland",
      "town": "Grey Lynn",
      "day": "Weekend (day unconfirmed)",
      "time": "Morning",
      "venue": "Grey Lynn Community Centre, Richmond Rd",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.aucklandforkids.co.nz/auckland-markets/",
        "https://www.theurbanlist.com/nz/a-list/markets-auckland"
      ],
      "notes": "Sources disagree on Saturday vs Sunday.",
      "id": "grey-lynn-farmers-market"
    },
    {
      "name": "Catalina Bay Farmers' Market",
      "region": "Auckland",
      "town": "Hobsonville Point",
      "day": "Saturday & Sunday",
      "time": "8:30am – 2pm",
      "venue": "Catalina Bay",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.dalan.co.nz/page/361125"
      ],
      "notes": "Hours from a 2025 vendor listing.",
      "id": "catalina-bay-farmers-market"
    },
    {
      "name": "Clevedon Village Farmers' Market",
      "region": "Auckland",
      "town": "Clevedon",
      "day": "Sunday",
      "time": "Morning (arrive by 9am)",
      "venue": "Clevedon",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.theurbanlist.com/nz/a-list/markets-auckland"
      ],
      "notes": "Published hours conflict.",
      "id": "clevedon-village-farmers-market"
    },
    {
      "name": "Karangahape Farmers' Market",
      "region": "Auckland",
      "town": "Karangahape Rd",
      "day": "Saturday (seasonal)",
      "time": "Check listing",
      "venue": "Karangahape Rd",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.aucklandnz.com/events/all-events/karangahape-farmers-market"
      ],
      "notes": "2026 season listed 12 Sep – 14 Nov.",
      "id": "karangahape-farmers-market"
    },
    {
      "name": "The Village Farmers' Market at Bell House",
      "region": "Auckland",
      "town": "Pakuranga",
      "day": "First Sunday of the month",
      "time": "Check listing",
      "venue": "Bell House",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.aucklandnz.com/events/all-events/the-village-farmers-market-at-bell-house"
      ],
      "notes": "",
      "id": "the-village-farmers-market-at-bell-house"
    },
    {
      "name": "Hamilton Farmers' Market",
      "region": "Waikato",
      "town": "Hamilton",
      "day": "Sunday",
      "time": "8am – 12pm",
      "venue": "The Barn, Claudelands Events Centre",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.nzherald.co.nz/the-country/news/hamilton-farmers-market-celebrates-20th-anniversary-this-sunday/IT433MSPGZHYVKM72LSVN4XVFU"
      ],
      "notes": "",
      "id": "hamilton-farmers-market"
    },
    {
      "name": "Cambridge Farmers' Market",
      "region": "Waikato",
      "town": "Cambridge",
      "day": "Saturday",
      "time": "8am – 12pm",
      "venue": "Victoria Square",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://cambridge.co.nz/things-to-do/cambridge-farmers-market",
        "https://waikatonz.com/all-events/cambridge-farmers-market"
      ],
      "notes": "",
      "id": "cambridge-farmers-market"
    },
    {
      "name": "Tauranga Farmers' Market",
      "region": "Bay of Plenty",
      "town": "Tauranga",
      "day": "Saturday",
      "time": "7:45am – 12pm",
      "venue": "Tauranga Primary School",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.bayofplentynz.com/events/markets-in-the-bay/"
      ],
      "notes": "",
      "id": "tauranga-farmers-market"
    },
    {
      "name": "Katikati Sunday Farmers' Market",
      "region": "Bay of Plenty",
      "town": "Katikati",
      "day": "Sunday",
      "time": "10am – 2pm",
      "venue": "Haiku Park (wet weather: Memorial Hall)",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.nzherald.co.nz/bay-of-plenty-times/katikati-advertiser/western-bay-of-plenty-farmers-markets-set-to-flourish-with-the-return-the-waihi-beach-event-and-introducing-the-new-katikati-sunday-farmers-market/3C3KAUXXUJBVPJI4K2CMU7H3DM"
      ],
      "notes": "",
      "id": "katikati-sunday-farmers-market"
    },
    {
      "name": "Waihī Beach Farmers' Market",
      "region": "Bay of Plenty",
      "town": "Waihī Beach",
      "day": "Saturday",
      "time": "Not confirmed",
      "venue": "Waihī Beach",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://nzherald.co.nz/bay-of-plenty-times/news/waihi-beach-in-the-market-for-fresh-produce/JRFSG6YBKBBNVHRFXFLEJMPQPU"
      ],
      "notes": "Hours not found.",
      "id": "waihi-beach-farmers-market"
    },
    {
      "name": "Gisborne Farmers' Market",
      "region": "Gisborne",
      "town": "Gisborne",
      "day": "Saturday",
      "time": "9:30am – 12:30pm",
      "venue": "Cnr Stout & Fitzherbert Sts",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://tairawhitigisborne.co.nz/wine-dine/guide-to-gisborne-farmers-market"
      ],
      "notes": "",
      "id": "gisborne-farmers-market"
    },
    {
      "name": "Hawke's Bay Farmers' Market",
      "region": "Hawke's Bay",
      "town": "Hastings",
      "day": "Sunday",
      "time": "8:30am – 12:30pm",
      "venue": "A&P Showgrounds, Kenilworth Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.napiernz.com/whats-on/show/804722/hawkes-bay-farmers-market&refID=3"
      ],
      "notes": "",
      "id": "hawkes-bay-farmers-market"
    },
    {
      "name": "Napier Urban Farmers' Market",
      "region": "Hawke's Bay",
      "town": "Napier",
      "day": "Saturday",
      "time": "8:30am – 12:30pm",
      "venue": "Clive Square",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.nzherald.co.nz/hawkes-bay-today/news/napier-urban-farmers-market-celebrates-20-years/IXJMZOKEJZGGTB44IGOJ54TG3I"
      ],
      "notes": "One listing says 9am – 1pm.",
      "id": "napier-urban-farmers-market"
    },
    {
      "name": "Taranaki Farmers' Market",
      "region": "Taranaki",
      "town": "New Plymouth",
      "day": "Sunday",
      "time": "9am – 12pm",
      "venue": "Huatoki Plaza (winter) / Currie St (summer)",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.npdc.govt.nz/event/E23811D29427"
      ],
      "notes": "Venue changes seasonally.",
      "id": "taranaki-farmers-market"
    },
    {
      "name": "Whanganui River Market",
      "region": "Manawatū-Whanganui",
      "town": "Whanganui",
      "day": "Saturday",
      "time": "8:30am – 1pm",
      "venue": "Riverbank, Taupō Quay",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.broadsheet.com.au/new-zealand/food-and-drink/article/guide-new-zealands-best-farmers-markets"
      ],
      "notes": "Times from a travel guide.",
      "id": "whanganui-river-market"
    },
    {
      "name": "Hokowhitu Village Farmers' Market",
      "region": "Manawatū-Whanganui",
      "town": "Palmerston North",
      "day": "1st & 3rd Sunday",
      "time": "9am – 1pm",
      "venue": "Hokowhitu Village, Albert St",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.pncc.govt.nz/Community/Community-projects-and-programmes/Placemaking/Markets"
      ],
      "notes": "",
      "id": "hokowhitu-village-farmers-market"
    },
    {
      "name": "Feilding Farmers' Market",
      "region": "Manawatū-Whanganui",
      "town": "Feilding",
      "day": "Friday",
      "time": "9am – 1:30pm",
      "venue": "Feilding town centre",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://manawatunz.co.nz/events/feilding-farmers-market/"
      ],
      "notes": "",
      "id": "feilding-farmers-market"
    },
    {
      "name": "Harbourside Market",
      "region": "Wellington",
      "town": "Wellington",
      "day": "Sunday",
      "time": "From 7:30am",
      "venue": "Cable St, beside Te Papa",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://wellington.govt.nz/news-and-events/news-and-information/our-wellington/2020/11/why-we-love-harbourside-market"
      ],
      "notes": "",
      "id": "harbourside-market"
    },
    {
      "name": "Hill Street Farmers' Market",
      "region": "Wellington",
      "town": "Thorndon",
      "day": "Saturday",
      "time": "8:30am – 12:30pm",
      "venue": "St Paul's Cathedral car park",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.myguidewellington.com/usefulinfo/wellington-weekly-markets"
      ],
      "notes": "",
      "id": "hill-street-farmers-market"
    },
    {
      "name": "Riverbank Market",
      "region": "Wellington",
      "town": "Lower Hutt",
      "day": "Saturday",
      "time": "Times vary by source",
      "venue": "Riverbank Carpark, Daly St",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.theurbanlist.com/nz/a-list/markets-wellington"
      ],
      "notes": "Published hours conflict.",
      "id": "riverbank-market"
    },
    {
      "name": "Nelson Farmers' Market",
      "region": "Nelson",
      "town": "Nelson",
      "day": "Wednesday",
      "time": "8am – 1pm",
      "venue": "23 Halifax St",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.nelsontasman.nz/visit-nelson-tasman/things-to-see-and-do/3031-nelson-farmers-market"
      ],
      "notes": "",
      "id": "nelson-farmers-market"
    },
    {
      "name": "Marlborough Farmers' Market",
      "region": "Marlborough",
      "town": "Blenheim",
      "day": "Sunday",
      "time": "9am – 12pm",
      "venue": "Cnr Alabama & Maxwell Rds",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://MarlboroughNZ.com/explore-marlborough/food-drink/local-markets/"
      ],
      "notes": "",
      "id": "marlborough-farmers-market"
    },
    {
      "name": "Christchurch Farmers' Market",
      "region": "Canterbury",
      "town": "Riccarton",
      "day": "Saturday",
      "time": "9am – 1pm",
      "venue": "Riccarton House",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.christchurchnz.com/visit/eat-and-drink/canterbury-farmers-markets-artisan-producers"
      ],
      "notes": "",
      "id": "christchurch-farmers-market"
    },
    {
      "name": "Lyttelton Farmers' Market",
      "region": "Canterbury",
      "town": "Lyttelton",
      "day": "Saturday",
      "time": "10am – 1pm",
      "venue": "London St",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://cityscape-christchurch.co.nz/blog/food-drink/entry/the-freshest-farmers-markets-in-otautahi"
      ],
      "notes": "Some sources say from 9am.",
      "id": "lyttelton-farmers-market"
    },
    {
      "name": "South Christchurch Farmers' Market",
      "region": "Canterbury",
      "town": "Ōpāwa",
      "day": "Sunday",
      "time": "Morning (hours vary)",
      "venue": "Ōpāwa",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://ccc.govt.nz/news-and-events/whats-on/event/south-christchurch-farmers-market"
      ],
      "notes": "Formerly Ōpāwa Farmers' Market.",
      "id": "south-christchurch-farmers-market"
    },
    {
      "name": "Timaru Artisan Farmers' Market",
      "region": "Canterbury",
      "town": "Timaru",
      "day": "Saturday",
      "time": "9am – 12:30pm",
      "venue": "Timaru",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.christchurchnz.com/visit/eat-and-drink/canterbury-farmers-markets-artisan-producers"
      ],
      "notes": "",
      "id": "timaru-artisan-farmers-market"
    },
    {
      "name": "Akaroa Farmers' Market",
      "region": "Canterbury",
      "town": "Akaroa",
      "day": "Saturday",
      "time": "From 9:30am",
      "venue": "Akaroa",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.christchurchnz.com/visit/eat-and-drink/canterbury-farmers-markets-artisan-producers"
      ],
      "notes": "",
      "id": "akaroa-farmers-market"
    },
    {
      "name": "Ashburton Farmers' Market",
      "region": "Canterbury",
      "town": "Ashburton",
      "day": "Saturday",
      "time": "Morning",
      "venue": "Ashburton",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.christchurchnz.com/visit/eat-and-drink/canterbury-farmers-markets-artisan-producers"
      ],
      "notes": "Hours not found.",
      "id": "ashburton-farmers-market"
    },
    {
      "name": "Otago Farmers' Market",
      "region": "Otago",
      "town": "Dunedin",
      "day": "Saturday",
      "time": "8am – 12:30pm",
      "venue": "Dunedin Railway Station, Anzac Ave",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://otagofarmersmarket.org.nz/",
        "https://neatplaces.co.nz/places/dunedin/stay-explore/otago-farmers-market"
      ],
      "notes": "",
      "id": "otago-farmers-market"
    },
    {
      "name": "Oamaru Farmers' Market",
      "region": "Otago",
      "town": "Ōamaru",
      "day": "Sunday",
      "time": "9:30am – 1pm",
      "venue": "Ōamaru",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.rankers.co.nz/experiences/10083-Oamaru_Farmers_Market"
      ],
      "notes": "",
      "id": "oamaru-farmers-market"
    },
    {
      "name": "Southern Farmers' Market",
      "region": "Southland",
      "town": "Invercargill",
      "day": "Sunday",
      "time": "9:30am – 1:30pm",
      "venue": "Railway Station, Leven St",
      "status": "check",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://lwb.co.nz/content/free-markets/"
      ],
      "notes": "Times from a travel blog.",
      "id": "southern-farmers-market"
    }
  ]
};
