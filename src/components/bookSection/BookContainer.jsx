import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import FujiSanComponent from "./FujiSanComponent";
import GrassComponent from "../bannerSection/GrassComponent";

const BookContainer = () => {
  return (
    <div
      className="h-screen w-full flex flex-col sm:flex-row justify-between
      pt-16 pb-20 bg-gradient-to-b from-purple-400 to-blue-200
      "
      id="book"
    >
      <FujiSanComponent />
      <GrassComponent />
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default BookContainer;
