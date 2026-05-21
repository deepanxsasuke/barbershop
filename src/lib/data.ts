export interface Appointment {
  id: string;
  service: string;
  duration: string;
  price: string;
  barber: string;
  barberRole: string;
  date: string;
  time: string;
  status: "upcoming" | "completed";
}

export interface UserProfile {
  name: string;
  avatar: string;
  loyaltyPoints: number;
  tier: string;
  pointsToNext: number;
  nextTier: string;
  tierProgress: number;
}

export const defaultUser: UserProfile = {
  name: "Alexander",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp3BwplxeuDQJNCaFH_64SrEUo_QDuE7yyMeaxrNLbRbul3fJukz5PsOqqjHirRorM-Q7gYDIuodR1v1BFac_4YYmlQ5RTcoEocjZKzD9pLeN08FcuENR7zy5OGSyBJKBV_Go5vSVBP7YIp2J97la4FmU_f0cV_j7npLbFY6wltDPQU6hXXUexPWWbVY7W-EFxkObtQ9yfKoVUa8XqLkbdHhabYYDI1bx4C52u-Lu5QRQYs99LDMyybCGznPDqP_1ViGkr3z7a9rva",
  loyaltyPoints: 0,
  tier: "Silver",
  pointsToNext: 500,
  nextTier: "Gold",
  tierProgress: 0,
};

export const APPOINTMENTS_KEY = "royalcuts_appointments";

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveAppointment(appt: Appointment): void {
  const all = getAppointments();
  // mark any previous upcoming as completed when a new one is booked
  const updated = all.map((a) =>
    a.status === "upcoming" ? { ...a, status: "completed" as const } : a
  );
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify([...updated, appt]));
}

export interface Service {
  id: number;
  title: string;
  price: string;
  duration: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 0,
    title: "Classic Haircut",
    price: "$45+",
    duration: "45 mins",
    description:
      "A tailored haircut designed to suit your individual style and facial structure. Includes a consultation, precision cut, and styling.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJdwslf-7W_wR_kEDh0lMNAzsdDRZ-_z2lDJezxx3vqfeQ0V8Z2oMng-r0FFAmIbysgfd4RMlSVhUryvVWwIGqO5voTsTyxAuO86xc-cusEmojBTRGwGU-PHpT7F1dyyF1KyWuGhpb3WuPp38rIeHXl5GoC9RPwBKIauJ3rg8sQ71rd9tfN-J4ROssfhnOQNuKE5BLdXXSdl6Kv3NCCm59NEyjI8Lrux4lG9VGZWi4Fb9RxP8KhbOYJGYmevKYpWPmWpnx3V1SsZ1k",
  },
  {
    id: 1,
    title: "Beard Sculpting",
    price: "$30+",
    duration: "30 mins",
    description:
      "Detailed beard shaping, line-up, and conditioning. Finished with premium hot towel treatment and beard oil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPL3uXx3eXCplSalcsGgr8Q48d-xNFe3RkBF7w5cVDhQWYAtBOfE4FmL3AqEDfVP4qTlXbUlYdpHHecq9ZifItBv0qitVvjt4TOVy4oIpP3sPoB1kzQzczQeVNrQ5TUIWHZX3coJSSWDamkJNApEOMkaABroBe2kueFDrQUp_Doo6C1llkKla5vzMCx6sriSvq6LQo5r5BjaKGkJI-rGx8Vdlj5h83Lbt_H4lkI-3PmfElMzVuFBl5rH94wT2-xMkfvrEUMqutqIey",
  },
  {
    id: 2,
    title: "Precision Fade",
    price: "$55+",
    duration: "60 mins",
    description:
      "Flawless skin fade blending into any length on top. Requires meticulous attention to detail for a seamless transition.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYqOs0ab7-h5hV2K_Dqy9EiOzH5n28MRq62LLMTAGntZJ-RQ0LxDLzhzyNg5bL8i0xG4_HMqY1I6br6-81SsCcKByeZiLapMVElOR_DUDMji6hccjsGxcAhl4ZjvR86fZQmB9KT8Qt7bJl_zP0x2LVpSfD25GPcCpYmZxDF9hG-dppng8LBM35SzH4kqXS9tDc0OoOoDY5aiyAy7n_xxxSWIkozxvEPVAq4jaNcbSN8srLKX0BQn1b6ttd3XHoVjP1jTQZHZyt2-Kg",
  },
  {
    id: 3,
    title: "Custom Color",
    price: "$85+",
    duration: "90 mins",
    description:
      "Professional grey blending or full color transformation using premium, nourishing dyes for a natural, rich finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8T1g1Tn4oAq1A3qdKuDwbfT5Gwzp7vZIFZ3WvrWQwdVfVZAedbWIaa3eD7RLPrAzUCUZ9tATvSn6l8tFihL2Pg0q2NuP7pXty2gZ39hh5wk3d-MYKfRTGe571Yr51vklFmYE1mwltGtXQjLNb6Pg2gaZiat36b4CtsDAo9UFcbBClRNY5Y1MgYibPS91h6_P3J7PuGCIM-LqKV9MlFDtwcPph-E7tPbo9hGL7ibTPb9WCCU2tKYcxBBlg2Xq9EHEpbZYsiS2QM32",
  },
  {
    id: 4,
    title: "Executive Facial",
    price: "$60+",
    duration: "45 mins",
    description:
      "Deep cleansing, exfoliation, and hydration tailored for men's skin. Includes a relaxing hot towel wrap and facial massage.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzdoD1oSB8BE5kBKHxZIgMFColZ73yrhGFARjd0E3mcKdm7M-AfVMwlZrzWH9wjA-OZRB70O0UsMWz_KSnEUrAcOje9cEu0_qTl0pSQqGWSiYEcypwBrwZO09rBuHeQ37X0RdremmifcujWAgb_WNTDPD8kisbcp18ikQxiyttimEguhUyFglnf5Azc8-7xCOE6YwWOKflGhqRw9Dx9X01jRU7g3f3Ec8tnLR5EBgdTdSFE43JI9QlN7MPKn0hs9jZ8_qiGpOx4OFd",
  },
  {
    id: 5,
    title: "Junior Royal Cut",
    price: "$35+",
    duration: "30 mins",
    description:
      "A premium grooming experience tailored for younger gentlemen (under 12). Includes a stylish cut and finishing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7GMubk_vr8_3gAGrHz7hvgZt33fI7jDn-0FjoZ5vwvJsZzpkbchqjPk0-wYxW3U13ciSlpDibZ1zQxl5hL6VNlSSIztdebU-BWyV9uLB3feocFQB4-vUk_Jj0pQVChQ4NdFMipBFdkMb0s-wZblYxeraOPQTewiDb9DPR0OEqwzVmaoMwbNZXwKD65WWz_6xQke2yumPbo4kQUBIu03WrjdnITzRxI69-H7YD6kFBHa1dMl7YQbGYwlgk68w6ktCF70sb92DUMJc",
  },
];
