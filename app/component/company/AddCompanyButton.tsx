import Link from "next/link";

export function AddCompanyButton() {
  return (
    <Link
      href={"/company/add"}
      className="border border-gray-400 rounded-md flex justify-center p-1 cursor-pointer"
    >
      <i className="ri-add-box-line text-sm text-gray-400 pr-1 self-center"></i>
      <span className="text-sm text-gray-400 self-center">Add Company</span>
    </Link>
  );
}
