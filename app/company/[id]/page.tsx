import React from "react";
import { getCompany } from "../../actions/company/companyApis";
import { notFound } from "next/navigation";

type CompanyDetailPageProps = {
  params: { id: string };
};

export const dynamic = "force-dynamic"; // SSR 강제

export default async function CompanyDetailPage({
  params,
}: CompanyDetailPageProps) {
  const company = await getCompany(Number(params.id));
  if (!company) {
    notFound();
  }

  return <div>{company.name}</div>;
}
