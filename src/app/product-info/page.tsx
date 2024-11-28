import SingleProductPage from "@/components/custom/single-product-page";
import { getSingleProduct } from "@/helper";

import { searchParamsProps } from "@/types/type";
import Link from "next/link";

export default async function ProductInformationPage({
  searchParams,
}: searchParamsProps) {
  const titleString = searchParams?.title;
  const title = String(titleString);
  const productInfo = await getSingleProduct(title);

  if (!productInfo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-1">
        <h3 className="text-3xl font-bold">Product not Found</h3>
        <Link
          href={"/"}
          className="font-semibold transition-colors duration-300 hover:text-green-500"
        >
          <button className="mt-1 flex items-center rounded-lg border-2 p-2 shadow-md">
            <p className="mt-1"> Back to Main page</p>
          </button>
        </Link>
      </div>
    );
  }

  return <SingleProductPage product={productInfo} />;
}
