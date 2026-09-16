import {
  Leaf,
  Tag,
  Truck,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    title: "Fresh & Quality Products",
    description: "We source the best for you",
    icon: Leaf,
  },
  {
    title: "Affordable Prices",
    description: "Great value, always",
    icon: Tag,
  },
  {
    title: "Local Delivery",
    description: "Fast & reliable",
    icon: Truck,
  },
  {
    title: "Easy Ordering",
    description: "Shop online or WhatsApp",
    icon: MessageCircle,
  },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-white py-[7px] sm:py-[8px] lg:py-[9px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        {/* BENEFITS BOX */}
        <div className="overflow-hidden rounded-[9px] bg-[#F1FAF5]">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    flex min-h-[70px] items-center justify-center px-4 py-3
                    lg:min-h-[88px] lg:px-5 lg:py-3
                    ${
                      index !== 0
                        ? "border-t border-[#D7E9DE] sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >
                  <div className="flex w-full items-center">

                    {/* ICON */}
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-[#169447] bg-white">
                      <Icon
                        className="h-[18px] w-[18px] text-[#169447]"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* TEXT */}
                    <div className="ml-3 min-w-0">
                      <h3 className="text-[9px] font-bold leading-[1.2] text-[#123D2A] sm:text-[10px]">
                        {benefit.title}
                      </h3>

                      <p className="mt-[3px] text-[8px] leading-[1.2] text-[#71877C] sm:text-[8px]">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}