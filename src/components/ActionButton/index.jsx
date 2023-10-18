"use client"

import Link from "next/link"

export const ActionButton = ({ title, link }) => {
    return (
        <Link href={`${link}`} 
        className="
            w-[35%] 
            h-[120px] 
            flex flex-col 
            shadow-md
            rounded-md
            justify-center items-center
            hover:bg-black hover:text-white transition-all duration-300
        ">
            <h3>{title}</h3>
        </Link>
    )
}
