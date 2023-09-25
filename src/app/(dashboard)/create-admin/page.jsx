"use client"

import { useState, useRef, useEffect } from "react"
import { ErrorModal } from "@/app/components";
import { register } from "@/app/services/authServices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  const [errorsForm, setErrorsForm] = useState([])

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
    const { errors } = await register(userData, userData.image)

    if (errors) {
      setErrorsForm(errors)

      toast.error("no se pudo crear usuario", {
        position: "top-center",
        autoClose: false,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
  }, [errorsForm])

  return (
    <div className='
        flex 
        justify-center
        items-center
        w-[100%]
        h-[96vh]
        '>
      <ToastContainer closeOnClick position="top-center" />
      <form className='
        flex flex-col items-center
        w-[50%] gap-12 py-4'
        onSubmit={submitUserDataHandler}
      >

        <input type="text"
          placeholder='username'
          name='username'
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={usernameRef}
          onChange={handlerUserData}
        />

        <input type="text"
          placeholder='nombre completo'
          name='fullName'
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={fullNameRef}
          onChange={handlerUserData}
        />

        <input type="email"
          placeholder='e-mail'
          name='email'
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={emailRef}
          onChange={handlerUserData}
        />

        <label htmlFor="image"
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
        >
          ingresa una imagen
          <input type="file" name="image" className="hidden" id="image" ref={imageRef}
            onChange={handlerUserData} />
        </label>

        <input type="password"
          placeholder='contraseña'
          name='password'
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={passwordeRef}
          onChange={handlerUserData}
        />

        <input type="number"
          placeholder='telefono'
          name="tel"
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={telRef}
          onChange={handlerUserData}
        />

        <select name="isAdmin"
          className={`border-b w-[80%] focus:outline-none ${errorsForm.length && 'border-b border-pink-600'}`}
          ref={isAdminRef}
          onChange={handlerUserData}>
          <option value="">es admin?</option>
          <option value="true">Es Admin</option>
          <option value="false">No es Admin</option>
        </select>

        <button className="w-[30%] border p-1 rounded-md text-gray-500 hover:bg-black hover:text-white transition-all">Crear Usuario</button>
      </form>

      {
        errorsForm.length !== 0 && (
          <ErrorModal errors={errorsForm}/>
        )
      }


      {/* {
        errorsForm.length !== 0 && (
          <div className='
            border border-blue-500
            flex flex-col items-center 
            w-[40%] gap-12 py-4'>
            {errorsForm.map((err, i) => {
              return <p key={i}>{err.msg}</p>
            })}
          </div>
        )
      } */}

    </div>
  )
}

export default CreateProductPage

