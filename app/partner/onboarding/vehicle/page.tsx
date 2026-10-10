"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Bike,
    CircleDot,
    Zap,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";

import {
    VehicleCard,
    VehicleInfoNote,
    VehicleNumberBox,
} from "@/components/onboarding/PartnerOnboardingUI";

type VehicleType =
    | "Motorcycle"
    | "Scooty"
    | "Electric vehicle"
    | "Other";

export default function VehiclePage() {
    const router = useRouter();

    const [vehicle, setVehicle] =
        useState<VehicleType>("Scooty");

    const vehicles = [
        {
            id: "Motorcycle" as const,
            title: "Motorcycle",
            subtitle: "Geared 2-wheeler",
            icon: (
                <Bike
                    size={20}
                    strokeWidth={2}
                />
            ),
        },
        {
            id: "Scooty" as const,
            title: "Scooty",
            subtitle: "Gearless scooter",
            icon: (
                <Bike
                    size={20}
                    strokeWidth={2}
                />
            ),
        },
        {
            id: "Electric vehicle" as const,
            title: "Electric vehicle",
            subtitle: "EV 2-wheeler",
            icon: (
                <Zap
                    size={20}
                    strokeWidth={2}
                />
            ),
        },
        {
            id: "Other" as const,
            title: "Other",
            subtitle: "Bicycle / Cycle",
            icon: (
                <CircleDot
                    size={20}
                    strokeWidth={2}
                />
            ),
        },
    ];

    const handleContinue = () => {
        // Next: vehicle documents page.
        router.push("/partner/onboarding/documents");
    };

    return (
        <main className="min-h-dvh w-full overflow-x-hidden bg-[#FAF8FFCC]">
            <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
                <Header
                    title="Choose Your Vehicle Partner"
                    currentStep={4}
                    totalSteps={4}
                    showProgress
                />


                <section className="flex flex-1 flex-col px-4 sm:px-6">
                    <div className="mt-1">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold text-gray-700">
                            <Bike
                                size={11}
                                className="text-blue-600"
                            />
                            Vehicle Details
                        </span>

                        <h1 className="mt-2 font-hanuman text-[22px] font-bold   text-gray-900">
                            Which vehicle do you use?
                        </h1>

                        <p className="mt-1.5 text-sm   text-gray-500">
                            Select the vehicle you'll use for
                            deliveries.
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                        {vehicles.map((item) => (
                            <VehicleCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                selected={vehicle === item.id}
                                onClick={() =>
                                    setVehicle(item.id)
                                }
                            />
                        ))}
                    </div>

                    <div className="mt-6">
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="text-[13px] font-semibold text-gray-900">
                                Vehicle number
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <button
                                type="button"
                                className="text-[11px] font-semibold text-blue-600"
                            >
                                STANDARD FORMAT
                            </button>
                        </div>

                        <VehicleNumberBox />

                        <VehicleInfoNote />
                    </div>

                    <div className="mt-auto pb-5 pt-6">
                        <Button
                            onClick={handleContinue}
                            className="w-full"
                        >
                            <span className="text-xl font-normal">
                                Continue
                            </span>
                            <span>→</span>
                        </Button>

                        <p className="mt-2 text-center text-[11px] text-gray-500">
                            Step 8 of 8 • Documents next
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}