import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Stethoscope, Smile, Activity, AlignJustify } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Baseer Dental Care" },
      { name: "description", content: "Implants, periodontics, general, cosmetic and orthodontic dentistry in Attock." },
      { property: "og:title", content: "Services — Baseer Dental Care" },
      { property: "og:description", content: "Implants, periodontics, general, cosmetic and orthodontic dentistry in Attock." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sparkles, title: "Dental Implants", flagship: true, desc: "Permanent tooth replacements placed by our specialist periodontist. From single implants to full-arch restorations, designed to feel and look natural.", from: "PKR 65,000" },
  { icon: Activity, title: "Periodontics", desc: "Comprehensive gum care — scaling, root planing, periodontal surgery and maintenance plans tailored to your stage of treatment.", from: "PKR 6,000" },
  { icon: Stethoscope, title: "General Dentistry", desc: "Routine checkups, professional cleaning, fillings and preventive care to keep your smile healthy year after year.", from: "PKR 3,500" },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Professional whitening, porcelain veneers and smile makeovers — refined results that still look like you.", from: "PKR 12,000" },
  { icon: AlignJustify, title: "Orthodontics", desc: "Modern braces and aligner consultations to gently guide your teeth into a confident, balanced alignment.", from: "PKR 80,000" },
];

function ServicesPage() {
  const r1 = useReveal<HTMLDivElement>();
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-mint to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-teal mb-4">Services</p>
          <h1 className="font-playfair italic text-6xl md:text-7xl leading-none hero-fade-up">Our Services</h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">Specialist-led dentistry across implants, periodontics, cosmetic and general care — under one calm, modern roof.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div ref={r1} className="reveal-on-scroll max-w-6xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className={`glass rounded-3xl p-7 transition-all hover:scale-[1.02] hover:shadow-lg ${s.flagship ? "lg:col-span-2 lg:row-span-1" : ""}`}>
              {s.flagship && (
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-teal bg-teal/10 rounded-full px-3 py-1 mb-4">Flagship · Periodontist-led</span>
              )}
              <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal grid place-items-center mb-5">
                <s.icon className="w-5 h-5" />
              </div>
              <h2 className="font-playfair italic text-3xl mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">Starting from</span>{" "}
                  <span className="font-semibold text-foreground">{s.from}</span>
                </div>
                <Link to="/contact" className="bg-teal hover:bg-teal-hover text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
