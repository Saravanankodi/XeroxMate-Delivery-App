
// "use client";

// import { useRef, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Bell,
//   Camera,
//   Check,
//   CheckCircle2,
//   ChevronRight,
//   Clock3,
//   FileImage,
//   MapPin,
//   MessageCircle,
//   Phone,
//   ShieldCheck,
//   Upload,
//   X,
//   AlertTriangle,
// } from "lucide-react";

// import ReasonOptionCard, {
//   type ReassignReason,
// } from "@/components/partner/reassign/ReasonOptionCard";

// const reasons: ReassignReason[] = [
//   {
//     id: "breakdown",
//     title: "Vehicle Breakdown",
//     description:
//       "Motorbike puncture, engine trouble, or mechanical failure prevents delivery.",
//     badge: "No Penalty",
//     badgeTone: "green",
//   },
//   {
//     id: "traffic",
//     title: "Shop Too Far / Traffic Blocked",
//     description:
//       "Unexpected road closures, heavy traffic, or an inaccessible pickup location.",
//     badge: "Review Required",
//     badgeTone: "neutral",
//   },
//   {
//     id: "health",
//     title: "Health / Emergency",
//     description:
//       "Rider requires immediate rest, hydration, or medical support.",
//     badge: "Safety First",
//     badgeTone: "green",
//   },
//   {
//     id: "weather",
//     title: "Heavy Rain / Wet Road Hazards",
//     description:
//       "Severe weather or unsafe road conditions make this delivery risky.",
//     badge: "Weather Protected",
//     badgeTone: "green",
//   },
//   {
//     id: "mistake",
//     title: "Accidentally Accepted Order",
//     description:
//       "This order was accepted by mistake or cannot be completed as assigned.",
//     badge: "Review Required",
//     badgeTone: "neutral",
//   },
// ];

// const MAX_DESCRIPTION_LENGTH = 120;

