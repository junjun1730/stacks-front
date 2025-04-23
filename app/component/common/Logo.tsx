"use client";

import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={"/assets/img/logo/logo.png"}
      alt={`logo image`}
      className="bg-transparent"
      width={100}
      height={100}
    />
  );
}
