import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        name: "Fruits & Vegetables",
        image: "/images/category-fruits.png",
        href: "/shop?category=fruits-vegetables",
    },
    {
        name: "Dairy & Eggs",
        image: "/images/category-dairy.png",
        href: "/shop?category=dairy-eggs",
    },
    {
        name: "Bakery & Bread",
        image: "/images/category-bakery.png",
        href: "/shop?category=bakery-bread",
    },
    {
        name: "Beverages",
        image: "/images/category-beverages.png",
        href: "/shop?category=beverages",
    },
    {
        name: "Grocery & Staples",
        image: "/images/category-grocery.png",
        href: "/shop?category=grocery-staples",
    },
    {
        name: "Snacks & Treats",
        image: "/images/category-snacks.png",
        href: "/shop?category=snacks-treats",
    },
];

export default function Categories() {
    return (
        <section className="bg-white py-[17px] sm:py-[19px] lg:py-[20px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

                {/* HEADER */}
                <div className="mb-[13px] flex items-end justify-between">
                    <div>
                        <p className="mb-[3px] text-[9px] font-bold uppercase tracking-[0.15px] text-[#F97316] sm:text-[10px]">
                            Shop By Category
                        </p>

                        <h2 className="text-[19px] font-extrabold leading-[1.15] tracking-[-0.4px] text-[#075C2B] sm:text-[20px] lg:text-[21px]">
                            Browse Our Categories
                        </h2>
                    </div>

                    <Link
                        href="/categories"
                        className="group hidden items-center gap-[5px] pb-[2px] text-[9px] font-semibold text-[#16803A] sm:flex sm:text-[10px]"
                    >
                        <span>View All Categories</span>

                        <ArrowRight
                            className="h-[12px] w-[12px] transition-transform duration-200 group-hover:translate-x-1"
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>

                {/* CATEGORY GRID */}
                <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-[13px]">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group overflow-hidden rounded-[8px] border border-[#E9F0EB] bg-[#F7FCF9] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D6E9DC] hover:shadow-[0_6px_18px_rgba(7,92,43,0.06)]"
                        >

                            {/* IMAGE */}
                            {/* IMAGE */}
                            <div className="relative h-[84px] w-full overflow-hidden bg-[#F7FCF9] sm:h-[88px] lg:h-[90px]">
                                <div className="absolute inset-x-0 top-[7px] bottom-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                        className="object-contain object-center scale-[1.15] transition-transform duration-200 group-hover:scale-[1.19]"
                                    />
                                </div>
                            </div>

                            {/* NAME */}
                            <div className="flex h-[39px] items-center justify-between px-[9px]">
                                <span className="min-w-0 truncate text-[9px] font-semibold leading-[1.2] text-[#123D2A] sm:text-[10px]">
                                    {category.name}
                                </span>

                                <ArrowRight
                                    className="ml-2 h-[12px] w-[12px] shrink-0 text-[#16803A] transition-transform duration-200 group-hover:translate-x-1"
                                    strokeWidth={1.8}
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* MOBILE VIEW ALL */}
                <div className="mt-4 flex justify-center sm:hidden">
                    <Link
                        href="/categories"
                        className="group flex items-center gap-[5px] text-[10px] font-semibold text-[#16803A]"
                    >
                        <span>View All Categories</span>

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