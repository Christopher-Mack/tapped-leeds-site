import { useState } from "react";
import { X } from "lucide-react";
import { categories } from "../data/menu";
import { useMenu } from "../context/MenuContext";

export default function MenuPage() {
  const { menuItems } = useMenu();
  const featuredItem = menuItems.find((item) => item.featured);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.detail.toLowerCase().includes(search.toLowerCase()) ||
      item.tag.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Food & Drink
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
          Craft beer, stone-baked pizza, and everything in between.
        </h1>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-amber-400 text-black"
                    : "border border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search menu..."
            className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-amber-400"
          />
        </div>
       {featuredItem && (
  <button
    onClick={() => setSelectedItem(featuredItem)}
    className="mt-12 w-full rounded-[2rem] border border-amber-400/30 bg-amber-400/10 p-8 text-left transition hover:-translate-y-1 hover:bg-amber-400/15"
  >
    <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
      Featured Item
    </p>

    <h2 className="mt-4 text-4xl font-black">{featuredItem.name}</h2>

    <p className="mt-3 text-zinc-300">{featuredItem.detail}</p>

    <p className="mt-6 inline-flex rounded-full bg-amber-400 px-5 py-2 font-black text-black">
      {featuredItem.price}
    </p>
  </button>
)}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {filteredItems.map((item) => (
            <button
              key={`${item.category}-${item.name}`}
              onClick={() => setSelectedItem(item)}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-black">{item.name}</h2>
                  <p className="mt-3 leading-7 text-zinc-400">{item.detail}</p>
                </div>

                <p className="whitespace-nowrap rounded-full bg-black/40 px-4 py-2 text-sm font-bold text-amber-300">
                  {item.price}
                </p>
              </div>

              <p className="mt-6 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-zinc-400">
                {item.tag}
              </p>
            </button>
          ))}
          
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute inset-0 h-full w-full"
            aria-label="Close menu item"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-white/10 bg-[#080808] p-8 shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="rounded-full bg-white/10 p-3 hover:bg-white/20"
            >
              <X />
            </button>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
              {selectedItem.category}
            </p>

            <h2 className="mt-4 text-5xl font-black">{selectedItem.name}</h2>
            <p className="mt-4 text-xl text-zinc-300">{selectedItem.detail}</p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                Description
              </p>
              <p className="mt-4 leading-8 text-zinc-300">
                {selectedItem.description}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Price
                </p>
                <p className="mt-2 text-2xl font-black text-amber-400">
                  {selectedItem.price}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Tag
                </p>
                <p className="mt-2 text-2xl font-black text-amber-400">
                  {selectedItem.tag}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                Pairs well with
              </p>
              <p className="mt-3 text-2xl font-black">
                {selectedItem.pairsWith}
              </p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}