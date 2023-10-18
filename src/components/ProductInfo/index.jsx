export const ProductInfo = ({ title, price, stock, discount, category, condition, description, brands }) => {
    
    return (
        <article className="w-[100%] border border-slate-500 rounded-md">
            <h2 className="text-center text-[32px] mb-4 font-bold">{title}</h2>
            <div className="
               pl-4 pr-4
               flex flex-col gap-2
          ">
                <p className="text-[24px] font-bold">$ {price}</p>
                {
                    discount === 0 ? (
                        <p className="line-through font-semibold">Sin Descuento</p>
                    ) : (
                        <p className="font-semibold"> %{discount} OFF</p>
                    )
                }

                <p>Stock: {stock}</p>

                {
                    category === "consola" && (
                        <p>Categoría: Consola</p>
                    )
                }
                {
                    category === "juegos" && (
                        <p>Categoría: Juego</p>
                    )
                }
                {
                    category === "accesorios" && (
                        <p>Categoría: Accesorio</p>
                    )
                }
                {
                    condition === "nuevo" ? (
                        <p>Condición: Nuevo</p>
                    ) : (
                        <p>Condición: Usado</p>
                    )
                }

                <hr />
                <h3 className="font-medium">Disponible para:</h3>
                <ul className="pl-4">
                    {brands.map(({brand}) => {
                        if(brand === 'play-station') return <li className="list-disc">Play Station</li>
                        if(brand === 'xbox') return <li className="list-disc">Xbox</li>
                        if(brand === 'nintendo') return <li className="list-disc">Nintendo</li>
                        if(brand === 'other') return <li className="list-disc">Otra</li>
                    })}
                </ul>
                <hr />
                <p>{description}</p>
            </div>
        </article>
    )
}