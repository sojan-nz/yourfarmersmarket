// Directory data. Everything here is PLACEHOLDER until real markets and stalls are researched.
// To add a photo, set `photo: "images/name.jpg"` on a stall.
window.DIRECTORY = {
  markets: [
    {
      id: "pilot-market",
      name: "Pilot Market",
      day: "Saturdays",
      time: "8am – 12pm",
      location: "Location to be confirmed",
      blurb: "Our first market. Real stallholders and details land here after the first visit."
    }
  ],
  stalls: [
    { name: "Placeholder Orchard", market: "pilot-market", category: "Fruit & veg",
      sells: "Heirloom apples, plums, seasonal fruit",
      brief: "Third-generation growers. Replace this with two honest sentences about who they are and why people queue for them.",
      tags: ["Spray-free", "Family run"], sponsored: true },
    { name: "Placeholder Bakehouse", market: "pilot-market", category: "Bakery",
      sells: "Long-ferment sourdough, seeded loaves",
      brief: "Baked at 3am, sold by 8. Short brief about the baker goes here.",
      tags: ["Small batch"], sponsored: false },
    { name: "Placeholder Hives", market: "pilot-market", category: "Pantry",
      sells: "Raw honey, comb, beeswax candles",
      brief: "One beekeeper, forty hives. Tell the story in a line or two.",
      tags: ["Raw", "Local"], sponsored: false },
    { name: "Placeholder Eggs & Co", market: "pilot-market", category: "Meat & eggs",
      sells: "Free-range eggs, pastured pork",
      brief: "Eggs still warm from the morning. A couple of sentences about the farm.",
      tags: ["Free range"], sponsored: false },
    { name: "Placeholder Ferments", market: "pilot-market", category: "Pantry",
      sells: "Kimchi, kraut, kombucha",
      brief: "Made in a garage, sold out by ten. Brief goes here.",
      tags: ["Small batch", "Vegan"], sponsored: false },
    { name: "Placeholder Blooms", market: "pilot-market", category: "Flowers",
      sells: "Cut flowers, dried bunches",
      brief: "Picked yesterday, bunched this morning. Brief goes here.",
      tags: ["Seasonal"], sponsored: false }
  ]
};
