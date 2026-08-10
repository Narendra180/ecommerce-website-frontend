"use client";

import Link from "next/link"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Header = () => {

  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignoutClick = async () => {
    if (session) {
      await authClient.signOut();
      return;
    }
    router.push("/signin");
  }

  return (
    <header>
      <nav>
        <div
          className="px-8 py-8 flex gap-8 justify-center items-center font-medium bg-[#FFF6F6]"
        >
          <div className="flex gap-8">
            <Link
              href={"/"}
            >
              HOME
            </Link>
            <Link
              href={"/signin"}
            >
              Sign In
            </Link>
            <Link
              href={"/about-us"}
            >
              ABOUT US
            </Link>
            <Link
              href={"/contact-us"}
            >
              CONTACT US
            </Link>
          </div>
          <div>
            <Button
              className="cursor-pointer"
              onClick={handleSignoutClick}
            >
              {
                session ? "Sign Out" : "User is not logged in"
              }
            </Button>
          </div>
        </div>

      </nav>
    </header>
  )
}

export {
  Header
}
