"use client";

import React from "react";
interface IButtonProps {
    title: string;
    type: "submit" | "button";
    handleOnClick?: React.MouseEventHandler;
    isSubmitting?: boolean;
}
const Button: React.FC<IButtonProps> = ({
    title,
    type,
    handleOnClick,
    isSubmitting,
}) => {
    return (
        <div className="flexStart w-full">
            <button
                className="btn w-1/2"
                type={type}
                disabled={isSubmitting}
                onClick={handleOnClick}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
