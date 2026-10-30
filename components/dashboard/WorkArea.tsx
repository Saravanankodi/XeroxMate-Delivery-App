import { MapPin, Navigation } from "lucide-react";

interface WorkAreaProps {
    area?: string;
    city?: string;
    description?: string;
    radiusKm: number;
}

export default function WorkArea({
    area = "Anna Nagar",
    city = "Chennai",
    description = "Receiving print dispatch orders within ",
    radiusKm,
}: WorkAreaProps) {
    return (
        <section className="rounded-xl border flex items-center border-gray-100 gap-4  bg-white p-3">

            <div className="flex size-12  shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Navigation size={25} />
            </div>
            <div className="mt-2 flex items-start gap-2">

                <div className="min-w-0 ">
                <p className="text-[12px] font-semibold  font-hanuman uppercase tracking-wide text-gray-400">
                    Work Area
                </p>
                    <h2 className="text-lg font-bold flex items-center gap-2 font-hanuman text-[#17213c]">
                        <MapPin size={18} stroke="#ff0505" />  {area}, {city}
                    </h2>

                    <p className="mt-1 flex  gap-1 text-[14px] text-gray-500">
                        <span> {description}
                            {radiusKm} km.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}