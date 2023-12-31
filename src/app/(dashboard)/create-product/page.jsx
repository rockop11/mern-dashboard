"use client"

import { useState, useRef } from "react"
import { createProduct } from "@/services/productServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai"

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

    const imageSelectedHandler = (name) => {
        const images = Array.from(productData.images)

        const filteredImages = images.filter((image) => {
            return image.name != name;
        })

        setProductData({
            ...productData,
            images: filteredImages
        })
    }

    const submitProductDataHandler = async (e) => {
        e.preventDefault()

        const response = await createProduct(productData, productData.images)

        if (response.status === 200) {
            toast.success("Producto Creado", {
                position: 'top-center',
                autoClose: true,
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

            e.target[7].checked = false
            e.target[8].checked = false
            e.target[9].checked = false
            e.target[10].checked = false

            setProductData({
                ...productData,
                brands: []
            })
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
                flex justify-center
                flex-wrap
                w-[90%] gap-12 py-4
                mt-8
            '>
                <input type="text"
                    placeholder="Nombre de producto"
                    className={`border-b w-[40%] focus:outline-none px-2 ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={titleRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Precio"
                    className={`border-b w-[40%] focus:outline-none px-2 ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={priceRef} onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Descuento"
                    className={`border-b w-[40%] focus:outline-none px-2 ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={discountRef}
                    onChange={productDataHandler}
                />

                <input type="number"
                    placeholder="Stock"
                    className={`border-b w-[40%] focus:outline-none px-2 ${errorsForm.length && 'border-b border-pink-600'}`}
                    ref={stockRef}
                    onChange={productDataHandler}
                />

                <textarea name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Ingrese la descripción"
                    className={`border w-[86%] focus:outline-none px-2 ${errorsForm.length && 'border border-pink-600'}`}
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
                    className={`border-b w-[70%] focus:outline-none text-center ${errorsForm.length && 'border-b border-pink-600'}`}
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

                {
                    productData.images.length > 0 && (
                        <div className="w-[80%] h-[80px] flex justify-center gap-4">
                            {
                                Array.from(productData.images).map((image, i) => {
                                    return (
                                        <div key={i} className="w-[70px] h-[90px] relative">
                                            <AiFillCloseCircle className="absolute z-10 text-gray-100 right-1 top-1 cursor-pointer" size={16} onClick={() => imageSelectedHandler(image.name)} />
                                            <Image src={URL.createObjectURL(image)} fill alt="product-image" className="rounded-md" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }




                <button
                    className="w-[30%] border p-1 rounded-md text-gray-500 hover:bg-black hover:text-white transition-all"
                >
                    Crear Producto
                </button>
            </form>
        </div>
    )
}

export default CreateProductPage
