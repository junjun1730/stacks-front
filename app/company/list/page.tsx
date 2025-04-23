import React from "react";
import Header from "../../component/common/Header";

import Category from "../../component/company/Category";
import Navigation from "../../component/common/Navigation";
import { Search } from "../../component/company/Search";
import CardList from "../../component/company/CardList";

export default function Company() {
  return (
    <>
      <Header />
      <Search />
      <Category />
      <CardList />
    </>
  );
}
