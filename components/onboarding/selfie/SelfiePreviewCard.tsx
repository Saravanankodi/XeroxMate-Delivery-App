"use client";

import { Camera, CheckCircle2, RotateCcw } from "lucide-react";

interface SelfiePreviewCardProps {
    onRetake: () => void;
    onPreview: () => void;
}

export default function SelfiePreviewCard({
    onRetake,
    onPreview,
}: SelfiePreviewCardProps) {
    return (
        <div className="mt-3 rounded-xl bg-white p-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.05)]">
            <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-50">
                    <Camera className="size-4 text-blue-600" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-gray-800">
                        Selfie Preview Flow
                    </p>

                    <p className="mt-0.5 text-[8px] text-gray-500">
                        Review before final identity submit
                    </p>
                </div>

                <span className="rounded-md bg-blue-50 px-2 py-1 text-[8px] font-semibold text-blue-600">
                    Ready
                </span>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                    type="button"
                    onClick={onRetake}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-indigo-50 py-2.5 text-[10px] font-semibold text-blue-600"
                >
                    <RotateCcw className="size-3.5" />
                    Retake
                </button>

                <button
                    type="button"
                    onClick={onPreview}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2.5 text-[10px] font-semibold text-white"
                >
                    <CheckCircle2 className="size-3.5" />
                    Preview
                </button>
            </div>
        </div>
    );
}