import Logo1 from "../../assets/img/NRC-03.svg";
const TorriGateComponent = () => {
  return (
    <div className="h-screen absolute fixed flex flex-wrap content-end">
      <img className="w-screen h-auto" src={Logo1} alt="Fuji" id="gate" />
    </div>
  );
};

export default TorriGateComponent;
