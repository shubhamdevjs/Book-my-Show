import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
function NavSm() {
  return (
    <>
      <div className="flex items-center justify-between text-white">
        <div>
          <h1 className="text-xl font-bold">It All Starts here!</h1>
          <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white gap-1">
            Pune <BiChevronDown />
          </span>
        </div>
        <div className="h-9 w-8">
            <BiSearch className="w-full h-full"/>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex w-full items-center bg-white gap-3 rounded-md py-1 px-3 ">
        <BiSearch />

        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none "
          placeholder="Search for Movies Plays Sports Music Events and activities"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto flex px-4 items-center justify-between ">
        <div className="flex items-center gap-3 w-1/2 ">
          <div className="h-10 w-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="Logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex w-full items-center bg-white gap-3 rounded-md py-1 px-3 ">
            <BiSearch />

            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for Movies Plays Sports Music Events and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-gray-300 text-base flex items-center cursor-pointer hover:text-white gap-1">
            Pune <BiChevronDown />
          </span>
          <button className="bg-red-500 rounded-md py-1 px-2 text-sm text-white hover:bg-red-600 ">
            Sign In
          </button>
          <div className="h-9 w-10 ">
            <BiMenu className="w-full h-full cursor-pointer text-white  hover:text-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="bg-premiere-750 px-4 py-3">
        <div className="md:hidden">
          {/* for mobile view screen and hide for md "medium screen". */}
          <NavSm />
        </div>

        <div className=" hidden md:flex lg:hidden">
          {/* for medium screen display and for large and smaller scren hidden */}
          <NavMd />
        </div>

        <div className="hidden w-full lg:flex">
          {/* for large screen display and hide for all other */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
