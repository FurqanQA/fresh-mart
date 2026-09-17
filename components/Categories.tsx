import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category = {
    name: string;
    slug: string;
    image?: {
        url: string;
    };
};

type CategoriesProps = {
    categories: Category[];
};

export default function Categories({ categories }: CategoriesProps) {
    return (
        <section className="bg-white py-[17px] sm:py-[19px] lg:py-[20px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-[45px]">

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

                <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-6 lg:gap-[13px]">
                    {categories.map((category) => {
                        const imageUrl = category.image?.url;

                        return (
                            <Link
                                key={category.slug}
                                href={`/shop?category=${category.slug}`}
                                className="group overflow-hidden rounded-[8px] border border-[#E9F0EB] bg-[#F7FCF9] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#D6E9DC] hover:shadow-[0_6px_18px_rgba(7,92,43,0.06)]"
                            >
                                <div className="relative h-[82px] w-full overflow-hidden bg-[#F7FCF9] sm:h-[88px] lg:h-[92px]">

                                    {imageUrl && (
                                        <div className="absolute inset-0 overflow-hidden">
                                            <Image
                                                src={`http://localhost:1337${imageUrl}`}
                                                alt={category.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                                className="object-contain p-1 transition-transform duration-200 group-hover:scale-[1.06]"
                                                unoptimized
                                            />
                                        </div>
                                    )}

                                </div>

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
                        );
                    })}
                </div>

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