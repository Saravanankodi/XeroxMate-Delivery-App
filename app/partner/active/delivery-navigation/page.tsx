
// "use client";

// import Link from "next/link";
// import {
//     ArrowLeft, Bell, CheckCircle2, Clock3, Crosshair, Layers,
//     MapPin, Navigation, Phone, Route, Volume2,
// } from "lucide-react";
// import TopBar from "@/components/TopBar";
// import Navbar from "@/components/Navbar";
// import DeliveryProgress from "@/components/partner/active/DeliveryProgress";

// export default function ActiveDeliveryNavigationPage() {
//     return (
//         <main className="min-h-screen bg-[#F2F4F7] text-slate-800">
//             <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
//                 <TopBar />

//                 <div className="flex items-center justify-between bg-emerald-50 px-3 py-1.5 text-[8px] font-bold text-emerald-800">
//                     <span>● ON DELIVERY · LIVE GPS ACTIVE</span>
//                     <span className="text-slate-500">GPS ±1.8m</span>
//                 </div>

//                 <section className="mx-2.5 mt-2 rounded-xl bg-[#0647A8] p-3 text-white">
//                     <div className="flex items-start gap-2">
//                         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
//                             <Route size={18} />
//                         </div>
//                         <div>
//                             <p className="text-[9px] font-bold text-emerald-300">IN 450 METERS · NEXT STEP</p>
//                             <h1 className="mt-0.5 text-[13px] font-bold">Turn Right onto College Rd</h1>
//                             <p className="mt-1 text-[9px] text-white/70">Towards KCE Gate B · Campus Post</p>
//                         </div>
//                     </div>
//                 </section>

//                 <div className="mx-2.5 mt-2 grid grid-cols-3 gap-1.5">
//                     <div className="rounded-lg bg-white p-2 text-center">
//                         <p className="text-[7px] text-slate-500">REMAINING</p>
//                         <p className="text-[11px] font-bold">3.4 km</p>
//                     </div>
//                     <div className="rounded-lg bg-white p-2 text-center">
//                         <p className="text-[7px] text-slate-500">EST. ARRIVAL</p>
//                         <p className="text-[11px] font-bold text-blue-700">12:04 PM</p>
//                     </div>
//                     <div className="rounded-lg bg-white p-2 text-center">
//                         <p className="text-[7px] text-slate-500">SPEED</p>
//                         <p className="text-[11px] font-bold">36 / 40 limit</p>
//                     </div>
//                 </div>

//                 <div className="mx-2.5 mt-2 flex items-center gap-1.5 rounded-md bg-white p-2 text-[8px]">
//                     <span className="text-orange-600">▤</span>
//                     College Rd: Moderate traffic (+2m near gate)
//                 </div>

//                 <section className="relative mx-2.5 mt-2 h-[250px] overflow-hidden rounded-xl bg-[#E8ECEF] sm:h-[330px]">
//                     {/* Replace this block with your map integration. */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
//                             <Navigation size={23} />
//                         </div>
//                         <p className="text-[10px] font-semibold text-slate-700">Live navigation map placeholder</p>
//                         <p className="text-[8px] text-slate-500">Route · GPS · Destination marker</p>
//                     </div>

//                     <div className="absolute right-2 top-2 flex flex-col gap-2">
//                         <button type="button" aria-label="Voice guidance" className="rounded-full bg-white p-2 shadow-sm">
//                             <Volume2 size={16} />
//                         </button>
//                         <button type="button" aria-label="Recenter map" className="rounded-full bg-white p-2 shadow-sm">
//                             <Crosshair size={16} />
//                         </button>
//                         <button type="button" aria-label="Map layers" className="rounded-full bg-white p-2 shadow-sm">
//                             <Layers size={16} />
//                         </button>
//                     </div>

//                     <div className="absolute bottom-2 left-2 rounded-full bg-white px-2.5 py-1.5 text-[8px] font-semibold shadow-sm">
//                         <MapPin size={10} className="mr-1 inline text-emerald-700" />
//                         Destination: Boys Hostel 2
//                     </div>
//                 </section>

//                 <section className="mx-2.5 -mt-1 rounded-xl bg-white p-2.5 shadow-sm">
//                     <div className="flex items-center gap-2">
//                         <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
//                             AK
//                         </div>
//                         <div className="min-w-0 flex-1">
//                             <p className="text-[10px] font-bold">Arun Kumar</p>
//                             <p className="mt-0.5 text-[8px] text-slate-500">DESTINATION</p>
//                             <p className="text-[9px] font-semibold">KCE Campus · Boys Hostel 2, Gate B, Room 304</p>
//                         </div>
//                         <a href="tel:" aria-label="Call Arun" className="rounded-full bg-indigo-100 p-2.5 text-blue-800">
//                             <Phone size={15} />
//                         </a>
//                     </div>

