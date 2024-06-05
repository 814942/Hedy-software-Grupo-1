import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Avatar from "./Avatar";
import { signOut } from "@/app/login/actions";

const Navbar = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center pl-10 pr-36">
      <div className=" text-white text-lg flex gap-11">
        <Link href="/" className=" text-white text-lg">
          Trello
        </Link>
        <Link href="/dashboard" className=" text-white text-lg">
          Dashboard
        </Link>
      </div>

      <Avatar user={user} signOut={signOut} />
    </nav>
  );
};

export default Navbar;
