import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const SubscriptionContainer = () => {
  return (
    <div
      className="h-auto  w-full flex flex-col sm:flex-row justify-between
                py-10 bg-pharma-A-400
                px-2 sm:px-24 md:px-24 lg:px-48"
      id="subscriptionContainer"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default SubscriptionContainer;