//                     <div className="mt-2 rounded-lg bg-slate-100 p-2">
//                         <p className="text-[8px] font-bold text-slate-700">Instructions</p>
//                         <p className="mt-1 text-[8px] leading-relaxed text-slate-600">
//                             “Please call when near Gate B security post” — security will verify rider ID before entry.
//                         </p>
//                     </div>

//                     <div className="mt-2 flex items-center justify-between rounded-lg bg-slate-50 p-2">
//                         <div>
//                             <p className="text-[9px] font-bold">#XM20481 · 2 Envelopes</p>
//                             <p className="mt-0.5 text-[8px] text-red-600">Do Not Fold · Urgent Thesis Docs</p>
//                         </div>
//                         <p className="text-[11px] font-bold text-emerald-700">₹88.00</p>
//                     </div>

//                     <p className="mt-2 rounded-md bg-indigo-50 px-2 py-1.5 text-[8px] font-semibold text-blue-800">
//                         OTP Required Upon Handover · 4 digits
//                     </p>
//                 </section>

//                 <div className="mx-2.5 mt-2 grid grid-cols-3 gap-1.5">
//                     <a href="tel:" className="flex items-center justify-center gap-1 rounded-lg bg-white p-2 text-[8px] font-semibold">
//                         <Phone size={11} /> Call Arun
//                     </a>
//                     <Link href="/partner/active/gate-handover" className="flex items-center justify-center gap-1 rounded-lg bg-white p-2 text-[8px] font-semibold">
//                         <CheckCircle2 size={11} /> Enter OTP
//                     </Link>
//                     <button type="button" className="flex items-center justify-center gap-1 rounded-lg bg-white p-2 text-[8px] font-semibold">
//                         ID Pass
//                     </button>
//                 </div>

//                 <div className="mx-2.5 mt-2 mb-3">
//                     <Link href="/partner/active/gate-handover" className="flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#0750BC] text-[10px] font-bold text-white">
//                         I HAVE REACHED GATE B <ArrowLeft size={13} className="rotate-180" />
//                     </Link>
//                 </div>

//                 <Navbar />
//             </div>
//         </main>
//     );
// }














"use client";

