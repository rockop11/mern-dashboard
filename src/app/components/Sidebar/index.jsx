"use client"

import Link from "next/link"
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi"
import { BiUser, BiStore } from "react-icons/bi"

export const Sidebar = ({ handler, toggleSidebar }) => {

    return (
        <div className={`
            border
            ${toggleSidebar ? "w-[22%]" : "w-[4%]"}
            h-[95vh]
            shadow-md
            flex
            flex-col
            ${!toggleSidebar && "items-center"}
        `}>
            <div className={`flex mb-8 cursor-pointer ${toggleSidebar && "justify-end"} `}>
                {
                    toggleSidebar
                        ? <FiChevronsLeft size={24} onClick={handler} />
                        : <FiChevronsRight size={24} onClick={handler} />
                }
            </div>


            <ul className={`flex flex-col justify-center gap-4 ${toggleSidebar && "pl-2"}`}>
                <li className="flex cursor-pointer items-center gap-2">
                    <BiStore size={24} />
                    {
                        toggleSidebar && <p>Productos</p>
                    }
                </li>

                <li className="flex cursor-pointer items-center gap-2">
                    <BiUser size={24} />
                    {
                        toggleSidebar && <p>Administradores</p>
                    }
                </li>
            </ul>
        </div>
    )
}
