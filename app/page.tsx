import { ProductInterface } from "@/common.types";
import ProductCard from "@/components/ProductCard";
import { fetchAllProducts } from "@/lib/actions";
import { NextPage } from "next";

interface ProductsSearch {
    productSearch: {
        edges: {
            node: ProductInterface;
        }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        };
    };
}

const Home: NextPage = async () => {
    const data = (await fetchAllProducts("Beauty", "")) as ProductsSearch;

    const projectsToDisplay = data?.productSearch.edges || [];
    if (projectsToDisplay.length === 0) {
        return (
            <section className="flexStart flex-col p-4">
                Categories
                <p className="no-result-text text-center">No products found!</p>
            </section>
        );
    }
    return (
        <section>
            <h1>Categories</h1>

            <section className="products-grid">
                {projectsToDisplay.map(({ node }) => (
                    <ProductCard key={node.id} {...node} />
                ))}
            </section>

            <h1>LoadMore </h1>
        </section>
    );
};

export default Home;
