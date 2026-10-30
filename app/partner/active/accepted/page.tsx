import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  House,
  Info,
  Map,
  MapPin,
  MapPinCheck,
  Phone,
  ReceiptText,
  Route,
  ShieldCheck,
  Truck,
  UserRound,
  Wallet,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";



function AcceptedStatus() {
  return (
    <div className="flex min-h-[25px] items-center justify-between gap-2 rounded-lg bg-[#006B4F] px-3 py-1.5 text-white">
      <span className="text-[12px] font-bold tracking-wide">
        ● ORDER ACCEPTED · BATCH LOCKED
      </span>

      <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-1.5 py-0.5 text-[12px] font-semibold">
        <Clock3 size={11} />
        07:44
      </span>
    </div>
  );
}




type OrderProgressProps = {
  currentStep: number;
};

const steps = ["Accepted", "Arrived", "Picked", "Drop-off"];

export  function OrderProgress({
  currentStep,
}: OrderProgressProps) {
  return (
    <section className="rounded-xl bg-white px-3 py-3">
      <div className="relative grid grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-[10px] h-px bg-slate-200" />

        {steps.map((label, index) => {
          const completed = index <= currentStep;

          return (
            <div
              key={label}
              className="relative z-10 flex flex-col items-center gap-1.5"
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${completed
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-slate-200 bg-slate-100 text-slate-500"
                  }`}
              >
                {completed ? (
                  <Check size={12} strokeWidth={3} />
                ) : (
                  // <span className="text-[11px]">○</span>
                    <MapPin size={12} strokeWidth={3} />
                )}
              </div>

              <span
                className={`text-[11px] ${index === currentStep
                    ? "font-semibold text-slate-800"
                    : "text-slate-500"
                  }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}


function SettlementCard() {
  return (
    <section className="flex min-h-[62px] items-center justify-center gap-5 rounded-xl bg-[#E1E4E6] px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600">
        <Wallet size={22} />
      </div>

      <div>
        <p className="text-[12px] font-bold tracking-wide mb-2 text-slate-600">
          INSTANT SETTLEMENT
        </p>
        <p className="text-[40px] font-bold font-hanuman leading-none tracking-tight text-[#2563EB]">
          ₹88.00
        </p>
      </div>
    </section>
  );
}

function MapPlaceholder() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#E9F0EA] shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
    <section
      aria-label="Map integration placeholder"
      className="w-full relative flex flex-col h-[160px] items-center justify-center overflow-hidden rounded-xl bg-[#E9F0EA] sm:h-[200px]"
    >
      {/* Reserve this section for the future map SDK and route. */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <MapPin size={28} className="text-blue-700" />
        <p className="text-xs font-semibold text-slate-700">
          Pickup route map
        </p>
        <p className="text-[10px] text-slate-500">
          Map integration area
        </p>
      </div>

      <div className="w-full h-6 rounded-full absolute bottom-1 left-0 right-0 flex items-center justify-between gap-2 bg-white/95 px-2.5 py-2 text-[11px] shadow-sm">
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <Route size={12} className="text-emerald-600" />
          1.2 km away · ~4 mins ride
        </span>
        <span className="shrink-0 font-semibold text-emerald-700">
          LIVE TRAFFIC LIGHT
        </span>
      </div>
      
    </section>
     <section className=" bg-white p-3 ">
      <div className="flex items-start gap-2.5">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[10px] font-bold tracking-wide text-blue-600">
              PICKUP PARTNER
            </span>
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check size={9} />
            </span>
          </div>

          <h2 className="text-[18px] font-bold leading-tight text-[#252A32]">
            Tamil Printers &amp; Stationers
          </h2>

          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
            14/B, TSR Big Street, Opp. Head Post Office
          </p>
        </div>

        <a
          href="tel:"
          aria-label="Call pickup partner"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFE5FF] text-[#123F9D]"
        >
          <Phone size={16} />
        </a>
      </div>

      <div className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-[#F1F3F5] p-2.5">
        <Info size={12} className="mt-0.5 shrink-0 text-blue-600" />

        <p className="text-[12px] leading-relaxed text-slate-600">
          <span className="font-bold text-slate-800">Entry Note:</span>{" "}
          Enter via the printing bay at the rear gate. Ring bell #2 for fast
          document pickup window.
        </p>
      </div>
    </section>
    </main>
  );
}





export default function OrderAcceptedPage() {
  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#20252E] mb-15">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#F7F9FB] shadow-sm">
        <TopBar />

        <div className="space-y-2.5 px-3 pb-3 pt-3">
          <AcceptedStatus />

          <section>
            <h1 className="text-[24px] font-bold tracking-tight text-[#252A32]">
              #XM20481
            </h1>
            <p className="mt-0.5 text-[12px] text-slate-500">
              Guaranteed Dispatch SLA · Priority Cargo
            </p>
          </section>

          <OrderProgress currentStep={0} />

          <SettlementCard />

          <MapPlaceholder />

          <Link
            href="/partner/active/navigation"
            className="flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#2165F5] px-3 py-3 text-center text-[16px] font-bold tracking-wide text-white shadow-[0_3px_7px_rgba(33,101,245,0.25)] transition hover:bg-blue-700 active:scale-[0.99]"
          >
            <ArrowRight size={15} stroke="#FFFFFF"/>
            <span className="font-bold text-white">START NAVIGATION TO SHOP (1.2 KM)</span>
          </Link>

          <Link
            href="/partner/active/arrived"
            className="flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-center text-[18px] font-semibold text-blue-700 shadow-[0_1px_8px_rgba(0,0,0,0.2)]"
          >
            <Building2 size={15} stroke="#2165F5"/>
            <span className="font-semibold text-blue-700">I Have Arrived at Shop</span>
          </Link>

          <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-1 text-[12px]">
            <Link
              href="/partner/support"
              className="flex items-center gap-1  underline decoration-slate-300 underline-offset-2"
            >
              <Info size={11} />
              <span className="text-slate-600">Having Trouble Reaching Shop?</span>
            </Link>

            <Link
              href="/partner/active/reassign"
              className="shrink-0 "
            >
              <span className="font-semibold text-red-600">Reassign Order</span>
            </Link>
          </div>
        </div>

        <Navbar />
      </div>
    </main>
  );
}
