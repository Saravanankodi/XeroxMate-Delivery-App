
import { Check, RotateCw, ShieldCheck } from "lucide-react";

interface StatusHeroProps {
    approved?: boolean;
    title: string;
    description: string;
}

export default function StatusHero({
    approved = false,
    title,
    description,
}: StatusHeroProps) {
    return (
        <section className="flex flex-col items-center px-5 pb-3 pt-5 text-center">
            <div className="relative flex size-[112px] items-center justify-center rounded-full bg-[#dfe7ff]">
                <div className="flex size-[80px] items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                    {approved ? (
                        <Check size={36} strokeWidth={3} />
                    ) : (
                        <ShieldCheck size={36} fill="white" className="text-blue-600" />
                    )}
                </div>

                {!approved && (
                    <span className="absolute -bottom-1 right-0 rounded-full bg-white px-1 text-[13px] text-blue-600">
                        <RotateCw size={18} strokeWidth={3} />
                    </span>
                )}
            </div>

            {!approved && (
                <span className="mt-2 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-gray-600">
                    <span className="mr-1 inline-block size-1.5 rounded-full bg-blue-600" />
                    IN PROGRESS
                </span>
            )}

            <h1 className="mt-2 font-hanuman text-[22px] font-bold text-[#17213c]">
                {title}
            </h1>

            <p className="mt-1 max-w-[280px] whitespace-pre-line text-[14px]  text-gray-500">
                {description}
            </p>
        </section>
    );
}