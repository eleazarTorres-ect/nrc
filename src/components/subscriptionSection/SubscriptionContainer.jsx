import LeftContainer from "./LeftContainer";
import RamenComponent from "./RamenComponent";
import RightContainer from "./RightContainer";

const SubscriptionContainer = () => {
  // <RamenComponent />
  return (
    <div
      className="h-auto  w-full flex flex-col sm:flex-row justify-center
                pt-0 pb-20 md:pb-12 xl:pb-20 bg-purple-400 
                px-4 sm:px-24 md:px-24 lg:px-36"
      id="subscription"
    >
      <div className="flex">
        <div className="shadow-2xl border bg-white flex shake-slow flex-wrap justify-center px-5 md:px-10 mt-10 md:-mt-20 rounded-lg w-full">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
