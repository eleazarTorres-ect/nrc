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
      <section className="flex content-center justify-between h-screen w-full">
        <BannerContainer />
      </section>

      <NavigationBar />

      <section className="flex content-center justify-between screenFromNav h-auto w-full">
        <AboutUsContainer />
      </section>
      <section className="flex content-center justify-between screenFromNav h-auto w-full">
        <SubscriptionContainer />
      </section>
      <section className="flex content-center justify-between screenFromNav h-auto w-full">
        <BookContainer />
      </section>
      <section className="flex content-center justify-between screenFromNav h-auto w-full">
        <FooterContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
