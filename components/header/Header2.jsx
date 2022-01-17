import Image from "next/image";
import { Items } from "./HeaderItems";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="py-6 bg-black inset-x-0">
        <div className="flex justify-around text-white pb-2">
          <button>
            <FaBars className="hover:bg-blue-600 transition" />
          </button>
          <div>rtrt</div>
          <div>rtrt</div>
        </div>
        <hr />
      </div>
      <div>
        {/* <div className="bg-pink-700 cursor-pointer fixed inset-0 opacity-70 visible"></div> */}
        <div className=" t-0 l-0 w-3/6  md:w-2/6 bg-blue-600 inset-y-0 right-0 ">
          {/* <button className="absolute right-0 p-2 rounded-full top-6 transition hover:bg-red-700 text-white">
            <FaTimes className="font-4xl" />
          </button> */}
          <div className="text-white flex flex-col h-max">
            <div>
              <div className="pt-4 pl-4">
                <div className="bg-black mr-4 py-4 px-6 rounded-xl text-center transition  hover:bg-white hover:text-black hover:border-2 hover:border-black ">
                  Sign Up
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-none">
              <div className="mt-6 ml-4">
                {Items.map((item) => (
                  <div className="flex flex-row items-center pt-2 hover:bg-slate-600 hover:mr-4 hover:pl-2 hover:rounded-md">
                    <span className="pr-2 text-xl">{item.icon}</span>
                    <h1 className="text">{item.name}</h1>
                  </div>
                ))}
              </div>
              <div className="grow">here</div>
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
                  <div className="text-center pr-2">
                    <div className="text-xl font-extrabold">Jane Doe</div>
                    <div className="text-md font-semibold">
                      Systems Enginner
                    </div>
                    <div className="text-sm font-light">
                      Joined: 12th Oct 2019
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
