"use client"

import Link from "next/link"
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi"
import { BiUser, BiStore, BiHome } from "react-icons/bi"

export const Sidebar = ({ handler, toggleSidebar }) => {

    const sidebarOptions = [
        {
            title: "Inicio",
            icon: <BiHome size={24} />,
            link: "/"
        },
        {
            title: "Productos",
            icon: <BiStore size={24} />,
            link: "/products"
        },
        {
            title: "Administradores",
            icon: < BiUser size={24} />,
            link: "/admins"
        }
    ]

    return (
        <div className={`
            border
            ${toggleSidebar ? "w-[220px]" : "w-[40px]"}
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
                {
                    sidebarOptions.map((item, i) => {
                        return (
                            <Link href={item.link} key={i}>
                                <li className=" w-[95%] rounded-md flex cursor-pointer items-center gap-2 hover:bg-slate-200">
                                    {item.icon}
                                    {
                                        toggleSidebar && <p>{item.title}</p>
                                    }
                                </li>
                            </Link>
                        )
                    })
                }

            </ul>
        </div>
    )
}
