
import { Check, Circle } from "lucide-react";

const steps = ["Accepted", "Arrived", "Picked", "Drop-off"];

type OrderProgressProps = {
    currentStep?: number;
};

export default function OrderProgress({
    currentStep = 0,
}: OrderProgressProps) {
    const activeStep = Math.max(0, Math.min(currentStep, steps.length-1));

    return (
        <div className="rounded-xl bg-white px-3 py-3">
            <div className="relative grid grid-cols-4">
                {/* Connecting line */}
                <div className="absolute left-[12.5%] right-[12.5%] top-[9px] h-px bg-slate-200" />

                {steps.map((step, index) => {
                    const completed = index < activeStep;
                    const current = index === activeStep;

                    return (
                        <div
                            key={step}
                            className="relative z-10 flex flex-col items-center gap-1.5"
                        >
                            <span
                                className={`flex h-[18px] w-[18px] items-center justify-center rounded-full ${completed
                                        ? "bg-[#0647A8] text-white"
                                        : current
                                            ? "border-[3px] border-[#0750BC] bg-white"
                                            : "border border-slate-200 bg-slate-100 text-slate-400"
                                    }`}
                            >
                                {completed ? (
                                    <Check size={11} strokeWidth={3} />
                                ) : current ? null : (
                                    <Circle size={7} strokeWidth={2} />
                                )}
                            </span>

                            <span
                                className={`whitespace-nowrap text-[8px] ${current
                                        ? "font-bold text-[#0750BC]"
                                        : completed
                                            ? "font-medium text-slate-700"
                                            : "text-slate-500"
                                    }`}
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