// export default function ReassignOrderReasonConfirmationPage() {
//   const [selectedReason, setSelectedReason] =
//     useState("breakdown");
//   const [description, setDescription] = useState("");
//   const [evidence, setEvidence] = useState<File[]>([]);
//   const [confirmed, setConfirmed] = useState(false);
//   const [error, setError] = useState("");
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   function handleEvidenceChange(
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) {
//     const files = Array.from(event.target.files ?? []);
//     const imageFiles = files.filter((file) =>
//       file.type.startsWith("image/"),
//     );

//     setEvidence((current) =>
//       [...current, ...imageFiles].slice(0, 3),
//     );

//     event.target.value = "";
//   }

//   function removeEvidence(index: number) {
//     setEvidence((current) =>
//       current.filter((_, fileIndex) => fileIndex !== index),
//     );
//   }

//   function handleSubmit() {
//     if (!selectedReason) {
//       setError("Please select a reason to continue.");
//       return;
//     }

//     setError("");
//     setShowConfirmation(true);
//   }

//   function handleConfirm() {
//     const request = {
//       orderId: "XM20481",
//       reason: selectedReason,
//       description: description.trim(),
//       evidenceFiles: evidence.map((file) => file.name),
//     };

//     // UI demo only. Send this payload to your backend
//     // and wait for its response before confirming reassignment.
//     console.log("Reassign order request:", request);

//     setShowConfirmation(false);
//     setConfirmed(true);
//   }

//   return (
//     <main className="min-h-screen bg-[#F7F9FB] font-['Space_Grotesk'] text-[#191C1E]">
//       <div className="mx-auto min-h-screen w-full max-w-[412px] overflow-x-hidden bg-[#F7F9FB] pb-32">
//         {/* Top header */}
//         <header className="sticky top-0 z-30 flex h-[56px] items-center justify-between border-b border-[#ECEEF0] bg-white/95 px-4 backdrop-blur-md">
//           <Link
//             href="/partner/home"
//             aria-label="Back to home"
//             className="font-['Hanuman'] text-[16px] font-bold uppercase leading-5 tracking-[0.325px] text-[#131B2E]"
//           >
//             XEROXmate Rider
//           </Link>

//           <div className="flex items-center gap-1">
//             <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
//               <span className="size-2 rounded-full bg-[#004B31]" />
//               <span className="text-[11px] font-bold tracking-[0.55px] text-[#004B31]">
//                 ONLINE
//               </span>
//             </span>

//             <button
//               type="button"
//               aria-label="Notifications"
//               className="relative flex size-10 items-center justify-center rounded-full"
//             >
//               <Bell size={18} />
//               <span className="absolute right-2 top-2 size-2 rounded-full bg-[#BA1A1A]" />
//             </button>
//           </div>
//         </header>

//         {/* Page content */}
//         <div className="px-4">
//           {/* Page title and order metadata */}
//           <div className="flex items-center justify-between gap-2 py-2">
//             <div className="flex min-w-0 items-center gap-2">
//               <Link
//                 href="/partner/active/accepted"
//                 aria-label="Back to accepted order"
//                 className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F6]"
//               >
//                 <ArrowLeft size={16} />
//               </Link>

//               <div className="min-w-0">
//                 <h1 className="font-['Hanuman'] text-[18px] font-bold text-[#191C1E]">
//                   Reassign Order
//                 </h1>

//                 <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold leading-[14px] tracking-[0.55px]">
//                   <span className="text-[#003A94]">#XM20481</span>
//                   <span className="size-1 rounded-full bg-[#737785]" />
//                   <span className="text-[#434653]">₹72 Payout</span>
//                 </div>
//               </div>
//             </div>

//             <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#ECEEF0] px-2.5 py-1">
//               <Clock3 size={12} />
//               <span className="text-[11px] font-bold leading-[14px] tracking-[0.3px]">
//                 03:42 SLA
//               </span>
//             </span>
//           </div>

//           <div className="space-y-4">
//             {/* Order context */}
//             <section className="flex items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
//               <div className="flex min-w-0 items-center gap-2">
//                 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F6]">
//                   <MapPin size={19} className="text-[#003A94]" />
//                 </div>

//                 <div className="min-w-0">
//                   <h2 className="truncate font-['Hanuman'] text-[14px] font-bold leading-4 tracking-[0.48px]">
//                     Tamil Printers &amp; Stationers
//                   </h2>
//                   <p className="mt-1 truncate text-[12px] leading-4 text-[#434653]">
//                     Express Thesis Batch • (Arun)
//                   </p>
//                 </div>
//               </div>

//               <span className="shrink-0 rounded bg-[#ECEEF0] px-2 py-0.5 text-[11px] font-bold leading-[14px] text-[#434653]">
//                 PICKUP
//               </span>
//             </section>

//             {/* Reason selection */}
//             <section className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-[12px] font-semibold uppercase leading-4 tracking-[0.6px]">
//                   Select Primary Reason
//                 </h2>
//                 <span className="text-[11px] font-bold leading-[14px] text-[#737785]">
//                   Required
//                 </span>
//               </div>

//               <div className="space-y-2">
//                 {reasons.map((reason) => (
//                   <ReasonOptionCard
//                     key={reason.id}
//                     reason={reason}
//                     selected={selectedReason === reason.id}
//                     onSelect={(id) => {
//                       setSelectedReason(id);
//                       setError("");
//                       setConfirmed(false);
//                     }}
//                   />
//                 ))}
//               </div>
//             </section>

//             {/* Optional description */}
//             <section className="space-y-1">
//               <label
//                 htmlFor="reassign-description"
//                 className="block text-[12px] font-bold leading-[14px] text-[#737785]"
//               >
//                 Brief description (optional)
//               </label>

//               <textarea
//                 id="reassign-description"
//                 value={description}
//                 maxLength={MAX_DESCRIPTION_LENGTH}
//                 onChange={(event) => {
//                   setDescription(event.target.value);
//                   setConfirmed(false);
//                 }}
//                 placeholder="e.g., Rear tyre tube leaking near Anna Nagar roundabout..."
//                 rows={3}
//                 className="w-full resize-none rounded-lg border border-transparent bg-[#F2F4F6] px-3 py-[11px] font-['Space_Grotesk'] text-[12px] leading-5 text-[#191C1E] outline-none placeholder:text-[#737785] focus:border-[#003A94]"
//               />

//               <div className="flex justify-end">
//                 <span className="text-[11px] font-bold leading-[14px] text-[#737785]">
//                   {description.length}/{MAX_DESCRIPTION_LENGTH}
//                 </span>
//               </div>
//             </section>

//             {/* Evidence upload */}
//             <section className="rounded-xl bg-white p-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
//               <div className="flex items-center justify-between gap-2">
//                 <h2 className="text-[12px] font-semibold leading-4 tracking-[0.48px]">
//                   Attach Evidence
//                 </h2>
//                 <span className="text-[11px] font-bold leading-[14px] text-[#004B31]">
//                   Speeds up fee waiver
//                 </span>
//               </div>

//               <p className="mt-1 text-[12px] leading-[18px] text-[#737785]">
//                 Add photos to help support your reassignment request.
//               </p>

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleEvidenceChange}
//                 className="hidden"
//               />

