import { ProductForm } from "@/common.types";
import {
    createProductMutation,
    createUserMutation,
    deleteProductMutation,
    getProductByIdQuery,
    getProductsOfUserQuery,
    getUserQuery,
    productsQuery,
    updateProductMutation,
} from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
    ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
    : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
    ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
    : "letmein";
const serverUrl = isProduction
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "http://localhost:3000/";

const client = new GraphQLClient(apiUrl);

const makeGraphQlRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (error) {
        throw error;
    }
};

export const getUser = (email: string) => {
    client.setHeader("x-api-key", apiKey);

    return makeGraphQlRequest(getUserQuery, { email });
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
    client.setHeader("x-api-key", apiKey);

    const variables = {
        input: { name: name, email: email, avatarUrl: avatarUrl },
    };

    return makeGraphQlRequest(createUserMutation, variables);
};

export const fetchToken = async () => {
    try {
        const response = await fetch(`${serverUrl}/api/auth/token`)
        return response.json()
    } catch (error) {
        throw error;
    }
}

export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: "POST",
            body: JSON.stringify({ path: imagePath }),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const createNewProduct = async (
    form: ProductForm,
    creatorId: string,
    token: string
) => {
    const imageURL = await uploadImage(form.image);
    if (imageURL.url) {
        client.setHeader("Authorization", `Bearer ${token}`); // make sure if user logged in

        const variables = {
            input: {
                ...form,
                image: imageURL.url,
                createdBy: {
                    link: creatorId,
                },
            },
        };
        return makeGraphQlRequest(createProductMutation, variables);
    }
};

export const fetchAllProducts = async (category?: string | null, endCursor?: string | null) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQlRequest(productsQuery, { category, endCursor: endCursor })
}

export const getProductDetail = (id: string) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQlRequest(getProductByIdQuery, { id })
}


export const getUserProducts = (id: string, last?: number) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQlRequest(getProductsOfUserQuery, { id, last })
}



export const deleteProduct = (id: string, token: string) => {
    client.setHeader("Authorization", `Bearer ${token}`); // make sure if user logged in

    return makeGraphQlRequest(deleteProductMutation, { id })
}


export const updateProduct = async (form: ProductForm, id: string, token: string) => {
    function isBase64DataURL(value: string) {
        const base64Regex = /^data:image\/[a-z]+;base64,/;
        return base64Regex.test(value)
    }

    let updatedForm = {...form, price: {set: form.price}, discount: {set: form.discount}}
    if(isBase64DataURL(form.image)) {
        const imageUrl = await uploadImage(form.image)
        if(imageUrl.url) {
            updatedForm.image = imageUrl.url;
        }
    }
    const variables = {
        id, 
        input: updatedForm
    }
    client.setHeader("Authorization", `Bearer ${token}`); // make sure if user logged in

    return makeGraphQlRequest(updateProductMutation, variables)
}