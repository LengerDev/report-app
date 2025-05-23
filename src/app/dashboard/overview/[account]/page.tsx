"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ account: string }>();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <h2 className="text-center">
      Overview: {params.account}
      <br />
      Path Name: {pathname}
      <br />
      Page Size: {searchParams.get("pageSize")}
      <br />
      Page Number: {searchParams.get("pageNumber")}
    </h2>
  );
}
