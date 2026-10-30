"use client";

import Link from "next/link";
import { useState } from "react";
import {
    AlertTriangle,
    BellRing,
    CheckCircle2,
    Clock3,
    Info,
    MessageSquare,
    Phone,
    ScanLine,
    ShieldCheck,
    Store,
} from "lucide-react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import OrderProgress from "@/components/partner/active/OrderProgress";

function ShopContactCard() {
    return (
        <section className="rounded-xl bg-white p-2.5 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-700">
                    <Store size={25} />
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="text-[18px] font-bold font-hanuman text-slate-800">
                        Tamil Printers &amp; Stationers
                    </h2>
                    <p className="mt-1 text-[12px]  text-slate-500">
                        14/B, TSR Big Street (Near Gate Bay)
                        <br />
                        <span className="font-bold">
                            Contact: M. Senthil Nathan (Store Mgr)
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
                <a
                    href="tel:"
                    className="flex items-center justify-center gap-1 rounded-lg bg-slate-50 px-1 py-2 text-[12px] font-semibold text-slate-700 hover:bg-[#DAE2FD] transition"
                >
                    <Phone size={15} fill="#003A94" stroke="#003A94" />
                    Call Shop
                </a>

                <Link
                    href="/partner/support"
                    className="flex items-center justify-center gap-1 rounded-lg bg-slate-50 px-1 py-2 text-[12px] font-semibold text-slate-700 hover:bg-[#DAE2FD] transition"
                >
                    <MessageSquare size={15} fill="#003A94" stroke="#003A94" />
                    Bay Chat
                </Link>

                <button
                    type="button"
                    onClick={() => window.alert("Connect the merchant bell action here.")}
                    className="flex items-center justify-center gap-1 rounded-lg bg-slate-50 px-1 py-2 text-[12px] font-semibold text-slate-700 hover:bg-[#DAE2FD] transition"
                >
                    <BellRing size={15} fill="#003A94" stroke="#003A94" />
                    Ring Bell
                </button>
            </div>
        </section>
    );
}

function PackageVerificationCard() {
    const [pin, setPin] = useState(["", "", "", ""]);

    function updatePin(index: number, value: string) {
        const digit = value.replace(/\D/g, "").slice(-1);

        setPin((current) =>
            current.map((item, itemIndex) =>
                itemIndex === index ? digit : item
            )
        );
    }

    return (
        <section className="rounded-xl bg-white p-2.5 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-bold tracking-wide text-slate-400">
                HANDOVER AUTHENTICATION
            </p>
            <h2 className="text-[20px] font-bold font-hanuman text-slate-800">
                Verify &amp; Collect Package
            </h2>

            <div className="mt-2 flex items-start gap-1.5 rounded-lg bg-slate-100 p-2">
                <ShieldCheck size={25} fill="#004B31" className="mt-0.5 shrink-0 text-white" />
                <div>
                    <p className="text-[12px] font-bold text-slate-800">
                        Security Tagged Envelopes
                    </p>
                    <p className="text-[12px] text-slate-500">
                        Tamper Tape #TP-204
                    </p>
                </div>
            </div>

            <div className=" rounded-xl pt-2 pb-4 px-4 bg-[#2D3133]"> <button
                type="button"
                onClick={() =>
                    window.alert("Connect your QR scanning implementation here.")
                }
                className="mt-2 flex min-h-[85px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-500 bg-[#2D3133] px-2 py-2 text-center text-white"
            >
                <span className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <ScanLine size={16} />
                </span>
                <span className="text-[14px] font-bold font-hanuman tracking-wide">
                    SCAN MERCHANT HANDOVER QR
                </span>
                <span className="mt-0.5 text-[12px] text-white/60">
                    Align camera to merchant QR or per-packet pouch
                </span>
                <span className="mt-1 rounded-full bg-emerald-700 px-2 py-0.5 text-[12px] font-bold text-emerald-100">
                    ● READY TO CAPTURE
                </span>
            </button></div>

            <p className="w-full my-2 flex flex-row items-center justify-center text-center text-[12px] font-semibold tracking-wide text-slate-400">
                <span className="text-[12px] w-[25%] bg-slate-300 h-px font-bold text-black" />
                <span className="text-[12px] w-[50%] font-semibold text-slate-400">OR MANUAL FALLBACK</span>
                <span className="text-[12px] w-[25%] bg-slate-300 h-px font-bold text-black" />
            </p>

            <div className="flex items-center justify-between gap-2">
                <label className="text-[12px] font-bold text-slate-700">
                    Enter 4-Digit Handover PIN
                </label>
                <span className="text-[12px] text-slate-400">
                    Ask Senthil for PIN
                </span>
            </div>

            <div className="mt-1.5 grid grid-cols-4 gap-2">
                {pin.map((digit, index) => (
                    <input
                        key={index}
                        aria-label={`PIN digit ${index + 1}`}
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={digit}
                        onChange={(event) => updatePin(index, event.target.value)}
                        className="h-14 w-full rounded-lg border border-slate-100 bg-slate-200 text-center text-sm font-bold text-slate-700 outline-none focus:border-blue-500 focus:bg-white"
                    />
                ))}
            </div>
        </section>
    );
}

export default function VerifyPackagePage() {

    return (
        <main className="min-h-screen bg-[#F2F4F7] text-slate-800 mb-15">
            <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
                <TopBar />

                <div className="flex-1 space-y-2 px-2.5 pb-3 pt-2">
                    <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-emerald-700 px-2.5 py-1 text-[11px] font-bold text-white">
                            ● ARRIVED AT HUB
                        </span>

                        <span className="flex items-center gap-1 rounded-full bg-slate-200 px-2 py-1 text-[12px] font-semibold text-slate-600">
                            <Clock3 size={10} />
                            WAIT: 01:25s
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[12px] text-slate-400">ORDER</span>
                        <h1 className="text-[18px] font-bold">#XM20481</h1>
                    </div>

                    <OrderProgress currentStep={2} />

                    <ShopContactCard />

                    <PackageVerificationCard />

                    <div className="flex items-start gap-1.5 rounded-lg bg-indigo-50 p-2 text-[12px]  text-slate-600">
                        <Info size={18} className="mt-0.5 shrink-0 text-slate-500" />
                        <p>
                            Store desk is equipped with XeroxMate rider delivery pouch bags.
                            Collect an extra transparent rain sleeve if skies are overcast.
                        </p>
                    </div>

                   

                    <Link
                        href="/partner/active/collected"
                        className="flex min-h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] px-3 py-2.5 shadow-sm hover:bg-blue-800"
                    >
                        <CheckCircle2 size={18} stroke="white"/>
                        <span className=" text-[18px] font-bold font-hanuman text-white">CONFIRM PACKAGE COLLECTED</span>
                    </Link>

                    <Link
                        href="/partner/active/report"
                        className="flex items-center justify-center gap-1.5 py-1 "
                    >
                        <AlertTriangle size={18} stroke="#f43" />
                        <span className="text-[14px] font-bold text-red-600">Report Shop Issue (Order Delayed / Damaged)</span>
                    </Link>
                </div>

                <Navbar />
            </div>
        </main>
    );
}