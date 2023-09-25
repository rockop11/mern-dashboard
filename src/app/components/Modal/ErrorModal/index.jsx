"use client"

import { useState } from "react";
import { BiX } from "react-icons/bi"

export const ErrorModal = ({ errors }) => {

  const [toggleErrorModal, setToggleErrorModal] = useState(true)

  const errorMessages = errors.map((error, i) => {
    return <p key={i}>{error.msg}</p>
  })

  const toggleErrorModalHandler = () => {
    setToggleErrorModal(!toggleErrorModal)
  }


  return (
    <>
      {
        toggleErrorModal && (
          <div className="
           bg-white
           text-pink-600
            shadow-md
            flex
            flex-col
            items-center
            gap-4
            p-4
            w-[50%]
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          ">
            <BiX size={24} onClick={toggleErrorModalHandler} className="cursor-pointer text-slate-900"/>
            {errorMessages}
          </div>
        )
      }
    </>

  )
}
