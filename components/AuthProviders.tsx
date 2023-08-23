"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

interface Provider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
}
type Providers = Record<string, Provider>;

const AuthProviders = () => {
    const [providers, setProviders] = useState<null | Providers>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            console.log(res)
            setProviders(res);
        };

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider, index) => (
                    <button onClick={() => signIn(provider.id)} key={index}>{provider.name}</button>
                ))}
            </div>
        );
    }
};

export default AuthProviders;
