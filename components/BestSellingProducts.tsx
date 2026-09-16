import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Apple (Red)",
    quantity: "1 kg",
    price: "Rs. 350",
    image: "/images/product-apple.png",
    href: "/shop/apple-red",
  },
  {
    name: "Cooking Oil",
    quantity: "1 Liter",
    price: "Rs. 450",
    image: "/images/product-oil.png",
    href: "/shop/cooking-oil",
  },
  {
    name: "Rice (Premium)",
    quantity: "5 kg",
    price: "Rs. 1,250",
    image: "/images/product-rice.png",
    href: "/shop/premium-rice",
  },
  {
    name: "Eggs",
    quantity: "12 Pcs",
    price: "Rs. 320",
    image: "/images/product-eggs.png",
    href: "/shop/eggs",
  },
  {
    name: "Onions",
    quantity: "1 kg",
    price: "Rs. 150",
    image: "/images/product-onions.png",
    href: "/shop/onions",
  },
  {
    name: "Potato",
    quantity: "1 kg",
    price: "Rs. 120",
    image: "/images/product-potato.png",
    href: "/shop/potato",
  },
];

export default function BestSellingProducts() {
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

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-[13px]">
          {products.map((product) => (
            <div
              key={product.name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#E8EEE9] bg-white px-[9px] pb-[9px] pt-[7px] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D5E7DA] hover:shadow-[0_7px_18px_rgba(7,92,43,0.07)]"
            >

              {/* IMAGE */}
              <Link
                href={product.href}
                className="relative block h-[91px] w-full overflow-hidden sm:h-[95px] lg:h-[91px]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                  className="object-cover object-center transition-transform duration-200 group-hover:scale-[1.03]"
                />
              </Link>

              {/* INFO */}
              <div className="mt-[5px] flex flex-1 flex-col">

                <Link
                  href={product.href}
                  className="line-clamp-1 text-[9px] font-bold leading-[1.2] text-[#123D2A] transition-colors hover:text-[#16803A] sm:text-[10px]"
                >
                  {product.name}
                </Link>

                <span className="mt-[3px] text-[8px] leading-none text-[#788B82] sm:text-[9px]">
                  {product.quantity}
                </span>

                <div className="mt-[6px]">
                  <span className="text-[10px] font-extrabold leading-none text-[#075C2B] sm:text-[11px]">
                    {product.price}
                  </span>
                </div>

                <button
                  type="button"
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
          ))}
        </div>

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