"use client";

import Link from "next/link";
import { useState } from "react";
import {
    ArrowLeft,
    Headphones,
    Info,
    Send,
    ShieldAlert,
    ShieldCheck,
    Store,
} from "lucide-react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import IncidentCategoryCard from "@/components/partner/reassign/IncidentCategoryCard";
import ResolutionOption from "@/components/partner/reassign/ResolutionOption";
import EvidenceUpload from "@/components/partner/reassign/EvidenceUpload";

const incidents = [
    {
        title: "Printing Still in Progress / Long Wait",
        description:
            "Bulk sheets or color sheets are drying. Machine queue is currently occupied.",
        badge: "> 10 mins",
    },
    {
        title: "Damaged / Torn Parcel / Smudged Prints",
        description:
            "Water damage, folded blueprints, or compromised tamper-evident seal.",
        badge: "Defect",
    },
    {
        title: "Shop Closed / Shutter Down / Gate Locked",
        description:
            "Merchant phone switched off, shop locked, or lunch-hour shutdown.",
        badge: "Unreachable",
    },
    {
        title: "Spec Mismatch / Missing Hardcover Bind",
        description:
            "Order requested spiral binding, but the shop prepared loose sheets.",
    },
    {
        title: "Barcode / Handover QR Not Scanning",
        description:
            "Package label is faded or scratched, or the manifest QR is missing.",
    },
];

