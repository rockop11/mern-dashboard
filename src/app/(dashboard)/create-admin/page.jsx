"use client"

import { useState, useRef } from "react"
import { register } from "@/app/services/authServices"

const CreateProductPage = () => {
  const usernameRef = useRef(null)
  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  const imageRef = useRef(null)
  const passwordeRef = useRef(null)
  const telRef = useRef(null)
  const isAdminRef = useRef(null)


  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    email: "",
    image: "",
    password: "",
    tel: "",
    isAdmin: false
  });

  const handlerUserData = () => {
    setUserData({
      ...userData,
      username: usernameRef.current.value,
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      image: imageRef.current.files[0],
      password: passwordeRef.current.value,
      tel: telRef.current.value,
      isAdmin: isAdminRef.current.value
    })
  }

  const submitUserDataHandler = async (e) => {
    e.preventDefault()
    await register(userData, userData.image)
  }

  return (
    <div className='
        flex 
        justify-center
        items-center
        w-[100%]
        h-[96vh]
        '>
      <form className='
        flex flex-col items-center 
        w-[400px] gap-12 py-4'
        onSubmit={submitUserDataHandler}
      >

        <input type="text"
          placeholder='username'
          name='username'
          className="border-b w-[80%] focus:outline-none"
          ref={usernameRef}
          onChange={handlerUserData}
        />

        <input type="text"
          placeholder='nombre completo'
          name='fullName'
          className="border-b w-[80%] focus:outline-none"
          ref={fullNameRef}
          onChange={handlerUserData}
        />

        <input type="email"
          placeholder='e-mail'
          name='email'
          className="border-b w-[80%] focus:outline-none"
          ref={emailRef}
          onChange={handlerUserData}
        />

        <label htmlFor="image"
          className="border-b w-[80%] focus:outline-none"
        >
          ingresa una imagen
          <input type="file" name="image" className="hidden" id="image" ref={imageRef}
            onChange={handlerUserData} />
        </label>

        <input type="password"
          placeholder='contraseña'
          name='password'
          className="border-b w-[80%] focus:outline-none"
          ref={passwordeRef}
          onChange={handlerUserData}
        />

        <input type="number"
          placeholder='telefono'
          name="tel"
          className="border-b w-[80%] focus:outline-none"
          ref={telRef}
          onChange={handlerUserData}
        />

        <select name="isAdmin" className="border-b w-[80%] focus:outline-none"
          ref={isAdminRef}
          onChange={handlerUserData}>
          <option value="">es admin?</option>
          <option value="true">Es Admin</option>
          <option value="false">No es Admin</option>
        </select>

        <button className="w-[30%] border p-1 rounded-md text-gray-500 hover:bg-black hover:text-white transition-all">Crear Usuario</button>
      </form>
    </div>
  )
}

export default CreateProductPage

