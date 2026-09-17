"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  slug: string;
  quantity: string;
  price: string | number;
  oldPrice?: string | number | null;
  image?: {
    url: string;
  }[];
  isBestSelling?: boolean;
};

type BestSellingProductsProps = {
  products: Product[];
};

export default function BestSellingProducts({
  products,
}: BestSellingProductsProps) {
  const bestSellingProducts = products.filter(
    (product) => product.isBestSelling === true
  );

  const [itemsPerSlide, setItemsPerSlide] = useState(6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false);

  /*
   * RESPONSIVE PRODUCTS PER SLIDE
   *
   * Mobile  = 2
   * Tablet  = 3
   * Desktop = 6
   */
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(6);
      }
    };

    updateItemsPerSlide();

    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  /*
   * CREATE SLIDES
   */
  const slides = useMemo(() => {
    const result: Product[][] = [];

    for (
      let i = 0;
      i < bestSellingProducts.length;
      i += itemsPerSlide
    ) {
      result.push(
        bestSellingProducts.slice(i, i + itemsPerSlide)
      );
    }

    return result;
  }, [bestSellingProducts, itemsPerSlide]);

  const totalSlides = slides.length;

  /*
   * RESET CURRENT SLIDE WHEN SCREEN SIZE CHANGES
   */
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [currentSlide, totalSlides]);

  /*
   * AUTO CAROUSEL
   *
   * Every 1 second
   */
  useEffect(() => {
    if (totalSlides <= 1 || isManual) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= totalSlides - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, isManual]);

  /*
   * NEXT SLIDE
   */
  const nextSlide = () => {
    setIsManual(true);

    setCurrentSlide((prev) =>
      prev >= totalSlides - 1 ? 0 : prev + 1
    );
  };

  /*
   * PREVIOUS SLIDE
   */
  const previousSlide = () => {
    setIsManual(true);

    setCurrentSlide((prev) =>
      prev <= 0 ? totalSlides - 1 : prev - 1
    );
  };

  /*
   * GO TO SPECIFIC SLIDE
   */
  const goToSlide = (index: number) => {
    setIsManual(true);
    setCurrentSlide(index);
  };

  /*
   * IF ONLY ONE SLIDE
   */
  const showCarouselControls = totalSlides > 1;

  return (
    <section className="bg-white py-[11px] sm:py-[12px] lg:py-[13px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

        {/* HEADER */}
        <div className="mb-[13px] flex items-end justify-between">
          <div>
            <p className="mb-[3px] text-[9px] font-bold uppercase tracking-[0.2px] text-[#F97316] sm:text-[10px]">
              Popular Products
            </p>

            <h2 className="text-[20px] font-extrabold leading-[1.15] tracking-[-0.4px] text-[#075C2B] sm:text-[21px] lg:text-[22px]">
              Our Best Selling Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="group hidden items-center gap-[5px] pb-[2px] text-[9px] font-semibold text-[#16803A] sm:flex sm:text-[10px]"
          >
            <span>View All Products</span>

            <ArrowRight
              className="h-[12px] w-[12px] transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          {/* SLIDES */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full"
                >
                  <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-[13px]">

                    {slide.map((product) => {
                      const imageUrl = product.image?.[0]?.url;

                      return (
                        <div
                          key={product.id}
                          className="group flex min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#E8EEE9] bg-white px-[9px] pb-[9px] pt-[7px] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D5E7DA] hover:shadow-[0_7px_18px_rgba(7,92,43,0.07)]"
                        >

                          {/* IMAGE */}
                          <Link
                            href={`/shop/${product.slug}`}
                            className="relative block h-[91px] w-full overflow-hidden sm:h-[95px] lg:h-[91px]"
                          >
                            {imageUrl ? (
                              <Image
                                src={`http://localhost:1337${imageUrl}`}
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                                className="object-cover object-center transition-transform duration-200 group-hover:scale-[1.03]"
                                unoptimized
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-[8px] text-[#788B82]">
                                No image
                              </div>
                            )}
                          </Link>

                          {/* INFO */}
                          <div className="mt-[5px] flex flex-1 flex-col">

                            {/* PRODUCT NAME */}
                            <Link
                              href={`/shop/${product.slug}`}
                              className="line-clamp-1 text-[9px] font-bold leading-[1.2] text-[#123D2A] transition-colors hover:text-[#16803A] sm:text-[10px]"
                            >
                              {product.name}
                            </Link>

                            {/* QUANTITY */}
                            <span className="mt-[3px] text-[8px] leading-none text-[#788B82] sm:text-[9px]">
                              {product.quantity}
                            </span>

                            {/* PRICE */}
                            <div className="mt-[6px]">
                              <span className="text-[10px] font-extrabold leading-none text-[#075C2B] sm:text-[11px]">
                                Rs. {product.price}
                              </span>

                              {product.oldPrice !== null &&
                                product.oldPrice !== undefined && (
                                  <span className="ml-1 text-[8px] text-[#9AA9A1] line-through">
                                    Rs. {product.oldPrice}
                                  </span>
                                )}
                            </div>

                            {/* ADD TO CART */}
                            <button
                              type="button"
                              aria-label={`Add ${product.name} to cart`}
                              className="mt-[8px] flex h-[23px] w-full items-center justify-center gap-[4px] rounded-[5px] bg-[#079447] text-[7px] font-bold text-white transition-colors duration-200 hover:bg-[#067B3B] active:scale-[0.98] sm:h-[24px] sm:text-[8px]"
                            >
                              <ShoppingCart
                                className="h-[10px] w-[10px]"
                                strokeWidth={2}
                              />

                              <span>Add to Cart</span>
                            </button>

                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PREVIOUS BUTTON */}
          {showCarouselControls && (
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous products"
              className="absolute -left-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE8DF] bg-white text-[#075C2B] shadow-[0_3px_10px_rgba(7,92,43,0.12)] transition-all hover:bg-[#F1FAF5] active:scale-95 sm:-left-4 sm:h-8 sm:w-8"
            >
              <ArrowLeft
                className="h-3.5 w-3.5"
                strokeWidth={2}
              />
            </button>
          )}

          {/* NEXT BUTTON */}
          {showCarouselControls && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next products"
              className="absolute -right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE8DF] bg-white text-[#075C2B] shadow-[0_3px_10px_rgba(7,92,43,0.12)] transition-all hover:bg-[#F1FAF5] active:scale-95 sm:-right-4 sm:h-8 sm:w-8"
            >
              <ArrowRight
                className="h-3.5 w-3.5"
                strokeWidth={2}
              />
            </button>
          )}
        </div>

        {/* CAROUSEL DOTS */}
        {showCarouselControls && (
          <div className="mt-3 flex items-center justify-center gap-[5px]">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to product slide ${index + 1}`}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-[16px] bg-[#075C2B]"
                    : "w-[5px] bg-[#C9D9CF] hover:bg-[#8FB29B]"
                }`}
              />
            ))}
          </div>
        )}

        {/* MOBILE VIEW ALL */}
        <div className="mt-4 flex justify-center sm:hidden">
          <Link
            href="/shop"
            className="group flex items-center gap-[5px] text-[10px] font-semibold text-[#16803A]"
          >
            <span>View All Products</span>

            <ArrowRight
              className="h-[12px] w-[12px] transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

      </div>
    </section>
  );
}