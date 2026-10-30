"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Info,
  LockKeyhole,
  Pencil,
  Smartphone,
  Zap,
} from "lucide-react";

import Header from "@/components/onboarding/Header";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

type Step = 1 | 2;

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

function PhoneInput({
  value,
  onChange,
  disabled = false,
  error,
}: PhoneInputProps) {
  const handleChange = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    onChange(digits);
  };

  return (
    <div className="w-full">
      <label
        htmlFor="mobile-number"
        className="mb-1.5 block text-xs font-medium text-gray-900"
      >
        Mobile Number
      </label>

      <div
        className={`flex h-13 w-full items-center overflow-hidden rounded-lg border bg-white transition ${error
            ? "border-red-500"
            : "border-blue-600 border-2 focus-within:ring-2 focus-within:ring-blue-600/15"
          } ${disabled ? "opacity-60" : ""}`}
      >
        <div className="flex h-full shrink-0 items-center gap-1.5 px-3">
          <span
            className="text-base "
            role="img"
            aria-label="India"
          >
            🇮🇳
          </span>

          <span className="text-xs font-medium text-gray-900">
            +91
          </span>

          <svg
            viewBox="0 0 12 7"
            className="size-2.5 text-gray-400"
            aria-hidden="true"
          >
            <path
              d="M1 1.5 6 5.5 11 1.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="h-6 w-px bg-gray-200" />

        <input
          id="mobile-number"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          disabled={disabled}
          placeholder="Enter mobile number"
          maxLength={10}
          className="h-full min-w-0 flex-1 bg-transparent px-3 text-lg font-medium text-gray-900 outline-none placeholder:text-gray-400"
          aria-invalid={Boolean(error)}
        />
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

function OtpInput({
  value,
  onChange,
  disabled = false,
}: OtpInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const digits = Array.from(
    { length: 4 },
    (_, index) => value[index] ?? "",
  );

  const updateDigit = (index: number, input: string) => {
    const digit = input.replace(/\D/g, "").slice(-1);

    const next = [...digits];
    next[index] = digit;

    onChange(next.join(""));

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      event.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[index-1]?.focus();
    }

    if (
      event.key === "ArrowLeft" &&
      index > 0
    ) {
      inputRefs.current[index-1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < 3
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    if (!pasted) return;

    onChange(pasted);

    const focusIndex = Math.min(pasted.length, 3);

    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div
      className="grid grid-cols-4 gap-2"
      role="group"
      aria-label="Enter 4 digit OTP"
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={
            index === 0 ? "one-time-code" : "off"
          }
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={(event) =>
            updateDigit(index, event.target.value)
          }
          onKeyDown={(event) =>
            handleKeyDown(index, event)
          }
          onPaste={handlePaste}
          aria-label={`OTP digit ${index + 1}`}
          className="h-13 w-full rounded-lg border border-gray-200 bg-white text-center text-[22px] font-bold  font-hanuman text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 disabled:opacity-60"
        />
      ))}
    </div>
  );
}

function InfoBadge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-7 flex-1 items-center gap-1.5 rounded-md bg-indigo-50 px-2 text-[13px] font-medium text-gray-900">
      <span className="text-blue-600">{icon}</span>

      <span className="truncate">
        {children}
      </span>
    </div>
  );
}

