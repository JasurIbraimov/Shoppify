import {
    FaShoppingCart,
    FaBorderAll,
    FaStar,
    FaShoppingBag,
} from "react-icons/fa";
export const NavLinks = [
    { href: "/", key: "Gallery", text: "Gallery", icon: FaBorderAll },
    { href: "/", key: "Cart", text: "Your Cart", icon: FaShoppingCart },
    { href: "/", key: "Favorites", text: "Favorite Products", icon: FaStar },
    {
        href: "/",
        key: "Become Seller",
        text: "Become a Partner",
        icon: FaShoppingBag,
    },
];

export const categoryFilters = [
    "Clothes",
    "For House",
    "Beauty",
    "Electronics",
    "Accessories",
    "Toys",
    "Food",
    "Sport",
    "School",
    "Books",
    "Furniture",
    "For Car",
    "Health",
];

export const footerLinks = [
    {
        title: "Hire developers",
        links: [
            "Post a job opening",
            "Post a freelance project",
            "Search for developers",
        ],
    },
    {
        title: "Brands",
        links: [
            "Advertise with us",
            "Terms of service",
            "Privacy policy",
            "Cookie policy",
        ],
    },
    {
        title: "Company",
        links: [
            "About",
            "Careers",
            "Support",
            "API",
        ],
    },
    {
        title: "Development Resources",
        links: [
            "Freelancing",
            "Development Hiring",
            "Development Portfolio",
            "Development Education",
        ],
    },
];
