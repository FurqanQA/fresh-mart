import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#004D2B] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-10 lg:py-[22px] xl:px-[45px]">

        {/* MAIN FOOTER ROW */}
        <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/footer-logo.png"
                alt="FreshMart"
                width={115}
                height={45}
                className="h-auto w-[100px] object-contain sm:w-[105px]"
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="flex items-center justify-center gap-5 sm:gap-7">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[8px] font-medium text-white/90 transition-colors duration-200 hover:text-[#FF7A00] sm:text-[9px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL + COPYRIGHT */}
          <div className="flex items-center justify-center gap-5 md:justify-end">

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-[10px]">

              {/* FACEBOOK */}
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-[20px] w-[20px] items-center justify-center text-white/90 transition-colors duration-200 hover:text-[#FF7A00]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[12px] w-[12px]"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.66.34-1 1-1Z" />
                </svg>
              </Link>

              {/* INSTAGRAM */}
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-[20px] w-[20px] items-center justify-center text-white/90 transition-colors duration-200 hover:text-[#FF7A00]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[12px] w-[12px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </Link>

              {/* WHATSAPP */}
              <Link
                href="#"
                aria-label="WhatsApp"
                className="flex h-[20px] w-[20px] items-center justify-center text-white/90 transition-colors duration-200 hover:text-[#FF7A00]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[12px] w-[12px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
                  <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.7-.5c.2-.1.4-.1.6 0l1.5.7c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.3.2-2.3-.5-4.7-2.9-5.2-5.2-.1-.5 0-.9.2-1.3Z" />
                </svg>
              </Link>

              {/* TIKTOK */}
              <Link
                href="#"
                aria-label="TikTok"
                className="flex h-[20px] w-[20px] items-center justify-center text-white/90 transition-colors duration-200 hover:text-[#FF7A00]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[12px] w-[12px]"
                  fill="currentColor"
                >
                  <path d="M15 4h3.2c.2 1.5 1.1 2.7 2.8 3.3v3.1c-1.2-.1-2.3-.5-3.2-1.1V15c0 3.5-2.5 5.8-5.8 5.8-3.2 0-5.5-2.1-5.5-5.1 0-3.1 2.5-5.3 5.8-5.3.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.2 0-2.3.8-2.3 2.1 0 1.2.9 2.1 2.1 2.1 1.3 0 2.1-.9 2.1-2.6V4Z" />
                </svg>
              </Link>

            </div>

            {/* DESKTOP COPYRIGHT */}
            <p className="hidden whitespace-nowrap text-[7px] text-white/65 lg:block">
              © 2025 FreshMart. All rights reserved.
            </p>
          </div>
        </div>

        {/* MOBILE COPYRIGHT */}
        <div className="mt-4 border-t border-white/10 pt-3 text-center lg:hidden">
          <p className="text-[7px] text-white/65">
            © 2025 FreshMart. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}