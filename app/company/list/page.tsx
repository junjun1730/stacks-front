import React from "react";
import Header from "../../component/common/Header";

import { Search } from "../../component/company/Search";
import CardList from "../../component/company/CardList";
import { Filter } from "../../component/company/Filter";

export default function Company() {
  return (
    <>
      <Header />
      <Search />
      <Filter />
      <CardList />
    </>
  );
}
