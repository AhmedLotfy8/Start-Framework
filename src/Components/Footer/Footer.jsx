import React from "react";
import { PiFacebookLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container">

      <div className="flex justify-center items-center bg-slate-800 py-24">

        <div className="grid grid-cols-3 :grid-cols-3 gap-4 w-11/12">

          <div className="m-auto text-white text-center">
            <h2 className="font-bold text-2xl">LOCATION</h2>
            <p className="mb-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="flex flex-col justify-center items-center text-white text-center">
            <h2 className="font-bold text-2xl">AROUND THE WEB</h2>
            <div className="flex justify-center items-center">
              <PiFacebookLogoFill className="ms-2 mt-3 border rounded-full p-2 text-4xl" />
              <FaTwitter className="ms-2 mt-3 border rounded-full p-2 text-4xl" />
              <FaLinkedin className="ms-2 mt-3 border rounded-full p-2 text-4xl" />
              <FaGlobe className="ms-2 mt-3 border rounded-full p-2 text-4xl" />
            </div>
          </div>

          <div className="text-white text-center">
            <h2 className="font-bold text-2xl">ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-4 text-white text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
