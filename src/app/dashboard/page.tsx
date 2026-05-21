"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { getAppointments, defaultUser, type Appointment } from "@/lib/data";

const SERVICE_ICONS: Record<string, string> = {
  "Classic Haircut": "content_cut",
  "Beard Sculpting": "face",
  "Precision Fade": "content_cut",
  "Custom Color": "palette",
  "Executive Facial": "spa",
  "Junior Royal Cut": "child_care",
};

function getDaysUntil(dateStr: string): string {
  const apptDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  apptDate.setHours(0, 0, 0, 0);
  const diff = Math.round((apptDate.getTime() - today.getTime()) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff < 0) return "Past";
  return `In ${diff} Days`;
}

function getTopService(completed: Appointment[]): string {
  if (!completed.length) return "—";
  const counts: Record<string, number> = {};
  for (const a of completed) counts[a.service] = (counts[a.service] ?? 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  const upcoming = appointments.find((a) => a.status === "upcoming") ?? null;
  const completed = appointments.filter((a) => a.status === "completed");
  const recentVisits = [...completed].reverse().slice(0, 5);
  const totalVisits = completed.length;
  const topService = getTopService(completed);
  const preferredBarber = upcoming?.barber ?? (completed[completed.length - 1]?.barber ?? "—");
  const preferredBarberRole = upcoming?.barberRole ?? (completed[completed.length - 1]?.barberRole ?? "");

  // loyalty: 100 pts per visit, tiers: 0 Silver, 500 Gold, 1000 Platinum
  const loyaltyPoints = totalVisits * 100;
  const tier = loyaltyPoints >= 1000 ? "Platinum" : loyaltyPoints >= 500 ? "Gold" : "Silver";
  const nextTier = tier === "Platinum" ? "Platinum" : tier === "Gold" ? "Platinum" : "Gold";
  const tierThreshold = tier === "Silver" ? 500 : 1000;
  const tierBase = tier === "Silver" ? 0 : 500;
  const tierProgress = tier === "Platinum" ? 100 : Math.min(100, Math.round(((loyaltyPoints - tierBase) / (tierThreshold - tierBase)) * 100));
  const pointsToNext = tier === "Platinum" ? 0 : tierThreshold - loyaltyPoints;

  return (
    <div className="flex-grow flex flex-col px-6 max-w-[1280px] mx-auto w-full py-8 md:py-16">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-2">
            Welcome Back, {defaultUser.name}
          </h2>
          <p className="font-montserrat text-white/60 text-lg">
            Your grooming journey is ready for you.
          </p>
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="User Avatar" className="w-full h-full object-cover" src={defaultUser.avatar} />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Next Appointment */}
        <div className="md:col-span-8 glassmorphism rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC4NO5YGdEBLvJG8o7qsYd2u6o-Hk41nLhZZKvC2hprYpM8wPWOXAO5nCHjnxyLNOKgPLSw24Q5_VyhAmPl8ByH5SkoAHTstd-RHO8MCGxBzd0czJL4KO8d3ODvAnJAcd1Na4-NyP8XmsaGOooR4526Q8AgJIC2yWCH4gj5xxaXE9ou6MB51Y7dCX1KNQ4P8u2peM7E5sUFBpKhkg73zHtUlT8YRZiE9yj49TIw_iEuEzhZkaDlc3ghHJTN6d0kNsHkOXq3CSv4BN_')" }}
          />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-playfair text-2xl font-bold text-primary">Next Appointment</h3>
              {upcoming && (
                <span className="bg-primary/10 text-primary font-montserrat text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-primary/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {getDaysUntil(upcoming.date)}
                </span>
              )}
            </div>
            {upcoming ? (
              <div className="flex flex-col gap-2 mb-8">
                <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight">
                  {upcoming.service}
                </h4>
                <p className="font-montserrat text-lg text-white/80 flex items-center gap-2 mt-4">
                  <span className="material-symbols-outlined text-primary">event</span>
                  {upcoming.date} at {upcoming.time}
                </p>
                <p className="font-montserrat text-white/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  with {upcoming.barber} ({upcoming.barberRole})
                </p>
                <p className="font-montserrat text-white/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  {upcoming.price} • {upcoming.duration}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mb-8">
                <h4 className="font-playfair text-2xl font-bold text-white/40 leading-tight">
                  No upcoming appointment
                </h4>
                <p className="font-montserrat text-white/40 mt-2">Book your next session to see it here.</p>
              </div>
            )}
          </div>
          <div className="relative z-10 flex flex-wrap gap-4 mt-auto">
            <Button className="!px-8 !py-3">Check In</Button>
            <Button variant="secondary" className="!px-8 !py-3" href="/book">
              {upcoming ? "Reschedule" : "Book Now"}
            </Button>
          </div>
        </div>

        {/* Loyalty Points */}
        <div className="md:col-span-4 bg-[#1C1C1C] rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/5">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <span className="material-symbols-outlined text-primary mb-4 text-5xl fill-current">diamond</span>
          <h3 className="font-playfair text-2xl font-bold text-white mb-1">Royal Rewards</h3>
          <div className="font-playfair text-5xl font-bold text-primary mb-4">
            {loyaltyPoints.toLocaleString()}
          </div>
          <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest mb-6 font-semibold">
            Current Points
          </p>
          <div className="w-full bg-[#121317] rounded-full h-2 mb-3 border border-white/5">
            <div
              className="bg-gradient-to-r from-[--color-gold-gradient-start] to-[--color-gold-gradient-end] h-2 rounded-full transition-all duration-500"
              style={{ width: `${tierProgress}%` }}
            />
          </div>
          <div className="font-montserrat text-xs font-semibold text-white/60 flex justify-between w-full uppercase tracking-wider">
            <span className="text-primary">{tier} Tier</span>
            <span>{tier === "Platinum" ? "Max Tier" : `${pointsToNext} to ${nextTier}`}</span>
          </div>
        </div>

        {/* Recent Visits */}
        <div className="md:col-span-6 bg-[#1C1C1C] rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-playfair text-2xl font-bold text-white">Recent Visits</h3>
          </div>
          <div className="space-y-0">
            {recentVisits.length === 0 ? (
              <p className="font-montserrat text-sm text-white/40 py-4">No visits yet.</p>
            ) : (
              recentVisits.map((visit) => (
                <div key={visit.id} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#121317] flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                      <span className="material-symbols-outlined text-white/60">
                        {SERVICE_ICONS[visit.service] ?? "content_cut"}
                      </span>
                    </div>
                    <div>
                      <p className="font-montserrat text-sm font-semibold text-white">{visit.service}</p>
                      <p className="font-montserrat text-xs text-white/60 mt-1">{visit.date} • {visit.time}</p>
                    </div>
                  </div>
                  <span className="text-primary font-montserrat text-xs font-semibold border border-primary/20 px-3 py-1 rounded uppercase tracking-wider">
                    Completed
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Preferred Barber + Stats */}
        <div className="md:col-span-6 grid grid-rows-2 gap-6">
          <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/10 flex items-center gap-6 group hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shrink-0 group-hover:border-primary transition-colors bg-[#121317] flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">person</span>
            </div>
            <div className="flex-1">
              <p className="font-montserrat text-xs text-primary uppercase tracking-widest font-semibold mb-1">
                Preferred Barber
              </p>
              <h4 className="font-playfair text-2xl font-bold text-white mb-1">{preferredBarber}</h4>
              {preferredBarberRole && (
                <p className="font-montserrat text-sm text-white/50">{preferredBarberRole}</p>
              )}
            </div>
            <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-[#0A0A0A] transition-colors shrink-0">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-white/10 grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">
                Total Visits
              </p>
              <p className="font-playfair text-4xl font-bold text-white">{totalVisits}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">
                Top Service
              </p>
              <p className="font-playfair text-2xl font-bold text-white">{topService}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
