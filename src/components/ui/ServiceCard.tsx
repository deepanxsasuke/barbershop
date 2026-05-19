import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, price, duration, description, image }: ServiceCardProps) {
  return (
    <div className="glassmorphism rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_24px_rgba(212,175,55,0.12)] transition-all duration-300">
      {/* Image */}
      <div className="h-56 relative overflow-hidden bg-[#1e1f23]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <h3 className="font-playfair text-xl font-bold text-white leading-tight">{title}</h3>
          <span className="font-montserrat text-sm font-bold text-primary shrink-0 ml-2">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-white/40 mb-4 font-montserrat text-[11px] uppercase tracking-widest font-semibold">
          <span className="material-symbols-outlined text-base mr-1.5">schedule</span>
          {duration}
        </div>
        <p className="font-montserrat text-sm text-white/60 flex-grow mb-6 leading-relaxed">
          {description}
        </p>
        <Button href="/book" size="sm" className="w-full !py-3 uppercase tracking-widest text-xs">
          Book Now
        </Button>
      </div>
    </div>
  );
}
