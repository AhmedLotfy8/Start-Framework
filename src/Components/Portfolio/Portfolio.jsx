import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import imgSrc1 from "../../assets/poert1.png";
import imgSrc2 from "../../assets/port2.png";
import imgSrc3 from "../../assets/port3.png";

import './Portfolio.css'

export default function Portfolio() {

  function test() {
    console.log('hi');
  }

  return (

    <div>


      <div className='container py-32'>

        <h1 className='uppercase text-4xl text-slate-700 font-bold text-center'>portfolio component</h1>

        <div className="flex justify-center items-center">
          <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
          <TiStarFullOutline className="text-2xl text-slate-700" />
          <MdOutlineHorizontalRule className="text-6xl text-slate-700" />
        </div>

        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-8 w-9/12'>

            <div className='relative'>
              <img src={imgSrc1} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc2} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc3} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc1} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc2} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc3} onClick={test} className='rounded-lg' alt="" />
              <div className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='fixed top-1/2 translate-y-[-50%] min-h-full w-full flex items-center justify-center bg-opacity-25 bg-[#0d6efd] hidden'>

        <img src={imgSrc3} onClick={test} className='w-1/3' alt="" />

      </div>

    </div>


  )
}
