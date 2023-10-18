import {
  ImageCarrousel,
  ProductActionButton
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
      <h1 className="text-center text-[28px]">Detalle De Producto</h1>
      <div className="flex gap-4">
        <ImageCarrousel images={images} />


        <article className="w-[50%]">
          <h2 className="text-center text-2xl">{data.title}</h2>

          <div className="
            border border-slate-500 
            flex justify-around 
            m-auto 
            w-[70%] 
            rounded-md
          ">
            <div>
              <p>Precio:</p>
              <p>Stock:</p>
              <p>Descuento:</p>
              <p>Categoría:</p>
              <p>Condición:</p>
            </div>

            <div>
              <p>$ {data.price}</p>
              <p>{data.stock}</p>
              <p>% {data.discount}</p>
              <p>{data.category}</p>
              <p>{data.condition}</p>
            </div>
          </div>

          <div className="flex justify-center mt-[20px] gap-4">

            <ProductActionButton
              title="Editar"
              backgroundColor="bg-blue-700"
            />

            <ProductActionButton
              title="Eliminar"
              backgroundColor="bg-red-500"
            />

          </div>
        </article>
      </div>

      <p>{data.description}</p>
    </section>
  )
}

export default ProductDetailPage

