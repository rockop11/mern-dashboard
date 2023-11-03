"use client"

import { useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";

export const ProductActionButton = ({ title, backgroundColor, id }) => {
    const { openModalHandler } = useContext(AuthContext)
    const router = useRouter()

    const actionButtonHandler = () => {
        if(title === "Eliminar"){
            openModalHandler()
        }

        if(title === "Editar") {
            router.push(`/products/edit/${id}`)
        }
    }


    return (
        <button
            className={`
                ${backgroundColor}
                rounded-md 
                flex
                justify-center
                items-center
                w-[80px]
                h-[35px]
                text-white
            `}
            onClick={actionButtonHandler}
        >
            {title}
        </button>
    )
}
