
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    Bike,
    Check,
    CheckCircle2,
    FileCheck,
    LockKeyhole,
    MapPin,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";
import ReviewSection, {
    ReviewRow,
} from "@/components/onboarding/ReviewSection";

export default function ReviewPage() {
    const router = useRouter();

    const [confirmDetails, setConfirmDetails] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!confirmDetails || !acceptTerms || submitting) return;

        setSubmitting(true);
        router.push("/partner/onboarding/application-status");
    };

    return (
        <main className="min-h-dvh bg-[#FAF8FFCC]">

            <div className="mx-auto w-full max-w-md">
            <Header title="Review Partner" currentStep={4} totalSteps={4} showProgress />

                <div className="space-y-2.5 px-3 pb-5 pt-2">
                    <section>
                        <h1 className="font-hanuman text-[22px] font-bold text-[#17213c]">
                            Review your details
                        </h1>
                        <p className="mt-0.5 text-[14px] text-gray-500">
                            Check your information before submitting.
                        </p>
                    </section>

                    <ReviewSection
                        title="Personal details"
                        icon={<UserRound size={15} />}
                        actionLabel="Edit"
                        onAction={() => router.push("/partner/onboarding/yourself")}
                    >
                        <ReviewRow label="Full Name" value="Rahul Sharma" />
                        <ReviewRow label="Date of birth" value="14 / 08 / 1996" />
                        <ReviewRow label="Phone" value="+91 98XXX 43210" />
                        <ReviewRow label="Email Id" value="abcd@gmail.com" />
                    </ReviewSection>

                    <ReviewSection
                        title="Work area"
                        icon={<MapPin size={15} />}
                        actionLabel="Edit"
                        onAction={() => router.push("/partner/onboarding/work-area")}
                    >
                        <ReviewRow label="City" value="Chennai" />
                        <ReviewRow label="Area" value="Anna Nagar" />
                    </ReviewSection>

                    <ReviewSection
                        title="Vehicle"
                        icon={<Bike size={15} />}
                        actionLabel="Edit"
                        onAction={() => router.push("/partner/onboarding/vehicle")}
                    >
                        <ReviewRow label="Vehicle" value="Scooty" />
                        <ReviewRow label="Registration" value="TN 09 AB 1234" />
                    </ReviewSection>

                    <ReviewSection
                        title="Documents"
                        icon={<FileCheck size={15} />}
                        actionLabel="View"
                        onAction={() => router.push("/partner/onboarding/documents")}
                    >
                        <ReviewRow label="Required documents" value="uploaded" />
                        <ReviewRow
                            label="Status"
                            value={
                                <span className="inline-flex items-center gap-1 rounded-full font-bold bg-[#EAEDFF] px-1.5 py-0.5 text-[12px] text-blue-600">
                                    <CheckCircle2 fill="#2563EB" stroke="white" size={15} />
                                    Ready for verification
                                </span>
                            }
                        />
                    </ReviewSection>

                    <ReviewSection
                        title="Identity verification"
                        icon={<ShieldCheck size={15} />}
                        actionLabel="View"
                        onAction={() => router.push("/partner/onboarding/selfie")}
                    >
                        <ReviewRow label="Selfie" 
                            value={
                                <span className="inline-flex items-center gap-1 rounded-full font-bold bg-[#EAEDFF] px-1.5 py-0.5 text-[12px] text-blue-600">
                                    <CheckCircle2 fill="#2563EB" stroke="white" size={15} />
                                    Completed 
                                </span>
                            }
                             />
                    </ReviewSection>

                    <label className="flex cursor-pointer items-center  gap-4 rounded-xl bg-[#F2F3FF] px-2.5 py-2.5">
                        <input
                            type="checkbox"
                            checked={confirmDetails}
                            onChange={(event) => setConfirmDetails(event.target.checked)}
                            className="mt-0.5 size-3 accent-blue-600"
                        />
                        <span className="text-[14px]  text-[#131B2E]">
                            I confirm that the information provided is correct.
                        </span>
                    </label>

                    <label className="flex cursor-pointer items-center  gap-4 rounded-xl bg-[#F2F3FF] px-2.5 py-2.5">
                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(event) => setAcceptTerms(event.target.checked)}
                            className="mt-0.5 size-3 accent-blue-600"
                        />
                        <span className="text-[14px]  text-[#131B2E]">
                            Team &amp; Condition, Privacy
                        </span>
                    </label>

                    <p className="flex items-center justify-center gap-1 text-[12px] font-bold text-gray-500">
                        <LockKeyhole size={9} />
                        Protected under Xerox Partner Privacy Terms
                    </p>

                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!confirmDetails || !acceptTerms || submitting}
                        className="flex w-full items-center justify-center gap-1 rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {submitting ? "Submitting..." : "Submit Application"}
                        <ArrowRight size={14} />
                    </Button>
                </div>
            </div>
        </main>
    );
}