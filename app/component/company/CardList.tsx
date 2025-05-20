"use client";

import React from "react";
import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../actions/company/companyApis";

export function CardList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["companies"],
    queryFn: getAllCompanies,
  });

  return (
    <div>
      <Card cardData={data} />
    </div>
  );
}

export default CardList;
