"use client";

import { useState, Fragment, FC } from "react";
import { SessionInterface } from "@/common.types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

interface IProfileMenu {
    session: SessionInterface;
}

const ProfileMenu: FC<IProfileMenu> = ({ session }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="flexCenter flex-col relative z-10">
            <Menu as="div">
                <Menu.Button
                    className="flexCenter"
                    onMouseEnter={() => setOpenModal(true)}
                >
                    <Link href={`/profile/${session?.user.id}`}>
                        <Image
                            src={session.user.image || "/noimage.jpg"}
                            className="rounded-full border border-primary"
                            alt="User Avatar"
                            width={40}
                            height={40}
                        />
                    </Link>
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
                        <div className="flexCenter ">
                            {session?.user?.image && (
                                <Image
                                    src={session?.user?.image}
                                    className="rounded-full"
                                    width={80}
                                    height={80}
                                    alt="profile Image"
                                />
                            )}
                            <p className="font-semibold ml-2">
                                {session?.user?.name}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-10 items-start w-full">
                            <Menu.Item>
                                <Link
                                    href={`/profile/${session?.user?.id}`}
                                    className="text-sm nav-link"
                                >
                                    <span>Settings</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href={`/profile/${session?.user?.id}`}
                                    className="text-sm nav-link"
                                >
                                    <span>Profile</span>
                                </Link>
                            </Menu.Item>
                        </div>
                        <div className="w-full flexStart border-t border-nav-border mt-5 pt-5">
                            <Menu.Item>
                                <button
                                    type="button"
                                    className="text-sm nav-link"
                                    onClick={() => signOut()}
                                >
                                    <span>Sign out</span>
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default ProfileMenu;
