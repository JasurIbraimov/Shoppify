import Link from "next/link";
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
