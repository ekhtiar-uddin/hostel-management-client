import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import banner from "../../../../assets/bannerAnimation/Animation - 1706532449925";
const Banner = () => {
  return (
    <div className="lg:h-[66vh] mt-10 lg:mt-0 flex items-center ">
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-10 lg:gap-20  items-center">
        <div className="lg:w-2/3">
          <h2 className="text-3xl lg:text-3xl lg:text-4xl text-center text-white font-Inter font-extrabold">
            BEST FOOD FOR
            <span className=" text-[#EB3656]"> STUDENTS</span>
          </h2>
          <p className="text-center font-Inter mt-2 text-white">
            On campus dining locations provide an essential service for the CB
            community of students, staff, and faculty. Whether it’s comfort food
            for dinner take-out, sushi ordered via your mobile device for lunch,
            or a quick coffee and breakfast sandwich, you’ll find a variety of
            menu options to fill every craving.
          </p>

          <div className="flex justify-center">
            <Link to={`/login`}>
              <button className=" mt-4 px-6 lg:px-8 py-1 lg:py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 rounded-full bg-[#BFFCF9] text-[#000000] hover:text-white">
                Start Now
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
