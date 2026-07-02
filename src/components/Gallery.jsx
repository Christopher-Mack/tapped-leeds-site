import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section id="gallery"className="px-6 py-28 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
          Gallery
        </p>

        <h2 className="mt-4 text-5xl font-black">
          The atmosphere speaks for itself.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Craft beer, proper food, great company and one of Leeds&apos;
          favourite places to spend an evening.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
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
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 hover:bg-white/20"
          >
            <X />
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-[2rem] object-contain"
          />
        </div>
      )}
    </section>
  );
}