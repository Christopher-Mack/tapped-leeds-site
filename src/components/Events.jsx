import EventCard from "./EventCard";

export default function Events() {
  return (
    <section id="events" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          What's On
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
          Tap takeovers, late nights, and proper Leeds energy.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <EventCard
            date="Thu"
            title="Tap Takeover"
            text="Guest breweries, new pours, and limited specials."
            image="/gallery3.jpg"
          />

          <EventCard
            date="Fri"
            title="After Work Pints"
            text="City-centre drinks, pizza, and weekend-starting chaos."
            image="/gallery4.jpg"
          />

          <EventCard
            date="Sun"
            title="Slow Sunday"
            text="Laid-back beers, comfort food, and end-of-week reset vibes."
            image="/gallery6.jpg"
          />
        </div>
      </div>
    </section>
  );
}