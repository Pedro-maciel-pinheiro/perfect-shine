import { CartTab } from "@/components/cart/cart-tab";
import { perfectshine_font } from "@/constant/font";
import Link from "next/link";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "@/components/user-account-nav";
import { NavigationLinks } from "@/components/navigation/nav-links";
import Image from "next/image";

export default async function HeaderNavigation() {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  console.log(user);

  return (
    <>
      <nav
        className={`${perfectshine_font.className} sticky top-0 z-50 hidden 
        h-12 w-full items-center justify-center bg-black text-white md:flex`}
      >
        <Link href={"/"} className="absolute left-0 flex items-center gap-1">
          <Image
            src={"/logo/logo-2.png"}
            alt="logo Image"
            width={500}
            height={500}
            className="w-10"
          />
          <h1 className="mb-1">PERFECT-SHINE</h1>
        </Link>
        <div className="uppercase">
          <NavigationLinks />
        </div>
        <div className="absolute right-0 mx-6 flex items-center gap-2">
          {user ? null : (
            <Link
              className="mt-1 text-gray-300 transition-all hover:text-white active:translate-y-1"
              href={"/sign-in"}
            >
              Login
            </Link>
          )}
          {user ? null : <span className="mt-1">{"/"}</span>}
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Link
              className="mt-1 text-gray-300 transition-all hover:text-white active:translate-y-1"
              href={"/sign-up"}
            >
              Register
            </Link>
          )}

          <CartTab />
        </div>
      </nav>
    </>
  );
}
