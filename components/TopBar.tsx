"use client";

import { Bell, Clock3, CircleCheck } from "lucide-react";

interface TopBarProps {
  orderId?: string;
  elapsedTime?: string;
  isOnline?: boolean;
}

export default function TopBar({
  orderId = "XM20481",
  elapsedTime = "01:25s",
  isOnline = true,
}: TopBarProps) {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      {/* Main top bar */}
      <div className="flex min-h-12 items-center justify-between px-4">
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-hanuman text-base font-extrabold  font-hanuman tracking-tight text-[#17213c]">
            XEROXMATE RIDER
          </h1>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[12px] font-bold  font-hanuman ${isOnline
                ? "bg-emerald-50 text-emerald-800"
                : "bg-gray-100 text-red-500"
              } `}
          >
            <span
              className={`size-1.5 rounded-full ${isOnline ? "bg-emerald-800" : "bg-red-500"
                } `}
            />
            {isOnline ? "ONLINE" : "OFFLINE"}
          </span>

          <button
            type="button"
            aria-label="Notifications"
            className="relative flex size-8 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
          >
            <Bell size={18} strokeWidth={1.8} />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-red-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