export default function IssueReportPage() {
    const [selectedIncident, setSelectedIncident] = useState(0);
    const [resolution, setResolution] = useState<"wait" | "reassign">("wait");
    const [notes, setNotes] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        // Replace this UI-only handler with your report API.
        setSubmitted(true);
    }

    return (
        <main className="min-h-screen bg-[#F2F4F7] text-slate-800 mb-15">
            <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F7F9FB]">
                <TopBar />

                <div className="flex-1 space-y-2 px-2.5 pb-3 pt-2">
                    {/* Report heading */}
                    <section className="flex items-center gap-2">
                        <Link
                            href="/partner/active/verify"
                            aria-label="Return to package verification"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-700"
                        >
                            <ArrowLeft size={15} />
                        </Link>

                        <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-bold text-blue-700">
                                ISSUE REPORT · #XM20481
                            </p>
                            <h1 className="text-[18px] font-bold font-hanuman text-slate-800">
                                Tamil Printers &amp; Stationers
                            </h1>
                        </div>

                        <Link
                            href="/partner/active/verify"
                            className="rounded-lg bg-red-100 px-2 py-1.5 text-[14px] font-semibold text-red-700"
                        >
                            Cancel
                        </Link>
                    </section>

                    {/* Rider rating protection */}
                    <section className="flex gap-2 rounded-lg bg-white p-2.5 shadow-sm items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-blue-800">
                            <ShieldCheck fill="#003A94" stroke="white" size={25} />
                        </div>

                        <div>
                            <h2 className="text-[14px] font-bold font-hanuman text-slate-800">
                                Rider Rating Protected
                            </h2>
                            <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                                Reporting legitimate merchant delays or defects will not
                                penalize your acceptance rate. Reports may qualify for
                                compensation according to policy.
                            </p>
                        </div>
                    </section>

                    {/* Shift wait compensation */}
                    <section className="flex items-center justify-between gap-2 rounded-lg bg-indigo-100 px-2.5 py-2">
                        <div>
                            <p className="text-[11px] font-bold text-slate-600">
                                ● LIVE SHIFT WAIT · XM 0429
                            </p>
                            <p className="mt-0.5 text-[12px] font-bold text-slate-700">
                                Compensation eligibility after 10 minutes
                            </p>
                        </div>

                        <span className="shrink-0 text-[18px] font-bold text-blue-800">
                            ₹1.5/min
                        </span>
                    </section>

                    {/* Incident category */}
                    <section>
                        <div className="mb-1.5 flex items-center justify-between">
                            <h2 className="text-[18px] font-bold font-hanuman text-slate-800">
                                Select Incident Category
                            </h2>
                            <span className="text-[11px] font-bold tracking-wide text-slate-400">
                                REQUIRED
                            </span>
                        </div>

                        <div className="space-y-1.5">
                            {incidents.map((incident, index) => (
                                <IncidentCategoryCard
                                    key={incident.title}
                                    title={incident.title}
                                    description={incident.description}
                                    badge={incident.badge}
                                    selected={selectedIncident === index}
                                    onSelect={() => {
                                        setSelectedIncident(index);
                                        setSubmitted(false);
                                    }}
                                />
                            ))}
                        </div>

                       
                    </section>

                    {/* Evidence */}
                    <section>
                        <div className="mb-1.5 flex items-center justify-between">
                            <h2 className="text-[18px] font-bold font-hanuman text-slate-800">
                                Attach Photo Evidence
                            </h2>
                            <span className="rounded-full bg-slate-200 px-2 py-1 text-[12px] font-bold text-slate-600">
                                Recommended
                            </span>
                        </div>

                        <EvidenceUpload />
                    </section>

                    {/* Quick contact actions */}
                    <section>
                        <h2 className="mb-1.5 text-[18px] font-bold font-hanuman text-slate-800">
                            Quick Calling Shortcuts
                        </h2>

                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href="tel:"
                                className="flex items-center gap-2 rounded-lg bg-white p-2"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                                    <Store size={15} />
                                </span>
                                <span>
                                    <span className="block text-[12px] font-bold text-slate-500">
                                        SHOP OWNER
                                    </span>
                                    <span className="block text-[13px] font-semibold">
                                        M. Senthil
                                    </span>
                                </span>
                            </a>

                            <a
                                href="tel:"
                                className="flex items-center gap-2 rounded-lg bg-white p-2"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                                    <Headphones size={15} />
                                </span>
                                <span>
                                    <span className="block text-[12px] font-bold text-blue-700">
                                        DIRECT HOTLINE
                                    </span>
                                    <span className="block text-[13px] font-semibold">
                                        Ops Dispatch
                                    </span>
                                </span>
                            </a>
                        </div>
                    </section>

                    {/* Operator notes */}
                    <section>
                        <div className="mb-1 flex items-center justify-between">
                            <h2 className="text-[18px] font-bold font-hanuman text-slate-800">
                                Operator Explanation &amp; Notes
                            </h2>
                            <span className="text-[7px] text-slate-400">Optional</span>
                        </div>

                        <textarea
                            value={notes}
                            onChange={(event) => {
                                setNotes(event.target.value.slice(0, 200));
                                setSubmitted(false);
                            }}
                            maxLength={200}
                            placeholder="e.g. Printer drum overheated. Operator expects a 15–20 minute delay."
                            className="min-h-[62px] w-full resize-y rounded-lg border border-slate-100 bg-white p-2.5 text-[14px] leading-relaxed text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-300"
                        />

                        <p className="mt-0.5 text-right text-[11px] text-slate-400">
                            {notes.length}/200
                        </p>
                    </section>

                    {/* Desired resolution */}
                    <section>
                        <h2 className="mb-1.5 text-[18px] font-bold font-hanuman">
                            Desired Resolution
                        </h2>

                        <div className="space-y-1.5">
                            <ResolutionOption
                                title="Wait for Order"
                                description="Stay at the shop while the order is completed. Applicable wait compensation is policy-dependent."
                                badge="Recommended"
                                selected={resolution === "wait"}
                                onSelect={() => {
                                    setResolution("wait");
                                    setSubmitted(false);
                                }}
                            />

                            <ResolutionOption
                                title="Unassign Order"
                                description="Request to release the order back to dispatch for reassignment."
                                badge="Review"
                                selected={resolution === "reassign"}
                                onSelect={() => {
                                    setResolution("reassign");
                                    setSubmitted(false);
                                }}
                            />
                        </div>
                    </section>

                    {submitted && (
                        <div
                            role="status"
                            className="rounded-lg bg-emerald-50 p-2 text-[9px] font-semibold text-emerald-800"
                        >
                            Form validated in the UI. No report has been sent to the server.
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex min-h-[37px] w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] px-3 py-2.5 text-[18px] font-bold font-hanuman text-white shadow-sm hover:bg-blue-800"
                    >
                        <Send size={18} />
                        SUBMIT REPORT &amp; EXTEND WAIT
                    </button>

                    <Link
                        href="/partner/active/verify"
                        className="flex min-h-[30px] w-full items-center justify-center rounded-lg bg-slate-300 px-3 py-2 text-[14px] font-bold text-slate-800"
                    >
                        Cancel &amp; Return to Verification
                    </Link>
                </div>

                <Navbar />
            </div>
        </main>
    );
}