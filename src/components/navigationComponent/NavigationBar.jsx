import $ from "jquery";
import React from "react";
import MenuComponent from "./MenuComponent";
import LogoNavComponent from "./LogoNavComponent";
const NavigationBar = () => {
  const navPadding =
    "px-2 py-2  sm:py-4 sm:px-24 md:px-24 lg:px-24 border-bottom-2  ";
  const navDisplay =
    "sticky top-0 fixed z-50 flex justify-center md:justify-end w-full bg-japan-A-400 bg-transparent";

  return (
    <nav className={navDisplay + navPadding}>
      <div className="flex flex-grow items-center hidden md:flex">
        <LogoNavComponent image="" />
      </div>
      <div className="flex items-center public_thin text-xs">
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Home"
        />
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="About"
        />
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Books"
        />
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Contact"
        />
      </div>
    </nav>
  );
};
export default NavigationBar;
