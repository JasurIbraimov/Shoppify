import { ProductInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProductImage from "@/components/ProductImage";
import ProductsActions from "@/components/ProductsActions";
import RelatedProducts from "@/components/RelatedProducts";
import { getProductDetail } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProductDetailPageProps {
    params: {
        id: string;
    };
}

const ProductDetailPage: NextPage<IProductDetailPageProps> = async ({
    params: { id },
}) => {
    const session = await getCurrentUser();
    const result = (await getProductDetail(id)) as {
        product?: ProductInterface;
    };

    if (!result.product) {
        return <p>Failed to Fetch product information</p>;
    }

    const {
        image,
        title,
        category,
        price,
        description,
        discount,
        createdBy: { avatarUrl, name, email, id: userID },
    } = result.product;

    return (
        <Modal>
            <div className="flexBetween w-full">
                <div className="flex  items-center">
                    <Link href={`/profile/${userID}`}>
                        <Image
                            src={avatarUrl}
                            alt={"Avatar of " + name}
                            width={75}
                            height={75}
                            className="rounded-full border border-primary mr-5"
                        />
                    </Link>

                    <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p className="mt-4">
                            <span className="text-gray-400">{name} </span>
                            <span className="text-white bg-primary rounded-full px-2 py-1">
                                {category}
                            </span>
                        </p>
                    </div>
                </div>
                {session?.user?.email === email && (
                    <div className="flex items-center justify-end gap-2">
                        <ProductsActions productId={id} />
                    </div>
                )}
            </div>
            <ProductImage image={image} title={title} />
            {discount > 0 ? (
                <div className="relative mt-12">
                    <p className="discount">-{discount}%</p>
                    <div className="flex">
                        <p className="max-w-2xl font-semibold text-3xl line-through text-warning">
                            ${price}
                        </p>
                        <p className="max-w-2xl font-semibold text-5xl ml-2 text-secondary">
                            ${(price - (price * discount) / 100).toFixed(2)}
                        </p>
                    </div>
                </div>
            ) : (
                <p className="max-w-2xl font-semibold mt-8 text-5xl text-secondary">
                    ${price}
                </p>
            )}
            <p className="max-w-2xl font-medium mt-5 text-gray-600">
                {description}
            </p>

            <RelatedProducts userId={userID} productId={id} />
        </Modal>
    );
};

export default ProductDetailPage;
