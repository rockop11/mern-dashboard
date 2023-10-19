"use client"

import Link from "next/link"

export const ProductListTable = ({ productList }) => {

    const thOptions = [
        { title: "Título" },
        { title: "Precio" },
        { title: "Stock" },
        { title: "Categoria" },
        { title: "Detalle" }
    ]


    return (
        <table className="table-fixed m-auto border border-slate-900 w-[90%]">
            <thead className="bg-slate-500 text-left">
                <tr>
                    {
                        thOptions.map(option => {
                            return <th key={option.title}>{option.title}</th>
                        })
                    }

                </tr>
            </thead>
            <tbody className="text-left">
                {
                    productList.map(product => {
                        return (

                            <tr key={product._id} className="hover:bg-stone-200">
                                <td>{product.title}</td>
                                <td>$ {product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                                <td><Link href={`/products/detail/${product._id}`}>Ir a Detalle</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}