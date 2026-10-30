
"use client";

import { useRouter } from "next/navigation";
import { Check, Clock3, Info, ShieldCheck } from "lucide-react";
import StatusHero from "@/components/onboarding/StatusHero";
import Button from "@/components/ui/Button";
import Header from "@/components/onboarding/Header";

const stages = [
  {
    title: "Application submitted",
    description: "Profile & contact information recorded",
    status: "Done",
    completed: true,
  },
  {
    title: "Documents received",
    description: "Identity & vehicle paperwork loaded",
    status: "Done",
    completed: true,
  },
  {
    title: "Verification in progress",
    description: "Background check usually takes ~24 hours",
    status: "Active",
    completed: false,
  },
  {
    title: "Account approval",
    description: "Partner dispatch access activation",
    status: "",
    completed: false,
  },
];

export default function ApplicationStatusPage() {
  const router = useRouter();

  return (
    <main className="min-h-dvh mx-auto w-full max-w-md bg-[#FAF8FFCC] text-[#17213c]">
      <Header showRiderLabel />

      <StatusHero
        title="Application under review"
        description={
          "We've received your details and documents.\nWe're verifying your account."
        }
      />

      <div className="mx-auto w-full max-w-md px-3 pb-5">
        <section className="rounded-xl bg-white px-3.5 py-3.5">
          <h2 className="mb-3 text-[16px] font-medium">
            Verification Stages
          </h2>

          <div>
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="relative flex gap-3 pb-3 last:pb-0"
              >
                {index < stages.length-1 && (
                  <span
                    className={`absolute left-[7px] top-4 h-full w-px ${index < 2 ? "bg-blue-200" : "bg-gray-200"
                      } `}
                  />
                )}

                <div className="relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full bg-white">
                  {stage.completed ? (
                    <span className="flex size-4 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Check size={10} strokeWidth={3} />
                    </span>
                  ) : index === 2 ? (
                    <span className="flex size-4 items-center justify-center rounded-full bg-blue-100">
                      <span className="size-2 rounded-full bg-blue-700" />
                    </span>
                  ) : (
                    <span className="size-4 rounded-full bg-gray-100" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className={`text-[16px] font-bold  font-hanuman ${index === 2
                          ? "text-blue-700"
                          : "text-[#17213c]"
                        } `}
                    >
                      {stage.title}
                    </p>

                    {stage.status && (
                      <span
                        className={`shrink-0 text-[12px] font-semibold  font-hanuman ${stage.status === "Active"
                            ? "rounded-full bg-blue-50 px-1.5 py-0.5 text-blue-600"
                            : "text-blue-600"
                          } `}
                      >
                        {stage.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-0.5 text-[14px]  text-gray-500">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-2 flex items-center gap-2 rounded-xl bg-[#F2F3FF] px-3 py-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EAEDFF] text-blue-600">
            <Info size={18} />
          </span>

          <p className="text-[14px]  text-[#434655]">
            Your account will be available once verification is
            complete. We will notify you via SMS.
          </p>
        </div>

        <Button
          type="button"
          onClick={() =>
            router.push("/partner/onboarding/approved")
          }
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md bg-blue-700 py-2.5 text-xl font-semibold  font-hanuman text-white shadow-sm hover:bg-blue-800"
        >
          Check Status
          <Clock3 size={15} />
        </Button>

        <button
          type="button"
          onClick={() => {
            // Connect your support action here.
          }}
          className="mt-3 block w-full text-center text-[14px] font-medium text-blue-600"
        >
          Need Help? Chat Support
        </button>
      </div>
    </main>
  );
}
