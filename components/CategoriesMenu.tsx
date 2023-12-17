"use client";

import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { categoryFilters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoriesMenu = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "Clothes";

  const handleTags = (filter: string) => {
    router.push(`${pathName}?category=${filter}`);
  };

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flexCenter flex-col relative z-10">
      <Menu as="div">
        <Menu.Button
          className="flexCenter"
          onMouseEnter={() => setOpenModal(true)}
        >
          <h2 className="font-bold">Select Category</h2>
        </Menu.Button>

        <Transition
          show={openModal}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            static
            className="flex items-start justify-start profile-menu"
            onMouseLeave={() => setOpenModal(false)}
          >
            {categoryFilters.map((categoryFilter) => (
              <Menu.Item key={categoryFilter}>
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
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CategoriesMenu;
