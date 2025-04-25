"use client";

import React, { FC } from "react";
import { Logo } from "./Logo";
import { Divider } from "./Divider";

export function Header() {
  return (
    <div>
      <Logo />
      <Divider />
    </div>
  );
}

export default Header;
