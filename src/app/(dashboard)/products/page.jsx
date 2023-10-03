
async function getData() {
    const res = await fetch('http://localhost:3001/products/products-list')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const ProductsPage = async () => {
    const { data } = await getData()

    return (
        <section>
            <h1>Products List Page</h1>

            {
                data.map((product, i) => (
                    <div key={i}>
                        <h3>{product.title}</h3>
                    </div>
                ))
            }
        </section>
    )
}

export default ProductsPage