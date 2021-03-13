import Logo1 from "../../assets/img/book.jpg";

const RightContainer = () => {
  return (
    <div className="flex flex-wrap content-start w-full px-2 md:content-center lg:content-start h-100">
      <div className="flex flex-wrap content-center justify-center w-full ">
        <div className="flex flex-wrap content-center justify-center w-full ">
          <img
            className="h-48 mt-5 rounded-lg shadow-xl shake lg:h-72 lg:w-auto md:mt-0"
            src={Logo1}
            alt="Banner"
            data-aos="fade-left"
            data-aos-duration="500"
          />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
