import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShoppingCart,
  MessageCircle,
  Truck,
  ShieldCheck,
} from "lucide-react";

type HeroProps = {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonLink: string;
  heroWhatsappButtonText: string;
  heroWhatsappButtonLink: string;
  heroImage?: string;
};

export default function Hero({
  heroTitle,
  heroSubtitle,
  heroBadge,
  heroPrimaryButtonText,
  heroPrimaryButtonLink,
  heroWhatsappButtonText,
  heroWhatsappButtonLink,
  heroImage,
}: HeroProps) {
  const badgeParts = heroBadge.split("•").map((item) => item.trim());
  const subtitleParts = heroSubtitle.split("•").map((item) => item.trim());

  const titleParts = heroTitle.split(",");

  return (
    <section className="relative overflow-hidden bg-[#F4FBF7]">
      <div className="absolute inset-0">
        {heroImage && (
          <Image
            src={`http://localhost:1337${heroImage}`}
            alt="Fresh groceries"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
            unoptimized
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-[#F4FBF7] via-[#F4FBF7]/95 via-[38%] via-[#F4FBF7]/55 via-[52%] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4FBF7]/45 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[565px] max-w-[1440px] items-center px-6 sm:px-10 lg:px-12 xl:px-[45px]">
        <div className="w-full max-w-[690px]">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-[7px] rounded-full bg-[#DDF6E8] px-[14px] py-[8px] text-[12px] font-semibold text-[#16803A]">
            <Leaf
              className="h-[14px] w-[14px] fill-[#16803A]"
              strokeWidth={1.8}
            />

            {badgeParts.map((part, index) => (
              <span key={`${part}-${index}`} className="flex items-center gap-[7px]">
                {index > 0 && (
                  <span className="text-[#76AD8C]">•</span>
                )}
                {part}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="max-w-[670px] text-[45px] font-extrabold leading-[1.04] tracking-[-1.8px] text-[#075C2B] sm:text-[50px] lg:text-[54px]">
            {titleParts.map((part, index) => (
              <span key={`${part}-${index}`}>
                {part.trim()}
                {index < titleParts.length - 1 && (
                  <>
                    ,
                    <br />
                  </>
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 text-[14px] font-medium text-[#174B35] sm:text-[15px]">
            {subtitleParts.map((part, index) => (
              <span
                key={`${part}-${index}`}
                className="flex items-center gap-x-3"
              >
                {index > 0 && (
                  <span className="text-[#16803A]">•</span>
                )}
                {part}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href={heroPrimaryButtonLink}
              className="group flex h-[47px] items-center gap-2 rounded-[9px] bg-[#FF7100] px-[22px] text-[12px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#EA6200] hover:shadow-md"
            >
              <ShoppingCart
                className="h-[17px] w-[17px]"
                strokeWidth={2}
              />

              <span>{heroPrimaryButtonText}</span>

              <span className="ml-1 text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href={heroWhatsappButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[47px] items-center gap-2 rounded-[9px] border-[1.5px] border-[#16803A] bg-white/85 px-[21px] text-[12px] font-bold text-[#0B5428] backdrop-blur-sm transition-all duration-200 hover:bg-[#16803A] hover:text-white"
            >
              <MessageCircle
                className="h-[18px] w-[18px]"
                strokeWidth={2}
              />

              <span>{heroWhatsappButtonText}</span>
            </a>
          </div>

          {/* Benefits */}
          <div className="mt-10 flex items-center">
            <div className="flex items-center pr-7">
              <Truck
                className="mr-3 h-[26px] w-[26px] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[11px] font-bold text-[#173B2A] sm:text-[12px]">
                  Same Day Delivery
                </p>

                <p className="mt-[2px] text-[10px] text-[#648076]">
                  In Your Area
                </p>
              </div>
            </div>

            <div className="h-[42px] w-px bg-[#CDE2D5]" />

            <div className="flex items-center px-7">
              <ShieldCheck
                className="mr-3 h-[26px] w-[26px] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[11px] font-bold text-[#173B2A] sm:text-[12px]">
                  Fresh & Quality
                </p>

                <p className="mt-[2px] text-[10px] text-[#648076]">
                  Products
                </p>
              </div>
            </div>

            <div className="h-[42px] w-px bg-[#CDE2D5]" />

            <div className="flex items-center pl-7">
              <Leaf
                className="mr-3 h-[26px] w-[26px] fill-[#16803A] text-[#16803A]"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-[11px] font-bold text-[#173B2A] sm:text-[12px]">
                  Local Store
                </p>

                <p className="mt-[2px] text-[10px] text-[#648076]">
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