import HeroPage from "@/components/hero/hero";
import { HeroMidSection } from "@/components/hero/hero-mid-section";
import { ProductCard } from "@/components/custom/product-card";
import { getProductData } from "@/api/get-api";

export default async function Home() {
  const productList = getProductData();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroPage />
      <HeroMidSection />
      <ProductCard productData={productList} />
    </main>
  );
}
