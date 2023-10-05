import { InfoCardContainer, ProductListTable } from "@/app/components"

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/products-list`)
    // const res = await fetch("http:/localhost:3001/products/products-list")


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const ProductsPage = async () => {

    const { data } = await getData()


    return (
        <section className="w-[100%]">
            <h1>Products List Page</h1>

            <InfoCardContainer />
            <ProductListTable productList={data}/>

        </section>
    )
}

export default ProductsPage