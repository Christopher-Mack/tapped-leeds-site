export default function Reviews() {
  const reviews = [
    {
      name: "Tripadvisor reviewer",
      text: "Fantastic craft beer bar with a huge interior, strong atmosphere, and plenty of seating.",
    },
    {
      name: "Tripadvisor reviewer",
      text: "Good beer choice, served well, with friendly bar staff.",
    },
    {
      name: "Facebook reviewers",
      text: "92% recommend Tapped Leeds across more than 1,500 reviews.",
    },
    {
      name: "Google reviewer",
      text: "Great selection of beers and a really relaxed city-centre atmosphere.",
    },
    {
      name: "Google reviewer",
      text: "Perfect spot for pizza, drinks and catching up with friends after work.",
    },
    {
      name: "Google reviewer",
      text: "Friendly staff, good drinks, and a proper Leeds pub feel.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Reviews
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-7xl">
          Loved by the Leeds beer community.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A city-centre favourite for craft beer, pizza and proper nights out.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.text}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-lg font-black text-amber-400">★★★★★</p>

              <p className="mt-6 leading-7 text-zinc-300">
                “{review.text}”
              </p>

              <p className="mt-8 font-black text-white">{review.name}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/search?q=Tapped+Leeds+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-amber-400 px-7 py-4 font-black text-black transition hover:bg-amber-300"
        >
          Read more reviews →
        </a>
      </div>
    </section>
  );
}