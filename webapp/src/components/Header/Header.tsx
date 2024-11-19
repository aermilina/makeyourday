import React from "react";
import EarthIco from "@/components/assets/earth.png";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header>
            <nav className="bg-blue-900 border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                    <Image width={50} height={50} src={EarthIco.src} className="object-contain mr-3 h-6 sm:h-9" alt="logo" />
                        <span className="self-center text-xl font-semibold  font-logo whitespace-nowrap dark:text-white">Make your day</span>
                    </Link>
                </div>
        </nav>
        </header>
    )

}