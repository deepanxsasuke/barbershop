"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { services, saveAppointment } from "@/lib/data";

const barbers = [
  {
    name: "Marcus Vance",
    role: "Master Barber",
    experience: "10 yrs",
    rating: "5.0",
    specialties: ["Fade Specialist", "Beard Sculpting"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOyWIJLRGn1ahjDYCIiJJSMRJPwE7KuoJPODuCM9eSj9YKO_YqvTjz3j-7KqN5wmZK2z8aGZaW4tGFJzOYbIXoOi9fOZMKHupWOHl4AlWUmQ_CCW_Px1dgxKn3auJ_QpcRPxcUQueMzkgGCtE-XbGTq10bOJ0iGGVyHrnlfYauuYZV0IK1rF4Gs9Qe1CSp_xgGDh1NIFz-0RwYEp0fAu7GZ_HrXELGHxSU2aMYvwAG3_uY2eaRymZy1cvDNalLtT6K8iqET9y1YYP1",
  },
  {
    name: "Julian Reed",
    role: "Senior Barber",
    experience: "6 yrs",
    rating: "4.9",
    specialties: ["Classic Cuts", "Hot Towel Shave"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVzQIa9HHapJQYE2X0kxQ49qgDMF3t-txztUlzsiPRXdDuhCryVJfJJ2HOi8D4i31TkNOkxlSyNojUp1WCEdntXuxUX_bitBazonBDGGzYlM_gSJTYvGz7ib3oCmdjk_n74hJj6yFFbuMg74qi5CY8sDFtmbULEyNsEnQF6EFxVUTEwRv0wJTQUzQESPkFjqRUTsUj-iKcm6bpzKk3mgnPo_CZZ496N6pYb0dsuOJOoRzD_MEDwZUUHbWMciFRV86wioJHuJzEsZLU",
  },
  {
    name: "Elena Silva",
    role: "Stylist",
    experience: "8 yrs",
    rating: "4.8",
    specialties: ["Long Hair", "Texture"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmKEgAKJp3jGzfBkUsG660r_dcxAKZwpqbOjysrpVUiewOLOTVDp0jCZgHnp569gaSZvzMA76P0PoTdnTkOH8XAhg6tqNPaEW0sFbA9OcEumR0tyfeyMvr4Frgl68Ys0ef-cdaf00G_nN9isJFK0mm4AKYZfMRY2tqF8EXQ6zmLm-dr6q8WXS3QV4QoKoU9T6tZ3qMjBhxzympPdh-gjTWVJZRJwp0xx6Gf5Ra5PAamgOGGqreoVTdckWDVQN1hm-1OZhzEz8VccJV",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "11:00 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "05:00 PM",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const OWNER_WHATSAPP = "9360419893"; // replace with shop owner's number

export default function BookPage() {
  const searchParams = useSearchParams();
  const serviceId = Number(searchParams.get("serviceId") ?? 0);
  const service = services[serviceId] ?? services[0];

  const today = new Date();
  const [calendarDate, setCalendarDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedBarber, setSelectedBarber] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>("01:30 PM");
  const [selectedDay, setSelectedDay] = useState<number>(13);

  return (
    <>
    <div className="flex-grow flex flex-col md:flex-row gap-8 px-6 max-w-[1280px] mx-auto w-full py-8 md:py-16">
      {/* Left Column: Barber Selection */}
      <div className="w-full md:w-5/12 flex flex-col gap-8">
        <div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
            Select Your Master
          </h1>
          <p className="font-montserrat text-white/60">
            Choose a specialist to tailor your grooming experience.
          </p>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar max-h-[calc(100vh-300px)]">
          {barbers.map((barber, index) => {
            const isActive = selectedBarber === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedBarber(index)}
                className={`glassmorphism p-6 rounded-xl flex flex-col gap-4 transition-colors cursor-pointer group relative overflow-hidden ${
                  isActive ? "border-primary/50" : "hover:border-white/30"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                )}
                <div className="flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Barber Portrait"
                    className={`w-20 h-20 rounded-full object-cover shrink-0 transition-all ${
                      isActive
                        ? "border-2 border-primary"
                        : "border border-white/20 grayscale group-hover:grayscale-0"
                    }`}
                    src={barber.image}
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3
                        className={`font-playfair text-xl font-bold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {barber.name}
                      </h3>
                      <div
                        className={`flex items-center gap-1 transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-white/60 group-hover:text-primary"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm fill-current">
                          star
                        </span>
                        <span className="font-montserrat text-sm font-semibold">
                          {barber.rating}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`font-montserrat text-sm mt-1 ${
                        isActive ? "text-primary" : "text-white/60"
                      }`}
                    >
                      {barber.role} • {barber.experience}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {barber.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#1e1f23] rounded font-montserrat text-xs text-white/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {isActive && (
                  <div className="mt-2 pt-4 border-t border-white/5 flex gap-2 overflow-x-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-16 h-16 rounded object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      alt="Portfolio 1"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeraHqetEq1OKHuAYut-PvkSUK7u-_gQgzcnzTXbfbySsp6rvbamb1EetFqJn88j4fDPHQFtjU-fqBFE1sHc8tt0LcEwTHQ50OgLkOQTl0-j6sp38-_77j3hvZfPV-0zoxRE0wkLpjXnvJ-_mFoi4hRQMfvSD4ef_9U0en3uv63wLbO-1OGU-Kl7M0keZa_VYWd1wpePhvgH9PMTJcTeFIjeLDFkCTtGA4RCpECAfaYkMiSAjVBmpsX78N88_eXMqnfM4XaxRv-dy7"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-16 h-16 rounded object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      alt="Portfolio 2"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0tDWUGZXViB_odoaZ2rpdHVzUmB12Eobe9d6_AN7gtBbnQg7T_UZaTWYTUaXP1yCecTb8SSopQBWKq6wRY4LVfQro7MlCukHE9H3BCIQJqIlf10vZ3JKF3eAdSp3IPD9aLNYsXNySJtsOdrnL8vd5dCbqm54fgrY0SQa6nVvLyhQ2uQkhTBDf8mB_OxHbu0rBPT4hqxFo7y4QOjeSOnMJG6228xAaWWQxEFHnzQLqFH_We_SSP8cuUFnhfbmVHj0zQJSE1sds4gL"
                    />
                    <div className="w-16 h-16 rounded bg-[#1e1f23] flex items-center justify-center font-montserrat text-xs text-white/60 hover:text-primary cursor-pointer transition-colors">
                      +12
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Booking Calendar & Slots */}
      <div className="w-full md:w-7/12 flex flex-col">
        <div className="glassmorphism rounded-2xl p-6 md:p-10 flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Service Details — dynamic from URL param */}
          <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-6 relative z-10">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-1">
                Appointment Details
              </h2>
              <div className="flex items-center gap-2 text-white/60 font-montserrat text-sm">
                <span className="material-symbols-outlined text-sm">
                  content_cut
                </span>
                <span>{service.title}</span>
                <span className="mx-1">•</span>
                <span>{service.duration}</span>
                <span className="mx-1">•</span>
                <span className="text-primary font-semibold">{service.price}</span>
              </div>
            </div>
            <a
              href="/services"
              className="text-white/60 hover:text-primary transition-colors font-montserrat text-sm font-semibold uppercase flex items-center gap-1"
            >
              Edit Service{" "}
              <span className="material-symbols-outlined text-sm">edit</span>
            </a>
          </div>

          {/* Dynamic Calendar */}
          <div className="mb-8 relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-xl font-bold text-white">
                November 2024
              </h3>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-[#1e1f23] flex items-center justify-center text-white hover:text-primary hover:bg-white/5 transition-colors border border-white/10">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1e1f23] flex items-center justify-center text-white hover:text-primary hover:bg-white/5 transition-colors border border-white/10">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="font-montserrat text-xs text-center text-white/60 py-2 uppercase font-semibold"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              <div className="aspect-square"></div>
              <div className="aspect-square"></div>
              <div className="aspect-square"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
                (day) => {
                  const isSelected = selectedDay === day;
                  const isToday = day === 9;
                  let style =
                    "text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer";
                  if (isSelected) {
                    style =
                      "bg-primary text-[#0a0a0a] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer";
                  } else if (isToday) {
                    style = "text-primary border border-primary relative cursor-pointer";
                  }

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`aspect-square rounded-full flex items-center justify-center font-montserrat text-sm ${style}`}
                    >
                      {day}
                      {isToday && !isSelected && (
                        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary"></div>
                      )}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Time Slots */}
          <div className="mt-auto relative z-10">
            <h3 className="font-playfair text-xl font-bold text-white mb-4">
              Available Times
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time, index) => {
                const isSelected = selectedTime === time;
                let style =
                  "border-white/10 text-white/60 hover:border-primary hover:text-primary transition-all bg-[#1e1f23]/50 cursor-pointer";
                if (isSelected) {
                  style =
                    "border-primary text-primary transition-all bg-primary/10 relative overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.4)]";
                }

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-lg border font-montserrat text-sm ${style}`}
                  >
                    {time}
                    {isSelected && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
              <Button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 font-semibold uppercase tracking-widest gap-2"
              >
                Confirm Appointment{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Confirmation Modal */}
    {showModal && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        onClick={() => setShowModal(false)}
      >
        <div
          className="glassmorphism rounded-2xl p-8 w-full max-w-md relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">event_available</span>
              <h2 className="font-playfair text-2xl font-bold text-white">Booking Summary</h2>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-6" />

          {/* Booking Details */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">content_cut</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Service</p>
                <p className="font-montserrat text-sm font-semibold text-white">{service.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Duration</p>
                <p className="font-montserrat text-sm font-semibold text-white">{service.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">payments</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Price</p>
                <p className="font-montserrat text-sm font-semibold text-primary">{service.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">person</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Barber</p>
                <p className="font-montserrat text-sm font-semibold text-white">
                  {barbers[selectedBarber].name}{" "}
                  <span className="text-white/40 font-normal">({barbers[selectedBarber].role})</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Date</p>
                <p className="font-montserrat text-sm font-semibold text-white">
                  {selectedDay ? `${MONTH_NAMES[currentMonth]} ${selectedDay}, ${currentYear}` : "Not selected"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">access_time</span>
              <div>
                <p className="font-montserrat text-xs text-white/40 uppercase tracking-widest">Time</p>
                <p className="font-montserrat text-sm font-semibold text-white">
                  {selectedTime ?? "Not selected"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              onClick={() => {
                saveAppointment({
                  id: Date.now().toString(),
                  service: service.title,
                  duration: service.duration,
                  price: service.price,
                  barber: barbers[selectedBarber].name,
                  barberRole: barbers[selectedBarber].role,
                  date: selectedDay
                    ? `${MONTH_NAMES[currentMonth]} ${selectedDay}, ${currentYear}`
                    : "TBD",
                  time: selectedTime ?? "TBD",
                  status: "upcoming",
                });
              }}
              href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(
                `Hello RoyalCuts! I'd like to confirm my appointment:\n\n` +
                `Service: ${service.title}\n` +
                `Duration: ${service.duration}\n` +
                `Price: ${service.price}\n` +
                `Barber: ${barbers[selectedBarber].name} (${barbers[selectedBarber].role})\n` +
                `Date: ${selectedDay ? `${MONTH_NAMES[currentMonth]} ${selectedDay}, ${currentYear}` : "TBD"}\n` +
                `Time: ${selectedTime ?? "TBD"}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-montserrat font-bold text-sm uppercase tracking-widest transition-all"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Checkout via WhatsApp
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-4 rounded-xl font-montserrat font-semibold text-sm uppercase tracking-widest text-white/60 border border-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
