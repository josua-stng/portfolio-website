import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="navbar flex text-white justify-between p-5 z-50">
      <div>
        <h2 className="ml-12">Josua</h2>
      </div>

      <div className="flex">
        <button onClick={handleToggleOpen} className="md:hidden">
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : <Bars4Icon className="w-6 h-6" />}
        </button>

        <ul className={`${isOpen ? "flex fixed left-0 right-0 bottom-0 top-16 leading-7 bg-black flex-col" : "hidden  md:flex"} `}>
          <li className="ml-12 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-12 text-white">
            <Link to="/project">Projects</Link>
          </li>
          <li className="ml-12 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="ml-12 text-white mr-12">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
