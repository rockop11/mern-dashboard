import { InfoCard } from "@/components"


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


export const InfoCardContainer = async () => {
    const totalProductsLength = await getProductsListLength()
    const totalPlayStationProductsLength = await getProductsLengthByBrand("play-station")
    const totalXboxProductsLength = await getProductsLengthByBrand("xbox")
    const totalNintendoProductsLength = await getProductsLengthByBrand("nintendo")

    return (
        <div className="flex justify-center">

            <InfoCard
                link="/products"
                title="Total del Productos"
                productsLength={totalProductsLength.length}
                borderColor="border-yellow-500"
            />


            <InfoCard
                link="/products/play-station"
                title="Play Station"
                productsLength={totalPlayStationProductsLength.length}
                borderColor="border-blue-800"
            />

            <InfoCard
                link='/products/xbox'
                title="Xbox"
                productsLength={totalXboxProductsLength.length}
                borderColor="border-green-400"
            />

            <InfoCard
                link='/products/nintendo'
                title="Nintendo"
                productsLength={totalNintendoProductsLength.length}
                borderColor="border-red-500"
            />
        </div>
    )
}