import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";


export default function About() {
  return (
    <div>

      <div className="container min-h-screen bg-clr flex flex-col justify-center items-center">
        <h1 className="text-center text-white text-4xl font-bold uppercase">
          about component
        </h1>

        <div className="flex justify-center items-center">
          <MdOutlineHorizontalRule className="text-6xl text-white" />
          <TiStarFullOutline className="text-2xl text-white" />
          <MdOutlineHorizontalRule className="text-6xl text-white" />
        </div>

        <div className="flex justify-center items-center self w-8/12">
          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>

          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