function MobileNumberStep({
  phone,
  setPhone,
  onContinue,
}: {
  phone: string;
  setPhone: (value: string) => void;
  onContinue: () => void;
}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = /^[6-9]\d{9}$/.test(phone);

  const handleSubmit = async () => {
    if (!isValid) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500),
    );

    setLoading(false);
    onContinue();
  };

  return (
    <section className="flex flex-1 flex-col px-4 sm:px-6 space-y-2">
      <div className="pt-5 sm:pt-8">
        <h2 className="font-hanuman text-[22px] font-bold  font-hanuman   text-gray-900 sm:text-2xl">
          Enter your mobile number
        </h2>

        <p className="mt-1.5 max-w-sm text-base   text-gray-500 sm:text-base">
          We’ll send a one-time password to verify your
          identity.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <PhoneInput
          value={phone}
          onChange={(value) => {
            setPhone(value);
            setError("");
          }}
          disabled={loading}
          error={error}
        />

        <div className="mt-2 flex items-start gap-1.5">
          <Info
            size={18}
            strokeWidth={2.5}
            fill="#1677FF"
            className="mt-0.5 shrink-0 text-white"
          />

          <p className="max-w-sm text-sm   text-gray-500">
            Use the active personal number you will carry
            during delivery routes.
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          <InfoBadge
            icon={
              <Zap
                size={12}
                strokeWidth={2.5}
              />
            }
          >
            Instant OTP
          </InfoBadge>

          <InfoBadge
            icon={
              <Smartphone
                size={12}
                strokeWidth={2.5}
              />
            }
          >
            Auto-fill Ready
          </InfoBadge>
        </div>
      </div>

      <div className="mt-7">
        <Button
          onClick={handleSubmit}
          disabled={!isValid || loading}
          className="w-full"
        >
          {loading ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Processing...
            </>
          ) : (
            <>
              Send OTP
              <ArrowRight size={17} />
            </>
          )}
        </Button>

        <div className="mt-2.5 flex items-center justify-center gap-1 text-[9px] text-gray-500">
          <LockKeyhole
            size={10}
            strokeWidth={1.8}
          />

          <span>
            Secured with OTP verification • Zero spam
          </span>
        </div>
      </div>
    </section>
  );
}

function OtpVerificationStep({
  phone,
  onEdit,
  onVerified,
}: {
  phone: string;
  onEdit: () => void;
  onVerified: () => void;
}) {
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(24);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = window.setInterval(() => {
      setSeconds((current) =>
        Math.max(0, current-1),
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [seconds]);

  const maskedPhone =
    phone.length === 10
      ? `${phone.slice(0, 2)}XX ${phone.slice(5)}`
      : phone;

  const handleVerify = async () => {
    if (otp.length !== 4) return;

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500),
    );

    setLoading(false);
    onVerified();
  };

  const handleResend = async () => {
    if (seconds > 0) return;

    setSeconds(24);
  };

  return (
    <section className="flex flex-1 flex-col px-4 sm:px-6 ">
      <div className="pt-5 sm:pt-8">
        <h2 className="font-hanuman text-[22px] font-bold  font-hanuman   text-gray-900 sm:text-lg">
          Enter OTP
        </h2>

        <p className="mt-1.5 text-sm text-gray-500 sm:text-sm">
          Enter the 4-digit code sent to
        </p>

        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <div className="flex items-center gap-1.5 rounded-md bg-indigo-50 px-2 py-1 text-[15px] font-medium text-gray-900">
            <Smartphone
              size={11}
              strokeWidth={2}
            />

            <span>
              +91 {maskedPhone}
            </span>
          </div>

          <button
            type="button"
            onClick={onEdit}
            className="flex items-center gap-0.5 text-[15px] font-medium text-blue-600"
          >
            Edit

            <Pencil
              size={9}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <OtpInput
          value={otp}
          onChange={setOtp}
          disabled={loading}
        />

        <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-500">
          <span>
            Didn't receive the code?
          </span>

          {seconds > 0 ? (
            <span>
              Resend in{" "}
              <span className="font-medium text-gray-900">
                00:
                {String(seconds).padStart(2, "0")}
              </span>
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold  font-hanuman text-blue-600"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 text-lg">
        <Button
          onClick={handleVerify}
          disabled={otp.length !== 4 || loading}
          className="w-full"
        >
          {loading ? (
            <>
              <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Processing...
            </>
          ) : (
            <>
              Verify & Continue
              <ArrowRight size={17} />
            </>
          )}
        </Button>
      </div>
    </section>
  );
}

export default function PartnerRegistration() {

  const router = useRouter();

  const [step, setStep] = useState<Step>(1);
  const [phone, setPhone] = useState("");

  const handleVerified = () => {
    router.push("/partner/onboarding/yourself");
  };


  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-white ">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
        <Header
          title="Welcome Partner"
          currentStep={1}
          totalSteps={4}
          showProgress
        />

        {step === 1 && (
          <MobileNumberStep
            phone={phone}
            setPhone={setPhone}
            onContinue={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <OtpVerificationStep
            phone={phone}
            onEdit={() => setStep(1)}
            onVerified={handleVerified}
          />
        )}
      </div>
    </main>
  );
}