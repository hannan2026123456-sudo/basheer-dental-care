import { Star, Clock, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-dentist.mp4.asset.json";

export function VideoHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: 640 }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover hero-zoom"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Baseer Dental Care — dentist examining a patient"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/25 to-white/70" />

      {/* Headline */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <h1 className="max-w-3xl leading-[0.95] tracking-tight">
          <span
            className="block font-playfair italic text-6xl md:text-8xl text-foreground hero-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Smile with
          </span>
          <span
            className="block font-sans font-medium text-6xl md:text-8xl text-foreground hero-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            confidence.
          </span>
        </h1>
        <p
          className="mt-6 max-w-md text-foreground/80 hero-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Premium, gentle dentistry in the heart of Attock — implants, cosmetic care and everything in between.
        </p>
      </div>

      {/* Bottom-left rating */}
      <div
        className="absolute bottom-6 left-6 right-6 md:right-auto z-10 hero-fade-up"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="glass rounded-2xl px-4 py-3 inline-flex items-center gap-3 max-w-full">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-amber-500" />
            <span className="text-sm font-semibold text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">(35 reviews)</span>
          </div>
          <span className="hidden sm:inline w-px h-4 bg-border" />
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> Kamra Rd, Attock
          </span>
        </div>
      </div>

      {/* Bottom-right card */}
      <div
        className="absolute bottom-6 right-6 z-10 hidden md:block hero-fade-up"
        style={{ animationDelay: "0.95s" }}
      >
        <div className="glass rounded-3xl p-5 w-72">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Today</p>
          <p className="mt-1 font-playfair italic text-2xl">Closed · Opens 10 AM Wed</p>
          <a href="tel:+923137472937" className="mt-3 flex items-center gap-2 text-sm text-foreground">
            <Phone className="w-4 h-4 text-teal" /> +92 313 7472937
          </a>
          <Link
            to="/contact"
            className="mt-4 block text-center bg-teal hover:bg-teal-hover text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Mobile mini info */}
      <div className="absolute bottom-24 right-6 md:hidden z-10">
        <div className="glass rounded-2xl px-3 py-2 flex items-center gap-2 text-xs">
          <Clock className="w-3.5 h-3.5 text-teal" /> Opens 10 AM Wed
        </div>
      </div>
    </section>
  );
}
