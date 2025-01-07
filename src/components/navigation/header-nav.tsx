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
        className={`${perfectshine_font.className}
         top-0 z-50 hidden h-12 w-full 
          items-center justify-between bg-black text-white md:flex`}
      >
        <div>
          <p>Currency: USD</p>
        </div>
        <div className="mx-6 flex items-center gap-2">
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
