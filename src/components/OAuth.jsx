import React from 'react'
import { FcGoogle } from "react-icons/fc";


export default function OAuth() {
  return (
    <button class = "flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 rounded uppercase text-sm font-medium shadow-md hover:bg-red-800 active:shadow-lg transition duration-200 ease-in-out active:bg-red-900">
        <FcGoogle class = "text-2xl bg-white rounded-full mr-2"/>
        Continue with Google
    </button>
  )
}
