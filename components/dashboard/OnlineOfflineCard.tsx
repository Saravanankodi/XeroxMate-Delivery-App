
"use client";

import { Power } from "lucide-react";

interface OnlineOfflineCardProps {
  isOnline: boolean;
  onStatusChange: (online: boolean) => void;
}

export default function OnlineOfflineCard({
  isOnline,
  onStatusChange,
}: OnlineOfflineCardProps) {
  return (
    <section className="rounded-xl border border-gray-100 bg-white p-3 shadow-[0px_1px_2px_0px_#0000000D]">
      <div className="flex items-center gap-2">
        <span
          className={`size-2 rounded-full ${
    isOnline ? "bg-emerald-400" : "bg-rose-400"
} `}
        />

        <h2 className="text-lg font-bold  font-hanuman text-[#17213c]">
          {isOnline ? "You're Online" : "You're Offline"}
        </h2>
      </div>

      <p className="mt-1 text-[14px] leading-relaxed text-gray-400">
        {isOnline
          ? "You're online and ready to receive nearby delivery orders."
          : "Go online to begin receiving high-priority orders nearby."}
      </p>

      <button
        type="button"
        onClick={() => onStatusChange(!isOnline)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold  font-hanuman text-white transition hover:bg-blue-700"
      >
        <Power size={18} />
        {isOnline ? "Go Offline" : "Go Online"}
      </button>
    </section>
  );
}