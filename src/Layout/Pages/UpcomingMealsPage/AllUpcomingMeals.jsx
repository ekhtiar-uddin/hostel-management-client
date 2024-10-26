import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import banner from "../../../assets/bannerAnimation/upcoming";
import Footer from "../Home/Footer/Footer";
import SingleUpcoming from "./SingleUpcoming";
const AllUpcomingMeals = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: upcomingMeals = [],
    isLoading: loading,
    refetch: upcomingRefetch,
  } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingMeals");
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Upcoming Meals | Mealvy.</title>
      </Helmet>

      <div className="addFlexBetween gap-4 lg:gap-10 flex-col-reverse lg:flex-row  ">
        <div className="addFlexItems lg:w-2/4 ">
          <div className="">
            <h2 className="headTitle">
              Upcoming
              <span className=" text-p1 "> food</span>
            </h2>

            <p className=" text-center  mt-2 ">
              Welcome to our Upcoming Meals Showcase! Get ready to embark on a
              culinary journey with our carefully curated selection of upcoming
              meals. Each dish is a masterpiece, crafted with passion and
              precision to tantalize your taste buds.
            </p>
            <Link to={`/allMeals`}>
              <div className="addFlexJustify">
                <button className="btnAllGlobal bg-p1 mt-4 ">
                  <span className=""> Eat Healthy </span>
                </button>{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          {" "}
          <Lottie className="w-[600px]" animationData={banner} loop={true} />
        </div>
      </div>

      <div className="mb-20 mt-10 lg:mt-0">
        <h2 className="text-2xl lg:text-3xl mb-7   font-medium ">
          Like your <span className="text-p1">favorite</span> one{" "}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {upcomingMeals?.map((meal) => (
            <SingleUpcoming
              key={meal._id}
              upcomingMeals={upcomingMeals}
              upcomingRefetch={upcomingRefetch}
              meal={meal}
            ></SingleUpcoming>
          ))}
        </div>
      </div>

      <Footer></Footer>

      <SocialLink></SocialLink>
    </div>
  );
};

export default AllUpcomingMeals;
