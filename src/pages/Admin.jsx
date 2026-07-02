export default function Admin() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Admin Dashboard
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
          Manage the site from one place.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AdminCard title="Menu Manager" text="Update beers, pizzas, prices, tags and featured items." />
          <AdminCard title="Events Manager" text="Add tap takeovers, quizzes, live music and private events." />
          <AdminCard title="Bookings" text="View table requests, party sizes, dates and customer notes." />
          <AdminCard title="Gallery" text="Upload new venue, food, beer and event photos." />
          <AdminCard title="Opening Hours" text="Change regular hours, bank holidays and special closures." />
          <AdminCard title="Reviews" text="Feature selected customer reviews and update review links." />
        </div>
      </div>
    </section>
  );
}

function AdminCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.07]">
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-4 leading-7 text-zinc-400">{text}</p>
    </div>
  );
}