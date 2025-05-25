"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/company/list" className="block">
      <Image
        src={"/assets/img/logo/logo.png"}
        alt={`logo image`}
        className="bg-transparent"
        width={120}
        height={100}
        priority
      />
    </Link>
  );
}
