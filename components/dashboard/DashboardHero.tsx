"use client";

import Image from "next/image";
import { Bell } from "lucide-react";

interface DashboardHeroProps {
    riderName?: string;
    avatar?: string;
}

export default function DashboardHero({
    riderName = "Rahul",
    avatar = "/images/user.png",
}: DashboardHeroProps) {
    return (
        <section className="flex items-center justify-between gap-3 px-1 py-1">
            <div className="min-w-0">
                <h1 className="font-hanuman text-xl font-bold  font-hanuman text-[#17213c]">
                    Good morning, {riderName} <span>☀️</span>
                </h1>
                <p className="mt-0.5 text-[14px] text-gray-400">
                    Ready to start your shift?
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
             
                <div className="relative size-9 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                    <Image
                        src={avatar}
                        alt={`${riderName}'s profile`}
                        fill
                        sizes="36px"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}