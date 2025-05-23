import { redirect } from "next/navigation";

export default function Page() {
  const isLoggedIn: boolean = true;

  if (isLoggedIn) {
    redirect("/dashboard/overview");
  }

  redirect("/login");
}
