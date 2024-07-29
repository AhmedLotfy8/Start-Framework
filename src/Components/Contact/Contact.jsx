import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

export default function Contact() {
  return (
    <div className='container pt-8 pb-28'>

      <h1 className='uppercase text-4xl text-slate-700 font-bold text-center'>conatct section</h1>
  
      <div className="flex justify-center items-center">
        <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
        <TiStarFullOutline className="text-2xl text-slate-700" />
        <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
      </div>

      <div className='flex flex-col'>

        <form action="" className='flex flex-col justify-center items-center'>

          <input type="text" className='w-1/2 p-3 mb-10 border-b-2' placeholder='userName' />
          <input type="text" className='w-1/2 p-3 mb-10 border-b-2' placeholder='userAge' />
          <input type="text" className='w-1/2 p-3 mb-10 border-b-2' placeholder='userEmail' />
          <input type="text" className='w-1/2 p-3 mb-10 border-b-2' placeholder='userPassword' />

        </form>

        <button className='text-white ms-96 bg-emerald-500 rounded-md p-1 w-40'>Send Message</button>

      </div>

    </div>
  )
}
