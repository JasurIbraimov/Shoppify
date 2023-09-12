import { UserProfile } from "@/common.types";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import ProductImage from "./ProductImage";
import ProductCard from "./ProductCard";

const ProfilePage: React.FC<{ user: UserProfile }> = ({user: {avatarUrl, name, email, products}}) => {
    return (
        <Modal>
            <div className="flexBetween w-full">
                <div className="flex  items-center">
                    <Image
                        src={avatarUrl}
                        alt={"Avatar of " + name}
                        width={75}
                        height={75}
                        className="rounded-full border border-primary mr-5"
                    />
                    <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="mt-4">
                            <span className="text-white bg-primary rounded-full px-2 py-1">
                                {email}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
            <div className="products-grid">
            {products.edges.map(product => (
                <ProductCard {...product.node} />
            ))}
            </div>
        </Modal>
    );
};

export default ProfilePage;
