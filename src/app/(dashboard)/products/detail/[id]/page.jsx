import Image from "next/image";

async function getProductDetail(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/detail/${id}`, { cache: 'no-store' });

  return response.json()
}

const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const { data, images } = await getProductDetail(id)
  console.log("IMAGES", images);

  return (
    <section className="w-[100%] p-4">
      <h2 className="text-center ">{data.title}</h2>

      {
        images.map((image, i) => {
          return (
            <div key={i}>
              <Image src={image} height={100} width={100} alt="product-image"/>
            </div>
          )
        })
      }
    </section>
  )
}

export default ProductDetailPage