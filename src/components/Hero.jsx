import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { settings } from "../data/settings";
import { useMenu } from "../context/MenuContext";

export default function Hero() {
  const { menuItems } = useMenu();

  const featuredItem =
    menuItems?.find((item) => item.featured) || menuItems?.[0] || {
      name: "",
      detail: "",
      price: "",
      tag: "",
      description: "",
    };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.25),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(120,53,15,0.35),transparent_35%)]" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${settings.heroImage}')`,
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-amber-400">
            {settings.businessName}
          </p>

          <div className="flex items-center justify-between gap-8">
            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
              Beer.
              <br />
              Pizza.
              <br />
              Proper nights.
            </h1>

            <div className="hidden lg:block">
              <img
                src="/logo.png"
                alt="Tapped Leeds"
                className="hidden h-56 w-56 object-contain opacity-50 lg:block"
              />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            {settings.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-amber-400 px-7 py-4 font-black text-black transition hover:bg-amber-300"
            >
              Explore Menu
            </a>

            <HashLink
              smooth
              to="/#visit"
              className="rounded-full border border-amber-400/40 px-7 py-4 text-lg font-black text-amber-400 transition hover:bg-amber-400 hover:text-black"
            >
              Find Us
            </HashLink>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-2 gap-8 md:grid-cols-4">
            <Stat number="27" label="Beer Lines" />
            <Stat number="100+" label="Whiskies" />
            <Stat number="7" label="Days Open" />

            <div>
              <p className="text-3xl font-black text-amber-400">★★★★★</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-zinc-400">
                Google Rating
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8, delay: 0.2 },
          }}
          className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur transition duration-500 hover:scale-[1.02]"
        >
          <Link
            to="/menu"
            className="block aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-amber-500 via-orange-900 to-black"
            style={{
              backgroundImage: `url(${settings.heroCardImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex h-full flex-col justify-end bg-black/60 p-8 transition hover:bg-black/50">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                Featured This Week
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Staff pick from the bar.
              </h2>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-black/40 p-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                  Staff Pick
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {featuredItem.name}
                </h3>

                <p className="mt-2 text-zinc-300">{featuredItem.detail}</p>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-3xl font-black text-amber-400">
                    {featuredItem.price}
                  </p>

                  <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
                    {featuredItem.tag}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-zinc-300">
                  {featuredItem.description}
                </p>
              </div>

              <span className="mt-8 inline-flex rounded-full bg-black/50 px-5 py-3 text-sm font-black text-white transition hover:bg-black/70">
                View Full Menu →
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  const numericValue = parseInt(number, 10);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 2 });
    return () => controls.stop();
  }, [count, numericValue]);

  return (
    <div>
      <p className="text-4xl font-black text-amber-400">
        <motion.span>{rounded}</motion.span>
        {number.includes("+") && "+"}
      </p>

      <p className="mt-1 text-sm uppercase tracking-wider text-zinc-400">
        {label}
      </p>
    </div>
  );
}