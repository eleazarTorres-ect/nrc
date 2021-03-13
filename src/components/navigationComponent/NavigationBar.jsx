import $ from "jquery";
import React from "react";
import MenuComponent from "./MenuComponent";
import LogoNavComponent from "./LogoNavComponent";
const NavigationBar = () => {
  const navPadding =
    "px-2 py-2  sm:py-4 sm:px-24 md:px-24 lg:px-24 border-bottom-2  ";
  const navDisplay =
    "sticky top-0 fixed z-50 flex justify-center md:justify-end w-full bg-japan-A-400 bg-transparent";
  $(window).scroll(function () {
    var home = $("#home").offset().top;
    var aboutUs = $("#aboutUs").offset().top;
    var books = $("#book").offset().top - 500;
    var contactUs = $("#footer").offset().top - 540;
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 1330 && $(window).scrollTop() <= 1450) {
      $("#navBar").removeClass("bg-japan-A-400 ");
      $("#navBar").addClass("bg-purple-400");
    } else if ($(window).scrollTop() <= 1450) {
      $("#navBar").addClass("bg-japan-A-400");
      $("#navBar").removeClass("bg-purple-400");
    } else {
      $("#navBar").addClass("bg-transparent ");
      $("#navBar").removeClass("bg-purple-400");
    }
    if ($(window).scrollTop() >= home) {
      $("#homeNav").addClass("public_semibold border-b-2 ");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#bookNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
    }
    if ($(window).scrollTop() >= aboutUs) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#aboutUsNav").addClass("public_semibold border-b-2");
      $("#bookNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
    }
    if ($(window).scrollTop() >= books) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#bookNav").addClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
    }
    if ($(window).scrollTop() >= contactUs) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#bookNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").addClass("public_semibold border-b-2");
    }
  });
  return (
    <nav className={navDisplay + navPadding} id="navBar">
      <div className="flex items-center flex-grow hidden md:flex">
        <LogoNavComponent image="" />
      </div>
      <div className="flex items-center text-xs public_thin">
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Home"
        />
        <MenuComponent
          linkReference="#aboutUs"
          id="aboutUsNav"
          status="active"
          label="About"
        />
        <MenuComponent
          linkReference="#book"
          id="bookNav"
          status="active"
          label="Book"
        />
        <MenuComponent
          linkReference="#footer"
          id="contactUsNav"
          status="active"
          label="Contact"
        />
      </div>
    </nav>
  );
};
export default NavigationBar;
