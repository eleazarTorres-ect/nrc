import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const AboutUsContainer = () => {
  return (
    <div
      className="h-auto w-full flex flex-col-reverse sm:flex-row justify-between
      py-12 md:py-36  bg-japan-A-400
      px-2 sm:px-12 md:px-24 lg:px-48"
      id="aboutUs"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default AboutUsContainer;
