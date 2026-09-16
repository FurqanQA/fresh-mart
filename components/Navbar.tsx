"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const categories = [
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Bakery & Bread",
  "Beverages",
  "Grocery & Staples",
  "Snacks & Treats",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[#eeeeee] bg-white">
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <div className="relative mx-auto flex h-[76px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-10">

        {/* =========================
            LOGO - LEFT
        ========================== */}
        <Link
          href="/"
          aria-label="FreshMart Home"
          className="relative block h-[55px] w-[190px] shrink-0"
        >
          <Image
            src="/images/freshmart-logo.png"
            alt="FreshMart - Your Local Grocery Store"
            fill
            priority
            sizes="190px"
            className="object-contain object-left"
          />
        </Link>

        {/* =========================
            CENTER NAVIGATION
        ========================== */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="flex items-center gap-[2px]">

            {/* HOME */}
            <Link
              href="/"
              className="group relative flex h-[76px] items-center px-[14px] text-[13px] font-medium text-[#16803A]"
            >
              Home

              <span className="absolute bottom-[15px] left-[14px] right-[14px] h-[2px] rounded-full bg-[#16803A]" />
            </Link>

            {/* SHOP */}
            <Link
              href="/shop"
              className="flex h-[76px] items-center px-[14px] text-[13px] font-medium text-[#173B2A] transition-colors duration-200 hover:text-[#16803A]"
            >
              Shop
            </Link>

            {/* CATEGORIES */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCategoryOpen((prev) => !prev)}
                className="flex h-[76px] items-center gap-[5px] px-[14px] text-[13px] font-medium text-[#173B2A] transition-colors duration-200 hover:text-[#16803A]"
              >
                Categories

                <ChevronDown
                  className={`h-[13px] w-[13px] transition-transform duration-200 ${
                    categoryOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.8}
                />
              </button>

              {/* CATEGORY DROPDOWN */}
              <div
                className={`absolute left-1/2 top-full w-[250px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                  categoryOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-xl border border-[#eeeeee] bg-white p-2 shadow-[0_15px_45px_rgba(0,0,0,0.08)]">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href="/categories"
                      className="block rounded-lg px-4 py-3 text-[13px] font-medium text-[#374151] transition-colors duration-150 hover:bg-[#F0FDF4] hover:text-[#16803A]"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <Link
              href="/about"
              className="flex h-[76px] items-center px-[14px] text-[13px] font-medium text-[#173B2A] transition-colors duration-200 hover:text-[#16803A]"
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="flex h-[76px] items-center px-[14px] text-[13px] font-medium text-[#173B2A] transition-colors duration-200 hover:text-[#16803A]"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* =========================
            RIGHT ACTIONS
        ========================== */}
        <div className="ml-auto hidden items-center gap-[12px] lg:flex">

          {/* SEARCH */}
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-[13px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#8a9290]"
              strokeWidth={1.7}
            />

            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              className="h-[40px] w-[185px] rounded-full border border-[#e5e7eb] bg-white pl-[38px] pr-4 text-[12px] text-[#173B2A] outline-none placeholder:text-[#9ca3af] transition-all duration-200 focus:w-[205px] focus:border-[#16803A] focus:ring-2 focus:ring-[#16803A]/10"
            />
          </div>

          {/* CART */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative flex h-[40px] w-[32px] items-center justify-center text-[#173B2A] transition-colors duration-200 hover:text-[#16803A]"
          >
            <ShoppingCart
              className="h-[21px] w-[21px]"
              strokeWidth={1.7}
            />

            {/* CART BADGE */}
            <span className="absolute right-[-2px] top-[-2px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#16803A] px-[3px] text-[8px] font-bold leading-none text-white">
              0
            </span>
          </Link>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[40px] items-center gap-[8px] rounded-full bg-[#16803A] px-[18px] text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0B5428] hover:shadow-md"
          >
            <MessageCircle
              className="h-[16px] w-[16px]"
              strokeWidth={2}
            />

            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* =========================
            MOBILE ACTIONS
        ========================== */}
        <div className="ml-auto flex items-center gap-1 lg:hidden">

          {/* CART */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full text-[#173B2A]"
          >
            <ShoppingCart
              className="h-[20px] w-[20px]"
              strokeWidth={1.8}
            />

            <span className="absolute right-[1px] top-[1px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#16803A] px-[3px] text-[8px] font-bold text-white">
              0
            </span>
          </Link>

          {/* MENU */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-[#173B2A] transition-colors hover:bg-[#F0FDF4]"
          >
            {mobileMenuOpen ? (
              <X className="h-[20px] w-[20px]" />
            ) : (
              <Menu className="h-[20px] w-[20px]" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        className={`overflow-hidden border-t border-[#eeeeee] bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[650px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-4 sm:px-8">

          {/* MOBILE SEARCH */}
          <div className="relative mb-4">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-gray-400"
              strokeWidth={1.8}
            />

            <input
              type="search"
              placeholder="Search products..."
              className="h-[44px] w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#16803A] focus:bg-white focus:ring-2 focus:ring-[#16803A]/10"
            />
          </div>

          {/* MOBILE LINKS */}
          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3.5 text-sm font-semibold text-[#16803A]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3.5 text-sm font-medium text-[#173B2A]"
            >
              Shop
            </Link>

            {/* MOBILE CATEGORIES */}
            <button
              type="button"
              onClick={() => setCategoryOpen((prev) => !prev)}
              className="flex items-center justify-between border-b border-gray-100 py-3.5 text-left text-sm font-medium text-[#173B2A]"
            >
              Categories

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {categoryOpen && (
              <div className="rounded-xl bg-[#F0FDF4] p-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href="/categories"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-xs font-medium text-gray-700 hover:text-[#16803A]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3.5 text-sm font-medium text-[#173B2A]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-gray-100 py-3.5 text-sm font-medium text-[#173B2A]"
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE WHATSAPP */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#16803A] text-sm font-semibold text-white transition-colors hover:bg-[#0B5428]"
          >
            <MessageCircle
              className="h-[18px] w-[18px]"
              strokeWidth={2}
            />

            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}