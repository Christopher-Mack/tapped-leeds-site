import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  function nextImage() {
    setSelectedIndex((current) => (current + 1) % images.length);
  }

  function previousImage() {
    setSelectedIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  }

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="bg-[#0b0b0b] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Gallery
        </p>

        <h2 className="mt-4 text-5xl font-black md:text-7xl">
          The atmosphere speaks for itself.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Craft beer, proper food, great company and one of Leeds&apos;
          favourite places to spend an evening.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt=""
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        <a
          href="https://www.instagram.com/tappedleeds/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-amber-400 px-7 py-4 font-black text-black transition hover:bg-amber-300"
        >
          See more on Instagram →
        </a>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
        >
          <button
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 hover:bg-white/20"
          >
            <X />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-6 rounded-full bg-white/10 p-3 hover:bg-white/20"
          >
            <ChevronLeft />
          </button>

          <img
            onClick={(event) => event.stopPropagation()}
            src={selectedImage}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-[2rem] object-contain"
          />

          <button
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 rounded-full bg-white/10 p-3 hover:bg-white/20"
          >
            <ChevronRight />
          </button>

          <p className="absolute bottom-6 text-sm font-bold text-zinc-400">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}