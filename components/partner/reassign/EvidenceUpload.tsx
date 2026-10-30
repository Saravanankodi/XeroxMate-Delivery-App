"use client";

import { useRef, useState } from "react";
import { Camera, CheckCircle2, ImagePlus } from "lucide-react";

export default function EvidenceUpload() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");

    return (
        <div className="grid grid-cols-2 gap-2">
            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex min-h-[144px] flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-100 bg-white p-2 text-center"
            >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-blue-700">
                    {fileName ? (
                        <CheckCircle2 size={25} />
                    ) : (
                        <Camera size={25} />
                    )}
                </span>

                <span className="max-w-full truncate text-[12px] font-semibold  font-hanuman text-slate-700">
                    {fileName || "Tap to Capture"}
                </span>

                <span className="text-[13px] text-slate-400">
                    Shopfront / damage
                </span>
            </button>

            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex min-h-[76px] flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-200 bg-white p-2 text-center"
            >
                <ImagePlus size={25} className="text-slate-400" />

                <span className="text-[12px] font-semibold font-hanuman text-slate-700">
                    Upload Photo
                </span>

                <span className="max-w-full truncate text-[13px] text-slate-400">
                    {fileName || "Recommended"}
                </span>
            </button>

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) setFileName(file.name);
                }}
            />
        </div>
    );
}