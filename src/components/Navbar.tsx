import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center px-5">
        <a
          href="#top"
          className="pointer-events-auto rounded-full transition-opacity hover:opacity-80"
          aria-label={siteConfig.name}
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
            priority
          />
        </a>
      </div>
    </header>
  );
}
