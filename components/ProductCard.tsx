import { ProductInterface } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<ProductInterface> = ({
    id,
    image,
    title,
    createdBy: { avatarUrl, id: userId, name },
}) => {
    return (<div className="flexCenter flex-col rounded-2xl shadow-xl">
        <Link href={`/product/${id}`} className="flexCenter group relative w-full h-full">
            <Image src={image} alt={"Product " + title} width={300} height={400} className="w-full h-full rounded-2xl"/>

            <div className="opacity-0 group-hover:opacity-100 flex profile-card-title duration-500 transition">
                <p>{title}</p>
            </div>
        </Link>
    </div>);
};

export default ProductCard;
