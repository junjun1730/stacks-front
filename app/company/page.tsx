"use client";

import React from "react";
import Header from "../component/company/Header";
import Search from "../component/company/Search";
import Category from "../component/company/Category";
import CardList from "../component/company/CardList";
import Navigation from "../component/common/Navigation";

export default function Company() {
  return (
    <div>
      <Header />
      <Search />
      <Category />
      <CardList />
    </div>
  );
}
