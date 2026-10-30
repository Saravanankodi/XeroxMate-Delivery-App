"use client";

type IncidentCategoryCardProps = {
  title: string;
  description: string;
  selected: boolean;
  badge?: string;
  onSelect: () => void;
};

export default function IncidentCategoryCard({
  title,
  description,
  selected,
  badge,
  onSelect,
}: IncidentCategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-2.5 text-left transition ${
        selected
          ? "border-blue-400 bg-blue-50/60"
          : "border-slate-100 bg-white hover:border-slate-200"
      }`}
    >
      <span className="flex items-start gap-2">
        <span
          className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-blue-700" : "border-slate-300"
          }`}
        >
          {selected && (
            <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
          )}
        </span>

        <span className="min-w-0 flex-1 ">
          <span className="flex flex-wrap items-center gap-1.5">
            <span className="text-[16px] font-semibold leading-tight font-hanuman text-slate-800">
              {title}
            </span>

            {badge && (
              <span className="rounded-full bg-[#DAE2FD] px-1.5 py-0.5 text-[11px] font-bold text-slate-600">
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