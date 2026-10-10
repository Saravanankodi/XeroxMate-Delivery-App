"use client";

import { useRouter } from "next/navigation";
import {
    CalendarDays,
   
    Mail,
    FileText,
    Info,
    CheckCircle2,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";

import {
    ProfilePhotoCard,
    VerificationCard,
    SecurityNote,
} from "@/components/onboarding/PartnerOnboardingUI";

export default function YourselfPage() {
    const router = useRouter();

    return (
        <main className="min-h-dvh w-full overflow-x-hidden bg-white">
            <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
                <Header
                    title="Tell about yourself Partner"
                    currentStep={1}
                    totalSteps={4}
                    showProgress
                />

                

                <section className="flex flex-1 flex-col px-4 sm:px-6">
                    <div>
                        <h1 className="font-hanuman text-[22px] font-bold  text-gray-900">
                            Tell us about yourself
                        </h1>

                        <p className="mt-1.5 text-sm l text-gray-500">
                            Enter your basic details to create your
                            partner profile.
                        </p>
                    </div>

                    <div className="mt-5">
                        <ProfilePhotoCard />
                    </div>

                    <div className="mt-5">
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="text-sm font-semibold text-gray-900">
                                Full name
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <span className="flex items-center gap-1 text-[11px] font-medium text-blue-600">
                                <CheckCircle2 size={15} strokeWidth={3} stroke="#ffffff" fill="blue" />
                                Verified match
                            </span>
                        </div>

                        <div className="flex h-11 items-center rounded-lg border-2 border-blue-500 bg-white px-3">
                            <FileText
                                size={16}
                                className="mr-2 text-gray-500"
                            />

                            <input
                                placeholder="Rahul Sharma"
                                className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-900 outline-none"
                            />
                        </div>

                        <p className="mt-1 text-[11px] text-gray-500">
                            As per government records / PAN
                        </p>
                    </div>

                    <div className="mt-5">
                        <label className="mb-1.5 block text-sm font-semibold text-gray-900">
                            Date of birth
                            <span className="ml-1 text-red-500">
                                *
                            </span>
                        </label>

                        <div className="flex h-11 items-center rounded-lg border border-blue-100 bg-indigo-50 px-3">
                            <input
                                placeholder="14 / 08 / 1996"
                                className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-900 outline-none"
                            />

                            <CalendarDays
                                size={17}
                                className="text-blue-600"
                            />
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                            <Info size={14} />
                            Must be 18+ years to register as delivery
                            partner.
                        </p>
                    </div>

                    <div className="mt-5">
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="text-sm font-semibold text-gray-900">
                                Email address
                            </label>

                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                                Optional
                            </span>
                        </div>

                        <div className="flex h-11 items-center rounded-lg border border-blue-100 bg-indigo-50 px-3">
                            <Mail
                                size={16}
                                className="mr-2 text-gray-500"
                            />

                            <input
                                placeholder="rahul.sharma@example.com"
                                type="email"
                                className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-900 outline-none"
                            />
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                            <Mail size={10} />
                            For monthly payout summaries and tax
                            invoices.
                        </p>
                    </div>

                    <div className="mt-5">
                        <VerificationCard />
                    </div>

                    <div className="mt-5">
                        <SecurityNote />
                    </div>

                    <div className="mt-6 pb-5">
                        <Button
                            onClick={() =>
                                router.push(
                                    "/partner/onboarding/work-area",
                                )
                            }
                            className="w-full"
                        >
                            Continue
                            <span>→</span>
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
}