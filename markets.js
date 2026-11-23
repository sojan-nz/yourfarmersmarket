// Farmers market directory. Facts only, each with sources and a last-checked date.
// status: "listed" = consistent recent source; "check" = old, partial or conflicting info.
// member: true = Farmers Markets NZ member (primary source: farmersmarkets.org.nz).
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
    "Queenstown",
    "Wānaka",
    "Motueka"
  ],
  "markets": [
    {
      "name": "Kerikeri Farmers' Market",
      "region": "Northland",
      "town": "Kerikeri",
      "day": "Sunday",
      "time": "8:30am – 12pm",
      "venue": "Post Office Carpark, 10 Hobson Ave",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://northlandnz.com/listing/bay-of-islands-farmers-markets",
        "https://nzherald.co.nz/travel/farm-fresh-in-the-bay-of-islands/BYYTJKPINJOUI3OUDUYDKAIDQQ"
      ],
      "notes": "The market's website had a security certificate error when checked.",
      "id": "bay-of-islands-farmers-market",
      "member": true,
      "website": null,
      "facts": []
    },
    {
      "name": "Bay of Islands Farmers' Market, Paihia",
      "region": "Northland",
      "town": "Paihia",
      "day": "Thursday",
      "time": "10am – 1:30pm",
      "venue": "The Village Green, 60 Marsden Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://bay-of-islands.co.nz/events/weekly-markets/"
      ],
      "notes": "Seasonal: open October – April.",
      "id": "paihia-farmers-market",
      "member": true,
      "website": null,
      "facts": []
    },
    {
      "name": "Parnell Farmers' Market",
      "region": "Auckland",
      "town": "Parnell",
      "day": "Saturday",
      "time": "8am – 12pm",
      "venue": "Jubilee Building Carpark, 545 Parnell Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.aucklandnz.com/inspire/auckland-farmers-markets-weekend-itineraries"
      ],
      "notes": "",
      "id": "parnell-farmers-market",
      "member": true,
      "website": "https://www.facebook.com/parnellfarmersmarket/",
      "facts": []
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
      "id": "matakana-country-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Grey Lynn Farmers' Market",
      "region": "Auckland",
      "town": "Grey Lynn",
      "day": "Sunday",
      "time": "8:30am – 12pm",
      "venue": "Grey Lynn Community Centre, 510 Richmond Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.aucklandforkids.co.nz/auckland-markets/",
        "https://www.theurbanlist.com/nz/a-list/markets-auckland",
        "https://www.greylynnfarmersmarket.co.nz"
      ],
      "notes": "",
      "id": "grey-lynn-farmers-market",
      "member": true,
      "website": "https://www.greylynnfarmersmarket.co.nz",
      "facts": [
        "Every Sunday morning"
      ]
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
      "id": "catalina-bay-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "The Clevedon Village Farmers' Market",
      "region": "Auckland",
      "town": "Clevedon",
      "day": "Sunday",
      "time": "8am – 1pm",
      "venue": "Clevedon Showgrounds, 107 Monument Rd (Gate 6, Munro Entrance)",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.theurbanlist.com/nz/a-list/markets-auckland",
        "https://www.clevedonfarmersmarket.co.nz"
      ],
      "notes": "",
      "id": "clevedon-village-farmers-market",
      "member": true,
      "website": "https://www.clevedonfarmersmarket.co.nz",
      "facts": [
        "Every Sunday except over Christmas and Easter Sunday"
      ]
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
      "id": "karangahape-farmers-market",
      "member": false,
      "website": null,
      "facts": []
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
      "id": "the-village-farmers-market-at-bell-house",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Hamilton Farmers' Market",
      "region": "Waikato",
      "town": "Hamilton",
      "day": "Sunday",
      "time": "8am – 12pm",
      "venue": "The Barn, Claudelands Event Centre, Gate 3, Brooklyn Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.nzherald.co.nz/the-country/news/hamilton-farmers-market-celebrates-20th-anniversary-this-sunday/IT433MSPGZHYVKM72LSVN4XVFU",
        "https://www.waikatofarmersmarkets.co.nz/"
      ],
      "notes": "",
      "id": "hamilton-farmers-market",
      "member": true,
      "website": "https://www.waikatofarmersmarkets.co.nz/",
      "facts": [
        "Most stalls inside Claudelands Barn, some outside",
        "Free entry and parking",
        "Celebrated 20 years in March 2026"
      ]
    },
    {
      "name": "Cambridge Farmers' Market",
      "region": "Waikato",
      "town": "Cambridge",
      "day": "Saturday",
      "time": "8am – 12pm",
      "venue": "Victoria Square, cnr Victoria & Alpha Sts",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://cambridge.co.nz/things-to-do/cambridge-farmers-market",
        "https://waikatonz.com/all-events/cambridge-farmers-market",
        "https://www.waikatofarmersmarkets.co.nz/"
      ],
      "notes": "",
      "id": "cambridge-farmers-market",
      "member": true,
      "website": "https://www.waikatofarmersmarkets.co.nz/",
      "facts": [
        "Runs year-round"
      ]
    },
    {
      "name": "Tauranga Farmers' Market",
      "region": "Bay of Plenty",
      "town": "Tauranga",
      "day": "Saturday",
      "time": "7:45am – 12pm",
      "venue": "Tauranga Primary School, 31 Fifth Ave",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.bayofplentynz.com/events/markets-in-the-bay/"
      ],
      "notes": "",
      "id": "tauranga-farmers-market",
      "member": true,
      "website": "https://taurangafarmersmarket.co.nz/",
      "facts": []
    },
    {
      "name": "Katikati Sunday Farmers' Market",
      "region": "Bay of Plenty",
      "town": "Katikati",
      "day": "Sunday",
      "time": "9am – 1pm",
      "venue": "Katikati War Memorial Hall, 29 Main Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.nzherald.co.nz/bay-of-plenty-times/katikati-advertiser/western-bay-of-plenty-farmers-markets-set-to-flourish-with-the-return-the-waihi-beach-event-and-introducing-the-new-katikati-sunday-farmers-market/3C3KAUXXUJBVPJI4K2CMU7H3DM"
      ],
      "notes": "The market's website appears to have expired. Check its Facebook page for updates.",
      "id": "katikati-sunday-farmers-market",
      "member": true,
      "website": null,
      "facts": []
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
      "id": "waihi-beach-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Gisborne Farmers' Market",
      "region": "Gisborne",
      "town": "Gisborne",
      "day": "Saturday",
      "time": "9:30am – 12:30pm",
      "venue": "Old Army Hall Carpark, cnr Stout & Fitzherbert Sts",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://tairawhitigisborne.co.nz/wine-dine/guide-to-gisborne-farmers-market"
      ],
      "notes": "",
      "id": "gisborne-farmers-market",
      "member": true,
      "website": "https://www.gisbornefarmersmarket.co.nz/",
      "facts": []
    },
    {
      "name": "Hawke's Bay Farmers' Market",
      "region": "Hawke's Bay",
      "town": "Hastings",
      "day": "Sunday",
      "time": "8:30am – 12:30pm",
      "venue": "Waikoko Gardens, Tōmoana Showgrounds, Kenilworth Rd",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.napiernz.com/whats-on/show/804722/hawkes-bay-farmers-market&refID=3",
        "https://hawkesbayfarmersmarket.co.nz/"
      ],
      "notes": "",
      "id": "hawkes-bay-farmers-market",
      "member": true,
      "website": "https://hawkesbayfarmersmarket.co.nz/",
      "facts": [
        "Runs special one-off events, such as 'Harvested on the Green' in Havelock North"
      ]
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
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.nzherald.co.nz/hawkes-bay-today/news/napier-urban-farmers-market-celebrates-20-years/IXJMZOKEJZGGTB44IGOJ54TG3I",
        "https://hawkesbayfarmersmarket.co.nz/visit-us-napier-urban-farmers-market/"
      ],
      "notes": "Used a temporary venue for most of 2026 and says it is returning to its original spot between Clive and Memorial Squares. Check the exact location.",
      "id": "napier-urban-farmers-market",
      "member": true,
      "website": "https://hawkesbayfarmersmarket.co.nz/visit-us-napier-urban-farmers-market/",
      "facts": [
        "Dogs on leads welcome",
        "Cash at the info stall; many stalls take EFTPOS",
        "Street parking nearby"
      ]
    },
    {
      "name": "Farmers Market Taranaki",
      "region": "Taranaki",
      "town": "New Plymouth",
      "day": "Sunday",
      "time": "9am – 12pm",
      "venue": "Huatoki Plaza, 26 Devon St West",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.npdc.govt.nz/event/E23811D29427",
        "https://www.farmersmarkettaranaki.org.nz/"
      ],
      "notes": "",
      "id": "taranaki-farmers-market",
      "member": true,
      "website": "https://www.farmersmarkettaranaki.org.nz/",
      "facts": [
        "Open 52 weeks a year, rain or shine",
        "Free CBD parking on Sundays",
        "Live local music; mix of EFTPOS and cash stalls"
      ]
    },
    {
      "name": "Whanganui River Markets",
      "region": "Manawatū-Whanganui",
      "town": "Whanganui",
      "day": "Saturday",
      "time": "8:30am – 1pm",
      "venue": "7 Taupō Quay",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.broadsheet.com.au/new-zealand/food-and-drink/article/guide-new-zealands-best-farmers-markets"
      ],
      "notes": "",
      "id": "whanganui-river-market",
      "member": true,
      "website": "https://www.facebook.com/WhanganuiRiverMarkets/",
      "facts": []
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
      "id": "hokowhitu-village-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Feilding Farmers' Market",
      "region": "Manawatū-Whanganui",
      "town": "Feilding",
      "day": "Friday",
      "time": "8:30am – 1pm",
      "venue": "Manchester Square",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://manawatunz.co.nz/events/feilding-farmers-market/",
        "https://www.feildingfarmersmarket.co.nz/"
      ],
      "notes": "",
      "id": "feilding-farmers-market",
      "member": true,
      "website": "https://www.feildingfarmersmarket.co.nz/",
      "facts": [
        "Runs rain, hail or shine",
        "Up to 30 seasonal stallholders",
        "Running for 15+ years; NZ Farmers Market of the Year 2012–2014"
      ]
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
      "id": "harbourside-market",
      "member": false,
      "website": null,
      "facts": []
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
      "id": "hill-street-farmers-market",
      "member": false,
      "website": null,
      "facts": []
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
      "id": "riverbank-market",
      "member": false,
      "website": null,
      "facts": []
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
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.nelsontasman.nz/visit-nelson-tasman/things-to-see-and-do/3031-nelson-farmers-market",
        "https://www.nelsonfarmersmarket.org.nz/"
      ],
      "notes": "The market's own site shows both 8am and 8:30am start times.",
      "id": "nelson-farmers-market",
      "member": true,
      "website": "https://www.nelsonfarmersmarket.org.nz/",
      "facts": [
        "Rain or shine",
        "Next to the Elma Turner Library"
      ]
    },
    {
      "name": "Marlborough Farmers' Market",
      "region": "Marlborough",
      "town": "Blenheim",
      "day": "Sunday",
      "time": "9am – 12pm",
      "venue": "A&P Showgrounds, cnr Alabama & Maxwell Rds",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://MarlboroughNZ.com/explore-marlborough/food-drink/local-markets/",
        "https://www.marlboroughfarmersmarket.org.nz/"
      ],
      "notes": "",
      "id": "marlborough-farmers-market",
      "member": true,
      "website": "https://www.marlboroughfarmersmarket.org.nz/",
      "facts": [
        "Rain or shine",
        "EFTPOS at the info stall",
        "Free stall for community groups and charities"
      ]
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
      "id": "christchurch-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Lyttelton Farmers' Market",
      "region": "Canterbury",
      "town": "Lyttelton",
      "day": "Saturday",
      "time": "10am – 1pm",
      "venue": "London St",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://cityscape-christchurch.co.nz/blog/food-drink/entry/the-freshest-farmers-markets-in-otautahi"
      ],
      "notes": "The website link on the FMNZ directory returns a page-not-found error.",
      "id": "lyttelton-farmers-market",
      "member": true,
      "website": null,
      "facts": []
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
      "id": "south-christchurch-farmers-market",
      "member": false,
      "website": null,
      "facts": []
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
      "id": "timaru-artisan-farmers-market",
      "member": false,
      "website": null,
      "facts": []
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
      "id": "akaroa-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Ashburton District Farmers' Market",
      "region": "Canterbury",
      "town": "Ashburton",
      "day": "Saturday",
      "time": "9am – 12:30pm",
      "venue": "Cnr West & Havelock Sts",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.christchurchnz.com/visit/eat-and-drink/canterbury-farmers-markets-artisan-producers"
      ],
      "notes": "",
      "id": "ashburton-farmers-market",
      "member": true,
      "website": "https://www.facebook.com/ashburtondistrictfarmersmarket/",
      "facts": []
    },
    {
      "name": "Otago Farmers' Market",
      "region": "Otago",
      "town": "Dunedin",
      "day": "Saturday",
      "time": "8am – 12:30pm",
      "venue": "Northern Carpark, Dunedin Railway Station, Anzac Square",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://otagofarmersmarket.org.nz/",
        "https://neatplaces.co.nz/places/dunedin/stay-explore/otago-farmers-market"
      ],
      "notes": "",
      "id": "otago-farmers-market",
      "member": true,
      "website": "https://otagofarmersmarket.org.nz/",
      "facts": [
        "Food-only market, running since March 2003",
        "Market chef cooking demos with samples"
      ]
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
      "id": "oamaru-farmers-market",
      "member": false,
      "website": null,
      "facts": []
    },
    {
      "name": "Southern Farmers' Market",
      "region": "Southland",
      "town": "Invercargill",
      "day": "Sunday",
      "time": "9:30am – 1:30pm",
      "venue": "Invercargill Railway Station, Leven St",
      "status": "listed",
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://lwb.co.nz/content/free-markets/",
        "https://www.southernfarmersmarket.co.nz"
      ],
      "notes": "",
      "id": "southern-farmers-market",
      "member": true,
      "website": "https://www.southernfarmersmarket.co.nz",
      "facts": [
        "Rain or shine, every Sunday"
      ]
    },
    {
      "id": "whangarei-growers-market",
      "name": "Whangārei Growers Market",
      "region": "Northland",
      "town": "Whangārei",
      "day": "Saturday",
      "time": "6am – 10am",
      "venue": "17 Water St",
      "status": "listed",
      "member": true,
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/"
      ],
      "notes": "",
      "website": "https://www.facebook.com/thewhangareigrowersmarket/",
      "facts": []
    },
    {
      "id": "matakana-village-farmers-market",
      "name": "Matakana Village Farmers' Market",
      "region": "Auckland",
      "town": "Matakana",
      "day": "Saturday",
      "time": "8am – 1pm",
      "venue": "2 Matakana Valley Rd",
      "status": "listed",
      "member": true,
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://www.matakanavillage.co.nz/farmers-market"
      ],
      "notes": "",
      "website": "https://www.matakanavillage.co.nz/farmers-market",
      "facts": [
        "Every Saturday"
      ]
    },
    {
      "id": "amberley-farmers-market",
      "name": "Amberley Farmers Market",
      "region": "Canterbury",
      "town": "Amberley",
      "day": "Saturday",
      "time": "9am – 12:30pm",
      "venue": "Outside Hurunui District Council, Carters Rd (SH1)",
      "status": "listed",
      "member": true,
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/",
        "https://amberleyfarmersmarket.org.nz/"
      ],
      "notes": "",
      "website": "https://amberleyfarmersmarket.org.nz/",
      "facts": [
        "Around 33 stallholders",
        "Free parking, toilets nearby, dogs on leads welcome",
        "Celebrating 20 years"
      ]
    },
    {
      "id": "mount-pleasant-farmers-market",
      "name": "Mount Pleasant Farmers' Market",
      "region": "Canterbury",
      "town": "Mount Pleasant",
      "day": "Saturday",
      "time": "9:30am – 12:30pm",
      "venue": "3 McCormacks Bay Rd",
      "status": "listed",
      "member": true,
      "lastChecked": "2026-11-23",
      "sources": [
        "https://www.farmersmarkets.org.nz/find-a-market/"
      ],
      "notes": "",
      "website": "https://www.facebook.com/MtPleasantFarmersMarket/",
      "facts": []
    }
  ],
  "primarySource": "https://www.farmersmarkets.org.nz/find-a-market/"
};
