"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Building2,
    Check,
    Info,
    MapPin,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";

import {
    HubChip,
    SelectField,
    WorkInfoCard,
} from "@/components/onboarding/PartnerOnboardingUI";

const hubs = [
    "Anna Nagar",
    "T. Nagar",
    "Velachery",
    "Adyar",
    "Guindy",
    "Tambaram",
];

export default function WorkAreaPage() {
    const router = useRouter();

    const [selectedHub, setSelectedHub] =
        useState("Anna Nagar");

    const [city, setCity] =
        useState("Chennai");

    const handleContinue = () => {
        router.push("/partner/onboarding/vehicle");
    };

    return (
        <main className="min-h-dvh w-full overflow-x-hidden bg-[#FAF8FFCC]">
            <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
                <Header
                    title="Choose your Area Partner"
                    currentStep={3}
                    totalSteps={4}
                    showProgress
                />


                <section className="flex flex-1 flex-col px-4 sm:px-6">
                    <div>
                        <h1 className="font-hanuman text-[22px] font-bold  text-gray-900">
                            Where do you want to work?
                        </h1>

                        <p className="mt-1.5 max-w-sm text-sm  text-gray-500">
                            Choose the area where you'd like to
                            receive delivery requests.
                        </p>
                    </div>

                    <div className="mt-5">
                        <SelectField
                            label="City"
                            value={city}
                            topText="Operating Hub"
                            rightText="✓ Available"
                            icon={
                                <Building2
                                    size={19}
                                    strokeWidth={2}
                                />
                            }
                            onClick={() =>
                                setCity(
                                    city === "Chennai"
                                        ? "Chengalpattu"
                                        : "Chennai",
                                )
                            }
                        />
                    </div>

                    <div className="mt-5">
                        <SelectField
                            label="Area"
                            value={selectedHub}
                            topText="Primary Dispatch Territory"
                            rightText="Auto-matched Hubs"
                            icon={
                                <MapPin
                                    size={19}
                                    strokeWidth={2}
                                />
                            }
                            onClick={() => {
                                const index =
                                    hubs.indexOf(selectedHub);

                                const next =
                                    hubs[(index + 1) % hubs.length];

                                setSelectedHub(next);
                            }}
                        />
                    </div>

                    <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-[13px] font-medium text-gray-500">
                                Popular Hubs in Chennai
                            </span>

                            <span className="text-[11px] text-gray-500">
                                Tap to switch
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {hubs.map((hub) => (
                                <HubChip
                                    key={hub}
                                    selected={selectedHub === hub}
                                    onClick={() =>
                                        setSelectedHub(hub)
                                    }
                                >
                                    {hub}
                                </HubChip>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5">
                        <WorkInfoCard />
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
                            You can change your preferred hub anytime
                            from profile
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}