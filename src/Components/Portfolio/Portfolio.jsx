import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import imgSrc1 from "../../assets/poert1.png";
import imgSrc2 from "../../assets/port2.png";
import imgSrc3 from "../../assets/port3.png";

export default function Portfolio() {

  

  return (

    <div className='container py-12'>

      <h1 className='uppercase text-4xl text-slate-700 font-bold text-center'>portfolio component</h1>

      <div className="flex justify-center items-center">
        <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
        <TiStarFullOutline className="text-2xl text-slate-700" />
        <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
      </div>

      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-3 gap-8 w-9/12'>
          <div>
            <img src={imgSrc1} className='rounded-lg' alt="" />
          </div>
          <div>
            <img src={imgSrc2} className='rounded-lg' alt="" />
          </div>
          <div>
            <img src={imgSrc3} className='rounded-lg' alt="" />
          </div>
          <div>
            <img src={imgSrc1} className='rounded-lg' alt="" />
          </div>
          <div>
            <img src={imgSrc2} className='rounded-lg' alt="" />
          </div>
          <div>
            <img src={imgSrc3} className='rounded-lg' alt="" />
          </div>
        </div>
      </div>

    

    </div>
  )
}
