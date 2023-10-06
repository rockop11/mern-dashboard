
async function getProductDetail(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/detail/${id}`);

  return response.json()
}

const ProductDetailPage = async ({ params }) => {
  const { data } = await getProductDetail(params.id)

  return (
    <section>
      <h2>{data.title}</h2>
    </section>
  )
}

export default ProductDetailPage