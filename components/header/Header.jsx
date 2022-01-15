import React from "react";
import { Items } from "./HeaderItems";
import {
  FcSteam,
  FcBullish,
  FcSerialTasks,
  FcHome,
  FcFaq,
  FcReading,
} from "react-icons/fc";

const Header = () => {
  return (
    <div>
      <div>
        <div className="text-white t-0 l-0 h-screen w-3/6 bg-blue-600 relative">
          <div className="pt-4 pl-4">
            <div className="bg-black mr-4 py-4 px-6 rounded-xl text-center">
              Sign Up
            </div>
          </div>
          <div className="mt-6 ml-4">
            {Items.map((item) => (
              <div className="flex flex-row items-center pt-2">
                <span className="pr-2 text-xl">{item.icon}</span>
                <h1 className="text">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-6 bg-black">
        <div className="flex justify-around text-white pb-2">
          <div>rtrt</div>
          <div>rtrt</div>
          <div>rtrt</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
