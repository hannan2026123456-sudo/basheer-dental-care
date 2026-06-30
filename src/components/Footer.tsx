import { Link } from "@tanstack/react-router";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-mint mt-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-teal"><Logo className="h-8 w-8" /></span>
            <span className="font-playfair italic text-2xl">Baseer</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Premium dental care in Attock. Specialists in implants, periodontics and confident smiles.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full bg-white text-teal hover:bg-teal hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="tel:+923137472937" aria-label="Phone" className="w-10 h-10 grid place-items-center rounded-full bg-white text-teal hover:bg-teal hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-playfair italic text-xl mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair italic text-xl mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-teal" /><span>650, Kamra Rd, Attock, 43600, Pakistan</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-teal" /><a href="tel:+923137472937" className="hover:text-foreground">+92 313 7472937</a></li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-teal" /><span>Closed · Opens 10 AM Wed</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} Baseer Dental Care. All rights reserved.</p>
          <p>Crafted with care in Attock.</p>
        </div>
      </div>
    </footer>
  );
}
