import { ProductForm } from "@/common.types";
import {
    createProductMutation,
    createUserMutation,
    getUserQuery,
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
