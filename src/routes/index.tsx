import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Stethoscope, Smile, Activity, ShieldCheck, Award, Star, Quote } from "lucide-react";
import { VideoHero } from "@/components/VideoHero";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baseer Dental Care — Smile with confidence" },
      { name: "description", content: "Premium dental care in Attock — implants, periodontics, cosmetic and general dentistry." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Dental Implants", desc: "Permanent, natural-looking replacements led by our periodontist." },
  { icon: Activity, title: "Periodontics", desc: "Gentle gum care, deep cleaning and advanced periodontal therapy." },
  { icon: Stethoscope, title: "General Dentistry", desc: "Checkups, cleanings, fillings — the routine that keeps you smiling." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Whitening, veneers and smile makeovers tailored to you." },
];

const features = [
  { icon: Award, title: "Experienced Specialists", desc: "Periodontist-led care with a focus on long-term oral health." },
  { icon: ShieldCheck, title: "Modern Equipment", desc: "Sterile environments and the latest diagnostic technology." },
  { icon: Star, title: "5.0 Patient Rating", desc: "35 five-star reviews from patients across Attock and beyond." },
];

const testimonials = [
  { name: "Ayesha K.", quote: "Best dental visit I've ever had. The clinic feels calm and the team is genuinely caring." },
  { name: "Hamza R.", quote: "Got an implant done here — painless, professional, and beautifully finished." },
  { name: "Sana M.", quote: "My whitening results are unreal. I finally smile in photos without thinking twice." },
];

function Home() {
  const r1 = useReveal<HTMLDivElement>();
  const r2 = useReveal<HTMLDivElement>();
  const r3 = useReveal<HTMLDivElement>();
  const r4 = useReveal<HTMLDivElement>();

  return (
    <>
      <VideoHero />

      {/* Services preview */}
      <section className="bg-mint py-24 px-6">
        <div ref={r1} className="reveal-on-scroll max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">What we do</p>
              <h2 className="font-playfair italic text-5xl md:text-6xl leading-none">Care, crafted.</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-teal hover:text-teal-hover">All services →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-3xl p-6 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal grid place-items-center mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-playfair italic text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="text-sm font-semibold text-teal hover:text-teal-hover">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 px-6">
        <div ref={r2} className="reveal-on-scroll max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">Why Baseer</p>
            <h2 className="font-playfair italic text-5xl md:text-6xl leading-[0.95]">A practice built on trust.</h2>
            <p className="mt-5 text-muted-foreground max-w-sm">Calm, considered dentistry. Every detail engineered around your comfort and your long-term smile.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border p-6 hover:border-teal transition-colors">
                <f.icon className="w-6 h-6 text-teal mb-4" />
                <h3 className="font-semibold text-lg mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-mint py-24 px-6">
        <div ref={r3} className="reveal-on-scroll max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">35 five-star reviews</p>
            <h2 className="font-playfair italic text-5xl md:text-6xl leading-none">Loved by our patients.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="glass rounded-3xl p-7 flex flex-col">
                <Quote className="w-6 h-6 text-teal mb-4" />
                <blockquote className="text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div ref={r4} className="reveal-on-scroll max-w-6xl mx-auto">
          <div className="rounded-[2.5rem] bg-teal text-white px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[2fr_1fr] items-center gap-8">
              <div>
                <h2 className="font-playfair italic text-5xl md:text-6xl leading-[0.95]">Ready for your best smile?</h2>
                <p className="mt-4 text-white/80 max-w-md">Book a consultation — we'll walk you through every option, no pressure.</p>
              </div>
              <Link to="/contact" className="inline-flex justify-center bg-white text-teal hover:bg-mint rounded-full px-8 py-4 font-semibold transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
