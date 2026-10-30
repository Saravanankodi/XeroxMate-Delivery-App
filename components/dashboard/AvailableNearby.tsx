
// "use client";

// import { useMemo, useState } from "react";
// import { MapPin, ArrowRight, Icon } from "lucide-react";
// import type { Assignment } from "./ActiveAssignment";

// export interface NearbyOrder extends Assignment {
//   distanceKm: number;
//   category: "Campus Drops" | "Regular";
//   isReady: boolean;
// }

// interface AvailableNearbyProps {
//   orders?: NearbyOrder[];
//   onAccept?: (orderId: string) => void;
//   onViewOrder?: (orderId: string) => void;
//   onMapView?: () => void;
// }

// const demoOrders: NearbyOrder[] = [
//   {
//     orderId: "XM20498",
//     shopName: "Sai Copy Center",
//     pickupAddress: "Mech Department Faculty Office",
//     destination: "Faculty Room",
//     amount: 65,
//     paymentMethod: "COD",
//     status: "Ready",
//     priority: "Regular",
//     distanceKm: 1.8,
//     category: "Regular",
//     isReady: true,
//   },
//   {
//     orderId: "XM20501",
//     shopName: "Tamil Printers",
//     pickupAddress: "Anna Nagar",
//     destination: "MCA Computer Lab (2nd Fl)",
//     amount: 74,
//     paymentMethod: "COD",
//     status: "Ready",
//     priority: "Regular",
//     distanceKm: 2.2,
//     category: "Campus Drops",
//     isReady: true,
//   },
//   {
//     orderId: "XM20503",
//     shopName: "Raja Xerox & Stationers",
//     pickupAddress: "TSR Big Street",
//     destination: "Girls Hostel",
//     amount: 88,
//     paymentMethod: "COD",
//     status: "Ready",
//     priority: "High Priority",
//     distanceKm: 0.8,
//     category: "Campus Drops",
//     isReady: true,
//   },
//   {
//     orderId: "XM20504",
//     shopName: "City Print Center",
//     pickupAddress: "Main Road",
//     destination: "College Office",
//     amount: 52,
//     paymentMethod: "COD",
//     status: "Preparing",
//     priority: "Regular",
//     distanceKm: 3.1,
//     category: "Regular",
//     isReady: false,
//   },
// ];

// const filterOptions = [
//   "All",
//   "Campus Drops",
//   "High Payout",
//   "Ready",
// ] as const;

// type FilterOption = (typeof filterOptions)[number];

// export default function AvailableNearby({
//   orders = demoOrders,
//   onAccept,
//   onViewOrder,
//   onMapView,
// }: AvailableNearbyProps) {
//   const [activeFilter, setActiveFilter] =
//     useState<FilterOption>("All");

//   const filteredOrders = useMemo(() => {
//     switch (activeFilter) {
//       case "Campus Drops":
//         return orders.filter(
//           (order) => order.category === "Campus Drops",
//         );

//       case "High Payout":
//         return orders.filter((order) => order.amount >= 75);

//       case "Ready":
//         return orders.filter((order) => order.isReady);

//       default:
//         return orders;
//     }
//   }, [activeFilter, orders]);

//   return (
//     <section className="space-y-2">
//       {/* Section heading */}
//       <div className="flex items-center justify-between gap-2">
//         <h2 className="text-lg font-bold  font-hanuman text-[#17213c]">
//           Available Nearby
//           <span className="ml-1.5 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-bold  font-hanuman text-blue-600">
//             {filteredOrders.length}
//           </span>
//         </h2>

//         <button
//           type="button"
//           onClick={onMapView}
//           className="shrink-0 text-[11px] font-extrabold  font-hanuman text-blue-600"
//         >
//           MAP VIEW
//         </button>
//       </div>

