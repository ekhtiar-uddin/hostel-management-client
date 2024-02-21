const HowWork = () => {
  return (
    <div className="my-16 lg:my-36">
      <h2 className="text-3xl lg:text-4xl uppercase text-center mb-10 lg:mb-20  text-white  font-extrabold">
        How it <span className=" text-[#EB3656] "> Works</span>
      </h2>

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="border transition-all duration-150 hover:border-[#EB3656] p-10 rounded-xl">
          <img
            className="w-[100px] mx-auto"
            src="https://i.ibb.co/Lkzyv0b/restaurant-1.png"
          ></img>
          <h2 className="text-white  font-bold mt-7 mb-3 text-2xl text-center">
            Choose Plan
          </h2>
          <p className="text-white  ">
            Select the perfect meal plan that fits your taste and dietary
            preferences. Tailor your dining experience to your liking with our
            diverse options, ensuring a month of culinary satisfaction.
          </p>
        </div>
        <div className="border transition-all duration-150 hover:border-[#EB3656] p-10 rounded-xl">
          <img
            className="w-[100px] mx-auto"
            src="https://i.ibb.co/TY22fSW/dietitian.png"
          ></img>
          <h2 className="text-white  font-bold mt-7 mb-3 text-2xl text-center">
            Choose Nutritionist
          </h2>
          <p className="text-white  ">
            Personalize your wellness journey by picking a dedicated
            nutritionist. Our experts will guide you towards healthier food
            choices, offering support and knowledge to enhance your overall
            well-being.
          </p>
        </div>
        <div className="border transition-all duration-150 hover:border-[#EB3656] p-10 rounded-xl">
          <img
            className="w-[100px] mx-auto"
            src="https://i.ibb.co/gP3JbXP/add-user.png"
          ></img>
          <h2 className="text-white  font-bold mt-7 mb-3 text-2xl text-center">
            Signup
          </h2>
          <p className="text-white  ">
            Embark on a seamless culinary adventure – sign up now! Join our
            community, unlock exclusive benefits, and enjoy the convenience of
            stress-free, delicious meals delivered right to your doorstep every
            month.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
