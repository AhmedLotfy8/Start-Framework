import React, { useState } from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import imgSrc1 from "../../assets/poert1.png";
import imgSrc2 from "../../assets/port2.png";
import imgSrc3 from "../../assets/port3.png";

import './Portfolio.css'

export default function Portfolio() {

  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState('');

  function handleOverlayClick(imgSrc) {

    setCurrentImgSrc(imgSrc);
    setShowOverlay(!showOverlay);

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

            {[imgSrc1, imgSrc2, imgSrc3, imgSrc1, imgSrc2, imgSrc3].map((src, index) => (
              <div className='relative' key={index}>
                <img src={src} id={`PIC${index + 1}`} className='rounded-lg' alt="" />
                <div
                  onClick={() => handleOverlayClick(src)}
                  className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg'>
                  <FaPlus className='text-7xl text-white' />
                </div>
              </div>
            ))}

            {/*
             <div className='relative'>
              <img src={imgSrc1} id='PIC1' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc2} id='PIC2' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc3} id='PIC3' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc1} id='PIC4' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc2} id='PIC5' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div>

            <div className='relative'>
              <img src={imgSrc3} id='PIC6' className='rounded-lg' alt="" />
              <div onClick={handleOverlayClick} className='overlay bg-teal-500 opacity-80 top-0 bottom-0 w-full z-20 absolute rounded-lg hidden'>
                <FaPlus className='text-7xl text-white' />
              </div>
            </div> */}

          </div>
        </div>

      </div>

      {
        showOverlay && (
          <div onClick={() => setShowOverlay(false)}
            className='onePictureOverlay fixed top-1/2 z-40 translate-y-[-50%] min-h-full w-full flex items-center justify-center bg-opacity-25 bg-[#0d6efd]'>
            <img src={currentImgSrc} className='w-1/3' alt="" />
          </div>
        )
      }



    </div>


  )

}
