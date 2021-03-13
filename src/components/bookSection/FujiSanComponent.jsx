import Logo1 from "../../assets/img/NRC-02.svg";
const FujiSanComponent = () => {
  return (
    <div className="h-screen w-screen fixed flex absolute flex-wrap content-end">
      <img
        className="w-screen h-auto transform -scale-x-1 "
        src={Logo1}
        alt="Fuji"
        id="Fuji"
      />
    </div>
  );
};

export default FujiSanComponent;
