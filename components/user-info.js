import { KeyRound } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import SignOutButton from "./sign-out-button";
import Avatar from "./avatar";
import Link from "next/link";

export default async function UserInfo({ supabase }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <>
        <Link
          href="/dashboard/settings"
          className={`flex items-center space-x-1 ${variants["ghost"]} ${sizes["sm"]}`}
        >
          <Avatar />
          <span>{user?.user_metadata?.fullName ?? user?.email}</span>
        </Link>
        <SignOutButton />
      </>
    );
  }

  return (
    <Link href="/login" className={`${variants["ghost"]} ${sizes["sm"]}`}>
      <KeyRound className="w-6 h-6" />
    </Link>
  );
}
