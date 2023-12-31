import React from "react";
import Logo from "./Logo";
import { footerLinks } from "@/constants";
import Link from "next/link";
import { IconType } from "react-icons";
interface IFooterCol {
  title: string,
  links: {label: string, url: string, icon: IconType}[]
}

const FooterCol:React.FC<IFooterCol> = ({title, links}) => {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col">
        {links.map(link => (
          <Link className="link" href={link.url} key={link.label}>
            {<link.icon />}
            <span className="ml-2">{link.label}</span>
          </Link>
        ))}
      </ul>
    </div>
  )
}


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex items-start flex-col">
                    <Logo width={30} height={30} />
                    <p className="font-normal my-2 text-start max-w-xs text-sm">
                        Shoppify is a e-commercial website created to learn NextJS and Typescript.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                  {footerLinks.map(footerLink => (
                    <FooterCol key={footerLink.title} title={footerLink.title} links={footerLink.links} />
                  ))}
                </div>

                <p className="text-sm text-center my-2">2023 Shoppify. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
