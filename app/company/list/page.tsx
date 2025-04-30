import React from "react";
import { Search } from "../../component/company/Search";
import CardList from "../../component/company/CardList";
import { Filter } from "../../component/company/Filter";
import { AddCompanyButton } from "../../component/company/AddCompanyButton";

export default function Company() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Search />
        <AddCompanyButton />
      </div>
      <Filter />
      <CardList />
    </>
  );
}
