import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="flex-grow flex flex-col px-6 max-w-[1280px] mx-auto w-full py-8 md:py-16">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-2">
            Welcome Back, Alexander
          </h2>
          <p className="font-montserrat text-white/60 text-lg">
            Your grooming journey is ready for you.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="User Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp3BwplxeuDQJNCaFH_64SrEUo_QDuE7yyMeaxrNLbRbul3fJukz5PsOqqjHirRorM-Q7gYDIuodR1v1BFac_4YYmlQ5RTcoEocjZKzD9pLeN08FcuENR7zy5OGSyBJKBV_Go5vSVBP7YIp2J97la4FmU_f0cV_j7npLbFY6wltDPQU6hXXUexPWWbVY7W-EFxkObtQ9yfKoVUa8XqLkbdHhabYYDI1bx4C52u-Lu5QRQYs99LDMyybCGznPDqP_1ViGkr3z7a9rva"
            />
          </div>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Upcoming Appointments */}
        <div className="md:col-span-8 glassmorphism rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC4NO5YGdEBLvJG8o7qsYd2u6o-Hk41nLhZZKvC2hprYpM8wPWOXAO5nCHjnxyLNOKgPLSw24Q5_VyhAmPl8ByH5SkoAHTstd-RHO8MCGxBzd0czJL4KO8d3ODvAnJAcd1Na4-NyP8XmsaGOooR4526Q8AgJIC2yWCH4gj5xxaXE9ou6MB51Y7dCX1KNQ4P8u2peM7E5sUFBpKhkg73zHtUlT8YRZiE9yj49TIw_iEuEzhZkaDlc3ghHJTN6d0kNsHkOXq3CSv4BN_')",
            }}
          ></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-playfair text-2xl font-bold text-primary">
                Next Appointment
              </h3>
              <span className="bg-primary/10 text-primary font-montserrat text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                In 2 Days
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight">
                Executive Cut & Hot Towel Shave
              </h4>
              <p className="font-montserrat text-lg text-white/80 flex items-center gap-2 mt-4">
                <span className="material-symbols-outlined text-primary">
                  event
                </span>{" "}
                Thursday, Oct 26 at 4:30 PM
              </p>
              <p className="font-montserrat text-white/60 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>{" "}
                with Master Barber James
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap gap-4 mt-auto">
            <Button className="!px-8 !py-3">Check In</Button>
            <Button variant="secondary" className="!px-8 !py-3">
              Reschedule
            </Button>
          </div>
        </div>

        {/* Loyalty Points */}
        <div className="md:col-span-4 bg-[#1C1C1C] rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/5">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <span className="material-symbols-outlined text-primary mb-4 text-5xl fill-current">
            diamond
          </span>
          <h3 className="font-playfair text-2xl font-bold text-white mb-1">
            Royal Rewards
          </h3>
          <div className="font-playfair text-5xl font-bold text-primary mb-4">
            2,450
          </div>
          <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest mb-6 font-semibold">
            Current Points
          </p>
          <div className="w-full bg-[#121317] rounded-full h-2 mb-3 border border-white/5">
            <div
              className="bg-gradient-to-r from-[--color-gold-gradient-start] to-[--color-gold-gradient-end] h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="font-montserrat text-xs font-semibold text-white/60 flex justify-between w-full uppercase tracking-wider">
            <span className="text-primary">Gold Tier</span>
            <span>550 to Platinum</span>
          </div>
        </div>

        {/* Booking History */}
        <div className="md:col-span-6 bg-[#1C1C1C] rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-playfair text-2xl font-bold text-white">
              Recent Visits
            </h3>
            <a
              href="#"
              className="font-montserrat text-sm font-semibold text-primary hover:underline"
            >
              View All
            </a>
          </div>
          <div className="space-y-0">
            {/* History Item 1 */}
            <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#121317] flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-white/60">
                    content_cut
                  </span>
                </div>
                <div>
                  <p className="font-montserrat text-sm font-semibold text-white">
                    Classic Haircut
                  </p>
                  <p className="font-montserrat text-xs text-white/60 mt-1">
                    Oct 12, 2023
                  </p>
                </div>
              </div>
              <span className="text-primary font-montserrat text-xs font-semibold border border-primary/20 px-3 py-1 rounded uppercase tracking-wider">
                Completed
              </span>
            </div>
            {/* History Item 2 */}
            <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#121317] flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-white/60">
                    face
                  </span>
                </div>
                <div>
                  <p className="font-montserrat text-sm font-semibold text-white">
                    Beard Trim & Shape
                  </p>
                  <p className="font-montserrat text-xs text-white/60 mt-1">
                    Sep 28, 2023
                  </p>
                </div>
              </div>
              <span className="text-primary font-montserrat text-xs font-semibold border border-primary/20 px-3 py-1 rounded uppercase tracking-wider">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Favorite Barber & Quick Actions */}
        <div className="md:col-span-6 grid grid-rows-2 gap-6">
          {/* Favorite Barber */}
          <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/10 flex items-center gap-6 group hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shrink-0 group-hover:border-primary transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Master Barber James"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA160darlv775jmmFDSfCRljo1OdfpQay5dPljLgFG_k-FDXSGOwiYIqWLz3Q4QCTVi3ZnC4SZ3HaaovdbUOXoJ-xEw6M384Pl0p23yanxegGCw_GHBB9biuIctk4y8P5wrIReKJx0ngGlFxvCJ_-wT5qrw0bCeBNmDipp_FfFUmPMZxArgVN78cfB_Y4v5kCqblXsnCO_SB_jo8IlmjueW-9SH5LDSUyhWjK8Nb2dEDlaYfquiORjs7txvnYtXuz6HeUu_w5Resc77"
              />
            </div>
            <div className="flex-1">
              <p className="font-montserrat text-xs text-primary uppercase tracking-widest font-semibold mb-1">
                Preferred Barber
              </p>
              <h4 className="font-playfair text-2xl font-bold text-white mb-2">
                James &quot;The Blade&quot;
              </h4>
              <div className="flex items-center gap-1 text-primary text-sm mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined fill-current text-sm"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-[#0A0A0A] transition-colors shrink-0">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          {/* Grooming Stats */}
          <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/10 grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">
                Total Visits
              </p>
              <p className="font-playfair text-4xl font-bold text-white">24</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">
                Top Service
              </p>
              <p className="font-playfair text-2xl font-bold text-white">
                Executive Cut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
