import Logo1 from "../../assets/img/NRC-04.svg";
const GrassComponent = () => {
  return (
    <div className="h-screen w-screen absolute flex fixed flex-wrap content-end">
      <img
        className="w-screen h-auto transform -scale-x-1 -scale-y-1"
        src={Logo1}
        alt="Fuji"
        id="grass"
      />
    </div>
  );
};

export default GrassComponent;
