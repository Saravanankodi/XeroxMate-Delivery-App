
"use client";

import type { ReactNode } from "react";

interface ReviewSectionProps {
    title: string;
    icon: ReactNode;
    actionLabel: string;
    onAction: () => void;
    children: ReactNode;
}

export default function ReviewSection({
    title,
    icon,
    actionLabel,
    onAction,
    children,
}: ReviewSectionProps) {
    return (
        <section className="rounded-xl bg-white px-2.5 py-2.5 shadow-[0px_2px_5px_0px_#0000000D] backdrop-blur-[24px]">
            <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-[#EAEDFF] text-blue-600">
                        {icon}
                    </span>

                    <h2 className="text-[16px] font-bold  font-hanuman text-[#131B2E]">
                        {title}
                    </h2>
                </div>

                <button
                    type="button"
                    onClick={onAction}
                    className="text-[14px] font-medium text-blue-600"
                >
                    {actionLabel}
                </button>
            </div>

            <div className="space-y-1.5">{children}</div>
        </section>
    );
}

export function ReviewRow({
    label,
    value,
    valueClassName = "",
}: {
    label: string;
    value: ReactNode;
    valueClassName?: string;
}) {
    return (
        <div className="flex items-start justify-between font-medium gap-3 text-[14px] ">
            <span className="text-[#516070]">{label}</span>
            <span className={`text-right  text-[#131B2E] ${valueClassName}`}>
                {value}
            </span>
        </div>
    );
}