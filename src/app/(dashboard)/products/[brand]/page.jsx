import { ProductListTable } from "@/components"

async function getData(brand) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/brands/${brand}`
    )

    return res.json()
}

const ProductsByBrandsPage = async ({ params }) => {
    const { brand } = params
    const { data, length } = await getData(brand)


    return (
        <section className="w-[100%]">
            <div>Productos de: {params.brand}</div>

            <ProductListTable productList={data} />
        </section>
    )
}

export default ProductsByBrandsPage