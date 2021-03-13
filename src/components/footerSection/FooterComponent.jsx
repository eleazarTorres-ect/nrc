const FooterComponent = ({ columnTitle, data }) => {
  return (
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        {columnTitle}
      </div>
      <div className="text-md public_light">
        <ul id="skillList">
          {data.map((listitem) => (
            <li className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
              {listitem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterComponent;
