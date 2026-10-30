"use client";

import { ArrowLeft, CheckCircle2, Crosshair, Layers, MapPin, Navigation, Phone, Route, Volume2 } from "lucide-react";
import type { ReactNode } from "react";

type ActiveDeliveryNavigationStepProps = { onArrived: () => void; onBack: () => void };

export default function ActiveDeliveryNavigationStep({ onArrived, onBack }: ActiveDeliveryNavigationStepProps) {
  return (
    <div className="space-y-3 pb-20">
      <div className="flex items-center justify-between bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800"><span>● ON DELIVERY · LIVE GPS ACTIVE</span><span className="text-slate-500">GPS pending integration</span></div>
      <div className="space-y-3 px-3"><section className="rounded-xl bg-[#0647A8] p-3 text-white"><div className="flex gap-2"><Route className="text-emerald-300" /><div><p className="text-xs font-bold text-emerald-200">IN 450 METERS · NEXT STEP</p><h1 className="text-base font-bold">Turn right onto College Rd</h1><p className="text-xs text-white/75">Towards KCE Gate B · Campus Post</p></div></div></section>
      <div className="grid grid-cols-3 gap-2 text-center"><Metric label="REMAINING" value="3.4 km" /><Metric label="EST. ARRIVAL" value="12:04 PM" /><Metric label="SPEED" value="36 / 40" /></div>
      <section className="relative flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#E8ECEF] sm:h-80"><div className="text-center"><Navigation className="mx-auto text-blue-700" size={30} /><p className="mt-2 text-sm font-semibold">Live navigation map</p><p className="text-xs text-slate-500">Route, GPS, and destination placeholder</p></div><div className="absolute right-2 top-2 grid gap-2"><MapButton label="Voice guidance"><Volume2 size={16} /></MapButton><MapButton label="Recenter map"><Crosshair size={16} /></MapButton><MapButton label="Map layers"><Layers size={16} /></MapButton></div><span className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-2 text-xs shadow"><MapPin size={12} className="mr-1 inline text-emerald-700" />Boys Hostel 2</span></section>
      <section className="rounded-xl bg-white p-3 shadow-sm"><div className="flex gap-3"><div className="grid size-10 place-items-center rounded-full bg-slate-100 font-bold">AK</div><div className="flex-1"><p className="text-sm font-bold">Arun Kumar</p><p className="text-xs text-slate-500">KCE Campus · Boys Hostel 2, Gate B, Room 304</p></div><a href="tel:" aria-label="Call Arun" className="rounded-full bg-indigo-100 p-2 text-blue-800"><Phone size={17} /></a></div><p className="mt-3 rounded-lg bg-slate-100 p-2 text-xs">Please call near Gate B security post — security will verify rider ID before entry.</p><div className="mt-3 flex justify-between text-xs"><span><b>#XM20481</b> · 2 envelopes<br /><span className="text-red-600">Do not fold · urgent thesis docs</span></span><b className="text-emerald-700">₹88.00</b></div><p className="mt-3 rounded-md bg-indigo-50 p-2 text-xs font-semibold text-blue-800">OTP required upon handover · 4 digits</p></section>
      <div className="grid grid-cols-2 gap-2"><button type="button" onClick={onBack} className="rounded-lg bg-white py-3 text-xs font-semibold"><ArrowLeft size={14} className="mr-1 inline" />Back</button><a href="tel:" className="rounded-lg bg-white py-3 text-center text-xs font-semibold"><Phone size={14} className="mr-1 inline" />Call recipient</a></div>
      <button type="button" onClick={onArrived} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] text-sm font-bold text-white">I HAVE REACHED GATE B <CheckCircle2 size={16} /></button></div>
    </div>
  );
}
function Metric({ label, value }: { label: string; value: string }) { return <div className="rounded-lg bg-white p-2"><p className="text-[10px] text-slate-500">{label}</p><p className="text-xs font-bold">{value}</p></div>; }
function MapButton({ label, children }: { label: string; children: ReactNode }) { return <button type="button" aria-label={label} className="rounded-full bg-white p-2 shadow">{children}</button>; }
