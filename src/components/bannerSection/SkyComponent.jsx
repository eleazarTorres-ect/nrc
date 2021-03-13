import Logo1 from "../../assets/img/NRC-05.svg";
const SkyComponent = () => {
  return (
    <div className="h-screen w-screen absolute fixed flex flex-wrap content-start">
      <img className="w-screen h-auto" src={Logo1} alt="Sky" id="sky" />
    </div>
  );
};

export default SkyComponent;
