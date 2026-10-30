
"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
    Camera,
    CheckCircle2,
    CircleAlert,
    Eye,
    Lightbulb,
    RotateCcw,
    Scan,
    ScanFace,
    Sun,
    X,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";

export default function SelfiePage() {
    const router = useRouter();

    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const [cameraReady, setCameraReady] = useState(false);
    const [cameraError, setCameraError] = useState("");
    const [startingCamera, setStartingCamera] = useState(true);

    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [showError, setShowError] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    // Start the camera and wait until video playback is ready.

    const startCamera = useCallback(async () => {
        setCameraReady(false);
        setCameraError("");
        setStartingCamera(true);

        // Stop any previous camera stream.
        streamRef.current?.getTracks().forEach((track) => track.stop());
        streamRef.current = null;

        try {
            if (!navigator.mediaDevices?.getUserMedia) {
                throw new Error("Camera access requires localhost or HTTPS.");
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user",
                    width: { ideal: 720 },
                    height: { ideal: 960 },
                },
                audio: false,
            });

            const video = videoRef.current;

            if (!video) {
                stream.getTracks().forEach((track) => track.stop());
                throw new Error("Camera preview is not available.");
            }

            streamRef.current = stream;

            // Assign the stream once and wait for the video to load.
            video.pause();
            video.srcObject = stream;

            await new Promise<void>((resolve, reject) => {
                if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                    resolve();
                    return;
                }

                const onReady = () => {
                    cleanup();
                    resolve();
                };

                const onError = () => {
                    cleanup();
                    reject(new Error("Unable to load the camera preview."));
                };

                const timeout = window.setTimeout(() => {
                    cleanup();
                    reject(new Error("Camera startup timed out. Try again."));
                }, 10000);

                const cleanup = () => {
                    window.clearTimeout(timeout);
                    video.removeEventListener("loadeddata", onReady);
                    video.removeEventListener("error", onError);
                };

                video.addEventListener("loadeddata", onReady, { once: true });
                video.addEventListener("error", onError, { once: true });

                // Handle data becoming available while listeners are attached.
                if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                    cleanup();
                    resolve();
                }
            });

            await video.play();

            setCameraReady(true);
            setStartingCamera(false);
        } catch (error) {
            console.error("Camera startup failed:", error);

            streamRef.current?.getTracks().forEach((track) => track.stop());
            streamRef.current = null;

            setCameraReady(false);
            setStartingCamera(false);

            setCameraError(
                error instanceof Error
                    ? error.message
                    : "Unable to start the camera. Please try again."
            );
        }
    }, []);


    useEffect(() => {
        let active = true;

        const initialize = async () => {
            await startCamera();

            if (!active) {
                streamRef.current?.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }
        };

        void initialize();

        return () => {
            active = false;

            streamRef.current?.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        };
    }, [startCamera]);

    // Capture a real frame from the camera.
    const takeSelfie = useCallback(() => {
        const video = videoRef.current;

        if (
            !cameraReady ||
            !video ||
            video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
            video.videoWidth === 0 ||
            video.videoHeight === 0
        ) {
            setCameraError("The camera is not ready yet. Please try again.");
            return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext("2d");

        if (!context) {
            setCameraError("Unable to capture the image. Please try again.");
            return;
        }

        // Mirror the captured photo to match the selfie preview.
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        setCapturedImage(canvas.toDataURL("image/jpeg", 0.9));
        setShowError(false);
        setCameraError("");
    }, [cameraReady]);

    const retakeSelfie = () => {
        setCapturedImage(null);
        setShowError(true);
        setShowPreview(false);

        // Reuse the active camera if it is still working.
        if (streamRef.current?.active) {
            setCameraReady(true);
            return;
        }

        void startCamera();
    };

    const continueToReview = () => {
        if (!capturedImage) return;

        router.push("/partner/onboarding/review");
    };

    return (
        <main className="min-h-dvh overflow-x-hidden bg-[#FAF8FFCC]">

            <div className="mx-auto w-full max-w-md  pb-4">
                <Header title="Take a Selfie Partner" currentStep={4} totalSteps={4} showProgress />


                {/* Page heading */}
                <section className="mt-3 px-4">
                    <h1 className="font-hanuman text-[22px] font-bold  font-hanuman   text-[#17213c]">
                        Take a selfie
                    </h1>

                    <p className="mt-1 text-[14px] text-gray-500">
                        Make sure your face is clearly visible.
                    </p>
                </section>

                {/* Instructions */}
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#EAEDFF] px-3 mx-4  py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#DBE1FF] text-blue-600">
                        <ScanFace size={14} />
                    </span>

                    <div>
                        <p className="text-[14px] font-semibold  font-hanuman text-[#273451]">
                            Keep your face inside the frame
                        </p>

                        <p className="text-[11px] text-gray-500">
                            Remove sunglasses or anything covering your face.
                        </p>
                    </div>
                </div>

                {/* Camera preview and captured photo */}
                <section className="relative mt-3 overflow-hidden rounded-2xl mx-4 bg-slate-900 shadow-md">
                    <div className="relative aspect-[4/5] w-full">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            className={`absolute inset-0 size-full -scale-x-100 object-cover ${capturedImage ? "invisible" : ""
                                }`}
                        />

                        {capturedImage && (
                            <img
                                src={capturedImage}
                                alt="Your captured selfie"
                                className="absolute inset-0 size-full object-cover"
                            />
                        )}

                        {!cameraReady && !capturedImage && !cameraError && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-800 text-white">
                                <span className="size-7 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                                <p className="text-xs">
                                    {startingCamera ? "Starting camera..." : "Waiting for camera..."}
                                </p>
                            </div>
                        )}

                        {cameraError && !capturedImage && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 px-6 text-center text-white">
                                <Camera size={32} className="text-slate-300" />

                                <p className="mt-3 text-sm font-semibold  font-hanuman">
                                    Camera unavailable
                                </p>

                                <p className="mt-2 text-[10px]  text-slate-300">
                                    {cameraError}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => void startCamera()}
                                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold  font-hanuman text-white"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        {!cameraError && (
                            <>
                                <div className="absolute left-3 top-3 rounded-full bg-slate-950/65 px-2 py-1 text-[8px] font-semibold  font-hanuman text-white">
                                    {!capturedImage && cameraReady && (
                                        <span className="mr-1.5 inline-block size-1.5 rounded-full bg-red-500" />
                                    )}
                                    {capturedImage ? "CAPTURED" : "LIVE"}
                                </div>

                                {!capturedImage && cameraReady && (
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <div className="relative h-[61%] w-[55%] rounded-[50%] border-2 border-dashed border-white/80">
                                            <span className="absolute left-1/2 top-0 h-4 -translate-x-1/2 border-l border-white/80" />
                                            <span className="absolute bottom-0 left-1/2 h-4 -translate-x-1/2 border-l border-white/80" />
                                        </div>
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/65 px-3 py-1.5 text-[11px] text-white">
                                    <Lightbulb size={11} className="mr-1 inline" />
                                    {capturedImage
                                        ? "Review your captured selfie"
                                        : "Fit shoulders & face clearly"}
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Visual quality indicators — not actual AI checks */}
                <div className="mt-2 grid grid-cols-3 gap-1.5 mx-4">
                    <QualityIndicator icon={<Sun />} label="Good light" />
                    <QualityIndicator icon={<Eye />} label="Eyes open" />
                    <QualityIndicator icon={<Scan />} label="Centered" />
                </div>

                {/* Captured image warning */}
                {capturedImage && showError && (
                    <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-[#FFDAD699] px-2.5 py-2 mx-4">
                        <CircleAlert size={12} className="shrink-0 text-red-500" />

                        <p className="min-w-0 flex-1 text-[13px] font-medium text-red-600">
                            Your face isn't clear. Please try again.
                        </p>

                        <button
                            type="button"
                            onClick={() => setShowError(false)}
                            className="shrink-0 text-[12px] font-bold  font-hanuman text-red-600"
                        >
                            DISMISS
                        </button>
                    </div>
                )}

                {/* Retake and preview */}
                {capturedImage && (
                    <section className="mt-3 rounded-2xl bg-white p-2.5 shadow-sm mx-4">
                        <div className="flex items-center gap-2">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D5E4F8] text-gray-600 font-bold  font-hanuman">
                                <Camera size={15} />
                            </span>

                            <div className="min-w-0 flex-1">
                                <p className="text-[14px] font-bold  font-hanuman text-[#17213c]">
                                    Selfie Preview Flow
                                </p>

                                <p className="text-[12px] text-gray-500">
                                    Review before final identity submission
                                </p>
                            </div>

                            <span className="rounded-full bg-[#D5E4F8] px-2 py-1 text-[12px] font-semibold  font-hanuman text-gray-600">
                                Ready
                            </span>
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={retakeSelfie}
                                className="flex items-center justify-center font-hanuman gap-1.5 rounded-lg bg-[#EAEDFF] py-2.5 text-[15px] font-bold  font-hanuman text-blue-600"
                            >
                                <RotateCcw size={13} />
                                Retake
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowPreview(true)}
                                className="flex items-center justify-center font-hanuman gap-1.5 rounded-lg bg-blue-600 py-2.5 text-[15px] font-bold  font-hanuman text-white"
                            >
                                <CheckCircle2 size={13} />
                                Preview
                            </button>
                        </div>
                    </section>
                )}

                {/* Main action */}
                <div className="mt-3 mx-4">
                    <Button
                        type="button"
                        onClick={capturedImage ? continueToReview : takeSelfie}
                        disabled={!capturedImage && (!cameraReady || !!cameraError)}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-xl font-semibold  font-hanuman text-white shadow-sm hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {capturedImage ? (
                            <>Continue →</>
                        ) : (
                            <>
                                <Camera size={15} />
                                Take Selfie
                            </>
                        )}
                    </Button>
                </div>

                <p className="mt-2 text-center text-[12px] text-gray-500 mx-4">
                    Encrypted &amp; securely verified for XeroxMate
                </p>
            </div>

            {/* Full-size preview overlay */}
            {showPreview && capturedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 mx-4"
                    onClick={() => setShowPreview(false)}
                >
                    <div
                        className="relative w-full max-w-sm rounded-2xl bg-white p-3"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <h2 className="text-sm font-bold  font-hanuman text-gray-900">
                                Selfie Preview
                            </h2>

                            <button
                                type="button"
                                onClick={() => setShowPreview(false)}
                                aria-label="Close preview"
                                className="flex size-8 items-center justify-center rounded-full bg-gray-100"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <img
                            src={capturedImage}
                            alt="Full selfie preview"
                            className="max-h-[65dvh] w-full rounded-xl object-contain"
                        />

                        <Button
                            type="button"
                            onClick={() => setShowPreview(false)}
                            className="mt-3 w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold  font-hanuman text-white"
                        >
                            Done
                        </Button>
                    </div>
                </div>
            )}
        </main>
    );
}

function QualityIndicator({
    icon,
    label,
}: {
    icon: ReactNode;
    label: string;
}) {
    return (
        <div className="flex items-center justify-center gap-1 rounded-lg bg-[#edf0ff] py-2 text-blue-600 ">
            <span className="[&>svg]:size-4">{icon}</span>
            <span className="text-[14px] font-medium text-[#34405d]">{label}</span>
        </div>
    );
}
