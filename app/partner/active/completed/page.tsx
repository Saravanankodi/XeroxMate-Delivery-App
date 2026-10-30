
// "use client";

// import Link from "next/link";
// import {
//     ArrowRight, Check, CheckCircle2, ChevronDown, Clock3,
//     House, ReceiptText, ShieldCheck, Wallet, Zap,
// } from "lucide-react";
// import TopBar from "@/components/TopBar";
// import Navbar from "@/components/Navbar";

// export default function DeliveryCompletedPage() {
//     return (
//         <main className="min-h-screen bg-[#F2F4F7] text-slate-800">
//             <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
//                 <TopBar />

//                 <div className="flex-1 space-y-2.5 px-2.5 pb-3 pt-3">
//                     {/* Completion status */}
//                     <section className="flex flex-col items-center rounded-xl bg-white px-3 py-3 text-center">
//                         <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-[0_4px_15px_rgba(5,150,105,0.2)]">
//                             <Check size={29} strokeWidth={3} />
//                             <span className="absolute -right-0.5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-emerald-800">
//                                 <Check size={10} />
//                             </span>
//                         </div>

//                         <h1 className="mt-2 text-[14px] font-bold text-slate-800">
//                             Delivery Completed!
//                         </h1>
//                         <p className="mt-1 text-[8px] text-emerald-700">
//                             <CheckCircle2 size={10} className="mr-1 inline" />
//                             Completed at 12:08 PM · On Time (13m 40s)
//                         </p>
//                         <p className="mt-1.5 rounded-full bg-slate-100 px-2 py-1 text-[7px] font-semibold text-slate-600">
//                             #XM20481 · OTP: 8429 Verified
//                         </p>
//                     </section>

//                     {/* Earnings card */}
//                     <section className="rounded-xl bg-[#292D2E] p-3 text-white shadow-sm">
//                         <div className="flex items-start justify-between gap-2">
//                             <div>
//                                 <p className="text-[7px] font-bold text-emerald-300">
//                                     TOTAL REWARD (INSTANT)
//                                 </p>
//                                 <div className="mt-1 flex items-baseline gap-1.5">
//                                     <span className="text-[25px] font-bold leading-none text-emerald-400">
//                                         ₹97.00
//                                     </span>
//                                     <span className="text-[8px] text-white/40 line-through">
//                                         ₹88.00
//                                     </span>
//                                 </div>
//                             </div>

//                             <span className="rounded-full bg-emerald-700/40 px-2 py-1 text-[7px] font-bold text-emerald-300">
//                                 ✓ +₹25 Bonus Added
//                             </span>
//                         </div>

//                         <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-white/10 p-2 text-[8px] text-emerald-100">
//                             <Wallet size={12} />
//                             <span>
//                                 <strong>Wallet Updated:</strong> Ready for instant bank payout.
//                             </span>
//                         </div>

//                         <div className="mt-3 flex items-center justify-between border-b border-white/10 pb-2">
//                             <span className="flex items-center gap-1 text-[9px] font-semibold">
//                                 <ReceiptText size={11} /> Itemized Settlement Fare
//                             </span>
//                             <ChevronDown size={13} />
//                         </div>

//                         <div className="space-y-2 py-2 text-[9px]">
//                             <div className="flex justify-between gap-2">
//                                 <span className="text-white/65">Base Delivery Fare (3.8 km)</span>
//                                 <span>₹52.00</span>
//                             </div>
//                             <div className="flex justify-between gap-2">
//                                 <span className="text-white/65">Fragile Thesis Seal Handling</span>
//                                 <span>₹20.00</span>
//                             </div>
//                             <div className="flex justify-between gap-2 text-emerald-300">
//                                 <span>Express SLA On-Time Bonus</span>
//                                 <span>+₹15.00</span>
//                             </div>
//                             <div className="flex justify-between gap-2 text-emerald-300">
//                                 <span>Student Handover Tip</span>
//                                 <span>+₹10.00</span>
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between border-t border-white/15 pt-2">
//                             <span className="text-[9px] font-semibold">Net Credited Payout</span>
//                             <span className="text-[14px] font-bold text-emerald-400">₹97.00</span>
//                         </div>
//                     </section>

//                     {/* Handover summary */}
//                     <section>
//                         <div className="mb-1.5 flex items-center justify-between">
//                             <h2 className="text-[9px] font-bold tracking-wide text-slate-500">
//                                 HANDOVER SUMMARY
//                             </h2>
//                             <span className="flex items-center gap-1 text-[8px] font-semibold text-emerald-700">
//                                 <ShieldCheck size={11} /> Proof Verified
//                             </span>
//                         </div>

