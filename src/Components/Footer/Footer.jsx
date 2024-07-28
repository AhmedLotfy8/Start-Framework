import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="flex justify-center items-center bg-slate-800 py-52">
        <div className="columns-4 m-auto text-white">
          <h2 className="font-bold text-2xl">LOCATION</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="columns-4 text-white">
          <h2 className="font-bold text-2xl">AROUND THE WEB</h2>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="columns-4 text-white">
          <h2 className="font-bold text-2xl">ABOUT FREELANCER</h2>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>

      <div className="bg-slate-900 py-2 text-white text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
