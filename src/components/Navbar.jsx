import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Menu", to: "/menu" },
    { label: "Events", to: "/#events" },
    { label: "Gallery", to: "/#gallery" },
    { label: "Visit", to: "/#visit" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(to) {
    setOpen(false);

    if (to.includes("#")) {
      const id = to.split("#")[1];

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 px-6 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 backdrop-blur transition-all duration-300 ${
          scrolled
            ? "border-white/20 bg-black/80 py-2 shadow-2xl"
            : "border-white/10 bg-black/50 py-3"
        }`}
      >
        <p className="font-black tracking-widest text-amber-400">TAPPED</p>

        <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/booking"
          className="hidden rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-amber-300 md:block"
        >
          Book a Table
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur md:hidden">
          <div className="flex flex-col gap-5 text-zinc-300">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/booking"
              className="rounded-full bg-amber-400 px-5 py-3 text-center font-bold text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}