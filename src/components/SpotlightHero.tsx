import { useEffect, useRef } from "react";
import { Star, Clock, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import clinic from "@/assets/hero-clinic.jpg";
import smile from "@/assets/hero-smile.jpg";

const SPOTLIGHT_R = 220;

export function SpotlightHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const reveal = revealRef.current;
    if (!wrap || !canvas || !reveal) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const r = wrap.getBoundingClientRect();
      canvas.width = r.width;
      canvas.height = r.height;
      target.current = { x: r.width / 2, y: r.height / 2 };
      current.current = { ...target.current };
      draw();
    };

    const draw = () => {
      const { x, y } = current.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,1)");
      grad.addColorStop(0.6, "rgba(255,255,255,0.75)");
      grad.addColorStop(0.75, "rgba(255,255,255,0.4)");
      grad.addColorStop(0.88, "rgba(255,255,255,0.12)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const url = canvas.toDataURL();
      reveal.style.webkitMaskImage = `url(${url})`;
      reveal.style.maskImage = `url(${url})`;
    };

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.1;
      current.current.y += (target.current.y - current.current.y) * 0.1;
      draw();
      raf.current = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      target.current.x = e.clientX - r.left;
      target.current.y = e.clientY - r.top;
    };
    const onLeave = () => {
      const r = wrap.getBoundingClientRect();
      target.current = { x: r.width / 2, y: r.height / 2 };
    };

    setSize();
    reveal.style.webkitMaskRepeat = "no-repeat";
    reveal.style.maskRepeat = "no-repeat";
    reveal.style.webkitMaskSize = "100% 100%";
    reveal.style.maskSize = "100% 100%";

    window.addEventListener("resize", setSize);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    if (!reduced) raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", setSize);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: 640 }}
    >
      {/* Base layer */}
      <img
        src={clinic}
        alt="Bright modern dental clinic interior"
        className="absolute inset-0 w-full h-full object-cover hero-zoom"
        width={1600}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/60" />

      {/* Reveal layer */}
      <div ref={revealRef} className="absolute inset-0 hero-reveal pointer-events-none">
        <img
          src={smile}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
      </div>
      <canvas ref={canvasRef} className="hidden" />

      {/* Headline */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <h1 className="max-w-3xl leading-[0.95] tracking-tight">
          <span className="block font-playfair italic text-6xl md:text-8xl text-foreground hero-fade-up" style={{ animationDelay: "0.25s" }}>
            Smile with
          </span>
          <span className="block font-sans font-medium text-6xl md:text-8xl text-foreground hero-fade-up" style={{ animationDelay: "0.42s" }}>
            confidence.
          </span>
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground hero-fade-up" style={{ animationDelay: "0.6s" }}>
          Move your cursor across the room to reveal what we do best — premium dentistry in the heart of Attock.
        </p>
      </div>

      {/* Bottom-left rating */}
      <div className="absolute bottom-6 left-6 right-6 md:right-auto z-10 hero-fade-up" style={{ animationDelay: "0.8s" }}>
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
      <div className="absolute bottom-6 right-6 z-10 hidden md:block hero-fade-up" style={{ animationDelay: "0.95s" }}>
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
