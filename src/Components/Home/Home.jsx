import React from "react";
import imgSrc from "../../assets/avatars.svg";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

import "./Home.css";

export default function Home() {
  return (
    <div className="container min-h-screen bg-clr flex justify-center items-center">
      <div>
        <img src={imgSrc} className="m-auto size-60 pb-6" alt="" />
        <h1 className="text-center text-white text-4xl font-bold">
          START FRAMEWORK
        </h1>
        
        <div className="flex justify-center items-center">
          <MdOutlineHorizontalRule className="text-6xl text-white"/>
          <TiStarFullOutline className="text-2xl text-white" />
          <MdOutlineHorizontalRule className="text-6xl text-white" />
        </div>

        <p className="text-white text-center">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}
