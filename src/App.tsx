import Section from "./components/Section";
import StatRow from "./components/StatRow";
import TagList from "./components/TagList";
import BulletList from "./components/BulletList";
import ProgressBar from "./components/ProgressBar";
import SoulcoreGroupView from "./components/SoulcoreGroup";
import PerformanceTable from "./components/PerformanceTable";
import ImageTag from "./components/ImageTag";
import BossTag from "./components/BossTag";
import OutfitCard from "./components/OutfitCard";

import {
  characterName,
  priceLabel,
  basics,
  store,
  storeInbox,
  skillWheel,
  skillWheelTotal,
  gems,
  gemsTotal,
  bountyTasks,
  bountyTalisman,
  charms,
  outfits,
  auras,
  mounts,
  battlePass,
  bossPoints,
  accesses,
  masteryWeapons,
  soulcores,
  soulcoreTotalMasteries,
  soulcoreTotalExpBonus,
  performance,
  performanceLink,
  sections,
} from "./data/character";

import {
  outfitImages,
  mountImages,
  bossImages,
  weaponImages,
  storeInboxImages,
} from "./data/images";
import { Link } from "react-router-dom";

function TableOfContents() {
  return (
    <nav className="rounded-lg border border-card-border bg-card p-4 md:p-5">
      <h2 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
        Navegação
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 items-center">
        <Link
          to="/items"
          className="text-sm text-zinc-400 transition-colors hover:text-accent"
        >
          Items à Venda
        </Link>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm text-zinc-400 transition-colors hover:text-accent"
          >
            {s.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

function extractItemName(text: string): string {
  const match = text.match(/^(?:\d+x\s+)?(.+)$/);
  return match ? match[1] : text;
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/character.png"
              alt={characterName}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-zinc-100">
                {characterName}
              </h1>
              <p className="text-xs text-zinc-500">
                Knight · 1535 · Lunarian
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-center">
            <span className="text-sm font-bold text-accent">{priceLabel}</span>
            <span className="block text-[10px] text-zinc-500 uppercase">
              BRL
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-4 px-4 py-6">
        <TableOfContents />

        {/* Basics */}
        <Section id="basics" title="Basics">
          <div className="space-y-0">
            {basics.map((b) => (
              <StatRow key={b.label} label={b.label} value={b.value} />
            ))}
          </div>
        </Section>

        {/* Store */}
        <Section id="store" title="Store">
          <BulletList items={store} />
        </Section>

        {/* Store Inbox */}
        <Section id="store-inbox" title="Store Inbox">
          <div className="flex flex-wrap gap-2">
            {storeInbox.map((item) => {
              const name = extractItemName(item);
              return (
                <ImageTag
                  key={item}
                  label={item}
                  src={storeInboxImages[name]}
                />
              );
            })}
          </div>
        </Section>

        {/* Skill Wheel */}
        <Section id="skill-wheel" title="Roda de Habilidades">
          <div className="space-y-0">
            {skillWheel.map((s) => (
              <StatRow key={s.name} label={s.name} value={s.bonus} />
            ))}
          </div>
          <div className="mt-3 rounded border border-accent/20 bg-accent/5 px-4 py-3 text-sm">
            <span className="text-zinc-400">Total: </span>
            <span className="font-bold text-accent">{skillWheelTotal}</span>
          </div>
        </Section>

        {/* Gems */}
        <Section id="gems" title="Gemas">
          <div className="space-y-0">
            {gems.map((g) => (
              <StatRow
                key={g.name}
                label={g.name}
                value={`${g.quantity}x`}
              />
            ))}
          </div>
          <div className="mt-3 rounded border border-accent/20 bg-accent/5 px-4 py-3 text-sm">
            <span className="text-zinc-400">Total: </span>
            <span className="font-bold text-accent">{gemsTotal}</span>
          </div>
        </Section>

        {/* Bounty Tasks & Talisman */}
        <Section id="bounty" title="Bounty Tasks & Talisman">
          <div className="mb-4">
            <StatRow
              label="Preferred List"
              value={bountyTasks.preferredList}
            />
          </div>
          <h3 className="mb-2 text-sm font-semibold text-accent-dim uppercase tracking-wide">
            Bounty Talisman
          </h3>
          <div className="space-y-0">
            {bountyTalisman.map((b) => (
              <StatRow key={b.label} label={b.label} value={b.value} />
            ))}
          </div>
        </Section>

        {/* Charms */}
        <Section id="charms" title="Charms">
          <StatRow label="Charm Points" value={charms.points} />
        </Section>

        {/* Outfits */}
        <Section id="outfits" title="Outfits (+55)">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
            {outfits.map((name) => (
              <OutfitCard key={name} label={name} src={outfitImages[name]} />
            ))}
          </div>
        </Section>

        {/* Auras */}
        <Section id="auras" title="Auras">
          <TagList items={auras} />
        </Section>

        {/* Mounts */}
        <Section id="mounts" title="Montarias (+44)">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
            {mounts.map((name) => (
              <OutfitCard
                key={name}
                label={name}
                src={mountImages[name]}
              />
            ))}
          </div>
        </Section>

        {/* Battle Pass */}
        <Section id="battle-pass" title="Battle Pass">
          <p className="flex items-center gap-2 text-sm text-positive font-medium">
            <span>✓</span> {battlePass}
          </p>
        </Section>

        {/* Boss Points */}
        <Section id="boss-points" title="Boss Points">
          <StatRow label="Pontos" value={bossPoints.total} />
          <h3 className="mt-4 mb-2 text-sm font-semibold text-accent-dim uppercase tracking-wide">
            Raros Completos
          </h3>
          <div className="flex flex-wrap gap-2">
            {bossPoints.rareComplete.map((boss) => (
              <BossTag key={boss} name={boss} src={bossImages[boss]} />
            ))}
          </div>
          <h3 className="mt-4 mb-2 text-sm font-semibold text-accent-dim uppercase tracking-wide">
            Outros com 3 ou 4 kills
          </h3>
          <div className="flex flex-wrap gap-2">
            {bossPoints.bossesWithKills.map((b) => (
              <BossTag
                key={b.name}
                name={b.name}
                src={bossImages[b.name]}
                kills={b.kills}
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-zinc-500 italic">
            {bossPoints.note}
          </p>
        </Section>

        {/* Accesses */}
        <Section id="accesses" title="Acessos">
          <TagList items={accesses} />
        </Section>

        {/* Mastery Weapons */}
        <Section id="mastery-weapons" title="Mastery Weapons">
          <div className="space-y-3">
            {masteryWeapons.map((w) => (
              <ProgressBar
                key={w.name}
                label={w.name}
                level={w.level}
                progress={w.progress}
                imageSrc={weaponImages[w.name]}
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-zinc-500 italic">
            Mastery em outras 14 armas
          </p>
        </Section>

        {/* Soulcores */}
        <Section id="soulcores" title="Soulcores">
          <SoulcoreGroupView
            zones={soulcores}
            totalMasteries={soulcoreTotalMasteries}
            totalExpBonus={soulcoreTotalExpBonus}
          />
        </Section>

        {/* Performance */}
        <Section id="performance" title="Desempenho">
          <PerformanceTable hunts={performance} link={performanceLink} />
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-zinc-600">
          Even Worse — Character For Sale
        </footer>
      </main>
    </div>
  );
}
