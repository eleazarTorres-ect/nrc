import EndNoteComponent from "./EndNoteComponent";
import FooterComponent from "./FooterComponent";
const FooterContainer = () => {
  return (
    <div
      className="h-auto w-full justify-between
        pt-32 pb-5 bg-japan-A-400
        px-2 sm:px-24 md:px-24 lg:px-48"
      id="footer"
    >
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <FooterComponent
          columnTitle="Community"
          data={["Facebook", "Twitter", "Instagram", "Youtube"]}
        />
        <FooterComponent
          columnTitle="About Us"
          data={["History", "Blog", "Location"]}
        />
        <FooterComponent
          columnTitle="Books"
          data={[
            "Japanese Expressions",
            "Kyoto Travel Guide",
            "Japanese Grammar for Beginners",
            "100 Must Have When Traveling Japan",
          ]}
        />
        <FooterComponent
          columnTitle="Other Products"
          data={["Kanji Workbook", "Kanji Flashcard", "Eng - Jap Dictionary"]}
        />
      </div>
      <EndNoteComponent />
    </div>
  );
};

export default FooterContainer;
