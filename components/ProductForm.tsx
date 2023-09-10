"use client";

import { ProductForm, SessionInterface } from "@/common.types";
import Image from "next/image";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import { useState } from "react";
import Button from "./Button";
import { createNewProduct, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";

interface IProductForm {
    session: SessionInterface;
    type: "create" | "edit";
}
const ProductForm: React.FC<IProductForm> = ({ session, type }) => {
    const [form, setForm] = useState<ProductForm>({
        image: "",
        description: "",
        title: "",
        price: 0,
        discount: 0,
        category: "",
    });
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { token } = await fetchToken();

        try {
            if (type === "create") {
                await createNewProduct(form, session?.user?.id, token);

                router.push("/");
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.includes("image")) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            handleStateChange("image", result);
        };
    };

    const handleStateChange = (fieldName: string, value: string|number) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
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
                setState={(value) => handleStateChange("price", parseFloat(value))}
            />
            <FormField
                notRequired
                title="Discount"
                type="number"
                state={form.discount}
                placeholder="Your discount for this product"
                setState={(value) => handleStateChange("discount", parseInt(value))}
            />

            <CustomMenu
                title="Category"
                filters={categoryFilters}
                state={form.category}
                setState={(value) => handleStateChange("category", value)}
            />
            <Button
                title={`${type.replace(type[0], type[0].toUpperCase())}${
                    isSubmitting ? "ing" : ""
                }`}
                type="submit"
            />
        </form>
    );
};

export default ProductForm;
