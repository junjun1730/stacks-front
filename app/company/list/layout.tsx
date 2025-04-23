export const metadata = {
  title: "Companys",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
