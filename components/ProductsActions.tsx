"use client";
import { deleteProduct, fetchToken } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductsActions: React.FC<{ productId: string }> = ({ productId }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDeleteProduct = async () => {
        setIsDeleting(true);
        const { token } = await fetchToken();
        try {
            await deleteProduct(productId, token);
            router.push("/");
        } catch (error) {
            console.log(error);
        } finally {
            setIsDeleting(false);
        }
    };
    return (
        <>
            <Link
                href={`/edit-product/${productId}`}
                className="flexCenter edit-action-btn"
            >
                <Image
                    src="/edit-tools.png"
                    width={30}
                    height={30}
                    alt="Edit"
                />
            </Link>
            <button
                type="button"
                disabled={isDeleting}
                onClick={handleDeleteProduct}
                className={`flexCenter delete-action-btn  ${
                    isDeleting ? "bg-gray-500" : "bg-danger"
                }`}
            >
                <Image
                    src="/trash-can.png"
                    width={30}
                    height={30}
                    alt="Delete"
                />
            </button>
        </>
    );
};

export default ProductsActions;
