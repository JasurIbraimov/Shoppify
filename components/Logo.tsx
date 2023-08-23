import React from 'react'
import Link from "next/link";
import Image from "next/image";
interface ILogoProps {
    width: number,
    height: number
}

const Logo:React.FC<ILogoProps> = ({ width, height }) => {
  return (
        <Link className="logo" href="/">
            <Image
                src="/logo.svg"
                alt="Shoppify Logo"
                width={width}
                height={height}
            />
            <p>Shoppify</p>
        </Link>
  )
}

export default Logo