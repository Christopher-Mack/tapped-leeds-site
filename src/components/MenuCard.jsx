export default function MenuCard({ title, subtitle, items }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 transition hover:border-amber-400/40 hover:bg-black/60">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
        {subtitle}
      </p>

      <h3 className="mt-4 text-3xl font-black">{title}</h3>

      <div className="mt-8 space-y-5">
        {items.map(([name, price]) => (
          <div
            key={name}
            className="flex items-center justify-between border-b border-white/10 pb-4"
          >
            <p className="font-semibold">{name}</p>
            <p className="text-zinc-400">{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}