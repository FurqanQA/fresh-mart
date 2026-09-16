import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ArrowUpRight,
} from "lucide-react";

export default function StoreSection() {
  return (
    <section className="bg-white py-[10px] sm:py-[11px] lg:py-[12px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.25fr_1fr_1fr]">

          {/* STORE IMAGE */}
          <div className="relative min-h-[145px] overflow-hidden rounded-[8px] sm:min-h-[165px] lg:min-h-[175px]">
            <Image
              src="/images/store-front.png"
              alt="FreshMart grocery store"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* STORE INFORMATION */}
          <div className="flex flex-col justify-center px-1 py-1 lg:px-1">

            <p className="mb-[3px] text-[8px] font-bold uppercase tracking-[0.2px] text-[#F97316] sm:text-[9px]">
              Visit Our Store
            </p>

            <h2 className="text-[17px] font-extrabold leading-[1.1] tracking-[-0.3px] text-[#075C2B] sm:text-[18px]">
              We&apos;re Here for You
            </h2>

            {/* ADDRESS */}
            <div className="mt-[9px] flex items-start gap-2">
              <MapPin
                className="mt-[1px] h-[12px] w-[12px] shrink-0 text-[#16803A]"
                strokeWidth={1.8}
              />

              <p className="text-[8px] leading-[1.35] text-[#315F48] sm:text-[9px]">
                123 Main Road, Green Town, Lahore
              </p>
            </div>

            {/* PHONE */}
            <div className="mt-[5px] flex items-center gap-2">
              <Phone
                className="h-[12px] w-[12px] shrink-0 text-[#16803A]"
                strokeWidth={1.8}
              />

              <p className="text-[8px] text-[#315F48] sm:text-[9px]">
                +92 300 1234567
              </p>
            </div>

            {/* HOURS */}
            <div className="mt-[5px] flex items-center gap-2">
              <Clock
                className="h-[12px] w-[12px] shrink-0 text-[#16803A]"
                strokeWidth={1.8}
              />

              <p className="text-[8px] text-[#315F48] sm:text-[9px]">
                Open Daily: 8:00 AM – 10:00 PM
              </p>
            </div>

            {/* DIRECTIONS */}
            <Link
              href="/contact"
              className="group mt-3 flex h-[29px] w-fit items-center gap-1.5 rounded-[6px] bg-[#079447] px-3 text-[8px] font-bold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#067B3B] hover:shadow-md sm:h-[30px] sm:text-[9px]"
            >
              <Navigation
                className="h-[11px] w-[11px]"
                strokeWidth={2}
              />

              <span>Get Directions</span>

              <ArrowUpRight
                className="h-[10px] w-[10px] transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* MAP */}
          <div className="relative min-h-[145px] overflow-hidden rounded-[8px] border border-[#E8EEE9] bg-[#F7FCF9] sm:min-h-[165px] lg:min-h-[175px]">
            <Image
              src="/images/store-map.png"
              alt="FreshMart store location map"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}