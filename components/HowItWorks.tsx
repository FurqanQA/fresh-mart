import {
  Search,
  ShoppingCart,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Browse Products",
    description: "Explore our fresh collection",
    icon: Search,
  },
  {
    number: "2",
    title: "Add to Cart",
    description: "Select what you need",
    icon: ShoppingCart,
  },
  {
    number: "3",
    title: "Order on WhatsApp",
    description: "We'll confirm and deliver",
    icon: MessageCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-[9px] sm:py-[10px] lg:py-[11px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        {/* MAIN STRIP */}
        <div className="overflow-hidden rounded-[9px] bg-[#F1FAF5] px-4 py-3 sm:px-5 lg:px-4 lg:py-[13px]">

          <div className="grid items-center lg:grid-cols-[245px_1fr]">

            {/* LEFT HEADING */}
            <div className="border-b border-[#D8EAE0] pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">

              <p className="mb-[3px] text-[8px] font-bold uppercase tracking-[0.2px] text-[#F97316] sm:text-[9px]">
                How It Works
              </p>

              <h2 className="max-w-[190px] text-[17px] font-extrabold leading-[1.08] tracking-[-0.3px] text-[#075C2B] sm:text-[18px]">
                Simple Steps to
                <br />
                Get Your Groceries
              </h2>
            </div>

            {/* STEPS */}
            <div className="grid grid-cols-1 sm:grid-cols-3">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`
                      relative flex items-center px-3 py-3
                      sm:px-4 sm:py-2
                      lg:px-5
                      ${
                        index !== 0
                          ? "border-t border-[#D8EAE0] sm:border-t-0 sm:border-l"
                          : ""
                      }
                    `}
                  >

                    {/* NUMBER */}
                    <div className="flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-[#079447] text-[8px] font-bold text-white">
                      {step.number}
                    </div>

                    {/* ICON */}
                    <div className="ml-2 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon
                        className="h-[17px] w-[17px] text-[#16803A]"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TEXT */}
                    <div className="ml-2 min-w-0">
                      <h3 className="text-[9px] font-bold leading-[1.2] text-[#123D2A] sm:text-[10px]">
                        {step.title}
                      </h3>

                      <p className="mt-[2px] whitespace-nowrap text-[7px] leading-[1.2] text-[#71877C] sm:text-[8px]">
                        {step.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    {index < steps.length - 1 && (
                      <ArrowRight
                        className="absolute right-[-7px] top-1/2 z-10 hidden h-[13px] w-[13px] -translate-y-1/2 bg-[#F1FAF5] text-[#16803A] sm:block"
                        strokeWidth={1.5}
                      />
                    )}

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}