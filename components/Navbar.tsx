import Link from "next/link";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import Logo from "./Logo";

const Navbar = () => {
    const session = false;
    return (
        <nav className="app-nav">
            <div className="container gap-10 flex justify-between items-center">
                
                <Logo width={40} height={40}/>
                <ul className="xl:flex hidden text-base gap-5">
                    {NavLinks.map((link) => (
                        <Link className="nav-link flex items-center" href={link.href} key={link.key}>
                            {<link.icon />}
                            <span className="ml-1">{link.text}</span>
                        </Link>
                    ))}
                </ul>

                <div className="gap-4">
                        {
                            session ? (<>
                                UserImage 
                                <Link href="/add-product">
                                    Add product
                                </Link>
                            </>) : (
                                <AuthProviders />
                            )
                        }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
