import { link_path } from "@/constant/link-path";
import { CartTab } from "../cart/cart-tab";
import { perfectshine_font } from "@/constant/font";
import Link from "next/link";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";

export default async function HeaderNavigation() {
  const nextCookies = cookies();
  const {user} = await getServerSideUser(nextCookies);

  return (
    <>
      <nav
        className={`${perfectshine_font.className} fixed top-0 z-50 hidden h-auto w-full flex-col items-center justify-center bg-black text-white md:flex`}
      >
        <div className="relative mx-auto flex h-14 max-w-2xl items-center justify-center rounded-xl">
          <ul className="flex max-w-2xl items-center justify-around gap-4 font-semibold">
            
          </ul>
        </div>

        <nav className="absolute right-0 z-30 mx-6">
          <CartTab />
        </nav>
      </nav>
    </>
  );
}