//                         <div className="rounded-xl bg-white p-2.5 shadow-sm">
//                             <div className="flex items-center gap-2">
//                                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                                     AK
//                                 </div>
//                                 <div className="min-w-0 flex-1">
//                                     <p className="text-[10px] font-bold">Arun Kumar</p>
//                                     <p className="mt-0.5 text-[8px] text-slate-500">
//                                         KCE Campus Boys Hostel 2, Gate B
//                                     </p>
//                                 </div>
//                                 <span className="text-[9px] font-bold text-blue-700">★ 5.0</span>
//                             </div>

//                             <div className="mt-2 rounded-lg bg-indigo-50 p-2 text-[8px] leading-relaxed text-slate-600">
//                                 <span className="mr-1 font-bold text-blue-700">”</span>
//                                 Super fast! Thesis was securely packed and completed the
//                                 dispatch in the slight drizzle. Thank you Saravanan bhaiya!
//                             </div>
//                         </div>
//                     </section>

//                     {/* Next actions */}
//                     <Link
//                         href="/partner/home"
//                         className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#0647A8] px-3 py-2.5 text-[10px] font-bold text-white shadow-sm"
//                     >
//                         <Zap size={14} />
//                         FIND NEXT ORDER
//                         <ArrowRight size={13} />
//                     </Link>

//                     <Link
//                         href="/partner/earnings"
//                         className="flex min-h-[34px] items-center justify-center gap-2 rounded-lg bg-slate-200 px-3 py-2 text-[9px] font-bold text-slate-700"
//                     >
//                         <ReceiptText size={12} />
//                         VIEW EARNINGS &amp; WALLET
//                     </Link>

//                     <p className="flex items-center justify-center gap-1.5 px-2 text-center text-[8px] leading-relaxed text-slate-500">
//                         <CheckCircle2 size={11} className="shrink-0 text-emerald-700" />
//                         Auto-Dispatch is active. You will receive new alerts while riding.
//                     </p>
//                 </div>

//                 <Navbar />
//             </div>
//         </main>
//     );
// }


















"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Bell,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock3,
    FileText,
    House,
    MessageCircle,
    ReceiptText,
    ShieldCheck,
    Wallet,
    Zap,
    Star,
} from "lucide-react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const order = {
    id: "XM20481",
    customer: "Arun Kumar",
    destination: "KCE Campus Boys Hostel 2, Gate B",
    otp: "8429",
    completedAt: "12:08 PM",
    duration: "13m 40s",
    rating: "5.0",
    payout: 97,
    previousPayout: 88,
    bonus: 25,
};

const fareItems = [
    {
        label: "Base Delivery Fare (3.8 km)",
        amount: "₹52.00",
        bullet: "#C3C6D6",
        color: "#EFF1F3",
        font: "var(--font-space-grotesk)",
    },
    {
        label: "Fragile Thesis Seal Handling",
        amount: "₹20.00",
        bullet: "#B2C5FF",
        color: "#EFF1F3",
        font: "var(--font-plus-jakarta-sans)",
    },
    {
        label: "Express SLA On-Time Bonus (<15m)",
        amount: "+₹15.00",
        bullet: "#6FFBBE",
        color: "#6FFBBE",
        font: "var(--font-plus-jakarta-sans)",
    },
    {
        label: "Student Handover Tip",
        amount: "+₹10.00",
        bullet: "#4EDEA3",
        color: "#4EDEA3",
        font: "var(--font-space-grotesk)",
    },
];

const spaceGrotesk = "font-[var(--font-space-grotesk)]";
const hanuman = "font-[var(--font-hanuman)]";

