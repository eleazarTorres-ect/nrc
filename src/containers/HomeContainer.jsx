import React from "react";
import AboutUsContainer from "../components/aboutUsSection/AboutUsContainer";
import BannerContainer from "../components/bannerSection/BannerContainer";
import BookContainer from "../components/bookSection/BookContainer";
import FooterContainer from "../components/footerSection/FooterContainer";
import NavigationBar from "../components/navigationComponent/NavigationBar";
import SubscriptionContainer from "../components/subscriptionSection/SubscriptionContainer";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <section className="flex content-center justify-between w-full h-screen">
        <BannerContainer />
      </section>

      <NavigationBar />

      <section className="flex content-center justify-between w-full h-auto screenFromNav ">
        <AboutUsContainer />
      </section>
      <section className="flex content-center justify-between w-full h-auto screenFromNav ">
        <SubscriptionContainer />
      </section>
      <section className="flex content-center justify-between w-full h-auto screenFromNav ">
        <BookContainer />
      </section>
      <section className="flex content-center justify-between w-full h-auto screenFromNav">
        <FooterContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
