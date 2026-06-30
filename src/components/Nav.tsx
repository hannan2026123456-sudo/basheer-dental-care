import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] flex justify-center pt-4 px-4">
        <nav className="glass w-full max-w-6xl rounded-full grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-2.5 md:py-3">
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0">
            <span className="text-teal"><Logo className="h-7 w-7" /></span>
            <span className="font-playfair italic text-2xl text-foreground leading-none">Baseer</span>
          </Link>

          <ul className="hidden md:flex items-center justify-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "px-4 py-2 rounded-full text-sm font-semibold text-foreground bg-white/70" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 justify-end">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-teal hover:bg-teal-hover text-white rounded-full px-5 md:px-6 py-2.5 text-sm font-semibold transition-colors"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-foreground"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-[99] glass pt-24 px-6 hero-reveal">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 rounded-2xl text-xl font-playfair italic text-foreground bg-white/60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-teal hover:bg-teal-hover text-white rounded-full px-6 py-3.5 text-base font-semibold"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
