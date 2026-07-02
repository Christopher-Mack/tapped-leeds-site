import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed right-6 top-24 z-[999] rounded-full border border-emerald-400/30 bg-emerald-400 px-6 py-4 font-black text-black shadow-2xl"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}