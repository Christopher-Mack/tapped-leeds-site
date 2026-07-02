export default function EventCard({ date, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:bg-white/[0.07]">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
        {date}
      </p>
      <h3 className="mt-6 text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-400">{text}</p>
    </div>
  );
}