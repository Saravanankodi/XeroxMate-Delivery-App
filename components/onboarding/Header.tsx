import Image from "next/image";

interface HeaderProps {
  title?: string;
  currentStep?: number;
  totalSteps?: number;
}

export default function Header({
  title = "Welcome Partner",
  currentStep = 2,
  totalSteps = 4,
}: HeaderProps) {
  return (
    <header className="-mx-6 phone:-mx-6.5 frame:-mx-7">
      <h1 className="bg-white px-3 pt-4.25 pb-3.75 text-center text-xl font-bold tracking-[-0.25px]">
        {title}
      </h1>

      <div className="flex min-h-12 items-center justify-between gap-3 px-6 phone:px-6.5 frame:px-7">
        <div className="flex min-w-0 items-center gap-1.75">
          <Image
            src="/logo.png"
            alt="XeroxMate logo"
            width={40}
            height={40}
            className="size-10 shrink-0 shadow-[inset_1px_1px_1px_5px_rgba(36,37,39,0.793)]"
            priority
          />
          <span className="font-brand text-sm font-extrabold tracking-[0.1px]">
            XEROXMATE
          </span>
        </div>

        <div
          className="flex items-center gap-1.25"
          role="progressbar"
          aria-label="Onboarding progress"
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-valuenow={currentStep}
        >
          {Array.from({ length: totalSteps }, (_, index) => (
            <span
              key={index}
              className={`size-2 rounded-full ${
                index < currentStep
                  ? "bg-xm-primary"
                  : "bg-xm-progress-inactive"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
