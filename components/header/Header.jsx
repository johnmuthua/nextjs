import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Header() {
  const [sideBar, setsideBar] = useState(false);
  const handleSidebar = () => {
    setsideBar(!sideBar);
  };
  return (
    <nav>
      <div className="bg-black fixed flex h-14 inset-x-0 items-center justify-between shadow-xl text-white top-0">
        <div>Tucode</div>
        <button
          className="p-2 rounded-full transition hover:bg-blue-300"
          onClick={handleSidebar}
        >
          <FaBars />
        </button>
      </div>
      <Sidebar
        handleSidebar={handleSidebar}
        sideBar={sideBar}
        setsideBar={setsideBar}
      />
    </nav>
  );
}

export default Header;
