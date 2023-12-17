"use client";
import Image from "next/image";
import React, { useState } from "react";
interface IProductImageProps {
    image: string,
    title: string
}
const ProductImage:React.FC<IProductImageProps> = ({image, title}) => {
    const [backgroundPosition, setBackgroundPosition]= useState("0% 0%")
    const [backgroundImage, setBackgroundImage]= useState("")

    function zoom(e: React.MouseEvent){
        const target = e.target as Element;
        const { left, top, width, height } = target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setBackgroundPosition(`${x}% ${y}%`)
        setBackgroundImage(`url(${image})`)
      }
    return (
        <figure
            className="w-full md:w-1/2 lg:w-1/3"
            onMouseMove={zoom}
            onMouseOut={() => setBackgroundImage("")}
            style={{ backgroundImage, backgroundPosition }}
        >
            <Image
                src={image}
                width={400}
                height={400}
                className="w-full h-full object-contain"
                alt={"Image of " + title}
            />
        </figure>
    );
};

export default ProductImage;

// EDIT!