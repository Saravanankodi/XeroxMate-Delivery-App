import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  FileText,
  Clock3,
  Archive,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

import Header from "./Header";
import FeatureCard from "./FeatureCard";
import Button from "@/components/ui/Button";

export default function PartnerWelcome() {
  return (
    <main className="relative mx-auto flex h-dvh min-h-dvh w-full max-w-[460px] flex-col overflow-hidden bg-xm-background ">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain  pb-4 [scrollbar-width:none] phone:px-6.5 frame:px-7 [&::-webkit-scrollbar]:hidden">
        <Header
                  title="Welcome Partner"
                  currentStep={1}
                  totalSteps={4}
                  showProgress
                />

    
        <section className="">
          <div className="relative mx-auto mb-3 grid size-16 place-items-center rounded-full bg-[#e4e8ff]">
            <div className="grid size-11.5 place-items-center rounded-full bg-white text-xm-primary">
              <Truck size={25} strokeWidth={2.2} />
            </div>

            <span className="absolute -bottom-px right-px grid size-5.25 place-items-center rounded-full border-2 border-xm-background bg-xm-primary text-white">
              <FileText size={13} />
            </span>
          </div>

          <h2 className="text-center text-[22px]  font-bold tracking-[-0.35px]">
            Become a Delivery Partner
          </h2>

          <p className="mx-auto mt-1.75 max-w-xs text-center text-base  text-xm-text-muted">
            Pick up print orders from nearby Xerox shops and deliver them to
            customers.
          </p>
        </section>

       
        <section
          className="mt-4.25 grid gap-1.75 frame:mt-5.25 frame:gap-2.5 px-3"
          aria-label="Partner benefits"
        >
          <FeatureCard
            icon={<Clock3 size={19} />}
            title="Flexible Work"
            description="Choose when you want to work."
          />

          <FeatureCard
            icon={<Archive size={19} />}
            title="Simple Deliveries"
            description="Pick up, deliver and complete orders easily."
          />

          <FeatureCard
            icon={<ChartNoAxesCombined size={19} />}
            title="Track Earnings"
            description="See your deliveries and earnings in one place."
          />
        </section>

       
        <section className="mt-3.5 flex min-h-19.25 items-center gap-3 rounded-xl bg-[#f0f1ff] px-3 mx-3 py-2.5">
          <div className="size-12.5 shrink-0 overflow-hidden rounded-[7px] bg-[#e3e8f8]">
            <Image
              src="/images/delivery-partner.png"
              alt="Delivery partner carrying an order"
              width={80}
              height={88}
              className="block h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <span className="mb-0.75 block text-[11px] font-bold tracking-[0.35px] text-xm-primary">
              FAST-TRACK SETUP
            </span>
            <h3 className="text-sm  font-bold">
              Quick 3-step digital journey
            </h3>
            <p className="mt-0.5 text-[11px]  text-xm-text-muted">
              Start delivering in your neighborhood
            </p>
          </div>
        </section>
      </div>

      
      <footer className="relative z-2 shrink-0 border-t border-[#f0edf6] bg-[rgb(255_255_255/97%)] px-5.25 py-3 shadow-[0_-4px_14px_rgb(34_43_80/3%)] frame:px-6 frame:py-4">
        <Button href="/partner/register">
          Get Started <ArrowRight size={18} />
        </Button>

        <p className="mt-3.25 flex items-center justify-center gap-2 text-center text-xs  text-xm-text-muted">
          Already registered?{" "}
          <Link
            href="/partner/sign-in"
            className="font-semibold text-xm-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </footer>
    </main>
  );
}
