"use client"

import Link from "next/link"

export default function Home() {

  return (
    <div className="w-[100%] p-4">
      <h1>Index</h1>

      <Link href='/create-admin'>
        <div>
          crear usuario
        </div>
      </Link>

      <Link href='/create-product'>
        <div>
          crear producto
        </div>
      </Link>
    </div>
  )
}
