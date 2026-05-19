import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Cinematic luxury barber shop interior"
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPogDOQaWlMZ3RxQ5XSgAurML0bDWiiOIYqOgDG3fTqVf1fgJ6XNx8YAFRwevWCM-evQ_lNapfKguZa5DM5g26rL2CGXgQ6Rg3O39S0955YZQ8mvJw5SQc9vb408NmTIu7zjsYEBGKIAo5Z7DeMm1infPAEvgTjpgoAfhoo4RurdYQPynWM3I6J0iYsJQC77q-krWWub8hEVl4FY-dfkL0-fw1oJ4YMznmcgyR1m4P25DKNnXaFacpSArVqZy-zEMRARU8q5MHTHqx"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-[1280px] mx-auto flex flex-col items-center">
          <span className="font-montserrat text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-4">
            Welcome to RoyalCuts
          </span>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white mb-6 max-w-4xl drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            Premium Grooming Experience
          </h1>
          <p className="font-montserrat text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
            Where tradition meets modern luxury. Book your seat in the chair of
            kings. Experience meticulous detail and cinematic elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button href="/book" className="!px-10 !py-4 text-base">
              Book Appointment
            </Button>
            <Button href="/services" variant="secondary" className="!px-10 !py-4 text-base">
              Explore Styles
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Showcase */}
      <section className="py-24 px-6 relative bg-[#121317]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
                Trending Styles
              </h2>
              <p className="font-montserrat text-white/60 mt-2">
                Curated looks for the modern gentleman.
              </p>
            </div>
            <a
              href="/gallery"
              className="flex items-center text-primary font-montserrat font-semibold hover:underline"
            >
              View Gallery{" "}
              <span className="material-symbols-outlined ml-2 text-xl">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature Image */}
            <div className="md:col-span-8 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Classic fade haircut"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ggbxGwdeEvhGryvsA7S2Cd3xVXtcyf97NKBOqEundL1lUxmb9M5wPFzQ9lZLa9pG-AX4T2o8-f1JOfeEasSmoh9gbgNQOemI4nSgqlyv_OQkz9Kw6R62j-3Z3KpoIaKkJcOQuzSvGK019XNL2en27MzM9_LHRlbw6r11XzMZKSbC5MeMjD-OEHE3OV66u-dSJEqHfjzGZUaWVak18NaPX-u_HV9sSZc712m99d6Ds1_rp6yM0aevzCgRmKEqVK2zHww2THlLeACV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full font-montserrat text-xs font-semibold mb-4 backdrop-blur-sm tracking-wide uppercase">
                  Most Requested
                </span>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  The Executive Fade
                </h3>
              </div>
            </div>

            {/* Side Stack */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="relative h-[238px] rounded-xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Beard trim and styling"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACssqmDu9VEER36LBxBrXcagzJR3BdRqc4vvEr86sH_0JxAAYCIStwREehXDJKFxtO2j64MXQOWfNj-HuWvHOh5WHsa7_HG9LehZBWSF_d0eqAvJOjPqmpXSL85YCCaDUJ4S0tk8uxgSuLhXarQGGxa_moWIXSKW8KSLUMtcigFk9HQHo2N3VxsIlNNMm78GQGC8Rf-aZ_iRDGMDAdhrNU3E_rq4_bXqgH37CgdEw1HF1s6-AR1Pf8WlWtAT5Tu5XoPUGNzLT0fl8R"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-montserrat text-lg font-semibold text-white">
                    Precision Beard Sculpting
                  </h3>
                </div>
              </div>
              <div className="relative h-[238px] rounded-xl overflow-hidden group bg-[#1e1f23] flex items-center justify-center p-8 border border-white/5 hover:border-primary/30 transition-colors">
                <div className="text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                    diamond
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    Bespoke Consultations
                  </h3>
                  <p className="font-montserrat text-sm text-white/60">
                    Tailored advice for your unique profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent opacity-30 rounded-bl-full pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">
              Voices of the Circle
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glassmorphism rounded-2xl p-8 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-primary/30 text-5xl">
                format_quote
              </span>
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined fill-current">
                    star
                  </span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 mb-8 leading-relaxed">
                "An experience unlike any other. The attention to detail is truly
                meticulous. It feels less like an appointment and more like a
                retreat."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/30 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Customer portrait"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOOasVOe3BokRG3Z2TK6wNmhfa6axY3Uw6_OfTeBPWcz1Id5xXBQyGQR4s3HXmhe5l7Kws_7xkwb7UQywPfN_v8jX0D5B4IKhISPZxhyhD2jU98bqb0ABLmKnfg3XRwESaTaGZSbxfuUC2tGGYPQPdGW3gw4lUneW9ngfK_UQw_VSsTvFmb3ZP3QIpEaSGpQe2uFyPSYYKlrrrpNbZn6jUGNJzsfpayroccWniTnW2OdFhASZyN0aJOnTny7zo89krJCLlAcBPOdHD"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm">
                    Jameson W.
                  </h4>
                  <span className="font-montserrat text-xs text-primary uppercase tracking-wider">
                    VIP Member
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glassmorphism rounded-2xl p-8 relative md:-translate-y-4">
              <span className="material-symbols-outlined absolute top-6 right-6 text-primary/30 text-5xl">
                format_quote
              </span>
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined fill-current">
                    star
                  </span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 mb-8 leading-relaxed">
                "Stepping into RoyalCuts feels like stepping into a high-end
                atelier. The atmosphere is quiet, confident, and the results are
                consistently flawless."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/30 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Customer portrait"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2txoHfsbvUzrZuRP4Y-weN5mvwHyAogrHj2TmF2Bt0swtKB91z-5TfkLARpKLI0qXMNXodclC0UL6BgwHgzGeKzxxXLBKRXTrf50WhXXDk9cfSiQYnK8ylXeLOdzW4WfMkykK5wTK_9NmuJk-IMVVMZHrC3tBS97DOGLdPJHp9Fe7UMqjQXMRXwL8LEmOgAfnYVgmFBecyUfqIJ2RnpYD_5gxZxS7UHjv44YuGeSwoMgRD4YnvCRGQKYBXotO1km0HEIbUzYywEI"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm">
                    Arthur P.
                  </h4>
                  <span className="font-montserrat text-xs text-primary uppercase tracking-wider">
                    Gold Member
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glassmorphism rounded-2xl p-8 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-primary/30 text-5xl">
                format_quote
              </span>
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined fill-current">
                    star
                  </span>
                ))}
              </div>
              <p className="font-montserrat text-white/80 mb-8 leading-relaxed">
                "The hot towel shave is a revelation. I always leave feeling
                completely refreshed and looking sharp. Uncompromising quality."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/30 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Customer portrait"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB7dXNUcj79A16jLX_DHzo9S6I3nfa3E6Br2Ke1hyQqTe7VbK0cvqYcJ-on7Q-w-A-m_VnNUp91mV3oSLjD4xK2Zdo6nql-kCjM4UQBAoCHIzBmZ35jvJ6IuVTDtDicucPh5Umqrlo_ygO4K0GfIMZ3GCR01ApoGmS6xGSbrXafah_ewlUPVz9uny-DTfkTiAqrObUKU66kIt6Mr_0z-G4CgTrCK_cr7UOR5twLbgP2ZSbh37TFn7aUXK9Q_mz1-BOgUZ_ULjE1j3q"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm">
                    Michael T.
                  </h4>
                  <span className="font-montserrat text-xs text-primary uppercase tracking-wider">
                    Silver Member
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
