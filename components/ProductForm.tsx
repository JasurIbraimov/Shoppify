"use client";

import { SessionInterface } from "@/common.types";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import { useState } from "react";

interface IProductForm {
    session: SessionInterface;
    type: "create" | "edit";
}
const ProductForm: React.FC<IProductForm> = ({ session, type }) => {
    const handleFormSubmit = (e: React.FormEvent) => {};

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const file = e.target.files?.[0]
        if(!file) return;

        if(!file.type.includes("image")) {
            return;
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result as string; 
            handleStateChange("image", result);
        }

    };
    
    const handleStateChange = (fieldName: string, value: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value
        }))
    };

    const [form, setForm] = useState({
        image: "",
        description: "",
        title: "",
        price: "",
        discount: "0",
        category: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

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
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20"
                        alt="Product Poster"
                        fill
                    />
                )}
            </div>
            <FormField
                title="Title"
                state={form.title}
                placeholder="Product Name"
                setState={(value) => handleStateChange("title", value)}
            />
            <FormField
                title="Description"
                state={form.description}
                placeholder="Your product description"
                setState={(value) => handleStateChange("description", value)}
                isTextarea
            />
            <FormField
                title="Price"
                type="number"
                state={form.price}
                placeholder="Your product price"
                setState={(value) => handleStateChange("price", value)}
            />
            <FormField
                notRequired
                title="Discount"
                type="number"
                state={form.discount}
                placeholder="Your discount for this product"
                setState={(value) => handleStateChange("price", value)}
            />

            <CustomMenu
                title="Category"
                filters={categoryFilters}
                state={form.category}
                setState={(value) => handleStateChange("category", value)}
            />
            <div className="flexStart w-full">
                <button className="btn w-1/2">Create</button>
            </div>
        </form>
    );
};

export default ProductForm;
