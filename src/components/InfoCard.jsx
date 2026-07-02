import { motion, useMotionValue, useTransform } from "framer-motion";

export default function InfoCard({ number, title, text }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
    >
      <p className="text-sm font-black text-amber-400">{number}</p>
      <h3 className="mt-10 text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-400">{text}</p>
    </motion.div>
  );
}