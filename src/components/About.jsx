import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
            Why Visit Us
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            Everything a good city-centre bar needs.
          </h2>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <InfoCard
              number="01"
              title="Craft Beer"
              text="27 rotating cask & keg lines featuring local breweries and guest favourites."
            />

            <InfoCard
              number="02"
              title="Stone-Baked Pizza"
              text="Fresh pizzas made to order with vegetarian, vegan and gluten-free options."
            />

            <InfoCard
              number="03"
              title="Events"
              text="Tap takeovers, quizzes, live sport and special brewery nights throughout the year."
            />

            <InfoCard
              number="04"
              title="City Centre"
              text="Right on Boar Lane, just a short walk from Leeds Station."
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}