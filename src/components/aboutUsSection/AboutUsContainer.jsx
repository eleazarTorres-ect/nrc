import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const AboutUsContainer = () => {
  return (
    <div
      className="h-auto w-full flex flex-col sm:flex-row justify-between
      pt-36 pb-36 bg-japan-A-400
      px-2 sm:px-24 md:px-24 lg:px-48"
      id="aboutUs"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default AboutUsContainer;
