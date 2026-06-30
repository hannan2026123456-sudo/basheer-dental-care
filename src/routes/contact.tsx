import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Facebook, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Your Visit — Baseer Dental Care" },
      { name: "description", content: "Book an appointment at Baseer Dental Care, Attock. Call +92 313 7472937 or send a request online." },
      { property: "og:title", content: "Book Your Visit — Baseer Dental Care" },
      { property: "og:description", content: "Reach our team in Attock — request an appointment online." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { d: "Monday", h: "10:00 AM – 9:00 PM" },
  { d: "Tuesday", h: "10:00 AM – 9:00 PM" },
  { d: "Wednesday", h: "Closed · Opens 10 AM", highlight: true },
  { d: "Thursday", h: "10:00 AM – 9:00 PM" },
  { d: "Friday", h: "10:00 AM – 9:00 PM" },
  { d: "Saturday", h: "10:00 AM – 9:00 PM" },
  { d: "Sunday", h: "Closed" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const input = "w-full glass rounded-2xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal";

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-mint to-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-teal mb-4">Contact</p>
          <h1 className="font-playfair italic text-6xl md:text-7xl leading-none hero-fade-up">Book Your Visit</h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">We'll confirm your appointment within one working day.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="glass rounded-[2rem] p-8 md:p-10">
            <h2 className="font-playfair italic text-3xl mb-6">Visit our clinic</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <span>650, Kamra Rd, Attock, 43600, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <a href="tel:+923137472937" className="hover:text-teal">+92 313 7472937</a>
              </li>
              <li className="flex gap-3">
                <Facebook className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <a href="#" className="hover:text-teal">facebook.com/baseerdental</a>
              </li>
            </ul>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3"><Clock className="w-4 h-4 text-teal" /><h3 className="font-semibold">Hours</h3></div>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.d} className="border-t border-border">
                      <td className="py-2.5 text-muted-foreground">{row.d}</td>
                      <td className={`py-2.5 text-right ${row.highlight ? "font-semibold text-teal" : ""}`}>{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 relative rounded-2xl overflow-hidden bg-mint h-44">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#eef7f5_25%,#ffffff_25%,#ffffff_50%,#eef7f5_50%,#eef7f5_75%,#ffffff_75%)] bg-[length:24px_24px] opacity-60" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="glass rounded-2xl px-5 py-3 text-center">
                  <MapPin className="w-5 h-5 text-teal mx-auto mb-1" />
                  <p className="text-sm font-semibold">Kamra Rd, Attock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass rounded-[2rem] p-8 md:p-10">
            <h2 className="font-playfair italic text-3xl mb-6">Request an appointment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Full name</label>
                <input required name="name" className={input} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</label>
                <input required name="phone" type="tel" className={input} placeholder="+92 …" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Preferred date</label>
                <input name="date" type="date" className={input} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Service</label>
                <select name="service" className={input} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Dental Implants</option>
                  <option>Periodontics</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Orthodontics</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea name="message" rows={4} className={input} placeholder="Anything we should know?" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-teal hover:bg-teal-hover text-white rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
            >
              Request appointment
            </button>
            {sent && (
              <div className="mt-4 flex items-center gap-2 text-sm text-teal hero-fade-up">
                <Check className="w-4 h-4" /> Thank you — we'll be in touch shortly.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
