
import { useState } from "react";

export default function StatusComponent () {
    const [activeSection, setActiveSection] = useState("tweets");

    const handleSectionChange = (param) => {
      setActiveSection(param);
    };
    
    const buttonStyle = "w-1/4 h-max flex flex-col gap-y-5 justify-between items-center";
    
    return (
      <main className="w-[60%] m-auto h-max flex flex-col justify-start items-center pt-13 gap-y-8">
        <div className="top-section w-[100%] h-max p-5 bg-white shadow-md flex flex-row justify-between items-end">
          <button
            type="button"
            onClick={() => handleSectionChange("tweets")}
            className={buttonStyle}
          >
            <span>TWEETS</span><br />
            <span>10</span>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("photos-videos")}
            className={buttonStyle}
          >
            <span>PHOTO/VIDEOS</span><br />
            <span>200</span>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("following")}
            className={buttonStyle}
          >
            <span>FOLLOWING</span><br />
            <span>200</span>
          </button>
          <button
            type="button"
            onClick={() => handleSectionChange("followers")}
            className={buttonStyle}
          >
            <span>FOLLOWERS</span><br />
            <span>1M</span>
          </button>
        </div>
 </main>
    );
}