import Link from "next/link";
import {
    ArrowRight,
    Bell,
    Check,
    CheckCircle2,
    Crosshair,
    Grid,
    Grip,
    Layers,
    MapPin,
    MessageSquareWarning,
    Navigation,
    Phone,
    Route,
    ShieldCheck,
    Volume2,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

export default function ActiveDeliveryNavigationPage() {
    return (
        <main className="min-h-dvh overflow-x-hidden bg-[#F2F4F7] text-[#17213C]">
            <div className="relative mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-[#F7F9FB] pb-[62px]">
                {/* Existing application header */}
                <TopBar />

                {/* Live GPS status */}
                <div className="mx-2.5 mt-1 flex h-[17px] items-center justify-between rounded-md  px-1.5 text-[11px] font-bold">
                    <span className="flex bg-[#00654426] mb-2 px-2 py-1 rounded-lg items-center gap-1 text-[#086B42]">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#087A4B]" />
                        ON DELIVERY · LIVE GPS ACTIVE
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded-lg mb-2 ">
                        <Crosshair className="mr-0.5 inline" size={14} />
                        GPS ±1.8m
                    </span>
                </div>

                {/* Next navigation instruction */}
                <section className="mx-2.5 mt-1 rounded-[9px] bg-[#0647A8] px-2.5 py-2 shadow-[0_3px_7px_rgba(0,43,120,0.18)]">
                    <div className="flex items-center gap-2">
                        <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-md bg-emerald-400/15 text-emerald-300">
                            <Route size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[14px] leading-4 font-semibold text-emerald-300">
                                IN 450m <span className="text-[7px]">NEXT STEP</span>
                            </p>
                            <p className="text-[11px] leading-[14px] font-bold text-white">
                                Turn Right onto College Rd
                            </p>
                            <p className="text-[8px] leading-3 text-blue-100/80">
                                Towards KCE Gate B Security Post
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trip metrics */}
                <section className="mx-2.5 mt-2 grid grid-cols-3 gap-1">
                    {[
                        { label: "REMAINING", value: "3.4 km" },
                        { label: "EST. ARRIVAL", value: "12:04 PM", blue: true },
                        { label: "SPEED", value: "36 / 40 limit" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="flex py-2  flex-col items-center justify-center rounded-md bg-slate-100 gap-2"
                        >
                            <p className="text-[11px] font-bold leading-[9px] text-slate-500">
                                {item.label}
                            </p>
                            <p
                                className={`text-[18px] leading-3 font-bold ${item.blue ? "text-[#0750BC]" : "text-slate-700"
                                    } `}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </section>



                {/* Map area: stylized placeholder until a map SDK is connected */}
                <section
                    aria-label="Delivery navigation map"
                    className="relative mx-2.5 mt-1 h-[220px] shrink-0 overflow-hidden bg-[#E9EDF0] sm:h-[300px]"
                >
                    {/* Pale street grid */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
repeating-linear-gradient(3deg, transparent 0px, transparent 43px, #D8DFE5 44px, transparent 45px),
    repeating-linear-gradient(87deg, transparent 0px, transparent 65px, #D8DFE5 66px, transparent 67px)
        `,
                        }}
                    />

                    {/* Diagonal local streets */}
                    <div className="absolute -left-8 top-[35px] h-px w-[115%] rotate-[4deg] bg-[#D1D9E1]" />
                    <div className="absolute -left-8 top-[110px] h-px w-[120%] -rotate-[5deg] bg-[#D1D9E1]" />
                    <div className="absolute -left-8 top-[180px] h-px w-[120%] rotate-[3deg] bg-[#D1D9E1]" />
                    <div className="absolute left-[23%] top-[-35px] h-[320px] w-px rotate-[3deg] bg-[#D5DDE4]" />
                    <div className="absolute left-[72%] top-[-30px] h-[320px] w-px -rotate-[4deg] bg-[#D5DDE4]" />
                    {/* Traffic information */}
                    <div className="w-[70%] mx-2.5 mt-1.5 flex  items-center gap-1 rounded-full bg-white px-1.5 text-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                        <span className="text-orange-600">▤</span>
                        <span>
                            <strong>College Rd:</strong> Moderate traffic (+2m near gate)
                        </span>
                    </div>
                    {/* Destination label */}
                    <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-bold text-slate-700 shadow-sm">
                        <MapPin size={8} className="text-emerald-700" />
                        KCE Campus Gate B
                    </div>

                    {/* Navigation route */}
                    <svg
                        viewBox="0 0 260 220"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full"
                        aria-hidden="true"
                    >
                        <path
                            d="M 32 192 C 70 171, 88 150, 112 126 S 165 77, 218 28"
                            fill="none"
                            stroke="#B8D0FF"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 32 192 C 70 171, 88 150, 112 126 S 165 77, 218 28"
                            fill="none"
                            stroke="#2870DB"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                        />
                        <circle cx="112" cy="126" r="7" fill="white" stroke="#2870DB" strokeWidth="2" />
                        <path d="M109 123 L115 126 L109 129" fill="none" stroke="#2870DB" strokeWidth="1.5" />
                        <circle cx="218" cy="28" r="5" fill="#086B42" />
                        <circle cx="218" cy="28" r="9" fill="#0A9D65" opacity=".12" />
                    </svg>

                    {/* Rider location */}
                    <div className="absolute left-[27%] top-[49%] flex flex-col items-center">
                        <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full border-2 border-white bg-[#0750BC] text-white shadow-md">
                            <Navigation size={15} fill="white" />
                        </div>
                        <span className="mt-1 rounded-sm bg-[#343A40] px-1 py-0.5 text-[6px] font-bold text-white">
                            Saravanan (36 km/h)
                        </span>
                    </div>

                    {/* Map floating controls */}
                    <div className="absolute right-1.5 top-[22%] flex flex-col gap-1.5">
                        <button
                            type="button"
                            aria-label="Voice guidance"
                            className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-[#0750BC] shadow-sm"
                        >
                            <Volume2 size={15} />
                        </button>
                        <button
                            type="button"
                            aria-label="Recenter map"
                            className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-slate-700 shadow-sm"
                        >
                            <Crosshair size={15} />
                        </button>
                        <button
                            type="button"
                            aria-label="Map layers"
                            className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-slate-700 shadow-sm"
                        >
                            <Layers size={15} />
                        </button>
                    </div>

                    {/* SOS control */}
                    <button
                        type="button"
                        className="absolute bottom-1.5 left-1.5 flex h-[17px] items-center gap-1 rounded-full bg-[#C81924] px-2 text-[7px] font-bold text-white"
                    >
                        <span>✱</span> HOLD SOS (3s)
                    </button>
                </section>

                {/* Recipient card overlaps the map */}
                <section className="relative z-10 mx-2.5 -mt-0.5 rounded-[11px] bg-white px-2 py-2 shadow-[0_4px_15px_rgba(23,33,60,0.10)]">
                    <div className="mx-auto mb-1.5 h-[3px] w-[25px] rounded-full bg-slate-200" />

                    {/* Customer details */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex h-[29px] w-[29px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-[#E7EAF0] text-[14px] font-bold text-slate-600">
                            AK
                            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white bg-emerald-500" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[20px] leading-4 font-bold font-hanuman text-[#17213C]">
                                Arun Kumar
                            </p>
                        </div>

                        <a
                            href="tel:"
                            aria-label="Call Arun Kumar"
                            className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#E4E9FF] text-[#0750BC]"
                        >
                            <Phone size={14} />
                        </a>
                    </div>

                    {/* Destination address */}
                    <div className="mt-1.5 rounded-md bg-[#F6F7F9] px-1.5 py-1.5">
                        <div className="flex gap-1">
                            <MapPin size={18} className="mt-0.5 shrink-0 text-[#0750BC]" />
                            <div>
                                <p className="text-[11px] font-bold tracking-wide text-slate-500">
                                    DESTINATION
                                </p>
                                <p className="text-[9px] leading-[16px] font-bold text-slate-800">
                                    KCE Campus-Boys Hostel 2, Gate B,
                                    <br />
                                    Room 304
                                </p>
                            </div>
                        </div>

                        <div className="mt-1.5 flex  rounded-md bg-[#ECEFF1] p-1.5 items-start gap-2">
                            <MessageSquareWarning size={16} className="shrink-0 text-[#ff9d00]" />
                            <p className="text-[14px]  text-slate-600">
                                <strong className="text-slate-700">Instructions:</strong>{" "}
                                “Please call when near Gate B security post — security will
                                verify rider ID card for hostel entry.”
                            </p>
                        </div>
                    </div>

                    {/* Order details and payout */}
                    <div className="mt-1.5 flex items-center justify-between rounded-md bg-[#F7F8FA] px-1.5 py-1.5">
                        <div className="flex min-w-0 gap-1.5 items-center gap-2">
                            <div className="mt-0.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-sm bg-slate-200">
                                <Layers size={18} />
                            </div>
                            <div>
                                <p className="text-[12px] font-bold font-hanuman">
                                    #XM20481 · 2 Envelopes
                                </p>
                                <p className="mt-0.5 text-[14px]  font-semibold text-red-600">
                                    Do Not Fold · Urgent Thesis Docs
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0 text-right">
                            <p className="text-[11px] font-bold text-slate-500">Rider Payout</p>
                            <p className="text-[18px]  font-bold font-hanuman text-emerald-700">
                                ₹88.00
                            </p>
                        </div>
                    </div>

                    {/* OTP requirement */}
                    <div className="mt-1.5 flex h-[18px] items-center justify-between rounded-md bg-[#EDF1FF] px-1.5">
                        <span className="flex items-center gap-1 text-[12px] font-bold text-[#1749A3]">
                            <ShieldCheck size={14} />
                            OTP Required Upon Handover
                        </span>
                        <span className="text-[11px] font-bold text-[#1749A3]">
                            4 DIGITS
                        </span>
                    </div>

                    {/* Main CTA */}
                    <Link
                        href="/partner/active/gate-handover"
                        className="mt-1.5 flex py-3 items-center justify-center gap-2 rounded-lg bg-[#0750BC]  shadow-[0_2px_4px_rgba(7,80,188,0.16)]"
                    >
                        <span className="text-[18px] font-bold font-hanuman tracking-wide text-white ">
                            I HAVE REACHED GATE B
                        </span>
                        <ArrowRight size={25} className="text-white" />
                    </Link>

                    {/* Quick actions */}
                    <div className="mt-4 grid grid-cols-3 gap-1.5">
                        <a
                            href="tel:"
                            className="flex h-[27px] items-center justify-center gap-1 rounded-md bg-[#e4e4e6dd] text-[12px] font-bold text-slate-700"
                        >
                            <Phone size={18} />
                            Call Arun
                        </a>
                        <Link
                            href="/partner/active/gate-handover"
                            className="flex h-[27px] items-center justify-center gap-1 rounded-md bg-[#e4e4e6dd] text-[12px] font-bold text-slate-700"
                        >

                            <Grip size={18} />
                            Enter OTP
                        </Link>
                        <button
                            type="button"
                            className="flex h-[27px] items-center justify-center gap-1 rounded-md bg-[#e4e4e6dd] text-[12px] font-bold text-slate-700"
                        >
                            <ShieldCheck size={18} />
                            ID Pass
                        </button>
                    </div>
                </section>

                {/* Existing bottom navigation */}
                <div className="fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2 bg-white">
                    <Navbar />
                </div>
            </div>
        </main>
    );
}
