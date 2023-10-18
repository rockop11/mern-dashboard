import {
  ImageCarrousel,
  ProductActionButton,
  ProductInfo
} from "@/components";

async function getProductDetail(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/detail/${id}`, { cache: 'no-store' });

  return response.json()
}

export const metadata = {
  title: 'Detalle de Producto'
}

const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const { data, images } = await getProductDetail(id)

  return (
    <section className="w-[100%] p-4">

      <h1 className="text-center text-[28px] mb-8">Detalle De Producto</h1>

      <div className="flex gap-8 justify-center ">
        <ImageCarrousel images={images} />

        <div className="w-[50%] flex flex-col gap-8">
          <ProductInfo
            title={data.title}
            price={data.price}
            stock={data.stock}
            discount={data.discount}
            category={data.category}
            condition={data.condition}
            description={data.description}
            brands={data.brands}
          />

          <div className="flex gap-4">
            <ProductActionButton
              title="Editar"
              backgroundColor="bg-blue-700"
            />

            <ProductActionButton
              title="Eliminar"
              backgroundColor="bg-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailPage

