import Link from "next/link";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
}

const AuthLayout = ({
  children
}: AuthLayoutProps) => {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div
        className="flex flex-col gap-0"
      >
        <div>
          <div className="flex justify-center py-5 px-4">
            <Link
              href={"/"}
              className="font-medium text-lg"
            >
              Company Logo
            </Link>
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}

export default AuthLayout;
