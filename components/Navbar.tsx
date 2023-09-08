import Link from "next/link";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import Logo from "./Logo";
import { getCurrentUser } from "@/lib/session";
import { FaPlus } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
    const session = await getCurrentUser();
    return (
        <nav className="app-nav">
            <div className="container gap-10 flex justify-between items-center">
                <Logo width={40} height={40} />
                <ul className="xl:flex hidden text-base gap-5">
                    {NavLinks.map((link) => (
                        <Link
                            className="nav-link "
                            href={link.href}
                            key={link.key}
                        >
                            {<link.icon />}
                            <span>{link.text}</span>
                        </Link>
                    ))}
                </ul>

                <div className="gap-4 flex items-center">
                    {session?.user ? (
                        <>
                            <ProfileMenu session={session}/>
                            <Link className="nav-link " href="/add-product">
                                <FaPlus />
                                <span> Add product</span>
                            </Link>
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
