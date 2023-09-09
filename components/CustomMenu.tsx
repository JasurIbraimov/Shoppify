import { Menu } from "@headlessui/react";
import Image from "next/image";
import React from "react";
interface ICustomMenuProps {
    title: string;
    state: string;
    setState: (value: string) => void;
    filters: string[];
}

const CustomMenu: React.FC<ICustomMenuProps> = ({
    title,
    state,
    setState,
    filters,
}) => {
    return (
        <div className="flexStart flex-col w-full gap-7 relative">
            <label htmlFor={title} className="w-full text-gray-500">
                {title}
            </label>
            <Menu as="div" className="self-start w-full relative">
                <div>
                    <Menu.Button className="flexCenter custom-menu-btn">
                        {state || "Select a category"}
                        <Image
                            src="/arrow-down.svg"
                            width={10}
                            height={5}
                            alt="Arrow down"
                        />
                    </Menu.Button>

                    <Menu.Items className="flexStart custom-menu-items">
                        {filters.map((tag) => (
                            <Menu.Item key={tag}>
                                <button
                                    type="button"
                                    value={tag}
                                    className="custom-menu-item"
                                    onClick={(e) =>
                                        setState(e.currentTarget.value)
                                    }
                                >
                                    {tag}
                                </button>
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </div>
            </Menu>
        </div>
    );
};

export default CustomMenu;