//       {/* Horizontal filters */}
//       <div className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         {filterOptions.map((filter) => (
//           <button
//             key={filter}
//             type="button"
//             aria-pressed={activeFilter === filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`shrink-0 rounded-full border px-2.5 py-1.5 text-[11px] font-bold  font-hanuman transition ${activeFilter === filter
//                 ? "border-gray-900 bg-gray-900 text-white"
//                 : "border-gray-200 bg-white text-gray-600"
//               } `}
//           >
//             {filter}
//             {filter === "All" && (
//               <span className="ml-1">
//                 ({orders.length})
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Nearby order cards */}
//       <div className="space-y-2">
//         {filteredOrders.map((order) => (
//           <article
//             key={order.orderId}
//           >

//             <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
//               {/* Order ID, category and payout */}
//               <div className="flex items-center justify-between gap-2">
//                 <div className="flex min-w-0 items-center gap-2">
//                   <span className="shrink-0 text-[11px] font-bold  font-hanuman text-gray-400">
//                     #{order.orderId}
//                   </span>

//                   <span className="truncate rounded bg-gray-100 px-2 py-0.5 text-[11px] font-bold  font-hanuman text-gray-600">
//                     {order.category === "Campus Drops"
//                       ? "Campus Drop"
//                       : order.priority ?? "Regular"}
//                   </span>
//                 </div>

//                 <p className="shrink-0 text-[18px] font-extrabold  font-hanuman text-blue-600">
//                   ₹{order.amount.toFixed(2)}
//                   {order.paymentMethod === "COD" && (
//                     <span className="ml-1 text-gray-900">(COD)</span>
//                   )}
//                 </p>
//               </div>

//               {/* Pickup to destination */}
//               <div className="mt-3 flex items-start gap-2">
//                 <MapPin name="git-branch" size="18" />

//                 <div className="min-w-0">
//                   <p className="text-[14px] font-bold  font-hanuman leading-snug text-[#202124]">
//                     {order.shopName}
//                     <span className="mx-1">→</span>
//                     {order.destination}
//                   </p>

//                   <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px]">
//                     <span className="text-gray-500">
//                       {order.distanceKm} km total
//                     </span>

//                     <span className="text-gray-300">•</span>

//                     <span
//                       className={`font-semibold  font-hanuman ${order.isReady ? "text-emerald-700" : "text-amber-700"
//                         }`}
//                     >
//                       {order.isReady ? "Ready in 4m" : "Preparing"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="mt-3 grid grid-cols-2 gap-2">
//                 <button
//                   type="button"
//                   onClick={() => onViewOrder?.(order.orderId)}
//                   className="h-10 rounded-lg bg-gray-100 text-base font-semibold  font-hanuman text-gray-900 transition hover:bg-gray-200"
//                 >
//                   Pass
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => onAccept?.(order.orderId)}
//                   className="h-10 rounded-lg bg-blue-600 text-base font-semibold  font-hanuman text-white transition hover:bg-blue-700"
//                 >
//                   Accept <span aria-hidden="true">✓</span>
//                 </button>
//               </div>
//             </div>
//           </article>
//         ))}

//         {filteredOrders.length === 0 && (
//           <div className="rounded-lg border border-gray-100 bg-white px-3 py-6 text-center">
//             <p className="text-[14px] font-semibold  font-hanuman text-gray-600">
//               No matching orders
//             </p>
//             <p className="mt-1 text-[12px] text-gray-400">
//               Select another filter to view available orders.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




















"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  ArrowRight,
  Check,
  Clock3,
  X,
  Navigation,
} from "lucide-react";

import type { Assignment } from "./ActiveAssignment";

export interface NearbyOrder extends Assignment {
  distanceKm: number;
  category: "Campus Drops" | "Regular";
  isReady: boolean;
}

interface AvailableNearbyProps {
  orders?: NearbyOrder[];
  onAccept?: (orderId: string) => void;
  onPass?: (orderId: string) => void;

  // Kept for compatibility with your existing parent component.
  onViewOrder?: (orderId: string) => void;

  onMapView?: () => void;
}

