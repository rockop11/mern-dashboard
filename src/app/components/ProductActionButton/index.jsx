"use client"

import { useContext } from "react";
import AuthContext from "@/app/context/AuthContext";

export const ProductActionButton = ({ title, backgroundColor }) => {
    const { openModalHandler } = useContext(AuthContext)

    const actionButtonHandler = () => {
        if(title === "Eliminar"){
            openModalHandler()
        }

        if(title === "Editar") {
            console.log("la accion es editar");
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
