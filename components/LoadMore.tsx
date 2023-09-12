"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";
interface ILoadMore {
    startCursor: string;
    endCursor: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

const LoadMore: React.FC<ILoadMore> = ({
    hasNextPage,
    hasPreviousPage,
    startCursor,
    endCursor,
}) => {
    const router = useRouter();
    const handleNavigation = (direction: string) => {
        const currentParams = new URLSearchParams(window.location.search);
        if (direction === "next" && hasNextPage) {
            currentParams.delete("startCursor");
            currentParams.set("endCursor", endCursor);
        } else if (direction === "first" && hasPreviousPage) {
            currentParams.delete("endCursor");
            currentParams.set("startCursor", startCursor);
        }

        const newSearchParams = currentParams.toString();
        const newPathName = `${window.location.pathname}?${newSearchParams}`;

        router.push(newPathName);
    };
    return (
        <div className="w-full flexCenter gap-5 mt-10 ">
            {hasPreviousPage && (
                <button
                    className="bg-primary px-3 py-2 rounded-full"
                    type="button"
                    onClick={() => handleNavigation("first")}
                >
                    To Start
                </button>
            )}
            {hasNextPage && (
                <button
                    type="button"
                    className="bg-primary px-3 py-2 rounded-full"
                    onClick={() => handleNavigation("next")}
                >
                    To Next
                </button>
            )}
        </div>
    );
};

export default LoadMore;
