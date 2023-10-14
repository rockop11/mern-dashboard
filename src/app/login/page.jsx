"use client"

import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import { FiEyeOff } from "react-icons/fi"
// import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { loginHandler } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [validations, setValidations] = useState([])

  const submitFormHandler = async (e) => {
    e.preventDefault()

    const errors = await loginHandler(email, password)

    if (errors) {
      setValidations(errors)
    }
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => { }, [validations])

  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] flex-col">
      <form onSubmit={submitFormHandler} className="
        w-[400px]
        flex
        flex-col
        justify-center
        items-center
        gap-12
        shadow-lg
        py-4
        rounded-lg
      ">
        <h2>Ingresá a la Plataforma</h2>

        <input
          type="text"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
          className={`
                focus:outline-none
                h-[40px] 
                w-[80%] 
                pl-2
                ${validations.length ? 'border-b border-pink-600 text-gray-500' : 'border-b text-gray-500'}
                `}
        />



        <div className="flex items-center relative w-[80%]">
          <input
            placeholder="contraseña"
            type={showPassword ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
            className={`
            focus:outline-none
              h-[40px] 
              w-[100%] 
              pl-2
              ${validations.length ? 'border-b border-pink-500 text-gray-500' : 'border-b text-gray-500'}
              `}
          />
          <div className="absolute right-[10px] cursor-pointer" onClick={showPasswordHandler}>
            <FiEyeOff size={20} className={`${validations.length ? 'text-pink-600' : 'text-gray-500'}
              `} />
          </div>
        </div>
        <button className="w-[30%] border p-1 rounded-md text-gray-500 hover:bg-black hover:text-white transition-all">Login</button>
        <div >
          {
            validations.map((error, i) => {
              return <p className="text-pink-600" key={i}>{error.msg}</p>
            })
          }
        </div>
      </form>



    </div>
  )
}

export default LoginPage

