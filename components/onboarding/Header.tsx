import Image from "next/image";

interface HeaderProps {
  title?: string;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  showRiderLabel?: boolean;
}

export default function Header({
  title,
  showProgress = false,
  currentStep = 1,
  totalSteps = 4,
  showRiderLabel = true,
}: HeaderProps) {
  return (
    <header className="bg-[#FAF8FFCC]">
      {/* Optional page title */}
      {title && (
        <div className="flex min-h-16 items-center justify-center  shadow-[0px_1px_8px_0px_#0000000A] backdrop-blur-xl  py-2 ">
          <h1 className="font-hanuman text-xl font-semibold text-[#17213c]">
            {title}
          </h1>
        </div>
      )}

      {/* Brand row */}
      <div className="flex min-h-11 items-center justify-between my-5 px-3">
        <div className="flex min-w-0 items-center gap-1.5">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-md">
            <Image
              src="/logo.png"
              alt="XeroxMate logo"
              fill
              priority
              sizes="40px"
              className="object-contain"
            />
          </div>

          <span className="truncate text-sm font-bold tracking-tight font-hanuman text-[#17213c]">
            {showRiderLabel ? "XEROXMATE RIDER" : "XEROXMATE"}
          </span>
        </div>

        {/* Optional onboarding progress */}
        {showProgress && (
          <div
            className="flex items-center gap-1.5"
            role="progressbar"
            aria-label="Onboarding progress"
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-valuenow={currentStep}
          >
            {Array.from({ length: totalSteps }, (_, index) => (
              <span
                key={index}
                className={`size - 1.5 rounded - full ${
  index < currentStep
    ? "bg-blue-600"
    : "bg-gray-200"
} `}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
