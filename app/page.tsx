import { ProductsSearch } from "@/common.types";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import ProductCard from "@/components/ProductCard";
import {  fetchAllProducts } from "@/lib/actions";
import { NextPage } from "next";

interface IHomeProps {
  searchParams: {
    endCursor?: string;
    category?: string;
  };
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Home: NextPage<IHomeProps> = async ({
  searchParams: { category, endCursor },
}: {
  searchParams: { category: string; endCursor: string };
}) => {
  const data = (await fetchAllProducts(
    category || "Clothes",
    endCursor
  )) as ProductsSearch;

  const productsToDisplay = data?.productSearch.edges || [];
  if (productsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col p-4">
        <p className="no-result-text text-center">
          No products found of category{" "}
          <span className="font-medium text-primary">
            {category || "Clothes"}
          </span>
          !
        </p>
      </section>
    );
  }

  const pagination = data?.productSearch?.pageInfo;

  return (
    <section>
      <section className="products-grid">
        {productsToDisplay.map(({ node }) => (
          <ProductCard key={node.id} {...node} />
        ))}
      </section>

      <LoadMore {...pagination} />
    </section>
  );
};

export default Home;
