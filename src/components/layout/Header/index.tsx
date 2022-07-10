import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm col-span-full justify-between h-[70px] flex items-center pl-8">
      <div className="text-2xl flex items-end font-semibold">
        Todo- <span className="text-2xl text-purple-700 ">List</span>
      </div>
      <div className="flex gap-3 items-center pr-8">
        <img
          className="w-10 h-10 rounded-full bg-cover"
          src="/images/avatar4.PNG"
          alt="Rounded avatar"
        />{" "}
        Jane Doe
      </div>
    </nav>
  );
};

export default Header;
