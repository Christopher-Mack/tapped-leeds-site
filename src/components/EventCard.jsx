import { motion, useMotionValue, useTransform } from "framer-motion";

export default function EventCard({ date, title, text, image, link = "/booking" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [5, -5]);
  const rotateY = useTransform(x, [-80, 80], [-5, 5]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={link}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundImage: image ? `url(${image})` : undefined,
      }}
      className="group block min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] bg-cover bg-center transition hover:border-amber-400/40"
    >
      <div className="flex h-full min-h-[320px] flex-col justify-end bg-black/70 p-8 transition group-hover:bg-black/55">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
          {date}
        </p>

        <h3 className="mt-6 text-3xl font-black">{title}</h3>

        <p className="mt-4 leading-7 text-zinc-300">{text}</p>

        <p className="mt-6 text-sm font-black uppercase tracking-[0.25em] text-amber-400">
          Book now →
        </p>
      </div>
    </motion.a>
  );
}