export type ItemCategory =
  | "equipment"
  | "backpack"
  | "decoration"
  | "rare"
  | "other"
  | "toy";

export interface SaleItem {
  name: string;
  quantity: number;
  /** Unit price in kk (1 kk = 1 million). Use decimals for 800k (0.8). Omit for TBD. */
  unitPriceKk?: number;
  category: ItemCategory;
}

export const saleItems: SaleItem[] = [
  // Original items
  { name: "Vampire Silk Slippers", quantity: 2, unitPriceKk: 50, category: "equipment" },
  { name: "Glacialon Backpack", quantity: 3, unitPriceKk: 24, category: "backpack" },
  { name: "Dragon Scale Boots", quantity: 2, unitPriceKk: 45, category: "equipment" },
  { name: "Dark Lord's Cape", quantity: 3, unitPriceKk: 20, category: "equipment" },
  { name: "Reflecting Crown", quantity: 2, unitPriceKk: 40, category: "equipment" },
  { name: "Golden Boots", quantity: 3, unitPriceKk: 4.5, category: "equipment" },
  { name: "Great Shield", quantity: 5, unitPriceKk: 40, category: "equipment" },
  { name: "Thunder Hammer", quantity: 2, unitPriceKk: 400, category: "equipment" },
  { name: "Maimer", quantity: 1, unitPriceKk: 4.5, category: "equipment" },
  { name: "The Calamity", quantity: 1, unitPriceKk: 14.4, category: "equipment" },
  { name: "Great Axe", quantity: 2, unitPriceKk: 1.5, category: "equipment" },
  { name: "Book of Lies", quantity: 3, unitPriceKk: 20, category: "rare" },
  { name: "Guild Bank Backpack", quantity: 1, unitPriceKk: 150, category: "backpack" },
  { name: "Celestius Backpack", quantity: 1, unitPriceKk: 15, category: "backpack" },
  { name: "Skeleton Backpack", quantity: 1, unitPriceKk: 150, category: "backpack" },
  { name: "Infernatus Backpack", quantity: 1, unitPriceKk: 50, category: "backpack" },
  { name: "Moon Backpack", quantity: 14, unitPriceKk: 0.8, category: "backpack" },
  { name: "Raccoon Backpack", quantity: 2, unitPriceKk: 100, category: "backpack" },
  { name: "Haunted Mirror Piece", quantity: 2, unitPriceKk: 100, category: "rare" },
  { name: "Albino Plate", quantity: 1, unitPriceKk: 150, category: "equipment" },
  { name: "Shrunken Head Necklace", quantity: 1, unitPriceKk: 200, category: "equipment" },
  { name: "Horn", quantity: 1, unitPriceKk: 150, category: "rare" },
  { name: "Rubini Special Tapestry", quantity: 1, unitPriceKk: 300, category: "decoration" },
  { name: "Key to Knowledge", quantity: 1, unitPriceKk: 75, category: "rare" },
  { name: "Orshabaal's Brain", quantity: 2, unitPriceKk: 100, category: "rare" },
  { name: "Morgaroth's Heart", quantity: 2, unitPriceKk: 100, category: "rare" },
  // New items
  { name: "Goo Armor", quantity: 1, category: "equipment" },
  { name: "Amazon Shield", quantity: 1, category: "equipment" },
  { name: "Amazon Helmet", quantity: 1, category: "equipment" },
  { name: "Amazon Armor", quantity: 1, category: "equipment" },
  { name: "Wyllas Ticket", quantity: 1, category: "other" },
  { name: "Fur Cap", quantity: 1, category: "equipment" },
  { name: "Sensing Crown", quantity: 1, category: "equipment" },
  { name: "Iron Crown", quantity: 5, unitPriceKk: 50, category: "equipment" },
  { name: "Trapped Lightning", quantity: 4, unitPriceKk: 25, category: "rare" },
  { name: "Triple Bolt Crossbow", quantity: 1, unitPriceKk: 300, category: "equipment" },
  { name: "Glass of Goo", quantity: 2, unitPriceKk: 0.1, category: "other" },
  { name: "Eye of the Storm", quantity: 2, unitPriceKk: 500, category: "equipment" },
  { name: "Furious Flock", quantity: 1, unitPriceKk: 400, category: "equipment" },
  { name: "Robe of the Ice Queen", quantity: 1, unitPriceKk: 300, category: "equipment" },
  { name: "White Dress", quantity: 1, unitPriceKk: 400, category: "equipment" },
  { name: "Social Backpack", quantity: 1, unitPriceKk: 400, category: "backpack" },
  { name: "Instagram Backpack", quantity: 1, unitPriceKk: 500, category: "backpack" },
  { name: "Christmas Backpack", quantity: 1, unitPriceKk: 2000, category: "backpack" },
  // POI boss items
  { name: "Demon Armor", quantity: 1, category: "equipment" },
  // Additional items
  { name: "Green Demon Legs", quantity: 1, unitPriceKk: 1000, category: "equipment" },
  { name: "Green Demon Helmet", quantity: 1, unitPriceKk: 800, category: "equipment" },
  { name: "Molten Plate", quantity: 1, unitPriceKk: 500, category: "equipment" },
  { name: "Key 0000", quantity: 1, unitPriceKk: 500, category: "other" },
  { name: "Test Vodoo Doll", quantity: 1, unitPriceKk: 500, category: "other" },
  { name: "Green Demon Slippers", quantity: 1, unitPriceKk: 500, category: "equipment" },
  { name: "Yellow Rose", quantity: 1, unitPriceKk: 150, category: "decoration" },
  { name: "Moon Mirror", quantity: 1, unitPriceKk: 100, category: "other" },
  { name: "Yeti Doll", quantity: 1, unitPriceKk: 800, category: "toy" },
  { name: "Hammer of Prophecy", quantity: 1, unitPriceKk: 400, category: "equipment" },
  { name: "Mythril Axe", quantity: 1, unitPriceKk: 400, category: "equipment" },
  { name: "Lucky Pig", quantity: 1, unitPriceKk: 500, category: "decoration" },
  // Roulette Coins (all seasons)
  { name: "Roulette Coin (S1)", quantity: 1, category: "other" },
  { name: "Roulette Coin (S2)", quantity: 1, category: "other" },
  { name: "Roulette Coin (S3)", quantity: 1, category: "other" },
  { name: "Roulette Coin (S4)", quantity: 1, category: "other" },
  { name: "Roulette Coin (S5)", quantity: 1, category: "other" },
  { name: "Roulette Coin (S6)", quantity: 1, category: "other" },
  // Rubini Toys
  { name: "#01 Magician Rubini", quantity: 1, category: "toy" },
  { name: "#02 Demonic Kid Rubini", quantity: 1, category: "toy" },
  { name: "#03 Gamemaster Rubini", quantity: 1, category: "toy" },
  { name: "#04 King Rubini", quantity: 1, category: "toy" },
  { name: "#05 Gladiator Rubini", quantity: 1, category: "toy" },
  { name: "#06 Elysara Rubini", quantity: 1, category: "toy" },
  { name: "#07 Sol'Zarith Rubini", quantity: 1, category: "toy" },
  { name: "#08 Flame Reaper Rubini", quantity: 1, category: "toy" },
  { name: "#09 Draconic Rubini", quantity: 1, category: "toy" },
  { name: "#10 Crimsonevil Rubini", quantity: 1, category: "toy" },
  { name: "#11 Pumpkin Rubini", quantity: 1, category: "toy" },
  { name: "#12 Wisdom Rubini", quantity: 1, category: "toy" },
  { name: "#13 Ghost Rubini", quantity: 1, category: "toy" },
  { name: "#14 Frostbell Rubini", quantity: 1, category: "toy" },
  { name: "#15 Frostreaper Rubini", quantity: 1, category: "toy" },
  { name: "#16 Frozen Vulpes Rubini", quantity: 1, category: "toy" },
  { name: "#17 King Highlord Rubini", quantity: 1, category: "toy" },
  { name: "#18 Queen Highlady Rubini", quantity: 1, category: "toy" },
  { name: "#19 Royal Vanguard Rubini", quantity: 1, category: "toy" },
  { name: "#20 Stonehorn Rubini", quantity: 1, category: "toy" },
];
