import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import clinic from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Baseer Dental Care" },
      { name: "description", content: "Step inside the Baseer Dental Care clinic — interiors, equipment and treatment details." },
      { property: "og:title", content: "Gallery — Baseer Dental Care" },
      { property: "og:description", content: "A look inside our modern dental clinic in Attock." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: g1, alt: "Bright clinic reception with teal accent wall" },
  { src: g2, alt: "Sterile dental instruments on a tray" },
  { src: g3, alt: "Modern dental treatment chair" },
  { src: clinic, alt: "Treatment room with overhead lighting" },
  { src: g4, alt: "Dentist hands in teal gloves with tools" },
  { src: g5, alt: "Dental implant model close up" },
  { src: g6, alt: "Mint-toned clinic hallway" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-mint to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-teal mb-4">Gallery</p>
          <h1 className="font-playfair italic text-6xl md:text-7xl leading-none hero-fade-up">Our Clinic</h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">A bright, modern space designed around your comfort.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4 [&>*]:break-inside-avoid">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="block w-full overflow-hidden rounded-2xl bg-mint group focus:outline-none focus:ring-2 focus:ring-teal"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 hero-reveal" onClick={close}>
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 glass-dark text-white w-11 h-11 rounded-full grid place-items-center"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 glass-dark text-white w-11 h-11 rounded-full grid place-items-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 glass-dark text-white w-11 h-11 rounded-full grid place-items-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
