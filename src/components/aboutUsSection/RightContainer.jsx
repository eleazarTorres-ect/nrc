import Logo1 from "../../assets/img/NRC-07.svg";

const RightContainer = () => {
  return (
    <div className=" flex flex-wrap w-full lg:w-1/2 content-center justify-end">
      <div
        className="flex flex-grow flex-wrap content-center justify-center md:justify-end"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <img className="h-80 md:h-96 p-5 md:p-10" src={Logo1} alt="Banner" />
      </div>
    </div>
  );
};

export default RightContainer;
