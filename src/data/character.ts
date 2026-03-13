export const characterName = "Even Worse";
export const priceLabel = "R$ 13.000,00";

export const basics = [
  { label: "Level", value: "1.536" },
  { label: "Sword", value: "135" },
  { label: "Club", value: "127" },
  { label: "Shielding", value: "125" },
  { label: "Loyalty", value: "+9" },
  { label: "VIP", value: "1.500 dias" },
  { label: "Exalted Dust", value: "Max" },
  { label: "Charm Expansion", value: "✓" },
  { label: "Linked Tasks", value: "✓" },
];

export const store = [
  "Permanent Weekly Task Expansion",
  "Permanent Prey Slots",
  "2x Hirelings completos",
];

export const storeInbox = [
  "2x Podium of Tenacity",
  "3x Podium of Renown",
  "2x Podium of Vigour",
  "Rubini Balloon",
];

export interface SkillWheelEntry {
  name: string;
  bonus: string;
}

export const skillWheel: SkillWheelEntry[] = [
  { name: "Revised Promotion Scroll", bonus: "+9" },
  { name: "Extended Promotion Scroll", bonus: "+13" },
  { name: "Abridged Promotion Scroll", bonus: "+3" },
  { name: "Basic Promotion Scroll", bonus: "+5" },
  { name: "Advanced Promotion Scroll", bonus: "+20" },
  { name: "Hunting Task Shop", bonus: "+16" },
  { name: "Gemas", bonus: "+18/69" },
  { name: "Quest do Monk", bonus: "+10" },
];

export const skillWheelTotal = "+94";

export interface Gem {
  name: string;
  quantity: number;
}

export const gems: Gem[] = [
  { name: "CD Amp Kor Nv. 4", quantity: 3 },
  { name: "Dano Amp Kor Nv. 4", quantity: 4 },
  { name: "Exori Gran Nv. 4", quantity: 1 },
];

export const gemsTotal = "18 gemas Nv. 4";

export const bountyTasks = {
  preferredList: "2 níveis liberados",
};

export const bountyTalisman = [
  { label: "Damage Against Creatures", value: "5%" },
  { label: "Life Leech Against Creatures", value: "4%" },
  { label: "More Loot", value: "2.5%" },
  { label: "Chance for Double Bestiary", value: "8%" },
  { label: "Available Points", value: "414" },
];

export const charms = {
  points: "9.912 pontos",
};

export const outfits = [
  "Ferumbras Hat",
  "Elementalist",
  "Golden Outfit",
  "Retro Citizen",
  "Gladiator",
  "Nordic Santa",
  "King Highlord",
];

export const auras = ["Frozen", "Crimsonevil", "Sol'Zarith"];

export const mounts = [
  "Rift Runner",
  "Neon Sparkid",
  "Fleeting Knowledge",
  "Caped Snowman",
  "Singeing Steed",
  "Phantasmal Jade",
  "Spirit of Purity",
  "Frozen Vulpes",
  "Frostlight Sleigh",
  "Crimson Stonehorn",
  "Mystic Stonehorn",
  "Radiant Stonehorn",
];

export const battlePass = "Todos completos";

export const bossPoints = {
  total: "4.990 pontos",
  rareComplete: [
    "Arachir The Ancient One",
    "Burter",
    "Diblis The Fair",
    "Flamecaller",
    "High Templar Cobras",
    "Mahateb",
    "Oodok Witchmaster",
    "The Evil Eye",
    "Last Lore Keeper",
    "The Manhunter",
    "The Mean Masher",
    "Willi Wasp",
    "Yaga the Crone",
    "Zarabustor",
    "Zevelon Duskbringer",
  ],
  note: "Vários outros com 3 ou 4 kills.",
};

export const accesses = [
  "Vladurk",
  "Arbalizoth",
  "Last Ferumbras",
  "Last GT",
];

export interface MasteryWeapon {
  name: string;
  level: number;
  progress?: number;
}

export const masteryWeapons: MasteryWeapon[] = [
  { name: "Grand Sanguine Blade", level: 7 },
  { name: "Crypt Slicer", level: 6, progress: 80 },
  { name: "Grand Sanguine Razor", level: 6, progress: 80 },
  { name: "Sanguine Razor", level: 6 },
  { name: "Soulshredder", level: 6 },
  { name: "Sanguine Blade", level: 5 },
  { name: "Soulcutter", level: 5 },
];

export interface SoulcoreZone {
  zone: string;
  groups: SoulcoreGroup[];
}

export interface SoulcoreGroup {
  name: string;
  current: number;
  total: number;
}

export const soulcores: SoulcoreZone[] = [
  {
    zone: "Soulwar",
    groups: [
      { name: "Ebb and Flow", current: 4, total: 4 },
      { name: "Rotten Wasteland", current: 3, total: 3 },
      { name: "Claustrophobic Inferno", current: 3, total: 3 },
      { name: "Furious Crater", current: 3, total: 3 },
      { name: "Dark Thais", current: 6, total: 6 },
    ],
  },
  {
    zone: "Rotten Blood",
    groups: [
      { name: "Jaded Roots", current: 4, total: 4 },
      { name: "Darklight", current: 5, total: 5 },
      { name: "Putrefactory", current: 4, total: 4 },
      { name: "Gloom Pillar", current: 4, total: 4 },
    ],
  },
  {
    zone: "Gnomprona",
    groups: [
      { name: "Carrinho 1", current: 5, total: 5 },
      { name: "Carrinho 2", current: 5, total: 5 },
      { name: "Carrinho 3", current: 5, total: 5 },
    ],
  },
  {
    zone: "Outros",
    groups: [{ name: "Unhollowed Crypt", current: 2, total: 3 }],
  },
];

export const soulcoreTotalMasteries = 228;
export const soulcoreTotalExpBonus = "4%";

export interface HuntPerformance {
  label: string;
  rawExp: string;
  profit: string;
}

export const performance: HuntPerformance[] = [
  { label: "Inner Crypt", rawExp: "14.5kk/h", profit: "1.2kk/h" },
  { label: "Pumin -1", rawExp: "8.5kk/h", profit: "4.5kk/h" },
  { label: "DT Seal", rawExp: "7kk/h", profit: "3.5kk/h" },
  { label: "Energy Library", rawExp: "9.4kk/h", profit: "4.4kk/h" },
  { label: "Cobra Bastion", rawExp: "11kk/h", profit: "2.3kk/h" },
  { label: "Verminor Seal", rawExp: "9.9kk/h", profit: "3.6kk/h" },
];

export const performanceLink =
  "https://hunts.rubinot.app/characters/Even%20Worse";

export interface SectionDef {
  id: string;
  title: string;
}

export const sections: SectionDef[] = [
  { id: "basics", title: "Basics" },
  { id: "store", title: "Store" },
  { id: "store-inbox", title: "Store Inbox" },
  { id: "skill-wheel", title: "Roda de Habilidades" },
  { id: "gems", title: "Gemas" },
  { id: "bounty", title: "Bounty Tasks & Talisman" },
  { id: "charms", title: "Charms" },
  { id: "outfits", title: "Outfits" },
  { id: "auras", title: "Auras" },
  { id: "mounts", title: "Montarias" },
  { id: "battle-pass", title: "Battle Pass" },
  { id: "boss-points", title: "Boss Points" },
  { id: "accesses", title: "Acessos" },
  { id: "mastery-weapons", title: "Mastery Weapons" },
  { id: "soulcores", title: "Soulcores" },
  { id: "performance", title: "Desempenho" },
];
