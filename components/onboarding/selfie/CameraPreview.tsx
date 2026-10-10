"use client";

import {
    Camera,
    ScanFace,
    Sun,
    Eye,
    Scan,
    CircleAlert,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CameraPreviewProps {
    active: boolean;
    onCapture: () => void;
}

export default function CameraPreview({
    active,
    onCapture,
}: CameraPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [cameraError, setCameraError] = useState(false);

    useEffect(() => {
        if (!active) {
            stream?.getTracks().forEach((track) => track.stop());
            setStream(null);
            return;
        }

        let mounted = true;

        const startCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                        width: { ideal: 720 },
                        height: { ideal: 960 },
                    },
                    audio: false,
                });

                if (!mounted) {
                    mediaStream.getTracks().forEach((track) => track.stop());
                    return;
                }

                setStream(mediaStream);

                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                    await videoRef.current.play();
                }
            } catch {
                setCameraError(true);
            }
        };

        startCamera();

        return () => {
            mounted = false;
            stream?.getTracks().forEach((track) => track.stop());
        };
    }, [active]);

    return (
        <div className="mt-3">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                {active && !cameraError ? (
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        className="aspect-[4/5] w-full object-cover"
                    />
                ) : (
                    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-slate-800">
                        <ScanFace className="size-16 text-slate-500" strokeWidth={1} />

                        <p className="mt-3 text-[10px] text-slate-300">
                            Camera preview
                        </p>
                    </div>
                )}

                {active && (
                    <>
                        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-slate-950/70 px-2 py-1">
                            <span className="size-1.5 rounded-full bg-red-500" />

                            <span className="text-[8px] font-medium text-white">LIVE</span>
                        </div>

                        <button
                            type="button"
                            onClick={onCapture}
                            className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-lg bg-slate-950/60 text-white"
                            aria-label="Capture selfie"
                        >
                            <Camera className="size-4" />
                        </button>

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-[64%] w-[54%] rounded-[50%] border-2 border-dashed border-white/80" />
                        </div>

                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-950/60 px-3 py-1.5">
                            <ScanFace className="size-3 text-white" />

                            <span className="whitespace-nowrap text-[8px] text-white">
                                Fit shoulders & face clearly
                            </span>
                        </div>
                    </>
                )}
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
                <QualityItem icon={<Sun />} label="Good light" />
                <QualityItem icon={<Eye />} label="Eyes open" />
                <QualityItem icon={<Scan />} label="Centered" />
            </div>

            {cameraError && (
                <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-2 text-[9px] text-red-600">
                    <CircleAlert className="size-3 shrink-0" />
                    Camera access is unavailable. Please allow camera permission.
                </div>
            )}
        </div>
    );
}

function QualityItem({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <div className="flex items-center justify-center gap-1 rounded-lg bg-blue-50 py-2 text-blue-700">
            <span className="size-3.5 [&>svg]:size-3">
                {icon}
            </span>

            <span className="text-[8px] font-medium">{label}</span>
        </div>
    );
}