"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { editProduct } from "@/services/productServices"

export const EditProductForm = ({ id }) => {

    const router = useRouter()

    const titleRef = useRef(null)
    const priceRef = useRef(null)
    const discountRef = useRef(null)
    const stockRef = useRef(null)
    const descriptionRef = useRef(null)
    const categoryRef = useRef(null)
    const imagesRef = useRef(null)
    const conditionRef = useRef(null)

    const [productData, setProductData] = useState({
        title: "",
        price: "",
        discount: "",
        stock: "",
        description: "",
        category: "",
        condition: "",
        brands: [],
        images: []
    })

    const productDataHandler = () => {
        setProductData({
            ...productData,
            title: titleRef.current.value,
            price: priceRef.current.value,
            discount: discountRef.current.value,
            stock: stockRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            images: imagesRef.current.files,
            condition: conditionRef.current.value
        })
    }

    const getCheckboxData = (e) => {
        if (e.target.checked) {
            const { value } = e.target

            setProductData({
                ...productData,
                brands: [...productData.brands, value]
            })
        }

        if (!e.target.checked) {
            const uncheckedOption = productData.brands.filter(
                option => option !== e.target.value
            )

            setProductData({
                ...productData,
                brands: uncheckedOption
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { status, data } = await editProduct(productData, productData.images, id)
            //FALTA LOGICA PARA IMAGENES

            if (status === 200) {
                router.push("/products")
            }
        } catch (err) {
            console.log(err);
            //usar react toastify para el manejo de errores
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='
            flex justify-center
            flex-wrap
            w-[90%] gap-12 py-4
            mt-8
        '>
            <input type="text"
                placeholder="Nombre de producto"
                className={`border-b w-[40%] focus:outline-none px-2`}
                ref={titleRef}
                onChange={productDataHandler}
            />

            <input type="number"
                placeholder="Precio"
                className={`border-b w-[40%] focus:outline-none px-2 `}
                ref={priceRef}
                onChange={productDataHandler}
            />

            <input type="number"
                placeholder="Descuento"
                className={`border-b w-[40%] focus:outline-none px-2 $`}
                ref={discountRef}
                onChange={productDataHandler}
            />

            <input type="number"
                placeholder="Stock"
                className={`border-b w-[40%] focus:outline-none px-2 `}
                ref={stockRef}
                onChange={productDataHandler}
            />

            <textarea name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Ingrese la descripción"
                className={`border w-[86%] focus:outline-none px-2 `}
                ref={descriptionRef}
                onChange={productDataHandler}
            />

            <select name="category"
                className={`border-b w-[40%] focus:outline-none`}
                ref={categoryRef}
                onChange={productDataHandler}
            >
                <option value="">Ingrese una categoria</option>
                <option value="consola">Consola</option>
                <option value="juegos">Juegos</option>
                <option value="accesorios">Accesorios</option>
            </select>

            <select name="condition"
                className={`border-b w-[40%] focus:outline-none`}
                ref={conditionRef}
                onChange={productDataHandler}
            >
                <option value="">Ingrese una condicion</option>
                <option value="nuevo">Nuevo</option>
                <option value="usado">Usado</option>
            </select>

            <div className="w-[60%] flex items-center justify-center gap-8">
                <div className="flex gap-2">
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="play-station"
                        onChange={getCheckboxData}
                    />Play Station
                </div>

                <div className="flex gap-2">
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="xbox"
                        onChange={getCheckboxData}
                    />XBox
                </div>

                <div className="flex gap-2">
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="nintendo"
                        onChange={getCheckboxData}
                    />Nintendo
                </div>

                <div className="flex gap-2">
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="other"
                        onChange={getCheckboxData}
                    />Otra
                </div>
            </div>


            <label htmlFor="images"
                className={`border-b w-[70%] focus:outline-none text-center `}
            >
                ingresa imagenes del producto
                <input type="file"
                    name="images"
                    className="hidden"
                    id="images"
                    multiple
                    ref={imagesRef}
                    onChange={productDataHandler}
                />
            </label>

            <button
                className="w-[30%] border p-1 rounded-md text-gray-500 hover:bg-black hover:text-white transition-all"
            >
                Editar Producto
            </button>
        </form>
    )
}

