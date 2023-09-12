"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categoryFilters } from "@/constants";

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get("category") || "Clothes"

    const handleTags = (filter: string) => {
        router.push(`${pathName}?category=${filter}`)
    };

    return (
        <div className="flexBetween w-full gap-5 flex-wrap">
            <ul className="flex gap-5 overflow-auto py-4 flex-grow w-full justify-center">
                {categoryFilters.map((categoryFilter) => (
                    <li key={categoryFilter}>
                        <button
                            type="button"
                            className={`${
                                categoryFilter === category
                                    ? "bg-primary-200 font-medium"
                                    : "font-normal"
                            } px-4 py-3 capitalize whitespace-nowrap nav-link`}
                            onClick={() => handleTags(categoryFilter)}
                        >
                            <span>{categoryFilter}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
