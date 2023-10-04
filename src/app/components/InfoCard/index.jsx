async function getProductsListLength() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/products-list`)
    // const res = await fetch("http:/localhost:3001/products/products-list")


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getProductsLengthByBrand(param) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/brands/${param}`)


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export const InfoCard = async () => {
    const totalProductsLength = await getProductsListLength()
    const totalPlayStationProductsLength = await getProductsLengthByBrand("Play Station")
    const totalXboxProductsLength = await getProductsLengthByBrand("Xbox")
    const totalNintendoProductsLength = await getProductsLengthByBrand("Nintendo")

    return (
        <div className="flex justify-center">
            <div className={`
                shadow-md
                p-2
                m-4
                border-l-8
                border-yellow-500
            `}>Total de Productos: {totalProductsLength.length}</div>


            <div className={`
                shadow-md
                p-2
                m-4
                border-l-8
                border-blue-800
            `}>
                Play Station: {totalPlayStationProductsLength.length}
            </div>

            <div className={`
                shadow-md
                p-2
                m-4
                border-l-8
                border-green-400
            `}>
                Xbox: {totalXboxProductsLength.length}
            </div>

            <div className={`
                shadow-md
                p-2
                m-4
                border-l-8
                border-red-500
            `}>
                Nintendo: {totalNintendoProductsLength.length}
            </div>
        </div>
    )
}