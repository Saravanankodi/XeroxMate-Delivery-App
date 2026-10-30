
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//     AlertTriangle, CheckCircle2, Clock3, MapPin, Phone,
//     ShieldCheck, Wallet, Info,
//     MessageCircleWarning,
//     MessageSquareTextIcon,
//     ScanQrCode,
//     ScanQrCodeIcon,
//     Headphones,
// } from "lucide-react";
// import TopBar from "@/components/TopBar";
// import Navbar from "@/components/Navbar";
// import DeliveryProgress from "@/components/partner/active/DeliveryProgress";

// export default function GateHandoverPage() {
//     const [otp, setOtp] = useState(["", "", "", ""]);
//     const [codCollected, setCodCollected] = useState(false);
//     const [confirmed, setConfirmed] = useState(false);

//     function updateOtp(index: number, value: string) {
//         const digit = value.replace(/\D/g, "").slice(-1);
//         setOtp((current) => current.map((item, i) => i === index ? digit : item));
//     }

//     const otpComplete = otp.every(Boolean);

//     return (
//         <main className="min-h-screen bg-[#F2F4F7] text-slate-800 mb-15">
//             <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
//                 <TopBar />

//                 <div className="flex-1 space-y-2 px-2.5 pb-3 pt-2">
//                     <div className="flex items-center justify-between gap-2">
//                         <span className="rounded-full bg-emerald-700 px-2.5 py-1 text-[11px] font-bold flex gap-1 items-center text-white">
//                             <MapPin size={15} />
//                             ARRIVED AT GATE B
//                         </span>
//                         <span className="rounded-full bg-slate-200 px-2 py-1 text-[12px] font-bold text-slate-600">
//                             Order #XM20481
//                         </span>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <span className="rounded bg-blue-50 px-2 py-1 text-[14px] font-bold text-blue-700">
//                             #XM20481
//                         </span>
//                         <span className="text-[11px] text-slate-500">
//                             Payout: <strong className="text-[18px] font-bold text-emerald-700">₹88.00</strong>
//                         </span>
//                     </div>

//                     <DeliveryProgress currentStep={3} />

//                     <section className="rounded-xl bg-white p-2.5 shadow-sm">
//                         <div className="flex flex-col justify-center  gap-2">
//                             <div className="flex items-center justify-between gap-2">
//                                 <div className="flex items-center  gap-2">
//                                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-lg font-bold">
//                                         AK
//                                     </div>

//                                     <h2 className="text-[18px] font-bold font-hanuman">Arun Kumar</h2>
//                                 </div>
//                                 <a href="tel:" aria-label="Call customer" className="rounded-full bg-blue-600 p-2.5 text-white">
//                                     <Phone size={15} stroke="#fff" fill="#fff" />
//                                 </a>
//                             </div>
//                             <div className=" bg-slate-100 rounded-lg p-2.5">
//                                 <p className="mt-1 text-[14px] font-semibold font-hanuman">Boys Hostel 2, Room 304</p>
//                                 <p className="text-[14px] text-slate-500">Direct handover point: Main Security Gate B Archway</p>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="rounded-xl bg-white p-2.5 shadow-sm">
//                         <div className="flex items-center justify-between gap-2">
//                             <h2 className="flex items-center gap-1.5 text-[14px] font-bold font-hanuman">
//                                 <Wallet size={18} className="text-blue-700" />
//                                 Cash on Delivery (COD)
//                             </h2>
//                             <span className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-bold text-blue-700">
//                                 Required
//                             </span>
//                         </div>
//                         <div className="flex items-center justify-between gap-2 mt-4">
//                             <p className="mt-2 text-[13px] text-slate-500">
//                                 Amount to collect before release:
//                             </p>
//                             <p className="text-right text-[24px] font-bold font-hanuman text-blue-700">₹200</p>
//                         </div>
//                         <p className="mt-2 flex items-start gap-2 rounded-lg bg-indigo-50 p-2 text-[12px] ">
//                             <MessageCircleWarning size={25} className="mt-0.5 text-red-700" />

//                             Collect ₹200 from customer before completing handover and
//                             handing over the printed documents.

//                         </p>
//                     </section>