//               <button
//                 type="button"
//                 onClick={() => fileInputRef.current?.click()}
//                 className="mt-3 flex min-h-[88px] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#B9C0CC] bg-[#F7F9FB] px-3 py-4 text-[#003A94] transition-colors hover:bg-[#F0F5FF]"
//               >
//                 <span className="flex size-9 items-center justify-center rounded-full bg-white">
//                   <Upload size={17} />
//                 </span>
//                 <span className="text-[12px] font-bold">
//                   Upload photo evidence
//                 </span>
//                 <span className="text-[11px] text-[#737785]">
//                   JPG, PNG · Up to 3 images
//                 </span>
//               </button>

//               {evidence.length > 0 && (
//                 <div className="mt-3 space-y-2">
//                   {evidence.map((file, index) => (
//                     <div
//                       key={`${file.name}-${index}`}
//                       className="flex items-center gap-2 rounded-lg bg-[#F2F4F6] p-2"
//                     >
//                       <FileImage
//                         size={16}
//                         className="shrink-0 text-[#003A94]"
//                       />
//                       <span className="min-w-0 flex-1 truncate text-[12px]">
//                         {file.name}
//                       </span>
//                       <button
//                         type="button"
//                         onClick={() => removeEvidence(index)}
//                         aria-label={`Remove ${file.name}`}
//                         className="flex size-7 items-center justify-center rounded-full hover:bg-white"
//                       >
//                         <X size={14} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </section>

//             {/* Dispatch support card */}
//             <section className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
//               <div className="flex min-w-0 items-start gap-2">
//                 <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F6] text-[#003A94]">
//                   <ShieldCheck size={17} />
//                 </div>

//                 <div className="min-w-0">
//                   <h2 className="text-[13px] font-bold leading-[18px]">
//                     Need help with this order?
//                   </h2>
//                   <p className="mt-1 text-[11px] leading-[15px] text-[#737785]">
//                     Contact dispatch support before confirming.
//                   </p>
//                   <p className="mt-1 text-[11px] font-bold leading-[14px] text-[#004B31]">
//                     Live Wait: &lt; 25 sec
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href="tel:+919000000000"
//                 className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#ECEEF0] px-3.5 py-2.5 text-[12px] font-bold text-[#191C1E]"
//               >
//                 <Phone size={14} />
//                 Call
//               </a>
//             </section>

//             {/* Validation and status */}
//             {error && (
//               <p role="alert" className="text-[12px] font-semibold text-red-600">
//                 {error}
//               </p>
//             )}

//             {confirmed && (
//               <div
//                 role="status"
//                 className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-[12px] text-emerald-800"
//               >
//                 <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
//                 <p>
//                   Demo request prepared. Connect the reassignment API to
//                   submit and confirm the actual order change.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Fixed bottom action area */}
//       <footer className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[412px] border-t border-[#ECEEF0] bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.05)] backdrop-blur-xl">
//         <button
//           type="button"
//           onClick={handleSubmit}
//           disabled={confirmed}
//           className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#003A94] px-4 text-[13px] font-bold tracking-[0.2px] text-white transition-colors hover:bg-[#002F78] disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <CheckCircle2 size={17} />
//           {confirmed ? "REQUEST PREPARED" : "CONFIRM REASSIGNMENT"}
//           <ChevronRight size={16} />
//         </button>

//         <p className="mt-2 text-center text-[10px] leading-[14px] text-[#737785]">
//           Reassignment may be reviewed according to dispatch policy.
//         </p>
//       </footer>

//       {/* Confirmation dialog */}
//       {showConfirmation && (
//         <div
//           className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
//           onClick={() => setShowConfirmation(false)}
//         >
//           <section
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="confirm-reassign-title"
//             onClick={(event) => event.stopPropagation()}
//             className="w-full max-w-[412px] rounded-t-2xl bg-white p-5 pb-[max(env(safe-area-inset-bottom),20px)] shadow-xl sm:rounded-2xl"
//           >
//             <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#D9DDE3] sm:hidden" />

