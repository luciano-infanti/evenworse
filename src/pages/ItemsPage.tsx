import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { saleItems } from "../data/items";
import { itemImages, PLACEHOLDER_DOT } from "../data/images";

const SOLD_ITEMS = new Set([
  "Instagram Backpack",
  "Green Demon Helmet",
  "Green Demon Slippers",
  "Green Demon Legs",
  "Triple Bolt Crossbow",
]);

function formatPrice(kk: number): string {
  const rounded = Math.round(kk * 100) / 100;
  if (rounded >= 1) return `${rounded}kk`;
  return `${Math.round(rounded * 1000)}k`;
}

function ItemsPage() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    let items = saleItems;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter((i) => i.name.toLowerCase().includes(q));
    }

    return [...items].sort((a, b) => {
      const priceA = a.unitPriceKk ?? -1;
      const priceB = b.unitPriceKk ?? -1;
      return priceB - priceA;
    });
  }, [search]);

  const grandTotal = useMemo(() => {
    const sum = filteredItems.reduce(
      (acc, i) =>
        i.unitPriceKk != null ? acc + i.quantity * i.unitPriceKk : acc,
      0
    );
    return Math.round(sum * 100) / 100;
  }, [filteredItems]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="text-sm text-zinc-400 transition-colors hover:text-accent"
          >
            ← Character
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold text-zinc-100">Items à Venda</h1>

        <div className="mb-6">
          <input
            type="search"
            placeholder="Buscar item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-card-border bg-card">
          <table className="w-full table-fixed">
            <colgroup>
              <col style={{ width: 64 }} />
              <col />
              <col style={{ width: 56 }} />
              <col style={{ width: 72 }} />
              <col style={{ width: 72 }} />
            </colgroup>
            <thead>
              <tr className="border-b border-card-border text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <th className="p-2 sm:p-3"></th>
                <th className="p-2 sm:p-3">Item</th>
                <th className="p-2 sm:p-3 text-right">Qtd</th>
                <th className="p-2 sm:p-3 text-right whitespace-nowrap">Preço</th>
                <th className="p-2 sm:p-3 text-right whitespace-nowrap">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const hasPrice = item.unitPriceKk != null;
                const total = hasPrice ? item.quantity * item.unitPriceKk! : 0;
                const isSold = SOLD_ITEMS.has(item.name);
                return (
                  <tr
                    key={item.name}
                    className="border-b border-card-border/50 transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="p-2 sm:p-3">
                      <img
                        src={itemImages[item.name] || PLACEHOLDER_DOT}
                        alt={item.name}
                        className={`h-14 w-14 shrink-0 object-contain ${isSold ? "grayscale opacity-80" : ""}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </td>
                    <td className="min-w-0 max-w-0 p-2 sm:p-3">
                      <span
                        className={`block truncate text-sm ${isSold ? "line-through text-zinc-500" : "text-zinc-200"}`}
                        title={item.name}
                      >
                        {item.name}
                      </span>
                    </td>
                    <td
                      className={`whitespace-nowrap p-2 sm:p-3 text-right font-mono text-sm ${isSold ? "line-through text-zinc-500" : "text-zinc-400"}`}
                    >
                      {item.quantity}x
                    </td>
                    <td
                      className={`whitespace-nowrap p-2 sm:p-3 text-right font-mono text-sm ${isSold ? "line-through text-zinc-500" : "text-zinc-400"}`}
                    >
                      {hasPrice ? formatPrice(item.unitPriceKk!) : "TBD"}
                    </td>
                    <td
                      className={`whitespace-nowrap p-2 sm:p-3 text-right font-mono text-sm font-medium ${isSold ? "line-through text-zinc-500" : "text-accent"}`}
                    >
                      {hasPrice ? formatPrice(total) : "TBD"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-right">
          <span className="text-sm text-zinc-400">Total: </span>
          <span className="text-lg font-bold text-accent">
            {formatPrice(grandTotal)}
          </span>
        </div>
      </main>
    </div>
  );
}

export default ItemsPage;
