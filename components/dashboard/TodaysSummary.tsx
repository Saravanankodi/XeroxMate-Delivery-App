import { Wallet, Truck, IndianRupee, Eye } from "lucide-react";

interface TodaysSummaryProps {
    earnings?: number;
    deliveries?: number;
    walletBalance?: number;
    requiredReserve?: number;
    onViewWallet?: () => void;
}

export default function TodaysSummary({
    earnings = 0,
    deliveries = 0,
    walletBalance = 1000,
    requiredReserve = 1000,
    onViewWallet,
}: TodaysSummaryProps) {
    const money = (value: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <section className="space-y-2">
            <h2 className="px-1 text-[11px] font-semibold  font-hanuman uppercase tracking-wide text-gray-400">
                Today's Summary
            </h2>

            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-gray-100 bg-white p-3">
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] text-gray-500">Earnings</span>
                        <IndianRupee size={18} className="text-blue-500" />
                    </div>
                    <p className="mt-2 text-[22px] font-extrabold  font-hanuman text-[#17213c]">
                        {money(earnings)} <span className="text-[12px] font-medium">net</span>
                    </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-white p-3">
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] text-gray-500">Deliveries</span>
                        <Truck size={18} className="text-blue-500" />
                    </div>
                    <p className="mt-2 text-[22px] font-extrabold  font-hanuman text-[#17213c]">
                        {deliveries} <span className="text-[12px] font-medium">trips</span>
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white p-3">
                <div className="flex min-w-0 items-center gap-2">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Wallet size={19} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[12px] text-gray-500">Wallet Balance</p>
                        <p className="text-lg font-extrabold  font-hanuman text-[#17213c]">
                            {money(walletBalance)}
                        </p>
                        <p className="text-[12px] text-gray-400">
                            Min. required reserve: {money(requiredReserve)}
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onViewWallet}
                    className="flex shrink-0 items-center gap-1 text-[16px] font-extrabold  text-blue-600"
                >
                    <Eye size={18} />
                    View
                </button>
            </div>
        </section>
    );
}