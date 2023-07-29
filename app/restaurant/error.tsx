"use client"

import Image from "next/image";
import ErrorImg from "../../public/icons/error.png"

const ErrorComponent = (
    {error}:
    {error:Error}
) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
        <Image src={ErrorImg} alt="error" className="w-56 mb-8" />
        <div className="bg-white px-9  py-14 shadow rounded">
            <h3 className="text-3xl font-bold">Well This is embarrassing</h3>
            <p className="text-ref font-bold">{error.message}</p>
            <p className="mt-6 text-sm font-light">Error code: 400</p>
        </div>
    </div>
  )
}

export default ErrorComponent