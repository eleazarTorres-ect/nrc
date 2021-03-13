import { BrowserRouter, NavLink } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="flex flex-wrap content-center justify-center w-full xl:w-1/2">
      <div>
        <div className="public_extrabold text-3xl  mt-5 xl:mt-0 text-center xl:text-left">
          Newsletter
        </div>
        <div className="poppins_semibold text-sm md:text-md  text-center xl:text-left">
          Get a chance to have a treat from us by subscribing to our newsletter.
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
