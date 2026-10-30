// "use client";

// import { useState } from "react";
// import TopBar from "@/components/TopBar";
// import Navbar from "@/components/Navbar";

// import DashboardHero from "@/components/dashboard/DashboardHero";
// import OnlineOfflineCard from "@/components/dashboard/OnlineOfflineCard";
// import TodaysSummary from "@/components/dashboard/TodaysSummary";
// import ActiveAssignment from "@/components/dashboard/ActiveAssignment";
// import ShiftReadiness from "@/components/dashboard/ShiftReadiness";
// import WorkArea from "@/components/dashboard/WorkArea";
// import AvailableNearby from "@/components/dashboard/AvailableNearby";

// import type { Assignment } from "@/components/dashboard/ActiveAssignment";

// type DashboardState = "offline" | "online-idle" | "online-with-orders";

// export default function PartnerHomePage() {
//   const [dashboardState, setDashboardState] =
//     useState<DashboardState>("offline");

//   const [activeOrder, setActiveOrder] = useState<Assignment | null>(null);

//   const isOnline = dashboardState !== "offline";

//   // STEP 1 -> STEP 2: Go online.
//   function handleOnlineStatusChange(online: boolean) {
//     if (online) {
//       setDashboardState("online-idle");
//     } else {
//       setDashboardState("offline");
//       setActiveOrder(null);
//     }
//   }

//   // STEP 2 -> STEP 3: An order offer arrives.
//   // Call this function when your backend sends an available order.
//   function handleOrderAvailable(order: Assignment) {
//     if (!isOnline) return;

//     setActiveOrder(order);
//     setDashboardState("online-with-orders");
//   }

//   // Accept the order and continue to your order workflow.
//   function handleAcceptOrder(orderId: string) {
//     if (!activeOrder || activeOrder.orderId !== orderId) return;

