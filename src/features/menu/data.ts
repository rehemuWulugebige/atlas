import type { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "walnut-halwa",
    name: "Walnut halwa",
    tagline: "slow-cooked semolina, cardamom-warm",
    description:
      "A traditional Uyghur sweet — semolina cooked low and slow with butter until deeply amber, folded with toasted walnuts and a whisper of cardamom. Dense, rich, meant to be sliced like a confection.",
    ingredients: "Semolina, butter, sugar, walnuts, cardamom, vanilla",
    allergens: ["wheat", "dairy", "tree nuts (walnut)"],
    price: "$14",
    unit: "per box",
    photoUrl: null,
  },
  {
    id: "honey-baklava",
    name: "Honey baklava",
    tagline: "forty layers, set in honey syrup",
    description:
      "Hand-stretched phyllo brushed with butter and layered with crushed walnuts. Baked until golden, then bathed in warm honey-lemon syrup that soaks slowly through every sheet.",
    ingredients: "Phyllo dough, walnuts, butter, honey, sugar, lemon",
    allergens: ["wheat", "dairy", "tree nuts (walnut)"],
    price: "$18",
    unit: "per tray",
    photoUrl: null,
  },
  {
    id: "sangza",
    name: "Sangza",
    tagline: "crisp twisted spirals, lightly sweet",
    description:
      "A festival treat across Central Asia. Fine dough rolled into nested coils and fried until shatteringly crisp. Served plain or dusted with sugar.",
    ingredients: "Flour, eggs, milk, butter, oil, salt, sugar",
    allergens: ["wheat", "eggs", "dairy"],
    price: "$10",
    unit: "per dozen",
    photoUrl: null,
  },
  {
    id: "rose-water-cake",
    name: "Rose-water cake",
    tagline: "honeyed semolina with pistachio and rose",
    description:
      "Semolina cake soaked in rose-water syrup while still warm, finished with crushed pistachios. Floral but not perfumed — the rose recedes into honey on the second bite.",
    ingredients: "Semolina, yogurt, sugar, eggs, butter, rose water, pistachios",
    allergens: ["wheat", "dairy", "eggs", "tree nuts (pistachio)"],
    price: "$22",
    unit: "per whole cake",
    photoUrl: null,
  },
  {
    id: "walnut-girde",
    name: "Walnut girde",
    tagline: "small round breads, walnut filling",
    description:
      "Soft enriched dough wrapped around a paste of crushed walnuts, butter, and sugar. Baked just past golden, finished with sesame across the top. Travels well, keeps for days.",
    ingredients: "Flour, eggs, milk, butter, sugar, walnuts, sesame seeds",
    allergens: ["wheat", "dairy", "eggs", "tree nuts (walnut)", "sesame"],
    price: "$8",
    unit: "per four",
    photoUrl: null,
  },
  {
    id: "sesame-brittle",
    name: "Sesame brittle",
    tagline: "toasted sesame in honey caramel",
    description:
      "Sesame seeds toasted to deep amber, then bound in honey caramel with a pinch of sea salt. Snaps clean, keeps for weeks in an airtight tin.",
    ingredients: "Sesame seeds, honey, sugar, butter, sea salt",
    allergens: ["dairy", "sesame"],
    price: "$9",
    unit: "per box",
    photoUrl: null,
  },
];
