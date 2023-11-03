import { EditProductForm } from "@/components"

const EditPage = ({ params }) => {
    const { id } = params
    return (
        <section className="w-[100%]">
            <h2 className="text-center text-2xl">Edición de Producto</h2>

            <EditProductForm id={id} />
        </section>
    )
}

export default EditPage