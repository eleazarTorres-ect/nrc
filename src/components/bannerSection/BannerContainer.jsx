import FujiSanComponent from "./FujiSanComponent";
import GrassComponent from "./GrassComponent";
import HeadlineText from "./HeadlineText";
import SkyComponent from "./SkyComponent";
import TorriGateComponent from "./ToriiGateComponent";
import $ from "jquery";
const BannerContainer = () => {
  //let bg =  $("#home").offset().top;
  let bg = $("#home").css("top");
  let fuji = $("#fuji").css("top");
  let grass = $("#grass").css("right");
  let sky = $("#sky").css("top");
  let gate = $("#gate").css("top");
  let text = $("#text").css("top");

  window.addEventListener("scroll", function () {
    var value = $(window).scrollTop();

    $("#text").css("margin-top", value * 0.5 + "px");
  });

  return (
    <div
      className="h-screen  w-full  relative           
                bg-gradient-to-tl from-pink-200 to-blue-800"
      id="home"
    >
      <SkyComponent />
      <HeadlineText />

      <FujiSanComponent />
      <TorriGateComponent />
      <GrassComponent />
    </div>
  );
};

export default BannerContainer;
