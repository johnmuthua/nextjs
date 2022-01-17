import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Items } from "./HeaderItems";

function Sidebar({ handleSidebar, sideBar, setsideBar }) {
  return (
    <div>
      <div>
        <div
          className={
            sideBar
              ? "bg-black cursor-pointer relative inset-0 opacity-70 visible z-100"
              : "hidden opacity-0"
          }
          onClick={handleSidebar}
        ></div>
        <div
          className={
            sideBar
              ? "bg-black inset-y-0 fixed py-4 right-0 w-64"
              : "bg-black inset-y-0 fixed py-4 -right-full w-64"
          }
        >
          <button
            className="absolute -left-8 p-2 rounded-full text-red-700 top-4 hover:text-white hover:bg-red-800"
            onClick={handleSidebar}
          >
            <FaTimes />
          </button>
          <div>
            <div className="pt-4 pl-4">
              <div className="bg-black text-white mr-4 py-4 px-6 rounded-xl text-center transition  border-2 border-white hover:bg-green-700 hover:text-white hover:border-none  ">
                Sign Up
              </div>
            </div>
            <div className="flex flex-col text-white">
              <div className="mt-6 ml-4">
                {Items.map((item) => (
                  <div className="flex flex-row items-center pt-2 hover:bg-slate-600 hover:mr-4 hover:pl-2 hover:rounded-md hover:pb-1">
                    <span className="pr-2 text-xl">{item.icon}</span>
                    <h1 className="text">{item.name}</h1>
                  </div>
                ))}
              </div>
              {/* one ends here */}
              <div className="grow h-16 md:h-80"></div>
              {/* Two ends here */}
              <div className="">
                <div className="flex flex-row justify-between items-center">
                  <div className=" ml-2">
                    <Image
                      src="/resources/imgs/user.jpg"
                      height={100}
                      width={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-left pr-2">
                    <div className="text-lg font-bold">Jane Doe</div>
                    <div className="text-sm font-light">Systems Enginner</div>
                    <div className="text-xs font-thin">
                      Joined: 12th Oct 2019
                    </div>
                  </div>
                </div>
              </div>
              {/* Three ends here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
