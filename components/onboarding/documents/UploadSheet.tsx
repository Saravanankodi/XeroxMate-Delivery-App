"use client";

import { Camera, FileImage, X } from "lucide-react";
import { useRef } from "react";

interface UploadSheetProps {
    documentName: string;
    onClose: () => void;
    onUploaded: (fileName: string) => void;
}

export default function UploadSheet({
    documentName,
    onClose,
    onUploaded,
}: UploadSheetProps) {
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File | undefined) => {
        if (!file) return;

        onUploaded(file.name);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 px-3 pb-3 mx-4">
            <div className="w-full max-w-md rounded-2xl bg-white px-4 pb-4 pt-2 shadow-[0_-8px_30px_rgba(15,23,42,0.14)]">
                <div className="mx-auto mb-4 h-1 w-8 rounded-full bg-gray-200" />

                <div className="mb-4 flex items-start justify-between">
                    <div>
                        <h2 className="text-lg font-bold  font-hanuman text-gray-800">
                            {documentName}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Clear photo or PDF under 10MB
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-gray-500"
                        aria-label="Close"
                    >
                        <X className="size-4" />
                    </button>
                </div>

                <input
                    ref={cameraInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(event) => handleFile(event.target.files?.[0])}
                />

                <input
                    ref={galleryInputRef}
                    type="file"
                    accept="image/png,image/jpeg,application/pdf"
                    className="hidden"
                    onChange={(event) => handleFile(event.target.files?.[0])}
                />

                <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex w-full items-center gap-3 rounded-xl bg-[#F2F3FF] px-3 py-3 text-left"
                >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                        <Camera className="size-4.5 text-blue-600" />
                    </span>

                    <span>
                        <span className="block text-[15px] font-bold  font-hanuman text-gray-800">
                            Take Photo
                        </span>

                        <span className="mt-0.5 block text-[11px] text-gray-500">
                            Capture directly using your device camera
                        </span>
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="mt-2 flex w-full items-center gap-3 rounded-xl bg-[#F2F3FF] px-3 py-3 text-left"
                >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                        <FileImage className="size-4.5 text-blue-600" />
                    </span>

                    <span>
                        <span className="block text-[15px] font-bold  font-hanuman text-gray-800">
                            Choose from Gallery
                        </span>

                        <span className="mt-0.5 block text-[11px] text-gray-500">
                            Upload PNG, JPEG, or scanned document
                        </span>
                    </span>
                </button>

                <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 w-full rounded-xl bg-[#EAEDFF] py-3 text-[11px] font-semibold  font-hanuman text-gray-500"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}