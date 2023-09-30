"use client"

import { useState, useRef } from "react"
import { createProduct } from "@/app/services/productServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateProductPage = () => {

    const titleRef = useRef(null)
    const priceRef = useRef(null)
    const discountRef = useRef(null)
    const stockRef = useRef(null)
    const descriptionRef = useRef(null)
    const categoryRef = useRef(null)
    const imagesRef = useRef(null)

    const [productData, setProductData] = useState({
        title: "",
        price: "",
        discount: "",
        stock: "",
        description: "",
        category: "",
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
            images: imagesRef.current.files
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

    const submitProductDataHandler = async (e) => {
        e.preventDefault()
        const response = await createProduct(productData, productData.images)
    }


    return (
        <div className='
            flex
            flex-col
            items-center
            w-[100%]
            h-[95vh]
            p-4
            overflow-scroll
        '>
            <h1>Agrega un Producto</h1>
            <form
                onSubmit={submitProductDataHandler}
                className='
                flex flex-col items-center
                w-[50%] gap-12 py-4
            '>
                <input type="text"
                    placeholder="Nombre de producto"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={titleRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Precio"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={priceRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Descuento"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={discountRef}
                    onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Stock"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={stockRef}
                    onChange={productDataHandler}
                />

                <textarea name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Ingrese la descripción"
                    className={`border rounded-md w-[80%] p-2 focus:outline-none`}
                    ref={descriptionRef}
                    onChange={productDataHandler}
                />

                <select name="category"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={categoryRef}
                    onChange={productDataHandler}
                >
                    <option value="">Ingrese una categoria</option>
                    <option value="consola">Consola</option>
                    <option value="juegos" >Juegos</option>
                    <option value="accesorios">Accesorios</option>
                </select>

                <div>
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="Play Station"
                        onChange={getCheckboxData}
                    />Play Station

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="Xbox"
                        onChange={getCheckboxData}
                    />XBox

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="Nintendo"
                        onChange={getCheckboxData}
                    />Nintendo

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="Other"
                        onChange={getCheckboxData}
                    />Otra
                </div>



                <label htmlFor="images"
                    className={`border-b w-[80%] focus:outline-none`}
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
                >Crear Producto</button>
            </form>
        </div>
    )
}

export default CreateProductPage
