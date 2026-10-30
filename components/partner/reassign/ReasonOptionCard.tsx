
"use client";

import { CheckCircle2 } from "lucide-react";

export type ReassignReason = {
    id: string;
    title: string;
    description: string;
    badge?: string;
    badgeTone?: "green" | "neutral" | "amber";
};

type ReasonOptionCardProps = {
    reason: ReassignReason;
    selected: boolean;
    onSelect: (id: string) => void;
};

export default function ReasonOptionCard({
    reason,
    selected,
    onSelect,
}: ReasonOptionCardProps) {
    const badgeStyles = {
        green: "bg-[#ECEEF0] text-[#004B31]",
        neutral: "bg-[#ECEEF0] text-[#434653]",
        amber: "bg-amber-50 text-amber-800",
    };

    return (
        <button
            type="button"
            onClick={() => onSelect(reason.id)}
            aria-pressed={selected}
            className={`flex w-full items-start gap-3 rounded-xl border bg-white p-4 text-left shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors ${selected
                    ? "border-[#003A94] ring-1 ring-[#003A94]/10"
                    : "border-transparent"
                }`}
        >
            <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border p-1 ${selected
                        ? "border-[#003A94]"
                        : "border-[#767676]"
                    }`}
            >
                {selected && (
                    <span className="size-3 rounded-full bg-[#003A94]" />
                )}
            </span>

            <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                    <span className="font-['Space_Grotesk'] text-[16px] font-semibold leading-6 text-[#191C1E]">
                        {reason.title}
                    </span>

                    {reason.badge && (
                        <span
                            className={`rounded-full px-2 py-0.5 font-['Space_Grotesk'] text-[11px] font-bold leading-[14px] tracking-[0.55px] ${badgeStyles[reason.badgeTone ?? "neutral"]
                                }`}
                        >
                            {reason.badge}
                        </span>
                    )}
                </span>

                <span className="mt-1 block font-['Space_Grotesk'] text-[13px] font-normal leading-[18px] text-[#434653]">
                    {reason.description}
                </span>
            </span>

            {selected && (
                <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[#003A94]"
                />
            )}
        </button>
    );
}
