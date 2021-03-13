import Logo1 from "../../assets/img/NRC-06.svg";
const RamenComponent = () => {
  return (
    <div className="flex relative flex-wrap content-center justify-start animate-bounce_idle shake m-0 p-0">
      <img className="h-36 w-36 shake-slow" src={Logo1} alt="Ramen" />
    </div>
  );
};

export default RamenComponent;
