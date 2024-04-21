

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faHashtag, faHome } from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = () => {
  return (
    <header className="w-full h-max m-0 flex flex-row justify-between items-center text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
      <div className="flex flex-row">
        <div className="border-r-2">
          <img
            src="/logo512.png"
            alt="logo"
            className=" m-5 rounded-full h-12 shadow-md"
          />
        </div>

        <nav className="w-max flex flex-row gap-3 items-center justify-center text-base ml-8">
          <FontAwesomeIcon
            icon={faHome}
            src="/logo192.png"
            alt="logo"
            className="rounded-full w-5 h-5 p-3 shadow-md"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            src="/logo192.png"
            alt="logo"
            className="rounded-full w-5 h-5 p-3 shadow-md"
          />
          <FontAwesomeIcon
            icon={faHashtag}
            src="/logo192.png"
            alt="logo"
            className="rounded-full w-5 h-5 p-3 shadow-md"
          />
        </nav>
      </div>

      <FontAwesomeIcon
        icon={faTwitter}
        src="/logo192.png"
        alt="logo"
        className="rounded-full w-10 h-10 p-3 shadow-md text-[#1DA1F2]"
      />
      <div className="w-max flex flex-col items-start justify-between  md:flex-row">
        <div className="flex items-center gap-5 h-full">
          <input
            href="#_"
            className="rounded-[30px] w-[15rem] px-4 py-3 border border-gray-200 shadow-sm"
            placeholder="Search"
            type="search"
          />
          <a href="#_">
            <FontAwesomeIcon
              icon={faUser}
              src="/logo192.png"
              alt="logo"
              className="mr-5 rounded-full w-5 h-5 p-3 shadow-md text-[#1DA1F2]"
            />
          </a>
         
        </div>
      </div>
    </header>
  );
};

export default NavBarComponent;