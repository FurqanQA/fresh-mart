import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShoppingCart,
  MessageCircle,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[305px] overflow-hidden bg-[#F4FBF7]">
      {/* HERO IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-groceries.png"
          alt="Fresh groceries"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />

        {/* LEFT FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4FBF7] via-[#F4FBF7]/95 via-[40%] via-[#F4FBF7]/60 via-[53%] to-transparent" />

        {/* BOTTOM FADE */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4FBF7]/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-8 lg:px-10 xl:px-[45px]">
        <div className="w-full max-w-[650px]">

          {/* BADGE */}
          <div className="mb-3 inline-flex items-center gap-[6px] rounded-full bg-[#DDF6E8] px-[11px] py-[5px] text-[10px] font-semibold text-[#16803A]">
            <Leaf
              className="h-[12px] w-[12px] fill-[#16803A]"
              strokeWidth={1.8}
            />

            <span>Fresh</span>
            <span className="text-[#76AD8C]">•</span>
            <span>Healthy</span>
            <span className="text-[#76AD8C]">•</span>
            <span>Affordable</span>
          </div>

          {/* HEADING */}
          <h1 className="max-w-[620px] text-[36px] font-extrabold leading-[1.02] tracking-[-1.2px] text-[#075C2B] sm:text-[38px]">
            Fresh Groceries,
            <br />
            Delivered to{" "}
            <span className="text-[#FF7100]">
              Your Door
            </span>
          </h1>

          {/* SUBTITLE */}
          <div className="mt-2 flex items-center gap-x-2 text-[12px] font-medium text-[#174B35] sm:text-[13px]">
            <span>Quality products</span>
            <span className="text-[#16803A]">•</span>
            <span>Great prices</span>
            <span className="text-[#16803A]">•</span>
            <span>Fast local delivery</span>
          </div>

          {/* BUTTONS */}
          <div className="mt-4 flex items-center gap-3">

            <Link
              href="/shop"
              className="group flex h-[36px] items-center gap-[7px] rounded-[7px] bg-[#FF7100] px-[17px] text-[10px] font-bold text-white shadow-sm transition hover:bg-[#EA6200]"
            >
              <ShoppingCart
                className="h-[14px] w-[14px]"
                strokeWidth={2}
              />

              <span>Shop Now</span>

              <span className="text-[13px] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[36px] items-center gap-[7px] rounded-[7px] border border-[#16803A] bg-white/80 px-[16px] text-[10px] font-bold text-[#0B5428] backdrop-blur-sm transition hover:bg-[#16803A] hover:text-white"
            >
              <MessageCircle
                className="h-[14px] w-[14px]"
                strokeWidth={2}
              />

              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* BENEFITS */}
          <div className="mt-5 flex items-center">

            {/* DELIVERY */}
            <div className="flex items-center pr-6">
              <Truck
                className="mr-2 h-[21px] w-[21px] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[9px] font-bold text-[#173B2A] sm:text-[10px]">
                  Same Day Delivery
                </p>

                <p className="mt-[1px] text-[8px] text-[#648076]">
                  In Your Area
                </p>
              </div>
            </div>

            <div className="h-[30px] w-px bg-[#CDE2D5]" />

            {/* QUALITY */}
            <div className="flex items-center px-6">
              <ShieldCheck
                className="mr-2 h-[21px] w-[21px] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[9px] font-bold text-[#173B2A] sm:text-[10px]">
                  Fresh & Quality
                </p>

                <p className="mt-[1px] text-[8px] text-[#648076]">
                  Products
                </p>
              </div>
            </div>

            <div className="h-[30px] w-px bg-[#CDE2D5]" />

            {/* LOCAL */}
            <div className="flex items-center pl-6">
              <Leaf
                className="mr-2 h-[21px] w-[21px] fill-[#16803A] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[9px] font-bold text-[#173B2A] sm:text-[10px]">
                  Local Store
                </p>

                <p className="mt-[1px] text-[8px] text-[#648076]">
                  Support Local
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}