//                     <div className="flex items-center justify-between gap-2 rounded-lg bg-amber-50 p-2 text-[14px] font-bold">
//                         <span className="flex flex-col items-center gap-1.5 text-amber-600">
//                             <div className="flex items-center gap-1.5">
//                                 <Clock3 size={18} /> Arun notified · 01m 46s ago</div>
//                             <p className="text-slate-400 text-[12px] font-normal">Automated Gate arrival SMS delivered</p>
//                         </span>
//                         <button type="button" className="rounded-md bg-white px-2 py-1 font-semibold flex items-center gap-1.5 text-[12px] ">
//                             <MessageSquareTextIcon size={15} stroke="#004B31" /> Ping WA
//                         </button>
//                     </div>

//                     <section className="rounded-xl bg-white p-3 shadow-sm">
//                         <div className="flex items-center justify-between gap-2">
//                             <h2 className="text-[20px] font-bold font-hanuman
//                             ">Enter 4-Digit OTP</h2>
//                             <span className="text-[11px] font-bold text-blue-700">REQUIRED</span>
//                         </div>
//                         <p className="mt-1 text-[14px]  text-slate-500">
//                             Ask Arun for the confidential completion PIN displayed in the
//                             XeroxMate student app.
//                         </p>

//                         <div className="mt-3 grid grid-cols-4 gap-4">
//                             {otp.map((digit, index) => (
//                                 <input
//                                     key={index}
//                                     aria-label={`Delivery OTP digit ${index + 1}`}
//                                     inputMode="numeric"
//                                     maxLength={1}
//                                     value={digit}
//                                     onChange={(event) => updateOtp(index, event.target.value)}
//                                     className="h-20 w-full rounded-lg border border-slate-100 bg-slate-100 text-center text-lg font-bold outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600"
//                                 />
//                             ))}
//                         </div>
//                         <div className="mt-2 flex items-center justify-between gap-2 text-[12px] font-bold">
//                             <button type="button" className="mt-2  text-blue-700">
//                                 ↻ Resend via SMS
//                             </button>
//                             <button type="button" className="mt-2  text-slate-700 flex items-center gap-1">
//                                 <ScanQrCodeIcon size={15} /> Resend via SMS
//                             </button>
//                         </div>
//                         <button type="button" className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-100 p-2 ">
//                             <Info size={18} /> <span className="text-[14px] font-semibold font-hanuman text-slate-600">Can't get OTP? Verify Student ID Card</span>
//                         </button>
//                     </section>

//                     {confirmed && (
//                         <div role="status" className="rounded-lg bg-emerald-50 p-2 text-[9px] font-semibold text-emerald-800">
//                             UI confirmation complete. Connect the delivery verification API before marking this order delivered.
//                         </div>
//                     )}

//                     <button
//                         type="button"
//                         disabled={!otpComplete || !codCollected}
//                         onClick={() => setConfirmed(true)}
//                         className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] px-3 py-2.5 text-[18x] font-bold font-hanuman text-white disabled:cursor-not-allowed disabled:bg-slate-300"
//                     >
//                         <CheckCircle2 size={18} />
//                         COMPLETE DELIVERY (VERIFY OTP)
//                     </button>

//                     <div className="flex items-center justify-between gap-2 px-1 text-[14px] mt-2">
//                         <Link href="/partner/support" className="flex items-center gap-1 text-red-600">
//                             <AlertTriangle size={20} stroke="red" /> <span className="text-red-600 font-bold ">Customer Not Answering</span>
//                         </Link>
//                         <Link href="/partner/support" className="text-slate-500 font-bold flex items-center gap-1">
//                             <Headphones size={18}/> Support SOS
//                         </Link>
//                     </div>
//                 </div>

//                 <Navbar />
//             </div>
//         </main>
//     );
// }















"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
    AlertTriangle,
    CheckCircle2,
    Clock3,
    MapPin,
    Phone,
    Wallet,
    Info,
    MessageCircleWarning,
    MessageSquareTextIcon,
    ScanQrCodeIcon,
    Headphones,
    X,
    LoaderCircle,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import DeliveryProgress from "@/components/partner/active/DeliveryProgress";

