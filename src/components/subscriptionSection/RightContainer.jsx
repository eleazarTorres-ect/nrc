const RightContainer = () => {
  return (
    <div className="flex flex-wrap content-center justify-center mt-5 md:mt-0">
      <div className=" flex flex-wrap w-4/5 lg:w-1/2 content-center justify-center">
        <div className="flex flex-grow flex-wrap content-center justify-center">
          <div className="p-4 md:p-8 w-full ">
            <div className="flex my-6 animate-bounce">
              <input
                className="border-pharma-A-200 placeholder-gray-600 shadow-md border border-opacity-100  px-3 py-2 rounded-full w-64"
                placeholder="Your email address"
              ></input>
              <button className="bg-japan-A-400 shadow-md show-modal px-3 py-2 rounded-full text-white w-24 lg:w-32 -ml-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