//     // TODO: Call your accept-order API here.
//     // After successful acceptance, navigate to the order workflow.
//     console.log("Accept order:", orderId);
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f8fc] text-[#17213c]">
//       <div className="sticky top-0 z-40 bg-white shadow-[0px_1px_2px_0px_#0000000D]">
//         <TopBar isOnline={isOnline} />
//       </div>

//       <main className="mx-auto w-full max-w-lg space-y-3 px-3 py-3 pb-24">
//         <DashboardHero riderName="Rahul" />

//         <OnlineOfflineCard
//           isOnline={isOnline}
//           onStatusChange={handleOnlineStatusChange}
//         />

//         <TodaysSummary
//           earnings={0}
//           deliveries={0}
//           walletBalance={1000}
//           requiredReserve={1000}
//         />

//         {/* STEP 1: Offline */}
//         {dashboardState === "offline" && (
//           <>
//             <ActiveAssignment assignment={null} />
//             <ShiftReadiness />
//           </>
//         )}

//         {/* STEP 2: Online, but no order */}
//         {dashboardState === "online-idle" && (
//           <>
//             <ActiveAssignment assignment={null} />
//             <WorkArea
//               area="Anna Nagar"
//               city="Chennai"
//               description="Searching for nearby delivery orders"
//             />
//           </>
//         )}

//         {/* STEP 3: Online, with an order offer */}
//         {dashboardState === "online-with-orders" && (
//           <>
//             <ActiveAssignment
//               assignment={activeOrder}
//               onAccept={handleAcceptOrder}
//               onViewOrder={(orderId) => {
//                 console.log("View order:", orderId);
//               }}
//             />

//             <WorkArea
//               area="Anna Nagar"
//               city="Chennai"
//               description="Receiving nearby delivery orders"
//             />

//             <AvailableNearby
//               onAccept={(orderId) => {
//                 console.log("Accept nearby order:", orderId);
//               }}
//               onViewDetails={(orderId) => {
//                 console.log("View order details:", orderId);
//               }}
//               onMapView={() => {
//                 console.log("Open map");
//               }}
//             />
//           </>
//         )}
//       </main>

//       <Navbar />

//       {/* Temporary development trigger.
//           Remove this button when real order events are connected. */}
//       {dashboardState === "online-idle" && (
//         <button
//           type="button"
//           onClick={() =>
//             handleOrderAvailable({
//               orderId: "XM20481",
//               shopName: "Raja Xerox & Stationers",
//               pickupAddress: "TSR Big Street, Chennai",
//               destination: "KCE Campus-Girls Hostel",
//               amount: 88,
//               paymentMethod: "COD",
//               priority: "High Priority",
//               status: "Ready",
//             })
//           }
//           className="fixed bottom-20 right-3 z-50 rounded-full bg-gray-900 px-3 py-2 text-[10px] font-semibold  font-hanuman text-white shadow-lg"
//         >
//           Demo: Receive Order
//         </button>
//       )}
//     </div>
//   );
// }






















"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

import DashboardHero from "@/components/dashboard/DashboardHero";
import OnlineOfflineCard from "@/components/dashboard/OnlineOfflineCard";
import TodaysSummary from "@/components/dashboard/TodaysSummary";
import ActiveAssignment, {
  type Assignment,
} from "@/components/dashboard/ActiveAssignment";
import ShiftReadiness from "@/components/dashboard/ShiftReadiness";
import WorkArea from "@/components/dashboard/WorkArea";
import AvailableNearby from "@/components/dashboard/AvailableNearby";

type DashboardState = "offline" | "online-idle" | "online-with-orders";

export default function PartnerHomePage() {
  const router = useRouter();
  const [dashboardState, setDashboardState] =
    useState<DashboardState>("offline");

  const [activeOrder, setActiveOrder] = useState<Assignment | null>(null);

  const isOnline = dashboardState !== "offline";

  // STEP 1 -> STEP 2: Rider goes online.
  function handleOnlineStatusChange(online: boolean) {
    if (online) {
      setDashboardState("online-idle");
      return;
    }

    setDashboardState("offline");
    setActiveOrder(null);
  }

  // STEP 2 -> STEP 3: Simulate an incoming order.
  // Connect this function to your real order notification/API later.
  function handleOrderAvailable(order: Assignment) {
    if (!isOnline) return;

    setActiveOrder(order);
    setDashboardState("online-with-orders");
  }

  function handleAcceptOrder(orderId: string) {
    if (!activeOrder || activeOrder.orderId !== orderId) return;

    // TODO: Call the accept-order API.
    console.log("Accept order:", orderId);

    router.push("/partner/active/accepted");
  }

  function handlePassOrder(orderId: string) {
    if (activeOrder?.orderId !== orderId) return;

    // TODO: Request the next available order from your backend.
    setActiveOrder(null);
    setDashboardState("online-idle");
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#17213c]">
      {/* Shared top bar */}
      <div className="sticky top-0 z-40 bg-white shadow-[0px_1px_2px_0px_#0000000D]">
        <TopBar isOnline={isOnline} />
      </div>

      <main className="mx-auto w-full max-w-lg space-y-3 px-3 py-3 pb-24">
        {/* Shared dashboard hero */}
        <DashboardHero riderName="Rahul" />

        {/* Shared online/offline control */}
        <OnlineOfflineCard
          isOnline={isOnline}
          onStatusChange={handleOnlineStatusChange}
        />

        {/* Shared daily statistics */}
        <TodaysSummary
          earnings={0}
          deliveries={0}
          walletBalance={1000}
          requiredReserve={1000}
        />

        {/* STEP 1: OFFLINE */}
        {dashboardState === "offline" && (
          <>
            <ActiveAssignment
              assignment={null}
              isOnline={false}
            />

            <ShiftReadiness />
          </>
        )}

        {/* STEP 2: ONLINE, WAITING FOR DELIVERY */}
        {dashboardState === "online-idle" && (
          <>
            <ActiveAssignment
              assignment={null}
              isOnline={true}
            />

            <WorkArea
              area="Anna Nagar"
              city="Chennai"
              radiusKm={4.5}
            />
          </>
        )}

        {/* STEP 3: ONLINE, WITH AN AVAILABLE ORDER */}
        {dashboardState === "online-with-orders" && (
          <>
            <ActiveAssignment
              assignment={activeOrder}
              isOnline
              onAccept={handleAcceptOrder}
              onViewOrder={handlePassOrder}
            />

            <AvailableNearby
              onAccept={handleAcceptOrder}
              onViewOrder={handlePassOrder}
              onMapView={() => {
                console.log("Open map");
              }}
            />
          </>
        )}
      </main>

      {/* Shared bottom navigation */}
      <Navbar />

      {/* Temporary development control: remove after API integration */}
      {dashboardState === "online-idle" && (
        <button
          type="button"

          onClick={() =>
            handleOrderAvailable({
              orderId: "XM20496",
              shopName: "Raja Xerox & Stationers",
              pickupAddress: "TSR Big Street, Opp. ACTM (3 mins away)",
              destination: "KCE Campus-Girls Hostel 1",
              amount: 88,
              paymentMethod: "COD",
              priority: "Thesis Priority",
              status: "Ready",
              expiresInSeconds: 27,
              pickupDistanceKm: 0.6,
              dropoffDistanceKm: 1.9,
              estimatedTime: "Est. 18 min",
              recipientName: "Block C, Security Check Desk",
            })
          }

          className="fixed bottom-20 right-3 z-50 rounded-full bg-gray-900 px-3 py-2 text-[10px] font-semibold  font-hanuman text-white shadow-lg"
        >
          Demo: Receive Order
        </button>
      )}
    </div>
  );
}
