import React from "react";
import AboutUsContainer from "../components/aboutUsSection/AboutUsContainer";
import BannerContainer from "../components/bannerSection/BannerContainer";
import NavigationBar from "../components/navigationComponent/NavigationBar";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <section className="flex content-center justify-between h-screen w-full">
        <BannerContainer />
      </section>

      <NavigationBar />

      <section className="flex content-center justify-between screenFromNav h-auto w-full">
        <AboutUsContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
