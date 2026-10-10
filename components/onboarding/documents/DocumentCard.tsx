"use client";

import { CheckCircle2, FileText, Bike, CreditCard } from "lucide-react";

export type DocumentType = "aadhaar" | "license" | "rc";

interface DocumentCardProps {
    type: DocumentType;
    title: string;
    uploaded: boolean;
    onAction: () => void;
}

const documentIcons = {
    aadhaar: CreditCard,
    license: FileText,
    rc: Bike,
};

export default function DocumentCard({
    type,
    title,
    uploaded,
    onAction,
}: DocumentCardProps) {
    const Icon = documentIcons[type];

    return (
        <div className= "flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)]" >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50" >
            <Icon className="size-5 text-blue-600" strokeWidth = { 1.8} />
                </div>

                < div className = "min-w-0 flex-1" >
                    <div className="flex items-center gap-1" >
                        <p className="truncate text-[15px] font-semibold text-gray-800" >
                            { title }
                            </p>

    {
        uploaded && (
            <CheckCircle2
              className="size-3.5 shrink-0 fill-blue-600 text-white"
        strokeWidth = { 2}
            />
          )
    }
    </div>

        < span
    className = {
        [
        "mt-0.5 inline-flex rounded-md px-1.5 py-0.5 text-[11px] font-semibold",
        uploaded
            ? "bg-[#EAEDFF] text-[#2563EB]"
            : "bg-[#FFDAD6] text-[#93000A]",
          ].join(" ")
    }
        >
        { uploaded? "Uploaded": "If Available" }
        </span>
        </div>

        < button
    type = "button"
    onClick = { onAction }
    className = {
        [
        "shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-semibold transition",
        uploaded
            ? "bg-[#F2F3FF] text-[#2563EB] hover:bg-blue-100"
            : "bg-[#D5E4F8] text-[#2563EB] hover:bg-blue-200",
        ].join(" ")
    }
        >
        { uploaded? "Change": "Upload" }
        </button>
        </div>
  );
}