"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Truck,
  Wallet,
  Headset,
  UserRound,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/partner/home",
    icon: House,
  },
  {
    label: "Active",
    href: "/partner/active",
    icon: Truck,
  },
  {
    label: "Earnings",
    href: "/partner/earnings",
    icon: Wallet,
  },
  {
    label: "Support",
    href: "/partner/support",
    icon: Headset,
  },
  {
    label: "Profile",
    href: "/partner/profile",
    icon: UserRound,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Rider navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto grid h-14 max-w-lg grid-cols-5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(`${ href }/`);

return (
    <Link
        key={label}
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
    >
        <Icon
            size={19}
            strokeWidth={isActive ? 2.2 : 1.7}
        />
        <span
            className={`text-[9px] ${isActive ? "font-bold  font-hanuman" : "font-medium"
                }`}
        >
            {label}
        </span>
    </Link>
);
        })}
      </div >
    </nav >
  );
}