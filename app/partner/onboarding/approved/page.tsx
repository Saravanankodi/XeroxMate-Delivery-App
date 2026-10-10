

"use client";

import { useRouter } from "next/navigation";
import {
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ApprovedPage() {
  const router = useRouter();

  return (
    <main className="min-h-dvh mx-auto w-full max-w-md bg-[#FAF8FFCC] text-[#17213c]">
      <Header showRiderLabel />

      {/* Page heading */}
      <div className="border-b border-gray-100 px-4 py-2.5 text-center">
        <h1 className="font-hanuman text-2xl font-semibold">
          Account Approved
        </h1>
      </div>

      <div className="mx-auto w-full max-w-md px-3 pb-8">
        {/* Approval hero */}
        <section className="flex flex-col items-center pt-2">
          <div className="flex size-[112px] items-center justify-center rounded-full bg-[#eef0ff]">
            <div className="flex size-[80px] items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
              <Check size={31} strokeWidth={3} />
            </div>
          </div>

          <h2 className="mt-1.5 text-center text-[22px] font-bold">
            You're ready to deliver!
          </h2>

          <p className="mt-1 text-center text-[16px] text-gray-500">
            Your account is approved
          </p>
        </section>

        {/* Verification checklist */}
        <section className="mt-5 space-y-2 rounded-xl bg-[#F2F3FF] px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Check size={14} strokeWidth={3} />
            </span>
            <p className="text-[16px] font-medium">
              Account verified
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Check size={14} strokeWidth={3} />
            </span>
            <p className="text-[16px] font-medium">
              Documents verified
            </p>
          </div>
        </section>

        {/* Welcome / joined area card */}
        <section className="mt-2 flex items-center gap-2 rounded-lg bg-[#EAEDFF] p-2">
          <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white text-blue-600">
            <Image
              src="/images/approve.png"
              alt="XeroxMate approval"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[12px]  text-gray-600">
              WELCOME ABOARD
            </p>
            <p className="text-[14px] font-medium">
              Joined : Chennai
            </p>
          </div>
        </section>

        {/* Delivery-ready message */}
        <p className="mx-auto mt-2 max-w-[260px] text-center text-[15px]  text-[#516070]">
          Go online whenever you're ready to receive
          delivery requests.
        </p>

        {/* Primary action */}
        <Button
          type="button"
          onClick={() => router.push("/partner/home")}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md bg-blue-600 py-2.5 text-xl font-semibold text-white shadow-md shadow-blue-100 hover:bg-blue-700"
        >
          Go to Home
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </main>
  );
}
