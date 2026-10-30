"use client";

import { Check, CheckCircle2, MapPin, Navigation, Package, Phone, Route, ShieldCheck } from "lucide-react";
import { useState } from "react";
import OrderProgress from "@/components/partner/active/OrderProgress";

type PackageCollectedStepProps = {
  onContinue: () => void;
  onReachedGate: () => void;
};

export default function PackageCollectedStep({ onContinue, onReachedGate }: PackageCollectedStepProps) {
  const [bagSecured, setBagSecured] = useState(true);
  const [sealVerified, setSealVerified] = useState(true);
  const readyToNavigate = bagSecured && sealVerified;

  return (
    <div className="space-y-3 p-3 pb-20">
      <section className="rounded-xl bg-[#006B4F] p-3 text-white">
        <div className="flex items-center gap-2"><CheckCircle2 size={18} /><div><p className="text-[9px] font-bold text-emerald-100">PACKAGE STOWED & SEALED</p><h1 className="text-sm font-bold">Pickup Completed</h1></div></div>
      </section>
      <section className="flex items-center justify-between rounded-xl bg-white px-3 py-2"><span className="font-bold text-blue-700">#XM20481</span><span className="text-xs text-slate-500">Payout <b className="text-emerald-700">₹88.00</b></span></section>
      <OrderProgress currentStep={2} />
      <section className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-slate-100 text-sm font-bold">AK</div><div className="min-w-0 flex-1"><h2 className="text-sm font-bold">Arun Kumar</h2><p className="text-xs text-slate-500">KCE Campus · Boys Hostel 2, Gate B</p></div><a href="tel:" aria-label="Call recipient" className="rounded-full bg-indigo-100 p-2 text-blue-800"><Phone size={17} /></a></div>
        <p className="mt-3 flex gap-2 rounded-lg bg-slate-100 p-2 text-xs"><MapPin size={14} className="shrink-0 text-blue-700" />Room 304, 3rd Floor · Call near Gate B security post</p>
        <p className="mt-3 flex items-center gap-2 text-xs font-semibold"><Route size={16} className="text-blue-700" />3.8 km · approximately 12 min</p>
      </section>
      <section className="rounded-xl bg-[#e8f0eb] p-3 text-center"><Navigation size={25} className="mx-auto text-blue-700" /><p className="mt-1 text-xs font-semibold">Delivery map</p><p className="text-[11px] text-slate-500">Reserved for map integration</p></section>
      <section className="rounded-xl bg-white p-3 shadow-sm"><h2 className="flex items-center gap-2 text-sm font-bold"><Package size={16} /> Cargo checklist</h2><p className="mt-1 text-xs text-slate-500">2 envelopes · Do not fold · urgent thesis documents</p>
        <label className="mt-3 flex items-center gap-2 text-xs"><input type="checkbox" checked={bagSecured} onChange={(event) => setBagSecured(event.target.checked)} />Waterproof cargo bag secured {bagSecured && <Check size={14} className="ml-auto text-emerald-700" />}</label>
        <label className="mt-3 flex items-center gap-2 text-xs"><input type="checkbox" checked={sealVerified} onChange={(event) => setSealVerified(event.target.checked)} />Tamper security seal verified {sealVerified && <ShieldCheck size={14} className="ml-auto text-emerald-700" />}</label>
      </section>
      <p className="rounded-lg bg-indigo-50 p-3 text-xs text-blue-900"><b>Delivery OTP:</b> collect the customer’s four-digit code only at handover.</p>
      <button type="button" onClick={onContinue} disabled={!readyToNavigate} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0750BC] text-sm font-bold text-white disabled:bg-slate-300"><Navigation size={16} />START NAVIGATION (3.8 KM)</button>
      <button type="button" onClick={onReachedGate} className="w-full rounded-lg bg-white py-3 text-xs font-semibold text-slate-700">I HAVE REACHED GATE</button>
    </div>
  );
}