//             <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#FFF4E5] text-amber-700">
//               <AlertTriangle size={23} />
//             </div>

//             <h2
//               id="confirm-reassign-title"
//               className="mt-3 text-center font-['Hanuman'] text-[18px] font-bold"
//             >
//               Confirm Reassignment?
//             </h2>

//             <p className="mt-2 text-center text-[13px] leading-5 text-[#737785]">
//               You are requesting to reassign order #XM20481. Check your
//               selected reason before continuing.
//             </p>

//             <div className="mt-4 rounded-lg bg-[#F2F4F6] p-3">
//               <p className="text-[10px] font-bold uppercase tracking-[0.55px] text-[#737785]">
//                 Selected reason
//               </p>
//               <p className="mt-1 text-[13px] font-bold">
//                 {reasons.find((reason) => reason.id === selectedReason)?.title}
//               </p>
//               {description.trim() && (
//                 <p className="mt-1 break-words text-[12px] leading-[18px] text-[#434653]">
//                   {description.trim()}
//                 </p>
//               )}
//               <p className="mt-2 text-[11px] text-[#737785]">
//                 Evidence attached: {evidence.length} image(s)
//               </p>
//             </div>

//             <button
//               type="button"
//               onClick={handleConfirm}
//               className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#003A94] text-[13px] font-bold text-white"
//             >
//               <Check size={16} />
//               Yes, Confirm Reassignment
//             </button>

//             <button
//               type="button"
//               onClick={() => setShowConfirmation(false)}
//               className="mt-2 h-11 w-full rounded-lg bg-[#F2F4F6] text-[13px] font-bold text-[#434653]"
//             >
//               Go Back
//             </button>
//           </section>
//         </div>
//       )}
//     </main>
//   );
// }



















"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Bike,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  Info,
  MapPin,
  Phone,
  Printer,
  ShieldAlert,
  ShieldCheck,
  Upload,
  X,
  AlertTriangle,
  Home,
  Truck,
  Wallet,
  Headphones,
  UserRound,
  LifeBuoy,
  LoaderCircle,
} from "lucide-react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

type Reason = {
  id: string;
  title: string;
  badge: string;
  description: string;
  badgeColor: string;
  badgeBackground: string;
};

const reasons: Reason[] = [
  {
    id: "vehicle_breakdown",
    title: "Vehicle Breakdown / Flat Tyre",
    badge: "No Penalty",
    description:
      "Motorbike puncture, engine stall, or brake failure on route.",
    badgeColor: "#004B31",
    badgeBackground: "#E5F5ED",
  },
  {
    id: "traffic_blocked",
    title: "Shop Too Far / Traffic Blocked",
    badge: "Review Required",
    description:
      "Unexpected road closure, VIP convoy, or railway gate delay (>15 min).",
    badgeColor: "#565E74",
    badgeBackground: "#ECEEF0",
  },
  {
    id: "personal_emergency",
    title: "Personal Emergency / Health",
    badge: "Shift Paused",
    description:
      "Rider requires immediate rest, hydration, or medical support.",
    badgeColor: "#565E74",
    badgeBackground: "#ECEEF0",
  },
  {
    id: "weather_hazard",
    title: "Heavy Rain / Wet Road Hazards",
    badge: "Weather Protected",
    description:
      "High risk of water damage to paper documents/theses.",
    badgeColor: "#004B31",
    badgeBackground: "#E5F5ED",
  },
  {
    id: "accidental_acceptance",
    title: "Accidentally Accepted Order",
    badge: "-1% Metric",
    description:
      "Accepted by touch mistake. Release immediately for Arun Kumar.",
    badgeColor: "#BA1A1A",
    badgeBackground: "#FCE8E8",
  },
];

const sg = "font-[var(--font-space-grotesk)]";
const hanuman = "font-[var(--font-hanuman)]";
const jakarta = "font-[var(--font-plus-jakarta-sans)]";

