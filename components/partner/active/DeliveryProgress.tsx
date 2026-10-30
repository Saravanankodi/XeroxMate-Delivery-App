
import { Check, Circle } from "lucide-react";

const steps = ["Accepted", "Arrived", "Picked", "Drop-off"];

type DeliveryProgressProps = {
    currentStep: number;
};

export default function DeliveryProgress({
    currentStep,
}: DeliveryProgressProps) {
    const activeStep = Math.max(0, Math.min(currentStep, 3));

    return (
        <div className="rounded-xl bg-white px-3 py-2.5">
            <div className="relative grid grid-cols-4">
                <div className="absolute left-[12.5%] right-[12.5%] top-[8px] h-px bg-slate-200" />

                {steps.map((step, index) => {
                    const completed = index <= activeStep;

                    return (
                        <div key={step} className="relative z-10 flex flex-col items-center gap-1.5">
                            <span
                                className={`flex h-4 w-4 items-center justify-center rounded-full ${completed
                                        ? "bg-[#0647A8] text-white"
                                        : "bg-slate-200 text-slate-400"
                                    }`}
                            >
                                {completed ? (
                                    <Check size={10} strokeWidth={3} />
                                ) : (
                                    <Circle size={7} />
                                )}
                            </span>
                            <span className={`text-[8px] ${index === activeStep ? "font-bold text-blue-700" : "text-slate-500"}`}>
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
