import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export const metadata = {
  title: "Our Services | RoyalCuts Luxury Barber",
  description:
    "Explore our signature grooming services — from precision fades to hot towel shaves.",
};

export default function ServicesPage() {
  return (
    <div className="pb-32 md:pb-24 px-6 max-w-[1280px] mx-auto w-full pt-12">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-4">
          Curated for Excellence
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
          Signature Services
        </h1>
        <p className="font-montserrat text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Experience meticulous detail and cinematic elegance with our tailored
          grooming services — each one crafted to perfection.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center glassmorphism rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
          Not Sure Which Service?
        </h2>
        <p className="font-montserrat text-white/60 max-w-md mx-auto mb-8 relative z-10">
          Book a complimentary consultation with one of our master barbers. We&apos;ll find the perfect treatment for you.
        </p>
        <a
          href="/book"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f2d388] text-[#0a0a0a] font-montserrat font-bold px-8 py-4 rounded-xl uppercase tracking-widest text-sm hover:opacity-90 hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] transition-all relative z-10"
        >
          Book Consultation
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
