import React from "react";
import {
    faArrowAltCircleRight,
    faArrowsRotate,
    faEllipsis,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
  
  
  
  export default function MainComponent () {
    return (
      <div>
 <div className="w-[100%] flex flex-row gap-2 border-b-2 p-2">
        <img src="/logo192.png" alt="avatar" className="w-12 h-12 rounded-full" />
        <span className="w-[100%] right-portion flex flex-col items-start gap-2">
          <div className="w-[100%] flex flex-row items-center justify-between">
            <span>
              <span className="name font-semibold">Kerem Suer</span>
              <span className="handle text-[#AAB8C2]">@kerem</span>
            </span>  
            <span className="time">2m</span>
          </div>
          <div className="content text-[#657786]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            sapiente facilis eligendi, architecto illum odit vero molestiae beatae
            corrupti similique quisquam quis, dicta, eaque ad. Fuga commodi
            pariatur officia reprehenderit.
          </div>
          <div className="icons flex flex-row items-center justify-start gap-6 text-[#AAB8C2]">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faArrowsRotate} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </span>
      </div>

<div className="w-[100%] flex flex-row gap-2 border-b-2 p-2">
<img src="/logo192.png" alt="avatar" className="w-12 h-12 rounded-full" />
<span className="w-[100%] right-portion flex flex-col items-start gap-2">
  <div className="w-[100%] flex flex-row items-center justify-between">
    <span>
      <span className="name font-semibold">AxelHermann</span>
      <span className="handle text-[#AAB8C2]">@xel_hermann</span>
    </span>  
    <span className="time">1h</span>
  </div>
  <div className="content text-[#657786]">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
    sapiente facilis eligendi, architecto illum odit vero molestiae beatae
    corrupti similique quisquam quis, dicta, eaque ad. Fuga commodi
    pariatur officia reprehenderit.
  </div>
  <div className="icons flex flex-row items-center justify-start gap-6 text-[#AAB8C2]">
    <FontAwesomeIcon icon={faArrowAltCircleRight} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faArrowsRotate} />
    <FontAwesomeIcon icon={faEllipsis} />
  </div>
</span>
</div>


<div className="w-[100%] flex flex-row gap-2 border-b-2 p-2">
<img src="/logo192.png" alt="avatar" className="w-12 h-12 rounded-full" />
<span className="w-[100%] right-portion flex flex-col items-start gap-2">
  <div className="w-[100%] flex flex-row items-center justify-between">
    <img src="" alt="profile-photo" />
    <span>
      <span className="name font-semibold">Kerem Suer</span>
      <span className="handle text-[#AAB8C2]">@kerem</span>
    </span>  
    <span className="time">5h</span>
  </div>
  <video src="www.discovermore.com"></video>
  
  <div className="icons flex flex-row items-center justify-start gap-6 text-[#AAB8C2]">
    <FontAwesomeIcon icon={faArrowAltCircleRight} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faArrowsRotate} />
    <FontAwesomeIcon icon={faEllipsis} />
  </div>
</span>
</div>


<div className="w-[100%] flex flex-row gap-2 border-b-2 p-2">
<img src="/logo192.png" alt="avatar" className="w-12 h-12 rounded-full" />
<span className="w-[100%] right-portion flex flex-col items-start gap-2">
  <div className="w-[100%] flex flex-row items-center justify-between">
    <span>
      <span className="name font-semibold">Kerem Suer</span>
      <span className="handle text-[#AAB8C2]">@kerem</span>
      
    </span>  
    <span className="time">yesterday</span>
  </div>
  <div className="content text-[#657786]">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
    sapiente facilis eligendi, architecto illum odit vero molestiae beatae
    corrupti similique quisquam quis, dicta, eaque ad. Fuga commodi
    pariatur officia reprehenderit.
  </div>
  <div className="icons flex flex-row items-center justify-start gap-6 text-[#AAB8C2]">
    <FontAwesomeIcon icon={faArrowAltCircleRight} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faArrowsRotate} />
    <FontAwesomeIcon icon={faEllipsis} />
  </div>
</span>
</div>
      </div>
     
    );
  }

