import { BrowserRouter, NavLink } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="flex flex-wrap content-center w-full lg:w-1/2">
      <div>
        <div className="public_extrabold text-3xl  text-left">Newsletter</div>
        <div className="poppins_semibold text-md  text-left">
          Get a chance to have a treat from us by subscribing to our newsletter.
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
