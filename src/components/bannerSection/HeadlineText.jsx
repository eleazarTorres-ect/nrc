import Logo1 from "../../assets/img/NRC-03.svg";
const HeadlineText = () => {
  return (
    <div className="h-screen w-full absolute flex flex-wrap justify-center md:justify-end content-start pt-36 lg:pt-96 xl:pt-48 2xl:pt-36 px-20 lg:px-36">
      <div>
        <div
          className="poppins_bold text-white  text-center xl:text-right"
          id="text"
        >
          <p className="text-7xl md:text-9xl"> Japan Hub</p>
          <p className="text-lg poppins_regular">
            {" "}
            A Portal to the Land of Rising Sun
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadlineText;
