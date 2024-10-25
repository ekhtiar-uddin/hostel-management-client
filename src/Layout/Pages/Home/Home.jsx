import { Helmet } from "react-helmet";

import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import HowWork from "../HowWorks/HowWork";
import WhyChoose from "../WhyChoose/WhyChoose";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MealsByCategory from "./MealsByCategory/MealsByCategory";
import Membership from "./Membership/Membership";
// -mx-16  lg:-mx-36
const Home = () => {
  return (
    <div className=" ">
      <Helmet>
        <title>Home | Mealvy.</title>
      </Helmet>
      <Banner></Banner>

      <div className="">
        <MealsByCategory></MealsByCategory>
        <About></About>
        <HowWork></HowWork>
        <WhyChoose></WhyChoose>
        <Membership></Membership>
        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Home;
