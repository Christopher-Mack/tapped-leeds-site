export default function MenuSidebar({
  items,
  selectedIndex,
  onSelect,
  onAddItem,
}) {
  return (
    <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Menu
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            {items.length} items
          </p>
        </div>

        <button
          onClick={onAddItem}
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-black text-black transition hover:bg-emerald-400"
        >
          + Add
        </button>
      </div>

      <div className="mt-6 max-h-[70vh] space-y-3 overflow-y-auto pr-2">
        {items.map((item, index) => (
          <button
            key={`${item.name}-${index}`}
            onClick={() => onSelect(index)}
            className={`w-full rounded-2xl p-4 text-left transition ${
              selectedIndex === index
                ? "bg-amber-400 text-black"
                : "bg-black/40 text-zinc-300 hover:bg-white/10"
            }`}
          >
            <p className="font-black">{item.name}</p>
            <p className="text-sm opacity-70">{item.category}</p>
          </button>
        ))}
      </div>
    </aside>
  );
}