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

    const [errorsForm, setErrorForm] = useState([])

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

    const submitProductDataHandler = async (e) => {
        e.preventDefault()

        const response = await createProduct(productData, productData.images)

        if (response.status === 200) {
            toast.success("Producto Creado", {
                position: 'top-center',
                autoClose: 'false',
                theme: 'colored',
            })

            titleRef.current.value = ""
            priceRef.current.value = ""
            discountRef.current.value = ""
            stockRef.current.value = ""
            descriptionRef.current.value = ""
            categoryRef.current.value = ""
            imagesRef.current.value = ""
            conditionRef.current.value = ""

            e.target.children[7].children[0].checked = false
            e.target.children[7].children[1].checked = false
            e.target.children[7].children[2].checked = false
            e.target.children[7].children[3].checked = false

        }

        if (response.errors) {
            setErrorForm(response.errors)

            const ErrorMsg = ({ closeToast, toastProps }) => (
                <div className="flex flex-col gap-4">
                    <h3>No se pudo crear el Producto:</h3>
                    {
                        response.errors.map((error, i) => {
                            return <li key={i}>{error.msg}</li>
                        })
                    }
                </div>
            )

            toast.error(<ErrorMsg />, {
                position: 'top-center',
                autoClose: false,
                theme: 'colored',
            })
        }
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
            <ToastContainer closeOnClick position="top-center" />
            <h1>Agrega un Producto</h1>
            <form
                onSubmit={submitProductDataHandler}
                className='
                flex flex-col items-center
                w-[50%] gap-12 py-4
            '>
                <input type="text"
                    placeholder="Nombre de producto"
                    className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={titleRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Precio"
                    className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={priceRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Descuento"
                    className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={discountRef}
                    onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Stock"
                    className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={stockRef}
                    onChange={productDataHandler}
                />

                <textarea name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Ingrese la descripción"
                    className={`border w-[80%] focus:outline-none ${errorsForm.length && 'border border-pink-600'}`}
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
                    <option value="juegos">Juegos</option>
                    <option value="accesorios">Accesorios</option>
                </select>

                <select name="condition"
                    className={`border-b w-[80%] focus:outline-none`}
                    ref={conditionRef}
                    onChange={productDataHandler}
                >
                    <option value="">Ingrese una condicion</option>
                    <option value="nuevo">Nuevo</option>
                    <option value="usado">Usado</option>
                </select>

                <div>
                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="play-station"
                        onChange={getCheckboxData}
                    />Play Station

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="xbox"
                        onChange={getCheckboxData}
                    />XBox

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="nintendo"
                        onChange={getCheckboxData}
                    />Nintendo

                    <input type="checkbox"
                        name="brand"
                        id=""
                        value="other"
                        onChange={getCheckboxData}
                    />Otra
                </div>



                <label htmlFor="images"
                    className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
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
