import { CategoriesSelection } from "@/components/store-front/category-selection";
import { FeaturedProducts } from "@/components/store-front/featured-products";
import { Hero } from "@/components/store-front/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSelection />
      <FeaturedProducts />
    </main>
  );
}
