
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Bell,
    Bike,
    CalendarClock,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock3,
    Headphones,
    Info,
    MapPin,
    Phone,
    ShieldCheck,
    Wallet,
    Zap,
    Coffee,
    Power,
    X,
    LoaderCircle,
    AlertTriangle,
    ClipboardCheck,
    CircleDollarSign,
} from "lucide-react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const reassignment = {
    orderId: "XM20481",
    releasedAt: "11:43 AM",
    riderName: "Karthik R.",
    distance: "0.4 km",
    shop: "Tamil Printers & Stationers",
    customer: "Arun Kumar",
    acceptanceScore: "96.0%",
    dailyEarnings: "₹840.00",
    breakDuration: "30m",
    shiftEnd: "Today's Shift",
};

const sg = "font-[var(--font-space-grotesk)]";
const hanuman = "font-[var(--font-hanuman)]";

export default function ReassignmentConfirmedPage() {
    const [isOnline, setIsOnline] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSupport, setShowSupport] = useState(false);
    const [error, setError] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const handleResumeDuty = async () => {
        if (isLoading || isOnline) return;

        setIsLoading(true);
        setError("");
        setStatusMessage("");

        try {
            const response = await fetch("/api/partner/rider/status", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status: "ONLINE",
                    availability: true,
                }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    result?.message || "Unable to resume duty. Please try again."
                );
            }

            setIsOnline(true);
            setStatusMessage("You are online and ready to receive orders.");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#F2F4F6] text-[#191C1E] mb-15">
            <div className="mx-auto flex min-h-screen w-full max-w-[412px] flex-col overflow-hidden bg-[#F7F9FB]">
                {/* Existing application header */}
                <TopBar />

                <div className="flex-1 space-y-3 px-3 pb-5 pt-3">
                    {/* Reassignment confirmation */}
                    <section className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <div className="flex items-start gap-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6FFBBE] text-[#004B31]">
                                <CheckCircle2 size={22} strokeWidth={2.8} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                    <div className="min-w-0">
                                        <p
                                            className={`${sg} text-[11px] font-bold  tracking-[0.55px] text-[#004B31]`}
                                        >
                                            REASSIGNMENT SUCCESSFUL
                                        </p>

                                        <h1
                                            className={`${hanuman} mt-0.5 text-[16px] font-bold  text-[#191C1E]`}
                                        >
                                            Order #XM20481 Released
                                        </h1>
                                    </div>

                                    <span
                                        className={`${sg} flex shrink-0 items-center gap-1 text-[10px] font-semibold  text-[#434653]`}
                                    >
                                        <Clock3 size={10} />
                                        {reassignment.releasedAt}
                                    </span>
                                </div>

                                <p
                                    className={`${sg} mt-1 text-[12px] font-normal  text-[#434653]`}
                                >
                                    Safe travel! The dispatch pool has instantly taken
                                    charge of the obstruction report.
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            <span
                                className={`${sg} inline-flex items-center gap-1 rounded-full bg-[#DAE2FD] px-2 py-1 text-[10px] font-bold  text-[#003A94]`}
                            >
                                <CheckCircle2 size={10} />
                                Reassigned to {reassignment.riderName} ({reassignment.distance})
                            </span>

                            <span
                                className={`${sg} inline-flex items-center gap-1 rounded-full bg-[#ECEEF0] px-2 py-1 text-[10px] font-bold  text-[#434653]`}
                            >
                                <ShieldCheck size={10} />
                                Proof Verified
                            </span>
                        </div>
                    </section>

                    {/* Standing protected */}
                    <section className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DAE2FD] text-[#003A94]">
                                    <ShieldCheck size={17} />
                                </div>

                                <div>
                                    <h2
                                        className={`${hanuman} text-[17px] font-bold  text-[#191C1E]`}
                                    >
                                        Standing Protected
                                    </h2>

                                    <p
                                        className={`${sg} text-[11px] font-normal  text-[#737785]`}
                                    >
                                        Breakdown grace waiver applied
                                    </p>
                                </div>
                            </div>

                            <span
                                className={`${sg} rounded-full bg-[#6FFBBE] px-2 py-1 text-[10px] font-bold text-[#004B31]`}
                            >
                                PROTECTED
                            </span>
                        </div>

                        {/* Acceptance and penalty metrics */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="rounded-lg bg-[#F2F4F6] p-2">
                                <p
                                    className={`${sg} text-[10px] font-bold  text-[#737785]`}
                                >
                                    ACCEPTANCE SCORE
                                </p>

                                <div className="mt-0.5 flex items-baseline gap-1">
                                    <span
                                        className={`${sg} text-[23px] font-bold leading-7 text-[#191C1E]`}
                                    >
                                        {reassignment.acceptanceScore}
                                    </span>

                                    <span
                                        className={`${sg} text-[10px] font-bold  text-[#004B31]`}
                                    >
                                        No Drop
                                    </span>
                                </div>

                                <p
                                    className={`${sg} text-[10px] font-medium  text-[#737785]`}
                                >
                                    Safeguard active
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#F2F4F6] p-2">
                                <p
                                    className={`${sg} text-[10px] font-bold  text-[#737785]`}
                                >
                                    PENALTY FEE
                                </p>

                                <div className="mt-0.5 flex items-baseline gap-1">
                                    <span
                                        className={`${sg} text-[23px] font-bold leading-7 text-[#004B31]`}
                                    >
                                        ₹0.00
                                    </span>

                                    <span
                                        className={`${sg} text-[10px] font-semibold  text-[#737785]`}
                                    >
                                        <s>₹25/-</s>
                                    </span>
                                </div>

                                <p
                                    className={`${sg} text-[10px] font-bold  text-[#004B31]`}
                                >
                                    100% Fee Waived
                                </p>
                            </div>
                        </div>

                        {/* Shop notification */}
                        <div className="mt-2 flex items-center gap-2 rounded-lg bg-[#F2F4F6] p-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#DAE2FD] text-[#003A94]">
                                <Bell size={14} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p
                                    className={`${sg} text-[11px] font-semibold  text-[#191C1E]`}
                                >
                                    {reassignment.shop}
                                </p>

                                <p
                                    className={`${sg} text-[10px] font-normal  text-[#565E74]`}
                                >
                                    Customer Arun Kumar was notified of the carrier swap.
                                </p>
                            </div>

                            <Check size={14} className="shrink-0 text-[#737785]" />
                        </div>
                    </section>

                    {/* Duty paused */}
                    <section className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <div className="flex items-start gap-2">
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#BA1A1A]" />

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h2
                                        className={`${hanuman} text-[17px] font-bold  text-[#191C1E]`}
                                    >
                                        Duty Paused
                                    </h2>

                                    <span
                                        className={`${sg} rounded-full bg-[#FCE8E8] px-2 py-0.5 text-[10px] font-bold  text-[#BA1A1A]`}
                                    >
                                        BREAKDOWN MODE
                                    </span>
                                </div>

                                <p
                                    className={`${sg} mt-0.5 text-[11px] font-normal text-[#737785]`}
                                >
                                    Incoming dispatch radar silenced until repair.
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="flex min-h-9 items-center justify-center gap-1.5 rounded-lg bg-[#F2F4F6] px-2">
                                <Coffee size={13} className="text-[#434653]" />
                                <span
                                    className={`${sg} text-[11px] font-semibold  text-[#191C1E]`}
                                >
                                    Take 30m Break
                                </span>
                            </div>

                            <div className="flex min-h-9 items-center justify-center gap-1.5 rounded-lg bg-[#FCE8E8] px-2">
                                <Power size={13} className="text-[#BA1A1A]" />
                                <span
                                    className={`${sg} text-[11px] font-semibold  text-[#BA1A1A]`}
                                >
                                    End Today&apos;s Shift
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Rider support */}
                    <button
                        type="button"
                        onClick={() => setShowSupport(true)}
                        className="flex min-h-[54px] w-full items-center gap-2 rounded-xl bg-white p-3 text-left shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                    >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCE8E8] text-[#BA1A1A]">
                            <Headphones size={16} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p
                                className={`${hanuman} text-[14px] font-bold  text-[#191C1E]`}
                            >
                                XeroxMate Rider Support
                            </p>

                            <p
                                className={`${sg} text-[10px] font-normal  text-[#737785]`}
                            >
                                Towing &amp; safety priority desk
                            </p>
                        </div>

                        <span
                            className={`${sg} flex shrink-0 items-center gap-1 rounded-md bg-[#FCE8E8] px-2 py-1 text-[10px] font-bold  text-[#BA1A1A]`}
                        >
                            <Phone size={10} />
                            0808 247
                        </span>
                    </button>

                    {/* Resume duty */}
                    <section className="rounded-xl bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <div className="flex items-start gap-2">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAE2FD] text-[#003A94]">
                                <Bike size={19} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h2
                                    className={`${hanuman} text-[16px] font-bold  text-[#191C1E]`}
                                >
                                    Tyre Fixed &amp; Good to Go?
                                </h2>

                                <p
                                    className={`${sg} mt-0.5 text-[11px] font-normal  text-[#737785]`}
                                >
                                    Resume your shift anytime. 14 orders pending nearby.
                                </p>
                            </div>
                        </div>

                        {/* Resume online */}
                        <button
                            type="button"
                            onClick={handleResumeDuty}
                            disabled={isLoading || isOnline}
                            className={`${hanuman} mt-3 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#064FC2] px-3 text-[16px] font-bold leading-5 text-white shadow-sm transition-colors hover:bg-[#003A94] disabled:cursor-not-allowed disabled:opacity-70`}
                        >
                            {isLoading ? (
                                <LoaderCircle size={16} className="animate-spin" />
                            ) : isOnline ? (
                                <CheckCircle2 size={16} />
                            ) : (
                                <Zap size={16} fill="currentColor" />
                            )}

                            {isLoading
                                ? "CONNECTING..."
                                : isOnline
                                    ? "YOU ARE ONLINE"
                                    : "GO ONLINE & RESUME DUTY"}
                        </button>

                        {/* Return to dispatch */}
                        <Link
                            href="/partner/home"
                            className={`${sg} mt-2 flex min-h-[38px] w-full items-center justify-center gap-2 rounded-lg bg-[#E6E8EA] px-3 text-[12px] font-bold leading-4 tracking-[0.3px] text-[#191C1E] transition-colors hover:bg-[#DADDE0]`}
                        >
                            <MapPin size={13} />
                            RETURN TO DISPATCH RADAR
                        </Link>

                        {/* Earnings */}
                        <Link
                            href="/partner/earnings"
                            className={`${sg} mt-2 flex min-h-8 w-full items-center justify-center gap-1.5 text-[11px] font-semibold  text-[#565E74]`}
                        >
                            <Wallet size={12} />
                            View Today&apos;s Earnings ({reassignment.dailyEarnings})
                            <ChevronRight size={12} />
                        </Link>

                        {statusMessage && (
                            <p
                                role="status"
                                className={`${sg} mt-2 rounded-lg bg-[#E5F5ED] p-2 text-center text-[11px] font-semibold text-[#004B31]`}
                            >
                                {statusMessage}
                            </p>
                        )}

                        {error && (
                            <p
                                role="alert"
                                className={`${sg} mt-2 flex items-start gap-1.5 rounded-lg bg-[#FCE8E8] p-2 text-[11px] font-medium leading-4 text-[#BA1A1A]`}
                            >
                                <AlertTriangle size={13} className="mt-0.5 shrink-0" />
                                {error}
                            </p>
                        )}
                    </section>
                </div>

                {/* Existing bottom navigation */}
                <Navbar />

                {/* Support dialog */}
                {showSupport && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="support-title"
                            className="w-full max-w-[360px] rounded-2xl bg-white p-5 shadow-xl"
                        >
                            <div className="flex items-center justify-between">
                                <h2
                                    id="support-title"
                                    className={`${hanuman} text-[18px] font-bold  text-[#191C1E]`}
                                >
                                    Rider Support
                                </h2>

                                <button
                                    type="button"
                                    onClick={() => setShowSupport(false)}
                                    aria-label="Close support dialog"
                                    className="rounded-full bg-[#F2F4F6] p-2"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#F2F4F6] p-3">
                                <Headphones
                                    size={20}
                                    className="mt-0.5 shrink-0 text-[#003A94]"
                                />

                                <div>
                                    <p
                                        className={`${sg} text-[13px] font-bold  text-[#191C1E]`}
                                    >
                                        Safety Priority Desk
                                    </p>

                                    <p
                                        className={`${sg} mt-1 text-[12px] text-[#565E74]`}
                                    >
                                        Contact the dispatch team for breakdown assistance,
                                        towing, or rider safety support.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowSupport(false)}
                                className={`${hanuman} mt-4 w-full rounded-lg bg-[#003A94] py-3 text-[14px] font-bold text-white`}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
