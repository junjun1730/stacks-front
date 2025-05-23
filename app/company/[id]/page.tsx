import React from "react";
import { getCompany } from "../../actions/company/companyApis";
import { notFound } from "next/navigation";
import Image from "next/image";
import { STACK_CATEGORY } from "../../constants/company/stack-category";

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
        <div>
          <div className="flex gap-2 overflow-auto scrollbar-hide">
            {STACK_CATEGORY.map((e, i) => {
              return <button key={e.id}>{e.name}</button>;
            })}
          </div>
          <div className="flex gap-2 overflow-auto scrollbar-hide">
            {company.techStacks.map((e, i) => {
              return (
                <Image
                  key={i}
                  src={`/assets/img/stacks_logo/${e.imageUrl}`}
                  width={30}
                  height={30}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
}
