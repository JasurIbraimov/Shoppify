import Link from "next/link";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import Logo from "./Logo";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";

const Navbar = async () => {
    const session = await getCurrentUser();
    return (
        <nav className="app-nav">
            <div className="container gap-10 flex justify-between items-center">
                <Logo width={40} height={40} />
                <ul className="xl:flex hidden text-base gap-5">
                    {NavLinks.map((link) => (
                        <Link
                            className="nav-link flex items-center"
                            href={link.href}
                            key={link.key}
                        >
                            {<link.icon />}
                            <span className="ml-1">{link.text}</span>
                        </Link>
                    ))}
                </ul>

                <div className="gap-4">
                    {session?.user ? (
                        <>
                            <Image
                                src={session.user.image || "/noimage.jpg"}
                                className="rounded-full"
                                alt="User Avatar"
                                width={40}
                                height={40}
                            />
                            <Link href="/add-product">Add product</Link>
                        </>
                    ) : (
                        <AuthProviders />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