const demoOrders: NearbyOrder[] = [
  {
    orderId: "XM20498",
    shopName: "Sai Copy Center",
    pickupAddress: "Mech Department Faculty Office",
    destination: "Faculty Room",
    amount: 65,
    paymentMethod: "COD",
    status: "Ready",
    priority: "Regular",
    distanceKm: 1.8,
    category: "Regular",
    isReady: true,
  },
  {
    orderId: "XM20501",
    shopName: "Tamil Printers",
    pickupAddress: "Anna Nagar",
    destination: "MCA Computer Lab (2nd Fl)",
    amount: 74,
    paymentMethod: "COD",
    status: "Ready",
    priority: "Regular",
    distanceKm: 2.2,
    category: "Campus Drops",
    isReady: true,
  },
  {
    orderId: "XM20503",
    shopName: "Raja Xerox & Stationers",
    pickupAddress: "TSR Big Street",
    destination: "Girls Hostel",
    amount: 88,
    paymentMethod: "COD",
    status: "Ready",
    priority: "High Priority",
    distanceKm: 0.8,
    category: "Campus Drops",
    isReady: true,
  },
  {
    orderId: "XM20504",
    shopName: "City Print Center",
    pickupAddress: "Main Road",
    destination: "College Office",
    amount: 52,
    paymentMethod: "COD",
    status: "Preparing",
    priority: "Regular",
    distanceKm: 3.1,
    category: "Regular",
    isReady: false,
  },
];

const filterOptions = [
  "All",
  "Campus Drops",
  "High Payout",
  "Ready",
] as const;

type FilterOption = (typeof filterOptions)[number];

