import Link from "next/link";
import {
  ArrowLeft,
  
  Bell,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Crosshair,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Route,
  ShieldCheck,
  Volume2,
  Wallet,
  House,
  Truck,
  ReceiptText,
  UserRound,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";



function NavigationBanner() {
  return (
    <section className="bg-[#292D2E] px-3 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0750B9]">
          <ArrowLeft size={23} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-[9px] font-bold text-emerald-400">
              IN 350 METERS
            </span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] text-white/80">
              LANE 1 OF 2
            </span>
          </div>

          <p className="text-[14px] font-semibold leading-tight">
            Turn Left onto TSR Big Street
          </p>
          <p className="mt-1 text-[9px] text-white/60">
            Then head towards Kumbakonam Head Post Office
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2 text-[9px]">
        <div className="flex items-center gap-2 text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>1.2 km</span>
          <span className="text-white/40">•</span>
          <span className="font-bold text-emerald-400">4 mins</span>
          <span className="text-white/40">•</span>
          <span>ETA 11:46 AM</span>
        </div>

        <button type="button" className="flex items-center gap-1 text-emerald-300">
          <Route size={11} />
          Clear Route
        </button>
      </div>
    </section>
  );
}

function MapPlaceholder() {
  return (
    <section
      aria-label="Map integration placeholder"
      className="relative h-[270px] overflow-hidden bg-[#E8F0EB] sm:h-[360px]"
    >
      {/* Replace this section with your Google Maps / map SDK integration. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#E8F0EB] text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
          <MapPin size={24} />
        </div>
        <p className="text-sm font-semibold text-slate-700">Map integration area</p>
        <p className="max-w-[220px] text-xs text-slate-500">
          Route, rider location, and shop marker will appear here.
        </p>
      </div>

      <div className="absolute right-2 top-2 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Map orientation"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white shadow"
        >
          <Navigation size={18} />
        </button>
        <button
          type="button"
          aria-label="Map sound"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-700 shadow"
        >
          <Volume2 size={18} />
        </button>
        <button
          type="button"
          aria-label="Center map"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-700 shadow"
        >
          <Crosshair size={18} />
        </button>
      </div>

      <div className="absolute bottom-4 left-2 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-slate-700 shadow-sm">
        <CheckCircle2 size={12} className="text-emerald-600" />
        TSR Street: Smooth flow
      </div>
    </section>
  );
}

function PickupShopCard() {
  return (
    <section className="relative z-10 -mt-2 rounded-2xl bg-white p-3 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <Building2 size={19} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-wide text-blue-700">
              PICKUP GATE
            </span>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-bold text-emerald-700">
              1.2 KM AWAY
            </span>
          </div>

          <h2 className="text-[17px] font-bold font-hanuman leading-tight text-[#20252E]">
            Tamil Printers &amp; Stationers
          </h2>
          <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
            Opp. Kumbakonam Head Post Office,rear cargo bay
          </p>
        </div>

        <div className="flex gap-1.5">
          <a
            href="tel:"
            aria-label="Call shop"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700"
          >
            <Phone size={15} />
          </a>
          <Link
            href="/partner/support"
            aria-label="Message shop"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700"
          >
            <MessageSquare size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ActiveOrderSummary() {
  return (
    <section className="flex items-center gap-3 rounded-xl bg-[#292D2E] px-3 py-3 text-white">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[14px] font-bold">
        XM
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[12px] font-bold">#XM20481</span>
          <span className="rounded bg-red-600 px-1 py-0.5 text-[10px] font-bold">
            URGENT SLA
          </span>
        </div>
        <p className="mt-1 text-[12px] text-white/65">
          Express Legal Document Dispatch
        </p>
      </div>

      <div className="text-right">
        <p className="text-[11px] text-white/65">EARN ON TASK</p>
        <p className="text-[20px] font-bold text-emerald-400">₹88.00</p>
      </div>
    </section>
  );
}



export default function NavigationToShopPage() {
  return (
    <main className="min-h-screen bg-[#F3F5F7] text-[#20252E] mb-15">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-white shadow-sm">
        <TopBar />

        <NavigationBanner />

        <MapPlaceholder />

        <div className="space-y-2.5 px-3 pb-3">
          <PickupShopCard />

          <ActiveOrderSummary />

          <Link
            href="/partner/active/verify"
            className="flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-[#0647A8] px-4 py-3 text-center  tracking-wide shadow-sm transition hover:bg-blue-800 active:scale-[0.99]"
          >
            <MapPin size={18} stroke="#FFFFFF"/>
            <span className="text-[14px] font-bold text-white font-hanuman ">I HAVE ARRIVED AT SHOP</span>
            <ChevronRight size={18} stroke="#FFFFFF" />
          </Link>

          <div className="flex flex-wrap items-center font-bold justify-between gap-2 px-1 pt-0.5 text-[12px]">
            <Link
              href="/partner/support"
              className="flex items-center gap-1.5 text-slate-600"
            >
              <ShieldCheck size={15} />
              Call Merchant Gate
            </Link>

            <span className="text-slate-300">•</span>

            <button
              type="button"
              className="font-semibold text-blue-700"
            >
              View Rear Bay Photo
            </button>
          </div>
        </div>

        <Navbar />
      </div>
    </main>
  );
}
