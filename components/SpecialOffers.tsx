import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

const offers = [
  {
    name: "Fresh Tomatoes",
    quantity: "1 kg",
    price: "Rs. 170",
    oldPrice: "Rs. 200",
    discount: "-15%",
    image: "/images/offer-tomatoes.png",
    href: "/shop/fresh-tomatoes",
  },
  {
    name: "Bananas",
    quantity: "1 kg",
    price: "Rs. 160",
    oldPrice: "Rs. 200",
    discount: "-20%",
    image: "/images/offer-bananas.png",
    href: "/shop/bananas",
  },
  {
    name: "Fresh Milk",
    quantity: "1 Liter",
    price: "Rs. 280",
    oldPrice: "Rs. 310",
    discount: "-10%",
    image: "/images/offer-milk.png",
    href: "/shop/fresh-milk",
  },
  {
    name: "Whole Wheat Bread",
    quantity: "1 Pack",
    price: "Rs. 140",
    oldPrice: "Rs. 160",
    discount: "-12%",
    image: "/images/offer-bread.png",
    href: "/shop/whole-wheat-bread",
  },
];

export default function SpecialOffers() {
  return (
    <section className="bg-white py-[10px] sm:py-[11px] lg:py-[12px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        <div className="relative overflow-hidden rounded-[9px] bg-[#FFF6E9] px-4 py-4 sm:px-5 lg:px-6 lg:py-[17px]">

          {/* DECORATION */}
          <div className="pointer-events-none absolute -left-7 bottom-[-18px] text-[75px] leading-none opacity-40">
            🍃
          </div>

          <div className="pointer-events-none absolute -left-3 bottom-[38px] text-[38px] leading-none opacity-25">
            🍃
          </div>

          <div className="relative z-10 grid gap-4 lg:grid-cols-[275px_1fr] lg:gap-5">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-1 sm:px-2 lg:px-0">
              <div className="mb-[9px] inline-flex w-fit rounded-full bg-[#FF7100] px-[10px] py-[5px] text-[8px] font-bold uppercase tracking-[0.15px] text-white">
                Today&apos;s Offers
              </div>

              <h2 className="max-w-[240px] text-[22px] font-extrabold leading-[1.08] tracking-[-0.6px] text-[#075C2B] sm:text-[23px]">
                Special Discounts
                <br />
                on Fresh Products
              </h2>

              <p className="mt-[8px] max-w-[235px] text-[10px] leading-[1.45] text-[#315F48] sm:text-[11px]">
                Save more on your everyday essentials.
              </p>

              <Link
                href="/offers"
                className="group mt-[14px] flex h-[34px] w-fit items-center gap-[8px] rounded-[7px] bg-[#FF7100] px-[15px] text-[9px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#E96400] hover:shadow-md sm:h-[36px] sm:text-[10px]"
              >
                <span>Shop All Offers</span>

                <ArrowRight
                  className="h-[12px] w-[12px] transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-2 gap-[9px] sm:grid-cols-4 sm:gap-[10px]">
              {offers.map((offer) => (
                <div
                  key={offer.name}
                  className="group relative flex min-w-0 flex-col rounded-[8px] bg-white p-[9px] shadow-[0_2px_8px_rgba(20,70,40,0.05)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_7px_18px_rgba(20,70,40,0.09)]"
                >
                  {/* DISCOUNT */}
                  <span className="absolute left-[8px] top-[8px] z-10 rounded-full bg-[#FF7100] px-[6px] py-[3px] text-[7px] font-bold leading-none text-white sm:text-[8px]">
                    {offer.discount}
                  </span>

                  {/* IMAGE */}
                  <Link
                    href={offer.href}
                    className="relative block h-[87px] w-full overflow-hidden rounded-[2px] sm:h-[91px]"
                  >
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      sizes="(max-width: 640px) 45vw, 18vw"
                      className="object-cover object-center transition-transform duration-200 group-hover:scale-[1.03]"
                    />
                  </Link>

                  {/* PRODUCT INFO */}
                  <div className="mt-[5px] flex flex-1 flex-col">

                    <Link
                      href={offer.href}
                      className="line-clamp-1 text-[9px] font-bold text-[#123D2A] transition-colors hover:text-[#16803A] sm:text-[10px]"
                    >
                      {offer.name}
                    </Link>

                    <span className="mt-[2px] text-[8px] text-[#789086] sm:text-[9px]">
                      {offer.quantity}
                    </span>

                    <div className="mt-[3px] flex items-center gap-[5px] whitespace-nowrap">
                      <span className="text-[10px] font-extrabold text-[#075C2B] sm:text-[11px]">
                        {offer.price}
                      </span>

                      <span className="text-[7px] text-[#9AA7A0] line-through sm:text-[8px]">
                        {offer.oldPrice}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="mt-[7px] flex h-[23px] w-full items-center justify-center gap-[4px] rounded-full bg-[#079447] text-[7px] font-bold text-white transition-colors duration-200 hover:bg-[#067B3B] active:scale-[0.98] sm:h-[24px] sm:text-[8px]"
                    >
                      <ShoppingCart
                        className="h-[10px] w-[10px]"
                        strokeWidth={2}
                      />

                      <span>Add to Cart</span>
                    </button>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}