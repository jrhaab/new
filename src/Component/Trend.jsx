


import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TrendComponent () {
  return (
    <>
      <aside className="right-sidebar bg-white w-1/5 h-screen p-6 fixed right-0 border">
        <div className=" mb-4">
          <h4 className="text-xl mb-4">PHILIPPINES TRENDS</h4>
          <ul className="text-sm text-[#1DA1F2]">
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
            <li>
              <a href="/">#Hello world</a>
            </li>
          
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <h4 className="text-xl mb-4">WHO TO FOLLOW </h4>
            <a href="/" className="text-[#1DA1F2]">
              More
            </a>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h3 className="font-semi-bold">Chris Spooner</h3>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h3 className="font-semi-bold">James Retcher</h3>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h3 className="font-semibold">Nathan Powell</h3>
                <p className="text-xs text-gray-400">Designer, Blogger</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <img
                className="w-12 h-12 mx-2 rounded-full"
                src="/logo192.png"
                alt="avatar"
              />
              <div>
                <h3 className="font-semibold">Nick Slater</h3>
                <p className="text-xs text-gray-400">Illustrator</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faAdd} className="border p-1" />
          </div>
        </div>
      </aside>
    </>
  );
}