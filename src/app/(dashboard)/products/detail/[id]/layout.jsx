"use client"

import { useContext } from "react"
import AuthContext from "@/app/context/AuthContext"
import { deleteProduct } from "@/app/services/productServices"
import { useRouter } from "next/navigation"
import { AiFillCloseCircle } from "react-icons/ai"

export default function ProductDetailLayout({ children, params }) {
    const { id } = params
    const router = useRouter()
    const { modal, modalHandler } = useContext(AuthContext)

    const deleteProductHandler = async () => {
        await deleteProduct(id)
        router.push("/products")
    }

    return (
        <section className="w-[100%] relative">
            {children}
            {
                modal && (
                    <div className="
                        absolute
                        w-[100%]
                        h-[100vh]
                        bg-black/60
                        top-0
                        left-0
                    ">
                        <div className="
                            w-[300px]
                            p-4
                            rounded-md
                            bg-white 
                            absolute top-[30%] left-[50%]
                            translate-y-[-30%]
                            translate-x-[-50%]
                            z-10
                            flex flex-col
                            items-center
                            gap-4
                        ">
                            <button onClick={modalHandler} className="flex justify-end w-[100%] cursor-pointer">
                                <AiFillCloseCircle size={24}/>
                            </button>
                            <h3>Desea eliminar el Producto?</h3>
                            <button onClick={deleteProductHandler} className="bg-red-500 text-white rounded-md p-2 w-[80%]">Eliminar</button>
                        </div>
                    </div>
                )
            }
        </section>
    )
}
