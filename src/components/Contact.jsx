export default function Contact() {
  return (
    <section id="visit" className="px-6 py-28 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
            Find Us
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Right in the heart of Leeds.
          </h2>

          <div className="mt-8 space-y-4 text-zinc-300">
            <p>📍 51 Boar Lane, Leeds, LS1 5EL</p>
            <p>🕒 Mon–Thu: 12pm–11pm</p>
            <p>🕒 Fri–Sat: 11am–12am</p>
            <p>🕒 Sun: 12pm–11pm</p>
            <p>☎️ 0113 244 1953</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
          <iframe
            title="Tapped Leeds Map"
            src="https://www.google.com/maps?q=Tapped%20Leeds&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}