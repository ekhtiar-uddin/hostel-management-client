import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import banner from "../../../../assets/bannerAnimation/Animation - 1706532449925";
const Banner = () => {
  return (
    <div className="lg:h-[66vh] mt-10 lg:mt-0 addFlexItems ">
      <div className="addFlex  lg:flex-row flex-col-reverse  gap-10 lg:gap-20  ">
        <div className="lg:w-2/3">
          <h2
            className="text-3xl lg:text-4xl text-center 
          font-extrabold"
          >
            BEST FOOD FOR
            <span className=" text-p1"> STUDENTS</span>
          </h2>
          <p className="text-center  mt-2 ">
            On campus dining locations provide an essential service for the CB
            community of students, staff, and faculty. Whether it’s comfort food
            for dinner take-out, sushi ordered via your mobile device for lunch,
            or a quick coffee and breakfast sandwich, you’ll find a variety of
            menu options to fill every craving.
          </p>

          <div className="addFlexJustify">
            <Link to={`/login`}>
              <button className="btnAll mt-4 px-6 lg:px-8 py-1 lg:py-2   font-medium  transition-all duration-200 rounded bg-p1 ">
                <span className=""> Start Now</span>
              </button>{" "}
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
