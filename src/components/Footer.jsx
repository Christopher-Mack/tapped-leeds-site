export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tappedleeds/",
    },
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Untappd",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070707] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="Tapped Leeds"
              className="h-20 w-20 rounded-full"
            />

            <div>
              <h3 className="text-3xl font-black text-amber-400">
                TAPPED
              </h3>

              <p className="mt-2 max-w-sm text-zinc-400">
                Craft beer, stone-baked pizza and proper nights in Leeds city
                centre.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={
                  social.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-bold text-zinc-300 transition hover:border-amber-400/50 hover:bg-amber-400 hover:text-black"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Tapped Leeds</p>
          <p>Website concept by Chris</p>
        </div>
      </div>
    </footer>
  );
}