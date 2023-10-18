"use client"

import { ActionButton } from "../../components"

export default function Home() {

  const indexActions = [
    {
      title: "Crear Admin",
      link: "/create-admin"
    }, {
      title: "Crear Producto",
      link: "/create-product"
    }
  ]

  return (
    <div className="w-[100%] p-4">
      <h1>Bienvenido</h1>
      <div className="flex justify-center items-center gap-8">
        {
          indexActions.map((item, i) => {
            return (
              <ActionButton key={i} title={item.title} link={item.link}/>
            )
          })
        }
      </div>
    </div>
  )
}
