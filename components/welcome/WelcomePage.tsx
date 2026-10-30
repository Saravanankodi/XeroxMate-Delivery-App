"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/partner/onboarding");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-dvh w-full flex-col overflow-x-hidden bg-white">
      <section className="flex w-full min-w-0 flex-1 items-center justify-center px-6 py-10 md:py-12">
        <div className="flex w-full max-w-xs min-w-0 flex-col items-center text-center sm:max-w-sm md:max-w-md">
          <div className="relative size-17.5 overflow-hidden rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.22)] md:size-20 lg:size-24">
            <Image
              src="/logo.png"
              alt="XeroxMate"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 150px, (min-width: 768px) 130px, 120px"
            />
          </div>

          <h1 className="mt-5  font-bold  font-hanuman tracking-tight text-3xl md:mt-6 md:text-4xl">
            XeroxMate Rider
          </h1>

          <p className="mt-1  font-cutive-mono tracking-widest text-neutral-600 md:mt-2 text-xl">
            Deliver. Earn. Grow.
          </p>
        </div>
      </section>

      {/* Animated loading */}
      <section className="flex w-full min-w-0 shrink-0 items-center justify-center px-6 pt-2 pb-10 sm:pb-12 md:pb-16">
        <div className="flex min-w-0 flex-col items-center">
          <div className="flex items-center justify-center gap-1.5">
            <span className="size-1.5 rounded-full bg-xm-primary animate-loading" />
            <span className="size-1.5 rounded-full bg-xm-primary animate-loading animate-delay-150" />
            <span className="size-1.5 rounded-full bg-xm-primary animate-loading animate-delay-300" />
          </div>

          <p className="mt-3 text-[13px] font-medium tracking-wide text-xm-text-muted">
            Loading...
          </p>
        </div>
      </section>
    </main>
  );
}