export default function GateHandoverPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [codCollected, setCodCollected] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [resendSeconds, setResendSeconds] = useState(0);
    const [studentIdOpen, setStudentIdOpen] = useState(false);
    const [studentId, setStudentId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    function updateOtp(index: number, value: string) {
        const digits = value.replace(/\D/g, "");

        if (!digits) {
            setOtp((current) =>
                current.map((item, i) => (i === index ? "" : item)),
            );
            setError("");
            return;
        }

        const next = [...otp];
        const insertedDigits = digits.slice(0, 4 - index);

        insertedDigits.split("").forEach((digit, offset) => {
            next[index + offset] = digit;
        });

        setOtp(next);
        setError("");
        setMessage("");

        requestAnimationFrame(() => {
            if (next.every(Boolean)) {
                otpRefs.current[3]?.blur();
            } else {
                otpRefs.current[
                    Math.min(index + insertedDigits.length, 3)
                ]?.focus();
            }
        });
    }

    const otpComplete = otp.every(Boolean);

    useEffect(() => {
        if (resendSeconds <= 0) return;

        const timer = window.setTimeout(() => {
            setResendSeconds((seconds) => Math.max(0, seconds - 1));
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [resendSeconds]);

    function handleOtpKeyDown(
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>,
    ) {
        if (
            event.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            otpRefs.current[index - 1]?.focus();
        }

        if (event.key === "ArrowLeft" && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }

        if (event.key === "ArrowRight" && index < 3) {
            otpRefs.current[index + 1]?.focus();
        }
    }

    function handleOtpPaste(
        event: React.ClipboardEvent<HTMLInputElement>,
        index: number,
    ) {
        const digits = event.clipboardData
            .getData("text")
            .replace(/\D/g, "");

        if (!digits) return;

        event.preventDefault();
        updateOtp(index, digits);
    }

    function resendOtp() {
        if (resendSeconds > 0 || loading || confirmed) return;

        setResendSeconds(30);
        setError("");
        setMessage(
            "Resend requested. Connect your SMS API to send a real OTP.",
        );
    }

    function submitStudentId() {
        if (studentId.trim().length < 4) {
            setError("Please enter a valid Student ID.");
            return;
        }

        setStudentIdOpen(false);
        setError("");
        setMessage(
            "Student ID entered. Manual verification is required before handover.",
        );
    }

    // async function completeDelivery() {
    //     setError("");
    //     setMessage("");

    //     if (!codCollected) {
    //         setError("Please confirm that you collected ₹200 COD.");
    //         return;
    //     }

    //     if (!otpComplete) {
    //         setError("Please enter all four OTP digits.");

    //         const firstEmpty = otp.findIndex((digit) => !digit);
    //         otpRefs.current[firstEmpty]?.focus();
    //         return;
    //     }

    //     setLoading(true);

    //     try {
    //         // Requires a real backend endpoint that verifies the OTP.
    //         const response = await fetch(
    //             "/api/partner/orders/XM20481/complete",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     otp: otp.join(""),
    //                     codCollected: true,
    //                     codAmount: 200,
    //                 }),
    //             },
    //         );

    //         const result = await response.json();

    //         if (!response.ok) {
    //             throw new Error(
    //                 result.message || "OTP verification failed.",
    //             );
    //         }

    //         setConfirmed(true);
    //         setMessage("Delivery completed successfully.");
    //     } catch (err) {
    //         setError(
    //             err instanceof Error
    //                 ? err.message
    //                 : "Unable to verify delivery. Please try again.",
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
        <main className="mb-15 min-h-screen bg-[#F2F4F7] text-slate-800">
            <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
                <TopBar />

                <div className="flex-1 space-y-2 px-2.5 pb-3 pt-2">
                    <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-emerald-700 px-2.5 py-1 text-[11px] font-bold text-white">
                            <MapPin size={15} />
                            ARRIVED AT GATE B
                        </span>

                        <span className="rounded-full bg-slate-200 px-2 py-1 text-[12px] font-bold text-slate-600">
                            Order #XM20481
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="rounded bg-blue-50 px-2 py-1 text-[14px] font-bold text-blue-700">
                            #XM20481
                        </span>

                        <span className="text-[11px] text-slate-500">
                            Payout:{" "}
                            <strong className="text-[18px] font-bold text-emerald-700">
                                ₹88.00
                            </strong>
                        </span>
                    </div>

                    <DeliveryProgress currentStep={3} />

                    <section className="rounded-xl bg-white p-2.5 shadow-sm">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-lg font-bold">
                                        AK
                                    </div>

                                    <h2 className="font-hanuman text-[18px] font-bold">
                                        Arun Kumar
                                    </h2>
                                </div>

                                <a
                                    href="tel:"
                                    aria-label="Call customer"
                                    className="rounded-full bg-blue-600 p-2.5 text-white"
                                >
                                    <Phone
                                        size={15}
                                        stroke="#fff"
                                        fill="#fff"
                                    />
                                </a>
                            </div>

                            <div className="rounded-lg bg-slate-100 p-2.5">
                                <p className="mt-1 font-hanuman text-[14px] font-semibold">
                                    Boys Hostel 2, Room 304
                                </p>

                                <p className="text-[14px] text-slate-500">
                                    Direct handover point: Main Security Gate B Archway
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-xl bg-white p-2.5 shadow-sm">
                        <div className="flex items-center justify-between gap-2">
                            <h2 className="flex items-center gap-1.5 font-hanuman text-[14px] font-bold">
                                <Wallet size={18} className="text-blue-700" />
                                Cash on Delivery (COD)
                            </h2>

                            <span className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-bold text-blue-700">
                                Required
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-2">
                            <p className="mt-2 text-[13px] text-slate-500">
                                Amount to collect before release:
                            </p>

                            <p className="font-hanuman text-right text-[24px] font-bold text-blue-700">
                                ₹200
                            </p>
                        </div>

                        <p className="mt-2 flex items-start gap-2 rounded-lg bg-indigo-50 p-2 text-[12px]">
                            <MessageCircleWarning
                                size={25}
                                className="mt-0.5 shrink-0 text-red-700"
                            />
                            Collect ₹200 from customer before completing handover and
                            handing over the printed documents.
                        </p>

                        <label className="mt-3 flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-2.5">
                            <input
                                type="checkbox"
                                checked={codCollected}
                                disabled={confirmed}
                                onChange={(event) => {
                                    setCodCollected(event.target.checked);
                                    setError("");
                                }}
                                className="h-4 w-4 accent-blue-700"
                            />

                            <span className="text-[12px] font-semibold text-slate-700">
                                I confirm that I have collected ₹200 from the customer.
                            </span>
                        </label>
                    </section>

                    <div className="flex items-center justify-between gap-2 rounded-lg bg-amber-50 p-2 text-[14px] font-bold">
                        <span className="flex flex-col items-center gap-1.5 text-amber-600">
                            <span className="flex items-center gap-1.5">
                                <Clock3 size={18} />
                                Arun notified · 01m 46s ago
                            </span>

                            <p className="text-[12px] font-normal text-slate-400">
                                Automated Gate arrival SMS delivered
                            </p>
                        </span>

                        <button
                            type="button"
                            onClick={() => {
                                const message = encodeURIComponent(
                                    "Hello Arun, your XeroxMate delivery rider has arrived at Gate B. Please meet at the security gate with your delivery OTP.",
                                );

                                window.open(
                                    `https://wa.me/?text=${message}`,
"_blank",
    "noopener,noreferrer",
                                );
                            }}
className = "flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-[12px] font-semibold"
    >
    <MessageSquareTextIcon
        size={15}
        stroke="#004B31"
    />
                            Ping WA
                        </button >
                    </div >

    <section className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-2">
            <h2 className="font-hanuman text-[20px] font-bold">
                Enter 4-Digit OTP
            </h2>

            <span className="text-[11px] font-bold text-blue-700">
                REQUIRED
            </span>
        </div>

        <p className="mt-1 text-[14px] text-slate-500">
            Ask Arun for the confidential completion PIN displayed in the
            XeroxMate student app.
        </p>

        <div className="mt-3 grid grid-cols-4 gap-4">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(element) => {
                        otpRefs.current[index] = element;
                    }}
                    aria-label={`Delivery OTP digit ${index + 1}`}
                    inputMode="numeric"
                    autoComplete={
                        index === 0 ? "one-time-code" : "off"
                    }
                    maxLength={4}
                    value={digit}
                    disabled={confirmed}
                    onChange={(event) =>
                        updateOtp(index, event.target.value)
                    }
                    onKeyDown={(event) =>
                        handleOtpKeyDown(index, event)
                    }
                    onPaste={(event) =>
                        handleOtpPaste(event, index)
                    }
                    className="h-20 w-full rounded-lg border border-slate-100 bg-slate-100 text-center text-lg font-bold outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600 disabled:opacity-60"
                />
            ))}
        </div>

        <div className="mt-2 flex items-center justify-between gap-2 text-[12px] font-bold">
            <button
                type="button"
                disabled={resendSeconds > 0 || loading || confirmed}
                onClick={resendOtp}
                className="mt-2 text-blue-700 disabled:text-slate-400"
            >
                {resendSeconds > 0
                    ? `↻ Resend in ${resendSeconds}s`
                    : "↻ Resend via SMS"}
            </button>

            <button
                type="button"
                disabled={resendSeconds > 0 || loading || confirmed}
                onClick={resendOtp}
                className="mt-2 flex items-center gap-1 text-slate-700 disabled:text-slate-400"
            >
                <ScanQrCodeIcon size={15} />
                {resendSeconds > 0
                    ? `Resend in ${resendSeconds}s`
                    : "Resend via SMS"}
            </button>
        </div>

        <button
            type="button"
            disabled={confirmed}
            onClick={() => {
                setStudentIdOpen(true);
                setError("");
                setMessage("");
            }}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-100 p-2"
        >
            <Info size={18} />
            <span className="font-hanuman text-[14px] font-semibold text-slate-600">
                Can&apos;t get OTP? Verify Student ID Card
            </span>
        </button>
    </section>

