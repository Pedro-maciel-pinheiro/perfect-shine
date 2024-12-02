import { CartTab } from "@/components/cart/cart-tab";
import { perfectshine_font } from "@/constant/font";
import Link from "next/link";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "@/components/user-account-nav";

export default async function HeaderNavigation() {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  console.log(user);

  return (
    <>
      <nav
        className={`${perfectshine_font.className} fixed top-0 z-50 hidden h-auto w-full flex-col items-center justify-center bg-black text-white md:flex`}
      >
        <div className="relative mx-auto flex h-14 max-w-2xl items-center justify-center rounded-xl">
          <ul className="flex max-w-2xl items-center justify-around gap-4 font-semibold"></ul>
        </div>

        <div className="absolute right-0 z-30 mx-6 flex items-center gap-2">
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
