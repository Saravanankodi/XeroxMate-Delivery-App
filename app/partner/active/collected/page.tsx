
"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Check, CheckCircle2, Clock3, MapPin, Phone, Route,
    ShieldCheck, Truck, Package, Info, Navigation, Headphones,
    InfoIcon,
    Verified,
    MessageSquareWarning,
    Option,
    KeyRoundIcon,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import DeliveryProgress from "@/components/partner/active/DeliveryProgress";

export default function PackageCollectedPage() {
    const [bagChecked, setBagChecked] = useState(true);
    const [sealChecked, setSealChecked] = useState(true);

    return (
        <main className="min-h-screen bg-[#F2F4F7] text-slate-800 mb-15">
            <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
                <TopBar />

                <div className="flex-1 space-y-2 px-2.5 pb-3 pt-2">
                    <section className="rounded-xl bg-[#006B4F] p-2.5 text-white">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FFBBE] text-emerald-900">
                                    <CheckCircle2 size={22} />
                                </span>
                                <div>
                                    <p className="text-[12px] font-bold text-emerald-100">
                                        PACKAGE STOWED & SEALED
                                    </p>
                                    <h1 className="text-[18px] font-bold font-hanuman">Pickup Completed</h1>
                                </div>
                            </div>
                            <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[12px] font-bold">
                                <Clock3 size={15} /> 11:51
                            </span>
                        </div>
                    </section>

                    <section className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5">
                        <span className="rounded bg-[#DAE2FF] px-2 py-1 text-[14px] font-bold text-[#003A94]">
                            #XM20481
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                            Payout: <strong className="text-[18px] font-bold text-emerald-700">₹88.00</strong>
                        </span>
                    </section>

                    <DeliveryProgress currentStep={2} />

                    <section className="rounded-xl bg-white p-2.5 shadow-sm">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                                <span className="text-lg font-bold">AK</span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[18px] font-bold font-hanuman">Arun Kumar</h2>

                            </div>
                            <a href="tel:" aria-label="Call customer" className="rounded-full bg-indigo-100 p-2.5 text-blue-800">
                                <Phone size={15} />
                            </a>
                        </div>

                        <div className="mt-2 rounded-lg bg-slate-100 p-2">
                            <div className="flex items-start gap-4 text-[14px] font-semibold font-hanuman">
                                <MapPin size={18} className="shrink-0 text-blue-700" />

                                <div>
                                    <p>KCE Campus · Boys Hostel 2, Gate B</p>
                                    <p className="mt-1 text-[12px] font-normal text-slate-500">
                                        Room 304, 3rd Floor, Kumbakonam
                                    </p>
                                </div>
                            </div>

                            <p className="mt-1 text-[12px] bg-slate-200 rounded-xl flex gap-2 items-center text-slate-500 px-4 py-1">
                                <InfoIcon size={12} />
                                “Please call when near Gate B security post”
                            </p>
                        </div>

                        <div className="mx-auto mt-2 flex w-fit items-center gap-2 rounded-lg bg-slate-200 px-3 py-2">
                            <Route size={15} className="text-blue-700" />
                            <div>
                                <p className="text-[11px] font-bold text-slate-500">TRIP DISTANCE</p>
                                <p className="text-[14px] font-bold">3.8 km · ~12 min</p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-xl bg-white p-2.5 shadow-sm">
                        <div className="mb-2 flex items-center justify-between">
                            <h2 className="text-[14px] font-bold font-hanuman">Suggested Transit Path</h2>
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">
                                FASTEST
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-2">
                            <MapPin size={14} className="text-emerald-700" />
                            <span className="text-[9px] font-semibold">Tamil Printers</span>
                        </div>
                        <div className="my-2 flex h-[70px] items-center justify-center rounded-lg bg-[#E8F0EB] text-center">
                            <div>
                                <Navigation size={20} className="mx-auto text-blue-700" />
                                <p className="mt-1 text-[9px] font-semibold text-slate-600">
                                    Map integration area
                                </p>
                            </div>
                        </div>
                        <p className="text-[8px] text-slate-500">
                            Via TSR Big St → College Rd (avoid railway gate delay)
                        </p>
                    </section>

                    <section className="rounded-xl bg-white p-2.5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="flex items-center gap-1.5 text-[18px] font-bold font-hanuman">
                                <Package size={20} /> Cargo in Waterproof Bag
                            </h2>
                            <span className="rounded bg-indigo-50 px-1.5 py-1 text-[11px] font-bold text-blue-700">
                                SLEEVE #1
                            </span>
                        </div>

                        <p className="mt-2 text-[14px] text-slate-800 bg-slate-100 py-1 rounded-xl px-4">
                            Envelopes &amp; Thesis <span className="float-right">2 Envelopes</span>
                        </p>
                        <p className="mt-2 text-[14px] text-slate-800 bg-slate-100 py-1 rounded-xl px-4">
                            Tamper Security Seal <span className="float-right text-emerald-700 font-bold">#TP-204 Verified </span>

                        </p>

                        {/* <label className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-2 text-[14px]">
                            <input type="checkbox" checked={bagChecked} onChange={(e) => setBagChecked(e.target.checked)} />
                            <span className="flex-1">Waterproof bag secured</span>
                            {bagChecked && <Check size={12} className="text-emerald-700" />}
                        </label>

                        <label className="mt-2 flex items-center gap-2 text-[9px]">
                            <input type="checkbox" checked={sealChecked} onChange={(e) => setSealChecked(e.target.checked)} />
                            <span className="flex-1">Tamper security seal verified</span>
                            {sealChecked && <ShieldCheck size={12} className="text-emerald-700" />}
                        </label> */}

                        <div className="mt-2 flex gap-1.5 rounded-lg bg-red-50 p-2 text-[16px] leading-relaxed text-red-700">
                            <Info size={22} className="shrink-0" />
                            Keep cargo pouch flat. Do not fold document sheets or place beverage bottles over the parcel.
                        </div>
                    </section>

                    <section className="rounded-xl bg-[#ECEEF0] p-2.5 flex items-center gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9E8FF] text-blue-700">
                            <KeyRoundIcon size={22} stroke="#003A94" />
                        </div>
                        <div>
                            <p className="text-[13px] font-bold font-hanuman">Customer 4-Digit Delivery OTP</p>
                            <p className="mt-1 text-[14px] leading-relaxed text-slate-500">
                                Collect OTP code directly from Arun before handing over envelopes.
                            </p>
                        </div>
                    </section>

                    <Link
                        href="/partner/active/delivery-navigation"
                        className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#0750BC] px-3 py-2.5 text-[18px] font-bold font-hanuman text-white"
                    >
                        <Navigation size={22} stroke="#FFFFFF" /> <span className="text-white">START NAVIGATION (3.8 KM)</span>
                    </Link>

                    <div className="grid grid-cols-[1.2fr_1fr] gap-2">
                        <Link href="/partner/active/gate-handover" className="flex items-center justify-center gap-1 rounded-lg bg-white p-2.5 text-[14px] font-bold">
                            <CheckCircle2 size={18} /> I Have Reached Gate
                        </Link>
                        <Link href="/partner/support" className="flex items-center justify-center gap-1 rounded-lg bg-white p-2.5 text-[14px] font-bold">
                            <Headphones size={18} /> Rider Support
                        </Link>
                    </div>
                </div>

                <Navbar />
            </div>
        </main>
    );
}
