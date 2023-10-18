"use client"

import { useContext, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import AuthContext from "@/context/AuthContext"
import Image from "next/image"

export const Navbar = () => {
    const { logout } = useContext(AuthContext)
    const storedUser = useAuth()

    const [toggleUserOptions, setToggleUserOptions] = useState(false)

    const toggleUserOptionsHandler = () => {
        setToggleUserOptions(!toggleUserOptions)
    }


    return (
        <div
            className="
            border 
            shadow-md
            w-[100%]
            h-[45px]
            flex
            items-center
            justify-end
            pr-[10px]
        ">
            {
                storedUser && (
                    <Image src={storedUser?.urlImage}
                        onClick={toggleUserOptionsHandler}
                        className="rounded-[50%] w-auto h-auto cursor-pointer" width={20}
                        height={20} alt={"user img"}
                    />
                )
            }

            {
                toggleUserOptions && (
                    <div className="
                        border
                        absolute
                        top-[45px]
                        shadow-md
                        flex
                        flex-col
                        rounded-lg
                        z-50
                    ">
                        <li className="list-none h-[35px] p-2 hover:bg-slate-200 cursor-pointer">Ir al Perfil</li>
                        <li onClick={logout} className="list-none h-[35px] p-2 hover:bg-slate-200 cursor-pointer">Cerrar Sesión</li>
                    </div>
                )
            }
        </div>
    )
}