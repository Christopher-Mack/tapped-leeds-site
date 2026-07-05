import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MenuCard({ title, subtitle, items, image }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

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
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundImage: image ? `url(${image})` : undefined,
      }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 bg-cover bg-center transition hover:border-amber-400/40"
    >
      <div className="h-full bg-black/70 p-8 transition group-hover:bg-black/60">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
          {subtitle}
        </p>

        <h3 className="mt-4 text-4xl font-black">{title}</h3>

        <div className="mt-8 space-y-5">
          {items.map(([name, price]) => (
            <div
              key={name}
              className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
            >
              <p className="font-semibold text-white">{name}</p>

              <p className="whitespace-nowrap text-lg font-black text-amber-400">
                {price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}