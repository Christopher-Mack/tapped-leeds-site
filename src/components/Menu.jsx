import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section id="menu" className="px-6 py-24 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Food & Drinks
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
          Fresh pours, hot pizza, no faff.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <MenuCard
            title="On The Bar"
            subtitle="Craft beer, cask, keg, bottles & cans"
            items={[
              ["Rotating Cask Ale", "From £4.80"],
              ["Craft Keg Pint", "From £5.80"],
              ["House Lager", "From £5.20"],
              ["Guest Cans & Bottles", "From £4.50"],
            ]}
          />

          <MenuCard
            title="From The Kitchen"
            subtitle="Stone-baked pizzas & proper bar food"
            items={[
              ["Margherita Pizza", "£10.50"],
              ["Pepperoni Pizza", "£12.50"],
              ["Vegan Special", "£12.00"],
              ["Garlic Bread", "£5.50"],
            ]}
          />
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex rounded-full bg-amber-400 px-7 py-4 font-black text-black transition hover:bg-amber-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}