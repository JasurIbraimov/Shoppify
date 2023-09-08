"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";

interface IProductForm {
    session: SessionInterface;
    type: "create" | "edit";
}
const ProductForm: React.FC<IProductForm> = ({ session, type }) => {
    const handleFormSubmit = (e: React.FormEvent) => {};
    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {};
    
    const form = {
        image: null
    };

    return (
        <form onSubmit={handleFormSubmit} className="flexStart form">
            <div className="flexStart form-image-container">
                <label htmlFor="image" className="flexCenter form-image-label">
                    {!form.image && "Choose a poster for your product"}
                </label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    required={type == "create"}
                    className="form-image-input"
                    onChange={handleChangeImage}
                />

                {form.image && (
                    <Image src={form?.image} className="sm:p-10 object-contain z-20" alt="Product Poster" fill/>
                )}

                {/* TODO: product form fields - 2:04:47 */}
            </div>
        </form>
    );
};

export default ProductForm;
