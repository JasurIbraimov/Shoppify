import { ProductInterface, UserProfile } from "@/common.types";
import { getUserProducts } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

interface IRelatedProducts {
    userId: string;
    productId: string;
}

const RelatedProducts = async ({ userId, productId }: IRelatedProducts) => {
    const result = await getUserProducts(userId) as {user?: UserProfile}
    if(result.user) {
        const user = result.user as UserProfile
        const filteredProducts = user.products.edges.filter(({node} ) => node.id !== productId)
        if(filteredProducts.length > 0) {
            return (
                <section className="flex flex-col mt-32 w-full">
                    <div className="flexBetween">
                        <p className="text-base font-bold">More by {user.name}</p>
                        <Link href={`profile/${user.id}`} className="text-primary text-base">
                            View all 
                        </Link>
                    </div>

                    <div className="products-grid ">
                        {filteredProducts.map(({node}) => (
                            <ProductCard {...node} createdBy={user}/>
                        ))}
                    </div>
                </section>
            )
        }
        
    }
    return null;
    
};

export default RelatedProducts;
