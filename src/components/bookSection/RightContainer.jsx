import Logo1 from "../../assets/img/book.jpg";

const RightContainer = () => {
  return (
    <div className="pl-2  sm:pl-24 md:pl-24 lg:pl-48">
      <div className=" flex flex-wrap w-full lg:w-1/2 content-center justify-center ">
        <div className="flex flex-grow flex-wrap content-center justify-center">
          <img
            className="h-48 rounded-lg shadow-xl shake lg:h-full"
            src={Logo1}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