{
    error && (
        <div
            role="alert"
            className="rounded-lg bg-red-50 p-2 text-[11px] font-semibold text-red-800"
        >
            {error}
        </div>
    )
}

{
    message && (
        <div
            role="status"
            className="rounded-lg bg-blue-50 p-2 text-[11px] font-semibold text-blue-800"
        >
            {message}
        </div>
    )
}

{
    confirmed && (
        <div
            role="status"
            className="rounded-lg bg-emerald-50 p-2 text-[11px] font-semibold text-emerald-800"
        >
            Delivery completed successfully.
        </div>
    )
}

                    <Link
                        type="button"
                        // disabled={!otpComplete || !codCollected || loading || confirmed}
                        // onClick={completeDelivery}
                        href="partner/active/completed"
                        className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] px-3 py-2.5 text-[18x] font-bold font-hanuman text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        {/* {loading ? (
                            <LoaderCircle size={18} className="animate-spin" />
                        ) : (
                            <CheckCircle2 size={18} />
                        )}

                        {loading
                            ? "VERIFYING OTP..."
                            : confirmed
                                ? "DELIVERY COMPLETED"
                                : "COMPLETE DELIVERY (VERIFY OTP)"} */}
                        COMPLETE DELIVERY (VERIFY OTP)
                    </Link>

                    <div className="mt-2 flex items-center justify-between gap-2 px-1 text-[14px]">
                        <Link
                            href="/partner/support"
                            className="flex items-center gap-1 text-red-600"
                        >
                            <AlertTriangle size={20} stroke="red" />
                            <span className="font-bold text-red-600">
                                Customer Not Answering
                            </span>
                        </Link>

                        <Link
                            href="/partner/support"
                            className="flex items-center gap-1 font-bold text-slate-500"
                        >
                            <Headphones size={18} />
                            Support SOS
                        </Link>
                    </div>
                </div >

    <Navbar />
            </div >

    {/* Student ID verification dialog */ }
{
    studentIdOpen && (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 sm:items-center"
            onClick={() => setStudentIdOpen(false)}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="student-id-title"
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-[400px] rounded-2xl bg-white p-4 shadow-xl"
            >
                <div className="flex items-center justify-between">
                    <h2
                        id="student-id-title"
                        className="font-hanuman text-lg font-bold"
                    >
                        Verify Student ID Card
                    </h2>

                    <button
                        type="button"
                        aria-label="Close dialog"
                        onClick={() => setStudentIdOpen(false)}
                        className="rounded-full bg-slate-100 p-2"
                    >
                        <X size={18} />
                    </button>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                    Enter the student ID for manual verification.
                </p>

                <input
                    value={studentId}
                    onChange={(event) => setStudentId(event.target.value)}
                    placeholder="Enter Student ID"
                    className="mt-3 w-full rounded-lg border border-slate-200 p-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <button
                    type="button"
                    onClick={submitStudentId}
                    className="mt-3 w-full rounded-lg bg-[#0750BC] p-3 text-sm font-bold text-white"
                >
                    Request Verification
                </button>
            </section>
        </div>
    )
}
        </main >
    );
}
