import { ShieldCheck } from "lucide-react";


export default function ShiftReadiness() {
  return (
    <section className="rounded-xl border border-gray-100 bg-white p-3">
      <div className="flex items-center justify-start gap-2">
        <ShieldCheck size={20} className="text-blue-600" />
        <h2 className="text-base font-bold  font-hanuman text-[#17213c]">
          Shift Readiness
        </h2>
      </div>

      <p className="mt-1 text-[14px] leading-relaxed text-gray-400">
        Ensure your vehicle, phone, battery pack and safety gear are ready
        before going online.
      </p>

      
    </section>
  );
}