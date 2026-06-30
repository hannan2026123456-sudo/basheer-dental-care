import { createFileRoute } from "@tanstack/react-router";
import { UserRound, MapPin, Clock } from "lucide-react";
import aboutImg from "@/assets/about-story.jpg";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Baseer Dental Care" },
      { name: "description", content: "Meet the team at Baseer Dental Care — periodontist-led practice with 35 five-star reviews in Attock." },
      { property: "og:title", content: "About — Baseer Dental Care" },
      { property: "og:description", content: "Periodontist-led, patient-first dentistry in Attock." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Dr. Baseer", role: "Periodontist · Founder", bio: "Leads implant and gum specialty care with a calm, methodical approach." },
  { name: "Dr. A. Khan", role: "General Dentist", bio: "Focused on preventive care, fillings and family dentistry." },
  { name: "Dr. M. Iqbal", role: "Cosmetic Dentist", bio: "Whitening, veneers and smile design with a natural finish." },
];

const stats = [
  { num: "5.0★", label: "Patient rating" },
  { num: "35+", label: "Happy patients" },
  { num: "10+", label: "Years of practice" },
];

function AboutPage() {
  const r1 = useReveal<HTMLDivElement>();
  const r2 = useReveal<HTMLDivElement>();
  const r3 = useReveal<HTMLDivElement>();
  const r4 = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-mint to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-teal mb-4">About</p>
          <h1 className="font-playfair italic text-6xl md:text-7xl leading-none hero-fade-up">About Baseer Dental Care</h1>
        </div>
      </section>

      {/* Story */}
      <section ref={r1} className="reveal-on-scroll px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">Our story</p>
            <h2 className="font-playfair italic text-5xl leading-tight mb-6">Specialist care, made approachable.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Baseer Dental Care was founded with one belief — that great dentistry should feel calm, considered and quietly luxurious. From your first consultation to long-term maintenance, our team blends specialist expertise with the warmth of a small, patient-focused practice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our flagship implant and periodontics services sit alongside everyday general and cosmetic care, so every member of your family can find a home here.
            </p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[6/5] bg-mint">
            <img src={aboutImg} alt="" loading="lazy" width={1200} height={1024} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-mint px-6 py-24">
        <div ref={r2} className="reveal-on-scroll max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">Our team</p>
            <h2 className="font-playfair italic text-5xl md:text-6xl leading-none">Meet the team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((m) => (
              <div key={m.name} className="glass rounded-3xl p-7 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-teal/10 text-teal grid place-items-center mb-5">
                  <UserRound className="w-9 h-9" />
                </div>
                <h3 className="font-playfair italic text-2xl">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-teal mt-1">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={r3} className="reveal-on-scroll px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">Trusted by Attock</p>
            <h2 className="font-playfair italic text-5xl md:text-6xl leading-none">Why patients trust us</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-playfair italic text-5xl md:text-7xl text-teal leading-none">{s.num}</div>
                <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section ref={r4} className="reveal-on-scroll px-6 pb-24">
        <div className="max-w-6xl mx-auto glass rounded-[2rem] p-8 md:p-12 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal mb-3">Find us</p>
            <h2 className="font-playfair italic text-4xl mb-6">Location & hours</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3"><MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" /><span>650, Kamra Rd, Attock, 43600, Pakistan</span></div>
              <div className="flex gap-3"><Clock className="w-5 h-5 text-teal shrink-0 mt-0.5" /><span><b className="text-foreground">Closed · Opens 10 AM Wed</b><br /><span className="text-muted-foreground">Mon–Sat · 10:00 AM – 9:00 PM</span></span></div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-mint min-h-56">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#eef7f5_25%,#ffffff_25%,#ffffff_50%,#eef7f5_50%,#eef7f5_75%,#ffffff_75%)] bg-[length:24px_24px] opacity-60" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="glass rounded-2xl px-5 py-4 text-center">
                <MapPin className="w-6 h-6 text-teal mx-auto mb-2" />
                <p className="text-sm font-semibold">Kamra Rd, Attock</p>
                <p className="text-xs text-muted-foreground">Map preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
