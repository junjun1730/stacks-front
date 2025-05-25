import React from "react";
import { getCompany } from "../../actions/company/companyApis";
import { notFound } from "next/navigation";
import Image from "next/image";
import { STACK_CATEGORY } from "../../constants/company/stack-category";
import { StackCategoryNav } from "../../component/company/stackCategoryNav";

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

  return (
    <main className="max-w-full">
      <div>
        <Image
          width={80}
          height={80}
          className="rounded-2xl"
          src={`/assets/img/company/${company.image}`}
          alt={`${company.name} image`}
        />
      </div>
      <section>
        <h2>
          {company.name}
          {"("}
          {company.nameKana}
          {")"}
        </h2>
        <div className="flex gap-2">
          <p>{company.industry.name}</p>
          <p>{company.location}</p>
        </div>
      </section>
      <section>
        <h2>Stacks</h2>
        <div className="border-gray-100 border rounded-2xl p-2">
          <StackCategoryNav />
          <div className="flex gap-2 flex-wrap">
            {company.techStacks.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center border border-gray-200 rounded-2xl pl-2 pr-2"
                >
                  <Image
                    src={`/assets/img/stacks_logo/${e.imageUrl}`}
                    width={30}
                    height={30}
                    alt={`${e.name}`}
                  />
                  <p>{e.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
}