export default function AvailableNearby({
  orders = demoOrders,
  onAccept,
  onPass,
  onViewOrder,
  onMapView,
}: AvailableNearbyProps) {
  const router = useRouter();

  const [activeFilter, setActiveFilter] =
    useState<FilterOption>("All");

  const [availableOrders, setAvailableOrders] =
    useState<NearbyOrder[]>(orders);

  const [processingOrder, setProcessingOrder] =
    useState<string | null>(null);

  const [message, setMessage] = useState("");

  // Keep local orders synchronized with parent data.
  useEffect(() => {
    setAvailableOrders(orders);
  }, [orders]);

  // Filter orders.
  const filteredOrders = useMemo(() => {
    switch (activeFilter) {
      case "Campus Drops":
        return availableOrders.filter(
          (order) => order.category === "Campus Drops"
        );

      case "High Payout":
        return availableOrders.filter(
          (order) => order.amount >= 75
        );

      case "Ready":
        return availableOrders.filter(
          (order) => order.isReady
        );

      default:
        return availableOrders;
    }
  }, [activeFilter, availableOrders]);

  // Accept order and navigate to active delivery.
  function handleAcceptOrder(orderId: string) {
    const selectedOrder = availableOrders.find(
      (order) => order.orderId === orderId
    );

    if (!selectedOrder || !selectedOrder.isReady) return;

    if (processingOrder) return;

    setProcessingOrder(orderId);
    setMessage("");

    try {
      if (onAccept) {
        // Parent component controls the accept action.
        onAccept(orderId);
      } else {
        // Default navigation when no parent callback is supplied.
        router.push(
          `/partner/active/delivery-navigation?orderId=${encodeURIComponent(
            orderId
          )}`
        );
      }
    } finally {
      setProcessingOrder(null);
    }
  }

  // Pass order and remove it from the current nearby list.
  function handlePassOrder(orderId: string) {
    const selectedOrder = availableOrders.find(
      (order) => order.orderId === orderId
    );

    if (!selectedOrder) return;

    setAvailableOrders((previous) =>
      previous.filter((order) => order.orderId !== orderId)
    );

    setMessage(`Order #${orderId} passed.`);

    if (onPass) {
      onPass(orderId);
    } else if (onViewOrder) {
      // Compatibility with your previous callback.
      onViewOrder(orderId);
    }
  }

  // Open map view.
  function handleMapView() {
    if (onMapView) {
      onMapView();
      return;
    }

    router.push("/partner/home?view=map");
  }

  return (
    <section className="space-y-2">
      {/* Section heading */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-hanuman text-lg font-bold text-[#17213c]">
          Available Nearby

          <span className="ml-1.5 rounded-full bg-blue-100 px-2 py-0.5 font-hanuman text-[11px] font-bold text-blue-600">
            {filteredOrders.length}
          </span>
        </h2>

        <button
          type="button"
          onClick={handleMapView}
          className="flex shrink-0 items-center gap-1 font-hanuman text-[11px] font-extrabold text-blue-600"
        >
          <MapPin size={13} />
          MAP VIEW
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded-full border px-2.5 py-1.5 font-hanuman text-[11px] font-bold transition ${activeFilter === filter
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-white text-gray-600"
              }`}
          >
            {filter}

            {filter === "All" && (
              <span className="ml-1">
                ({availableOrders.length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {message && (
        <div
          role="status"
          className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700"
        >
          <span>{message}</span>

          <button
            type="button"
            aria-label="Dismiss message"
            onClick={() => setMessage("")}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Order cards */}
      <div className="space-y-2">
        {filteredOrders.map((order) => {
          const isProcessing = processingOrder === order.orderId;

          return (
            <article
              key={order.orderId}
              className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
            >
              {/* Order ID and payout */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="shrink-0 font-hanuman text-[11px] font-bold text-gray-400">
                    #{order.orderId}
                  </span>

                  <span className="truncate rounded bg-gray-100 px-2 py-0.5 font-hanuman text-[11px] font-bold text-gray-600">
                    {order.category === "Campus Drops"
                      ? "Campus Drop"
                      : order.priority ?? "Regular"}
                  </span>
                </div>

                <p className="shrink-0 font-hanuman text-[18px] font-extrabold text-blue-600">
                  ₹{order.amount.toFixed(2)}

                  {order.paymentMethod === "COD" && (
                    <span className="ml-1 text-gray-900">
                      (COD)
                    </span>
                  )}
                </p>
              </div>

              {/* Pickup and destination */}
              <div className="mt-3 flex items-start gap-2">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div className="min-w-0 flex-1">
                  <p className="font-hanuman text-[14px] font-bold leading-snug text-[#202124]">
                    {order.shopName}
                    <span className="mx-1">→</span>
                    {order.destination}
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px]">
                    <span className="text-gray-500">
                      {order.distanceKm} km total
                    </span>

                    <span className="text-gray-300">•</span>

                    <span
                      className={`flex items-center gap-1 font-hanuman font-semibold ${order.isReady
                          ? "text-emerald-700"
                          : "text-amber-700"
                        }`}
                    >
                      {order.isReady ? (
                        <Check size={12} />
                      ) : (
                        <Clock3 size={12} />
                      )}

                      {order.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handlePassOrder(order.orderId)}
                  disabled={isProcessing}
                  className="flex h-10 items-center justify-center gap-1 rounded-lg bg-gray-100 font-hanuman text-base font-semibold text-gray-900 transition hover:bg-gray-200 disabled:opacity-50"
                >
                  <X size={14} />
                  Pass
                </button>

                <button
                  type="button"
                  onClick={() => handleAcceptOrder(order.orderId)}
                  disabled={!order.isReady || !!processingOrder}
                  className="flex h-10 items-center justify-center gap-1 rounded-lg bg-blue-600 font-hanuman text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {isProcessing ? (
                    "Opening..."
                  ) : (
                    <>
                      Accept
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}

        {/* Empty state */}
        {filteredOrders.length === 0 && (
          <div className="rounded-lg border border-gray-100 bg-white px-3 py-8 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <Navigation size={19} />
            </div>

            <p className="mt-2 font-hanuman text-[14px] font-semibold text-gray-600">
              No matching orders
            </p>

            <p className="mt-1 text-[12px] text-gray-400">
              Select another filter to view available orders.
            </p>

            {activeFilter !== "All" && (
              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-3 font-hanuman text-xs font-bold text-blue-600"
              >
                Show all orders
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
