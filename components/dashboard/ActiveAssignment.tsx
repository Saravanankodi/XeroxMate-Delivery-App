
"use client";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MapPin,
  PackageCheck,
  Route,
  Truck,
} from "lucide-react";

export interface Assignment {
  orderId: string;
  shopName: string;
  pickupAddress: string;
  destination: string;
  amount: number;
  paymentMethod: string;
  priority?: string;
  status: string;
  expiresInSeconds?: number;
  pickupDistanceKm?: number;
  dropoffDistanceKm?: number;
  estimatedTime?: string;
  recipientName?: string;
}

interface ActiveAssignmentProps {
  assignment?: Assignment | null;
  isOnline?: boolean;
  onAccept?: (orderId: string) => void;
  onViewOrder?: (orderId: string) => void;
}

export default function ActiveAssignment({
  assignment = null,
  isOnline = false,
  onAccept,
  onViewOrder,
}: ActiveAssignmentProps) {
  if (!assignment) {
    return (
      <section className="space-y-2">
        <h2 className="px-1 text-[11px] font-semibold  font-hanuman uppercase tracking-wide text-gray-400">
          ACTIVE ASSIGNMENT
        </h2>

        <div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-4 py-5 text-center">
          {isOnline ? (
            <>
              <div className="flex size-[76px] items-center justify-center rounded-full bg-[#EDF2FF]">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                  <Truck size={25} />
                </div>
              </div>

              <h3 className="mt-3 font-hanuman text-[22px] font-bold  font-hanuman text-[#17213c]">
                Waiting for a delivery
              </h3>

              <p className="mt-1 max-w-[220px] text-[14px] text-gray-400">
                We'll notify you when a new order is available.
              </p>

              <span className="mt-3 rounded-full bg-blue-50 px-3 py-1.5 text-[14px] font-bold   text-blue-600">
                SEARCHING ACTIVE ZONE
              </span>
            </>
          ) : (
            <>
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <PackageCheck size={25} />
              </div>

              <h3 className="mt-3 text-lg font-bold  font-hanuman text-[#17213c]">
                No active delivery
              </h3>

              <p className="mt-1 max-w-[220px] text-[14px] text-gray-400">
                Your assigned runs and pickup details will appear here as
                soon as you go online.
              </p>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-1.5">
      <h2 className="px-1 text-[11px] font-semibold  font-hanuman uppercase tracking-wide text-gray-400">
        ACTIVE ASSIGNMENT
      </h2>

      <article className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-[0px_1px_2px_0px_#0000000D] space-y-3.5">
              <div className="absolute top-0 left-0 w-full border-[#2563EB] border-[3px]"/>
        {/* Expiry, order ID and priority */}
        <div className="mt-3 flex items-center justify-between gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 px-1.5 py-1 text-[11px] font-extrabold  font-hanuman text-rose-600">
            <Clock3 size={10} />
            EXPIRES IN {assignment.expiresInSeconds ?? 27} S
          </span>

          <span className="truncate text-[11px] font-semibold  font-hanuman text-gray-500">
            #{assignment.orderId}
          </span>

          <span className="shrink-0 rounded-md bg-blue-50 px-1.5 py-1 text-[11px] font-bold  font-hanuman text-blue-600">
            {assignment.priority ?? "High Priority"}
          </span>
        </div>

        {/* Guaranteed payout */}
        <div className="mt-1.5 flex items-center justify-between rounded-lg bg-[#F3F4F6] px-3 py-2.5">
          <div>
            <p className="text-[40px] font-extrabold  font-hanuman leading-none text-blue-600">
              ₹{assignment.amount.toFixed(2)}
            </p>
            <p className="mt-1 text-[12px] text-gray-400">
              Guaranteed payout
            </p>
          </div>

          <span className="text-[32px] font-extrabold  font-hanuman tracking-tight text-black">
            ({assignment.paymentMethod})
          </span>
        </div>

        {/* Pickup point */}
        <div className="mt-2.5 flex gap-2">
          <div className="flex shrink-0 flex-col items-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <MapPin size={25} />
            </span>
            <span className="mt-1 min-h-16 w-px bg-gray-200" />
          </div>

          <div className="min-w-0 flex-1 pb-1  space-y-2.5">
            <div className="flex items-start justify-between gap-1">
              <p className="text-[11px] font-extrabold  font-hanuman uppercase text-blue-600">
                PICKUP POINT · {assignment.pickupDistanceKm ?? 0.6} KM
              </p>

              <span className="shrink-0 text-[11px] font-bold  font-hanuman text-emerald-700">
                Packed & Ready
              </span>
            </div>

            <h3 className="mt-0.5 text-[18px] font-extrabold  font-hanuman leading-tight text-[#17213c]">
              {assignment.shopName}
            </h3>

            <p className="mt-0.5 text-[12px] leading-relaxed text-gray-500">
              {assignment.pickupAddress}
            </p>
          </div>
        </div>

        {/* Drop-off point */}
        <div className="flex gap-2">
          <div className="flex shrink-0 flex-col items-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-emerald-800 text-white">
              <MapPin size={25} />
            </span>
          </div>

          <div className="min-w-0 flex-1 space-y-2.5">
            <div className="flex items-start justify-between gap-1">
              <p className="text-[11px] font-extrabold  font-hanuman uppercase text-emerald-800">
                CAMPUS DROP · {assignment.dropoffDistanceKm ?? 1.9} KM
              </p>

              <span className="shrink-0 text-[11px] font-semibold  font-hanuman text-gray-500">
                {assignment.estimatedTime ?? "Est. 18 min"}
              </span>
            </div>

            <h3 className="mt-0.5 text-[18px] font-extrabold  font-hanuman leading-tight text-[#17213c]">
              {assignment.destination}
            </h3>

            {assignment.recipientName && (
              <p className="mt-0.5 text-[12px] text-gray-500">
                {assignment.recipientName}
              </p>
            )}
          </div>
        </div>

        {/* Primary action */}
        <button
          type="button"
          onClick={() => onAccept?.(assignment.orderId)}
          className="mt-2.5 flex w-full items-center justify-between rounded-md bg-[#0753C7] px-2.5 py-2.5 text-white transition hover:bg-blue-800"
        >
          <span className="flex items-center gap-1.5 text-[16px] font-extrabold  font-hanuman">
            <BadgeCheck size={25} />
            ACCEPT ORDER
          </span>

          <span className="flex items-center justify-center gap-1 text-[20px] font-bold  font-hanuman">
            ₹{assignment.amount.toFixed(2)}
            <ArrowRight size={20} />
          </span>
        </button>

        {/* Secondary action */}
        <button
          type="button"
          onClick={() => onViewOrder?.(assignment.orderId)}
          className="mt-1.5 flex w-full items-center justify-center gap-1 rounded-md bg-[#F0F0F0] px-3 py-2 text-[14px] font-semibold  font-hanuman text-gray-600 transition hover:bg-gray-200"
        >
          Pass / View Next Order
        </button>
      </article>
    </section>
  );
}
