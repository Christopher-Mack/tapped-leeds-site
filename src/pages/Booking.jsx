import { useState } from "react";

const steps = ["Guests", "Date", "Time", "Details", "Done"];

const times = [
  { time: "17:30", available: true },
  { time: "18:00", available: true },
  { time: "18:30", available: false },
  { time: "19:00", available: true },
  { time: "19:30", available: true },
  { time: "20:00", available: false },
];

function getToday() {
  return new Date().toISOString().split("T")[0];
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(getToday());
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  function nextStep() {
    setError("");

    if (step === 2 && !date) {
      setError("Please choose a date.");
      return;
    }

    if (step === 3 && !time) {
      setError("Please choose a time.");
      return;
    }

    if (step === 4) {
      if (!details.name || !details.email || !details.phone) {
        setError("Please add your name, email and phone number.");
        return;
      }
    }

    setStep((current) => Math.min(current + 1, 5));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  }

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-36 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_420px]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
            Book a Table
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
            Let’s get your table sorted.
          </h1>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <Stepper currentStep={step} />

            {error && (
              <div className="mt-8 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 font-bold text-red-300">
                {error}
              </div>
            )}

            <div className="mt-10">
              {step === 1 && (
                <div>
                  <h2 className="text-4xl font-black">How many guests?</h2>

                  <div className="mt-8 flex items-center gap-5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="h-14 w-14 rounded-full border border-white/10 text-2xl hover:bg-white/10"
                    >
                      -
                    </button>

                    <p className="text-5xl font-black text-amber-400">
                      {guests}
                    </p>

                    <button
                      type="button"
                      onClick={() => setGuests(guests + 1)}
                      className="h-14 w-14 rounded-full border border-white/10 text-2xl hover:bg-white/10"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-4xl font-black">Choose a date</h2>

                  <input
                    type="date"
                    value={date}
                    min={getToday()}
                    onChange={(event) => setDate(event.target.value)}
                    className="mt-8 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none focus:border-amber-400"
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-4xl font-black">Pick a time</h2>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {times.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => setTime(slot.time)}
                        className={`rounded-full px-5 py-3 font-bold transition ${
                          !slot.available
                            ? "cursor-not-allowed border border-white/5 bg-white/[0.03] text-zinc-600 line-through"
                            : time === slot.time
                            ? "bg-amber-400 text-black"
                            : "border border-white/10 bg-black/40 text-zinc-300 hover:bg-white/10"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-zinc-500">
                    Greyed out times are unavailable.
                  </p>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-4xl font-black">Your details</h2>

                  <div className="mt-8 grid gap-4">
                    <input
                      placeholder="Name *"
                      value={details.name}
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-400"
                    />

                    <input
                      placeholder="Email *"
                      type="email"
                      value={details.email}
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-400"
                    />

                    <input
                      placeholder="Phone *"
                      type="tel"
                      value={details.phone}
                      onChange={(e) =>
                        setDetails({ ...details, phone: e.target.value })
                      }
                      className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-400"
                    />

                    <textarea
                      placeholder="Notes, allergies, accessibility..."
                      rows="4"
                      value={details.notes}
                      onChange={(e) =>
                        setDetails({ ...details, notes: e.target.value })
                      }
                      className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-amber-400"
                    />
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-5xl font-black text-amber-400">
                    You’re all set.
                  </h2>

                  <p className="mt-6 text-zinc-300">
                    Booking request ready for {date} at {time} for {guests}{" "}
                    guests.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-10 flex justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-full border border-white/10 px-6 py-3 font-bold hover:bg-white/10"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-full bg-amber-400 px-8 py-3 font-black text-black hover:bg-amber-300"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setGuests(2);
                    setDate(getToday());
                    setTime("");
                    setError("");
                    setDetails({
                      name: "",
                      email: "",
                      phone: "",
                      notes: "",
                    });
                  }}
                  className="rounded-full bg-amber-400 px-8 py-3 font-black text-black hover:bg-amber-300"
                >
                  Make Another Booking
                </button>
              )}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">Booking Summary</h2>

          <div className="mt-8 space-y-4 text-zinc-300">
            <p>👥 Guests: {guests}</p>
            <p>📅 Date: {date || "Not selected"}</p>
            <p>🕒 Time: {time || "Not selected"}</p>
            <p>👤 Name: {details.name || "Not added"}</p>
            <p>📍 51 Boar Lane, Leeds</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stepper({ currentStep }) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {steps.map((stepName, index) => {
          const stepNumber = index + 1;
          const active = currentStep >= stepNumber;

          return (
            <div key={stepName}>
              <div
                className={`h-2 rounded-full transition ${
                  active ? "bg-amber-400" : "bg-white/10"
                }`}
              />
              <p
                className={`mt-3 text-xs font-bold uppercase tracking-wider ${
                  active ? "text-amber-400" : "text-zinc-600"
                }`}
              >
                {stepName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}