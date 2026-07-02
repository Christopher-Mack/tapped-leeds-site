export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <h3 className="text-3xl font-black text-amber-400">
            TAPPED
          </h3>

          <p className="mt-3 max-w-sm text-zinc-400">
            Craft beer, stone-baked pizza and proper nights in Leeds city
            centre.
          </p>
        </div>

        <div className="flex gap-8 text-zinc-400">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Untappd</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Tapped Leeds • Website concept by Chris
      </div>
    </footer>
  );
}