import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#0a0a0a] pt-16 pb-24 md:pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">content_cut</span>
              <span className="font-playfair text-3xl font-bold text-gradient-gold">RoyalCuts</span>
            </div>
            <p className="text-sm text-white/50 font-montserrat max-w-sm leading-relaxed">
              Exclusivity, Meticulous Detail, and Cinematic Elegance. We provide
              premium grooming services tailored for the individual.
            </p>
            <div className="flex gap-3 mt-6">
              {["instagram", "twitter", "facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all text-sm font-montserrat font-bold uppercase"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/50 font-montserrat">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">My Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/50 font-montserrat">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                <span>123 Luxury Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                info@royalcuts.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">phone</span>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-montserrat">
          <span>© {new Date().getFullYear()} RoyalCuts Luxury Barber. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
