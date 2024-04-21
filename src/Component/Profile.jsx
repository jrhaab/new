
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faAdd,
  faArrowsRotate,
  faCircleArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileComponent () {
  return(
    <aside className="left-sidebar bg-[#1DA1F2] fixed left-0 flex flex-col w-1/5 h-screen text-white">
    <div className="px-4 py-8 flex flex-col items-center justify-evenly gap-4">
      <img
        src="/logo192.png"
        alt="profile"
        className="bg-white w-20 h-20 border rounded-full"
      />
      <h3 className="font-bold">Emmanuel Haabson</h3>
      <p className="text-center text-sm text-slate-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nobis
        asperiores porro non accusantium ex quidem modi delectus, velit
        corporis fugit quo vel soluta tempore. Ratione a nemo repellat nam?
      </p>
      <a href="/">
        <FontAwesomeIcon icon={faLink} /> www.emmanuelhaab.com
      </a>
      <button className="bg-[#657786] px-12 py-3 text-sm rounded-3xl">
        Follow
      </button>
    </div>
    {/* <div className="bg-slate-400 flex flex-row flex-wrap">
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
      <img src="/logo192.png" alt="img" className="w-[50%]" />
    </div> */}
    <div className="p-4">
      <h5 className="font-medium text-2xl">Activities</h5>
      <div>
        <span className="flex flex-row flex-wrap items-center gap-1">
          <FontAwesomeIcon icon={faAdd} className="px-4" />
          <p className="text-slate-650 font-semibold">Haabs</p>
          <a className="underline" href="/">
            Haabs
          </a>
        </span>
      </div>
      <div>
        <span className="flex flex-row flex-wrap items-center gap-1">
          <FontAwesomeIcon icon={faCircleArrowRight} className="px-4" />
          <p className="text-slate-650 font-semibold">Haabs</p>
          <a className="underline" href="/">
          Haabs
          </a>
        </span>
      </div>
   
      <div>
        <span className="flex flex-row flex-wrap items-center gap-1">
          <FontAwesomeIcon icon={faArrowsRotate} className="px-4" />
          <p className="text-slate-650 font-semibold">Haabs</p>
          <a className="underline" href="/">
          Haabs
          </a>
        </span>
      </div>
      <div>
        <span className="flex flex-row flex-wrap items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="px-4" />
          <p className="text-slate-650 font-semibold">Haabs</p>
          <a className="underline" href="/">
          Haabs
          </a>
        </span>
      </div>
    </div>
  </aside>
  );
}

