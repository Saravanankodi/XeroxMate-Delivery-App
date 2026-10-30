"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import ActiveDeliveryNavigationStep from "@/components/partner/active/steps/ActiveDeliveryNavigationStep";
import DeliveryCompletedStep from "@/components/partner/active/steps/DeliveryCompletedStep";
import GateHandoverStep from "@/components/partner/active/steps/GateHandoverStep";
import PackageCollectedStep from "@/components/partner/active/steps/PackageCollectedStep";
import { useState } from "react";

export default function ActiveOrderPage() {
  const [step, setStep] = useState(1);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const router = useRouter();

  const completeDelivery = () => {
    setCompletedAt(new Date());
    setStep(4);
  };

  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#F2F4F7] text-slate-800">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-[#F7F9FB]">
        <TopBar />
        <div className="flex-1">
          {step === 1 && (
            <PackageCollectedStep
              onContinue={() => setStep(2)}
              onReachedGate={() => setStep(3)}
            />
          )}
          {step === 2 && (
            <ActiveDeliveryNavigationStep
              onArrived={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <GateHandoverStep
              onDeliveryCompleted={completeDelivery}
              onBack={() => setStep(2)}
            />
          )}
          {step === 4 && completedAt && (
            <DeliveryCompletedStep
              completedAt={completedAt}
              onFindNextOrder={() => router.push("/partner/home")}
              onViewEarnings={() => router.push("/partner/earnings")}
            />
          )}
        </div>
        <Navbar />
      </div>
    </main>
  );
}
