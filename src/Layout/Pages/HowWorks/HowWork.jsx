import imgTwo from "/assets/add-user.png";
import imgThree from "/assets/dietitian.png";
import imgOne from "/assets/restaurant.png";

const HowWork = () => {
  return (
    <div className="my-16 lg:my-36">
      <h2 className="text-3xl lg:text-4xl  text-center mb-10 lg:mb-14 font-semibold">
        How it <span className=" text-p1 "> works</span>
      </h2>

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="border transition-all duration-150 hover:border-p1 p-10 rounded-xl">
          <img className="w-[100px] mx-auto" src={imgOne}></img>
          <h2 className="font-bold mt-7 mb-3 text-2xl text-center">
            Choose Plan
          </h2>
          <p className="">
            Select a meal plan that fits your taste. Tailor your dining
            experience with our diverse options for culinary satisfaction.
          </p>
        </div>
        <div className="border transition-all duration-150 hover:border-p1 p-10 rounded-xl">
          <img className="w-[100px] mx-auto" src={imgTwo}></img>
          <h2 className="font-bold mt-7 mb-3 text-2xl text-center">
            Choose Nutritionist
          </h2>
          <p className="">
            Personalize your journey by picking a nutritionist. Our experts
            guide you towards healthier choices to enhance well-being.
          </p>
        </div>
        <div className="border transition-all duration-150 hover:border-p1 p-10 rounded-xl">
          <img className="w-[100px] mx-auto" src={imgThree}></img>
          <h2 className="font-bold mt-7 mb-3 text-2xl text-center">Signup</h2>
          <p className="">
            Sign up for a seamless culinary adventure! Join our community and
            enjoy stress-free, delicious meals delivered monthly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