export default function DeliveryCompletedPage() {
    const [showSettlement, setShowSettlement] = useState(true);

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#F7F9FB] text-[#191C1E] mb-15">
            <div className="relative mx-auto flex min-h-screen w-full max-w-[412px] flex-col overflow-hidden bg-[#F7F9FB]">
                {/* Existing application header */}
                <TopBar />

                {/* Delivery completion */}
                <div className="flex-1 px-4 pb-3 pt-2">
                    <section className="relative flex h-[179px] flex-col items-center overflow-hidden text-center">
                        {/* Mint ambient glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-[-40px] h-[176px] w-[176px] -translate-x-1/2 rounded-full bg-[#6FFBBE]/[0.35] blur-[40px]"
                        />

                        {/* Success icon */}
                        <div className="relative mt-2 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#004B31] text-white shadow-[0_4px_6px_-4px_rgba(0,75,49,0.2),0_10px_15px_-3px_rgba(0,75,49,0.2)]">
                            <div className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-white">
                                <Check
                                    size={25}
                                    strokeWidth={3.5}
                                    className="text-[#004B31]"
                                />
                            </div>

                            <span className="absolute -right-0.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#6FFBBE] text-[#004B31] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                                <ShieldCheck size={14} strokeWidth={2.5} />
                            </span>
                        </div>

                        <h1
                            className={`${hanuman} mt-1 text-[24px] font-bold leading-[32px] tracking-[-0.24px] text-[#191C1E]`}
                        >
                            Delivery Completed!
                            <span className="ml-1 inline-flex translate-y-[1px] text-[#004B31]">
                                <CheckCircle2 size={17} strokeWidth={2.5} />
                            </span>
                        </h1>

                        <div
                            className={`${spaceGrotesk} mt-0.5 flex flex-wrap items-center justify-center gap-x-1.5 text-[12px] leading-4 tracking-[0.48px]`}
                        >
                            <Clock3 size={11} className="text-[#004B31]" />
                            <span className="font-semibold text-[#737785]">
                                Completed at {order.completedAt}
                            </span>
                            <span className="text-[#737785]">•</span>
                            <span className="font-bold text-[#004B31]">
                                On Time ({order.duration})
                            </span>
                        </div>

                        <div
                            className={`${spaceGrotesk} mt-1 flex min-h-[26px] items-center justify-center gap-1.5 rounded-full bg-[#ECEEF0] px-3 py-1 text-[11px] font-bold leading-[14px] tracking-[0.55px]`}
                        >
                            <FileText size={11} className="text-[#003A94]" />
                            <span className="text-[#434653]">#{order.id}</span>
                            <span className="text-[#C3C6D6]">•</span>
                            <span className="text-[#004B31]">
                                OTP: {order.otp} Verified
                            </span>
                        </div>
                    </section>

                    {/* Earnings and settlement */}
                    <section className="relative mt-4 overflow-hidden rounded-[12px] bg-[#2D3133] p-4 text-white shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)]">
                        {/* Decorative upper-right glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-2 -top-2 h-36 w-36 rounded-full bg-[radial-gradient(circle,#0065444D_0%,transparent_72%)] blur-2xl"
                        />

                        <div className="relative flex min-h-[56px] items-start justify-between gap-2">
                            <div className="min-w-0">
                                <p
                                    className={`${spaceGrotesk} text-[11px] font-bold uppercase leading-[14px] tracking-[0.55px] text-[#6FFBBE]`}
                                >
                                    TOTAL PAYOUT CREDITED
                                </p>

                                <div className="flex items-baseline gap-1">
                                    <span
                                        className={`${hanuman} text-[40px] font-bold leading-[48px] tracking-[-1.2px] text-[#6FFBBE]`}
                                    >
                                        ₹{order.payout.toFixed(2)}
                                    </span>

                                    <span
                                        className={`${spaceGrotesk} whitespace-nowrap text-[12px] font-semibold leading-4 tracking-[0.48px] text-[#4EDEA3]`}
                                    >
                                        ₹{order.previousPayout.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <span
                                className={`${spaceGrotesk} mt-0 flex shrink-0 items-center gap-1 rounded-full bg-[#006544] px-2.5 py-1 text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#58E7AB]`}
                            >
                                <Zap size={10} fill="currentColor" />
                                +₹{order.bonus} Bonus Added
                            </span>
                        </div>

                        {/* Wallet confirmation */}
                        <div className="relative mt-4 flex min-h-9 items-center gap-2 rounded-lg bg-[#E0E3E5]/[0.15] px-2.5 py-2">
                            <Wallet
                                size={13}
                                strokeWidth={2.5}
                                className="shrink-0 text-[#6FFBBE]"
                            />

                            <p
                                className={`${hanuman} text-[12px] font-normal leading-4 text-[#EFF1F3]`}
                            >
                                <span className="font-bold text-[#6FFBBE]">
                                    Wallet Updated:
                                </span>{" "}
                                Ready for instant bank payout.
                            </p>
                        </div>

                        {/* Expandable settlement heading */}
                        <button
                            type="button"
                            aria-expanded={showSettlement}
                            onClick={() => setShowSettlement((value) => !value)}
                            className="relative mt-3 flex min-h-7 w-full items-center justify-between border-b border-white/10 pb-2 text-left"
                        >
                            <span className="flex items-center gap-2">
                                <ReceiptText size={12} className="text-[#DAE2FD]" />
                                <span
                                    className={`${hanuman} text-[12px] font-bold leading-4 tracking-[0.48px] text-[#DAE2FD]`}
                                >
                                    Itemized Settlement Fare
                                </span>
                            </span>

                            <ChevronDown
                                size={15}
                                className={`text-[#DAE2FD] transition-transform duration-200 ${showSettlement ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {showSettlement && (
                            <div className="relative space-y-[9px] py-2.5">
                                {fareItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex min-h-4 items-center gap-2"
                                    >
                                        <span
                                            className="h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{ backgroundColor: item.bullet }}
                                        />

                                        <span
                                            className="min-w-0 flex-1 text-[12px] font-normal leading-4"
                                            style={{
                                                fontFamily: item.font,
                                                color: item.color,
                                                opacity:
                                                    item.label.startsWith("Base") ||
                                                        item.label.startsWith("Fragile")
                                                        ? 0.9
                                                        : 1,
                                            }}
                                        >
                                            {item.label}
                                        </span>

                                        <span
                                            className={`${spaceGrotesk} shrink-0 text-[12px] font-semibold leading-4 tracking-[0.48px] ${item.label.startsWith("Base") ||
                                                    item.label.startsWith("Fragile")
                                                    ? "text-[#EFF1F3]"
                                                    : ""
                                                }`}
                                            style={{
                                                color:
                                                    item.label.startsWith("Base") ||
                                                        item.label.startsWith("Fragile")
                                                        ? "#EFF1F3"
                                                        : item.color,
                                            }}
                                        >
                                            {item.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Net payout */}
                        <div className="relative flex items-center justify-between border-t border-[#E0E3E5]/20 pt-2.5">
                            <span
                                className={`${spaceGrotesk} text-[12px] font-bold leading-4 tracking-[0.48px] text-[#EFF1F3]`}
                            >
                                Net Credited Payout
                            </span>

                            <span
                                className={`${spaceGrotesk} text-[18px] font-semibold leading-6 tracking-[0.48px] text-[#6FFBBE]`}
                            >
                                ₹97.00
                            </span>
                        </div>
                    </section>

                    {/* Handover summary */}
                    <section className="mt-4 rounded-[12px] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                        <div className="mb-2 flex items-center justify-between gap-2">
                            <h2
                                className={`${spaceGrotesk} text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#737785]`}
                            >
                                HANDOVER SUMMARY
                            </h2>

                            <span
                                className={`${spaceGrotesk} flex items-center gap-1 whitespace-nowrap text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#004B31]`}
                            >
                                <ShieldCheck size={12} />
                                Proof Verified
                            </span>
                        </div>

                        {/* Recipient details */}
                        <div className="flex min-h-14 items-center gap-2 rounded-lg bg-[#F2F4F6] p-1">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#DAE2FD] text-sm font-bold text-[#003A94] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                                AK
                            </div>

                            <div className="min-w-0 flex-1">
                                <p
                                    className={`${spaceGrotesk} text-[18px] font-semibold leading-6 text-[#191C1E]`}
                                >
                                    {order.customer}
                                </p>

                                <p
                                    className={`${spaceGrotesk} truncate text-[12px] font-normal leading-4 text-[#434653]`}
                                >
                                    {order.destination}
                                </p>
                            </div>

                            <span
                                className={`${spaceGrotesk} flex shrink-0 items-center gap-0.5 text-[12px] font-bold leading-4 tracking-[0.48px] text-[#003A94]`}
                            >
                                <Star size={11} fill="currentColor" />
                                {order.rating}
                            </span>
                        </div>

                        {/* Customer review */}
                        <div className="mt-2 flex min-h-[68px] gap-2 rounded-lg bg-[#DAE2FD]/[0.3] p-2.5">
                            <span className="mt-0.5 shrink-0 text-[#003A94]">
                                <MessageCircle size={13} fill="currentColor" />
                            </span>

                            <p
                                className={`${spaceGrotesk} text-[12px] font-normal leading-4 text-[#5C647A]`}
                            >
                                “Super fast! Thesis was securely packed and
                                <br />
                                completely dry despite the slight drizzle. Thank
                                <br />
                                you Saravanan bhaiya!”
                            </p>
                        </div>
                    </section>

                    {/* Primary action */}
                    <Link
                        href="/partner/home"
                        className={`mt-4 flex min-h-14 w-full items-center justify-center gap-2 rounded-[12px] bg-[#003A94] px-3 py-3 text-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#00327F] active:scale-[0.99] ${hanuman} text-[18px] font-bold leading-6`}
                    >
                        <Zap size={20}  stroke="#fff"/>
                        <span className="text-white text-lg">FIND NEXT ORDER</span>
                        <ArrowRight size={20} stroke="#fff"/>
                    </Link>

                    {/* Secondary action */}
                    <Link
                        href="/partner/earnings"
                        className={`mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#E6E8EA] px-3 py-3 text-[#191C1E] transition-colors hover:bg-[#DADDE0] active:scale-[0.99] ${hanuman} text-[14px] font-bold leading-[18px] tracking-[0.28px]`}
                    >
                        <Wallet size={18} />
                        VIEW EARNINGS &amp; WALLET
                    </Link>

                    {/* Auto-dispatch notice */}
                    <p
                        className={`${spaceGrotesk} mx-auto mt-3 flex max-w-[304px] items-start gap-1.5 text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#434653]`}
                    >
                        <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#004B31]"
                        />
                        <span>
                            Auto-Dispatch is active. You will receive alerts while riding.
                        </span>
                    </p>
                </div>

                {/* Existing bottom navigation */}
                <Navbar />
            </div>
        </main>
    );
}
