import { ProductInterface } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<ProductInterface> = ({ id, image, title }) => {
  return (
    <div className="shadow-xl">
      <Link
        href={`/product/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          alt={"Product " + title}
          width={200}
          height={300}
          className="w-full h-full object-contain "
        />

        <div className="opacity-0 group-hover:opacity-100 flex profile-card-title duration-500 transition">
          <p className="text-sm">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
