"use client";

type ResolutionOptionProps = {
    title: string;
    description: string;
    selected: boolean;
    badge?: string;
    onSelect: () => void;
};

export default function ResolutionOption({
    title,
    description,
    selected,
    badge,
    onSelect,
}: ResolutionOptionProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            className={`w-full rounded-lg border p-2 text-left transition ${selected
                    ? "border-blue-300 bg-blue-50/50"
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
        >
            <span className="flex items-start gap-2">
                <span
                    className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-blue-700" : "border-slate-300"
                        }`}
                >
                    {selected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                    )}
                </span>

                <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[18px] font-bold font-hanuman text-slate-800">
                            {title}
                        </span>

                        {badge && (
                            <span
                                className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${badge === "Recommended"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-slate-100 text-slate-600"
                                    }`}
                            >
                                {badge}
                            </span>
                        )}
                    </span>

                    <span className="mt-1 block text-[13px] leading-relaxed text-slate-500">
                        {description}
                    </span>
                </span>
            </span>
        </button>
    );
}