export default function ReassignOrderPage() {
  const [selectedReason, setSelectedReason] = useState(
    "vehicle_breakdown"
  );
  const [description, setDescription] = useState("");
  const [evidence, setEvidence] = useState<File | null>(null);
  const [evidencePreview, setEvidencePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedReasonData = reasons.find(
    (reason) => reason.id === selectedReason
  );

  const handleEvidence = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a JPG, PNG, or WebP image.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    setError("");
    setEvidence(file);

    if (evidencePreview) {
      URL.revokeObjectURL(evidencePreview);
    }

    setEvidencePreview(URL.createObjectURL(file));
  };

  const removeEvidence = () => {
    if (evidencePreview) {
      URL.revokeObjectURL(evidencePreview);
    }

    setEvidence(null);
    setEvidencePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleReassignment = async () => {
    if (!selectedReason) {
      setError("Please select a reason for reassignment.");
      return;
    }

    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("orderId", "XM20481");
      formData.append("reason", selectedReason);
      formData.append(
        "reasonLabel",
        selectedReasonData?.title ?? ""
      );
      formData.append("description", description.trim());

      if (evidence) {
        formData.append("evidence", evidence);
      }

      const response = await fetch(
        "/api/partner/orders/XM20481/reassign",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
          "Unable to reassign this order. Please try again."
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F9FB] text-[#191C1E] ">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[412px] flex-col overflow-hidden bg-[#F7F9FB]">
        {/* Existing application header */}
        <TopBar />

        <div className="flex-1 px-4 pb-[174px] pt-2">
          {/* Order navigation and metadata */}
          <section className="flex min-h-[56px] items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <Link
                href="/partner/active/delivery-navigation"
                aria-label="Go back"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F6] text-[#191C1E]"
              >
                <X size={17} />
              </Link>

              <div className="min-w-0">
                <h1
                  className={`${hanuman} text-[18px] font-bold text-[#191C1E]`}
                >
                  Reassign Order
                </h1>

                <div
                  className={`${sg} flex items-center gap-1 text-[11px] font-bold leading-[14px] tracking-[0.55px]`}
                >
                  <span className="text-[#003A94]">
                    #XM20481
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#C3C6D6]" />
                  <span className="text-[#434653]">
                    ₹72 Payout
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`${sg} flex shrink-0 items-center gap-1 rounded-full bg-[#E6E8EA] px-2.5 py-1 text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#191C1E]`}
            >
              <Clock3 size={11} />
              03:42 SLA
            </span>
          </section>

          {/* Order context */}
          <section className="mt-0 flex min-h-[72px] items-center gap-2 rounded-xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2F4F6] text-[#003A94]">
              <Printer size={19} strokeWidth={2.2} />
            </div>

            <div className="min-w-0 flex-1">
              <h2
                className={`${hanuman} truncate text-[14px] font-bold leading-4 tracking-[0.48px] text-[#191C1E]`}
              >
                Tamil Printers &amp; Stationers
              </h2>

              <p
                className={`${sg} mt-0.5 truncate text-[12px] font-normal leading-4 text-[#434653]`}
              >
                Express Thesis Batch • (Arun)
              </p>
            </div>

            <span
              className={`${sg} shrink-0 rounded-[4px] bg-[#ECEEF0] px-2 py-0.5 text-[11px] font-bold leading-[14px] tracking-[0.3px] text-[#434653]`}
            >
              1.2 km away
            </span>
          </section>

          {/* Reassignment policy */}
          <section className="mt-4 rounded-xl bg-[#F2F4F6] p-4">
            <div className="flex gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E0E3E5] text-[#565E74]">
                <ShieldAlert size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <h2
                  className={`${sg} text-[14px] font-semibold text-[#191C1E]`}
                >
                  Order Reassignment Policy
                </h2>

                <p
                  className={`${sg} mt-0.5 text-[12px] font-normal leading-[19.5px] text-[#434653]`}
                >
                  Reassigning will immediately offer this print run
                  to nearby couriers. Please reassign only if safe
                  fulfillment is impossible.
                </p>
              </div>
            </div>

            <div className="mt-2 flex min-h-[30px] items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <span
                className={`${sg} flex shrink-0 items-center gap-1 text-[11px] font-bold leading-[14px] tracking-[0.55px]`}
              >
                <ShieldCheck
                  size={12}
                  className="text-[#004B31]"
                />
                <span className="text-[#191C1E]">
                  Acceptance:
                </span>
                <span className="text-[#004B31]">96%</span>
              </span>

              <span
                className={`${jakarta} text-right text-[12px] font-normal leading-4 text-[#434653]`}
              >
                Grace window active (0 fee)
              </span>
            </div>
          </section>

          {/* Reason heading */}
          <div className="mt-4 flex items-center justify-between">
            <h2
              className={`${sg} text-[12px] font-semibold leading-4 tracking-[0.6px] text-[#191C1E]`}
            >
              SELECT PRIMARY REASON
            </h2>

            <span
              className={`${sg} text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#737785]`}
            >
              Required
            </span>
          </div>

          {/* Reason selection */}
          <section className="mt-2 space-y-2">
            {reasons.map((reason) => {
              const selected = selectedReason === reason.id;

              return (
                <button
                  key={reason.id}
                  type="button"
                  onClick={() => {
                    setSelectedReason(reason.id);
                    setError("");
                  }}
                  aria-pressed={selected}
                  className="flex min-h-[118px] w-full items-start gap-2 rounded-xl bg-white p-4 text-left shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors"
                >
                  {/* Radio */}
                  <span
                    className={`mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected
                        ? "border-[#003A94]"
                        : "border-[#767676]"
                      }`}
                  >
                    {selected && (
                      <span className="h-3 w-3 rounded-full bg-[#003A94]" />
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`${sg} block text-[14px] font-semibold text-[#191C1E]`}
                    >
                      {reason.title}
                    </span>

                    <span
                      className={`${sg} mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-bold leading-[14px] tracking-[0.55px]`}
                      style={{
                        color: reason.badgeColor,
                        backgroundColor: reason.badgeBackground,
                      }}
                    >
                      {reason.badge}
                    </span>

                    <span
                      className={`${sg} mt-1 block text-[12px] font-normal leading-[18px] text-[#434653]`}
                    >
                      {reason.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </section>

          {/* Evidence and description */}
          <section className="mt-4 rounded-xl bg-white px-3 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between gap-2">
              <h2
                className={`${sg} text-[12px] font-semibold leading-4 tracking-[0.48px] text-[#191C1E]`}
              >
                Attach Evidence
              </h2>

              <span
                className={`${sg} text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#004B31]`}
              >
                Speeds up fee waiver
              </span>
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={handleEvidence}
            />

            {/* Upload panel */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 flex min-h-28 w-full flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-[#F2F4F6] p-3"
            >
              {evidencePreview ? (
                <div className="relative flex w-full items-center justify-center">
                  <img
                    src={evidencePreview}
                    alt="Selected evidence"
                    className="h-[76px] max-w-full rounded-md object-contain"
                  />
                </div>
              ) : (
                <Camera
                  size={24}
                  strokeWidth={1.8}
                  className="text-[#737785]"
                />
              )}

              <span
                className={`${sg} text-[12px] font-semibold leading-4 tracking-[0.48px] text-[#191C1E]`}
              >
                {evidence
                  ? evidence.name
                  : "Snap Breakdown / Signal Photo"}
              </span>

              <span
                className={`${sg} text-[12px] font-normal leading-4 text-[#737785]`}
              >
                {evidence
                  ? "Tap to replace image"
                  : "Optional • Auto-geo tagged"}
              </span>
            </button>

            {evidence && (
              <button
                type="button"
                onClick={removeEvidence}
                className={`${sg} mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#BA1A1A]`}
              >
                <X size={12} />
                Remove evidence
              </button>
            )}

            {/* Optional description */}
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="reassignment-description"
                  className={`${sg} text-[12px] font-bold leading-[14px] tracking-[0.55px] text-[#737785]`}
                >
                  Brief description (optional)
                </label>
              </div>

              <textarea
                id="reassignment-description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value.slice(0, 120))
                }
                maxLength={120}
                rows={1}
                placeholder="e.g., Rear tyre tube leaking near Anna Nagar roundabout..."
                className={`${sg} mt-2 min-h-[50px] w-full resize-none rounded-lg bg-[#F2F4F6] px-3 py-[11px] text-[12px] font-medium leading-4 text-[#434653] outline-none placeholder:text-[#737785] focus:ring-1 focus:ring-[#003A94]`}
              />

              <p
                className={`${sg} mt-1 text-right text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#737785]`}
              >
                {description.length}/120
              </p>
            </div>
          </section>

          {/* Dispatch support */}
          <section className="relative mt-4 flex min-h-[110px] items-center gap-2 rounded-xl bg-white px-3 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <div className="min-w-0 flex-1">
              <h2
                className={`${hanuman} flex items-center gap-1 text-[16px] font-bold text-[#191C1E]`}
              >
                <Headphones
                  size={15}
                  className="shrink-0 text-[#003A94]"
                />
                Need Help Instead?
              </h2>

              <p
                className={`${sg} mt-1 text-[12px] font-normal leading-4 text-[#434653]`}
              >
                Dispatch can extend SLA time or
                <br />
                route a backup rider to help.
              </p>

              <p
                className={`${sg} mt-2 text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#004B31]`}
              >
                Live Wait: &lt; 25 sec
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowSupport(true)}
              className={`${sg} flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#E6E8EA] px-3 text-[14px] font-semibold leading-4 tracking-[0.48px] text-[#191C1E]`}
            >
              <Phone size={13} className="text-[#003A94]" />
              Call Desk
            </button>
          </section>

          {/* Error message */}
          {error && (
            <div
              role="alert"
              className={`${sg} mt-3 flex items-start gap-2 rounded-lg bg-[#FCE8E8] p-3 text-[12px] font-medium leading-4 text-[#BA1A1A]`}
            >
              <AlertTriangle
                size={15}
                className="mt-0.5 shrink-0"
              />
              {error}
            </div>
          )}
        </div>

        {/* Bottom action tray */}
        <div className="fixed bottom-[50px] left-1/2 z-30 w-full max-w-[412px] -translate-x-1/2 bg-[#F7F9FB]/90 px-4 pb-3 pt-3 backdrop-blur-[16px]">
          <button
            type="button"
            onClick={handleReassignment}
            disabled={submitting}
            className="flex w-full flex-col items-center justify-center rounded-xl bg-[#BA1A1A] px-3 py-2 text-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#A31616] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <LoaderCircle size={17} className="animate-spin" />
                <span
                  className={`${hanuman} text-[18px] font-bold`}
                >
                  SUBMITTING...
                </span>
              </span>
            ) : (
              <>
                <span
                  className={`${hanuman} text-[14px] font-bold`}
                >
                  CONFIRM REASSIGNMENT
                </span>

                <span
                  className={`${sg} text-[11px] font-medium leading-[14px] tracking-[0.55px]`}
                >
                  Order returns to pool for Arun Kumar
                </span>
              </>
            )}
          </button>

          <Link
            href="/partner/active/delivery-navigation"
            className={`${hanuman} mt-3 flex min-h-[50px] w-full items-center justify-center gap-1.5 rounded-xl bg-white text-[14px] font-medium leading-4 text-[#003A94] shadow-[0_1px_2px_rgba(0,0,0,0.05)]`}
          >
            <AlertTriangle size={14} />
            KEEP ORDER &amp; CONTINUE PICKUP
          </Link>
        </div>

        {/* Existing bottom navigation */}
        <Navbar />

        {/* Support dialog */}
        {showSupport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="support-dialog-title"
              className="w-full max-w-[360px] rounded-2xl bg-white p-5 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h2
                  id="support-dialog-title"
                  className={`${hanuman} text-[18px] font-bold`}
                >
                  Contact Dispatch
                </h2>

                <button
                  type="button"
                  onClick={() => setShowSupport(false)}
                  aria-label="Close"
                  className="rounded-full bg-[#F2F4F6] p-2"
                >
                  <X size={16} />
                </button>
              </div>

              <p
                className={`${sg} mt-3 text-[13px] leading-5 text-[#434653]`}
              >
                Contact details for the dispatch desk have not been
                configured yet. Please use your connected support
                channel to request assistance.
              </p>

              <button
                type="button"
                onClick={() => setShowSupport(false)}
                className={`${hanuman} mt-4 w-full rounded-lg bg-[#003A94] py-3 text-[14px] font-bold text-white`}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        {/* Successful reassignment dialog */}
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
            <div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-[360px] rounded-2xl bg-white p-5 text-center shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F5ED] text-[#004B31]">
                <CheckCircle2 size={30} />
              </div>

              <h2
                className={`${hanuman} mt-3 text-[20px] font-bold leading-7`}
              >
                Order Reassigned
              </h2>

              <p
                className={`${sg} mt-2 text-[13px] leading-5 text-[#434653]`}
              >
                Order #XM20481 has been successfully returned to the
                available order pool.
              </p>

              <Link
                href="/partner/home"
                className={`${hanuman} mt-5 block rounded-lg bg-[#003A94] py-3 text-[14px] font-bold text-white`}
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
