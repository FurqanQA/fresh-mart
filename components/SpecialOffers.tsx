"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  slug: string;
  quantity: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  image?: {
    url: string;
  }[];
};

type SpecialOffersProps = {
  products: Product[];
};

export default function SpecialOffers({
  products,
}: SpecialOffersProps) {
  const offers = products.filter(
    (product) =>
      product.discount !== null &&
      product.discount !== undefined
  );

  return (
    <section className="bg-[#FFF7F0] py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        {/* Heading */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2px] text-[#F97316]">
              Today's Offers
            </p>

            <h2 className="text-[21px] font-extrabold tracking-[-0.5px] text-[#075C2B]">
              Special Offers
            </h2>
          </div>

          <Link
            href="/shop"
            className="group hidden items-center gap-1 text-[10px] font-semibold text-[#16803A] sm:flex"
          >
            <span>View All</span>

            <ArrowRight
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Carousel */}
        <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:gap-4">
          {offers.map((product) => {
            const imageUrl = product.image?.[0]?.url;
            return (
              <div
                key={product.id}
                className="group w-[calc(50%-6px)] min-w-[calc(50%-6px)] snap-start overflow-hidden rounded-[10px] border border-[#F1E3D7] bg-white transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(7,92,43,0.08)] sm:w-[calc(33.333%-11px)] sm:min-w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] lg:min-w-[calc(25%-12px)]"
              >
                {/* Product Image */}
                <Link
                  href={`/shop/${product.slug}`}
                  className="relative block h-[145px] overflow-hidden bg-[#FFFDFC] sm:h-[165px]"
                >
                  {product.discount !== undefined && (
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-[#FF7100] px-2 py-1 text-[9px] font-bold text-white">
                      {Math.abs(product.discount)}% OFF
                    </span>
                  )}

                  {imageUrl ? (
                    <Image
                      src={`http://localhost:1337${imageUrl}`}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-1 transition-transform duration-200 group-hover:scale-[1.08]"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[10px] text-gray-400">
                      No image
                    </div>
                  )}
                </Link>

                {/* Product Info */}
                <div className="p-3">
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="truncate text-[11px] font-bold text-[#123D2A] sm:text-[12px]">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-1 text-[9px] text-[#71847A] sm:text-[10px]">
                    {product.quantity}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="block truncate text-[13px] font-extrabold text-[#075C2B]">
                        Rs. {product.price}
                      </span>

                      {
                        product.oldPrice !== null &&
                        product.oldPrice !== undefined && (
                          <span className="text-[9px] text-[#9AA9A1] line-through">
                            Rs. {product.oldPrice}
                          </span>
                        )
                      }
                    </div>

                    <button
                      type="button"
                      aria-label={`Add ${product.name} to cart`}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#075C2B] text-white transition-colors hover:bg-[#004D2B]"
                    >
                      <ShoppingCart
                        className="h-3.5 w-3.5"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All */}
        <div className="mt-3 flex justify-center sm:hidden">
          <Link
            href="/shop"
            className="group flex items-center gap-1 text-[10px] font-semibold text-[#16803A]"
          >
            <span>View All Offers</span>

            <ArrowRight
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

      </div>
    </section>
  );
}