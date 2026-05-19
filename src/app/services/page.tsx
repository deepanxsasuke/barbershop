import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Classic Haircut",
    price: "$45+",
    duration: "45 mins",
    description:
      "A tailored haircut designed to suit your individual style and facial structure. Includes a consultation, precision cut, and styling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJdwslf-7W_wR_kEDh0lMNAzsdDRZ-_z2lDJezxx3vqfeQ0V8Z2oMng-r0FFAmIbysgfd4RMlSVhUryvVWwIGqO5voTsTyxAuO86xc-cusEmojBTRGwGU-PHpT7F1dyyF1KyWuGhpb3WuPp38rIeHXl5GoC9RPwBKIauJ3rg8sQ71rd9tfN-J4ROssfhnOQNuKE5BLdXXSdl6Kv3NCCm59NEyjI8Lrux4lG9VGZWi4Fb9RxP8KhbOYJGYmevKYpWPmWpnx3V1SsZ1k",
  },
  {
    title: "Beard Sculpting",
    price: "$30+",
    duration: "30 mins",
    description:
      "Detailed beard shaping, line-up, and conditioning. Finished with premium hot towel treatment and beard oil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPL3uXx3eXCplSalcsGgr8Q48d-xNFe3RkBF7w5cVDhQWYAtBOfE4FmL3AqEDfVP4qTlXbUlYdpHHecq9ZifItBv0qitVvjt4TOVy4oIpP3sPoB1kzQzczQeVNrQ5TUIWHZX3coJSSWDamkJNApEOMkaABroBe2kueFDrQUp_Doo6C1llkKla5vzMCx6sriSvq6LQo5r5BjaKGkJI-rGx8Vdlj5h83Lbt_H4lkI-3PmfElMzVuFBl5rH94wT2-xMkfvrEUMqutqIey",
  },
  {
    title: "Precision Fade",
    price: "$55+",
    duration: "60 mins",
    description:
      "Flawless skin fade blending into any length on top. Requires meticulous attention to detail for a seamless transition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYqOs0ab7-h5hV2K_Dqy9EiOzH5n28MRq62LLMTAGntZJ-RQ0LxDLzhzyNg5bL8i0xG4_HMqY1I6br6-81SsCcKByeZiLapMVElOR_DUDMji6hccjsGxcAhl4ZjvR86fZQmB9KT8Qt7bJl_zP0x2LVpSfD25GPcCpYmZxDF9hG-dppng8LBM35SzH4kqXS9tDc0OoOoDY5aiyAy7n_xxxSWIkozxvEPVAq4jaNcbSN8srLKX0BQn1b6ttd3XHoVjP1jTQZHZyt2-Kg",
  },
  {
    title: "Custom Color",
    price: "$85+",
    duration: "90 mins",
    description:
      "Professional grey blending or full color transformation using premium, nourishing dyes for a natural, rich finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8T1g1Tn4oAq1A3qdKuDwbfT5Gwzp7vZIFZ3WvrWQwdVfVZAedbWIaa3eD7RLPrAzUCUZ9tATvSn6l8tFihL2Pg0q2NuP7pXty2gZ39hh5wk3d-MYKfRTGe571Yr51vklFmYE1mwltGtXQjLNb6Pg2gaZiat36b4CtsDAo9UFcbBClRNY5Y1MgYibPS91h6_P3J7PuGCIM-LqKV9MlFDtwcPph-E7tPbo9hGL7ibTPb9WCCU2tKYcxBBlg2Xq9EHEpbZYsiS2QM32",
  },
  {
    title: "Executive Facial",
    price: "$60+",
    duration: "45 mins",
    description:
      "Deep cleansing, exfoliation, and hydration tailored for men's skin. Includes a relaxing hot towel wrap and facial massage.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzdoD1oSB8BE5kBKHxZIgMFColZ73yrhGFARjd0E3mcKdm7M-AfVMwlZrzWH9wjA-OZRB70O0UsMWz_KSnEUrAcOje9cEu0_qTl0pSQqGWSiYEcypwBrwZO09rBuHeQ37X0RdremmifcujWAgb_WNTDPD8kisbcp18ikQxiyttimEguhUyFglnf5Azc8-7xCOE6YwWOKflGhqRw9Dx9X01jRU7g3f3Ec8tnLR5EBgdTdSFE43JI9QlN7MPKn0hs9jZ8_qiGpOx4OFd",
  },
  {
    title: "Junior Royal Cut",
    price: "$35+",
    duration: "30 mins",
    description:
      "A premium grooming experience tailored for younger gentlemen (under 12). Includes a stylish cut and finishing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7GMubk_vr8_3gAGrHz7hvgZt33fI7jDn-0FjoZ5vwvJsZzpkbchqjPk0-wYxW3U13ciSlpDibZ1zQxl5hL6VNlSSIztdebU-BWyV9uLB3feocFQB4-vUk_Jj0pQVChQ4NdFMipBFdkMb0s-wZblYxeraOPQTewiDb9DPR0OEqwzVmaoMwbNZXwKD65WWz_6xQke2yumPbo4kQUBIu03WrjdnITzRxI69-H7YD6kFBHa1dMl7YQbGYwlgk68w6ktCF70sb92DUMJc",
  },
];

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
          <ServiceCard key={index} {...service} />
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
