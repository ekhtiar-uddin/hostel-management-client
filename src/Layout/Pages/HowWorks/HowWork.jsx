import imgTwo from "/assets/add-user.png";
import imgThree from "/assets/dietitian.png";
import imgOne from "/assets/restaurant.png";

const HowWork = () => {
  const steps = [
    {
      id: 1,
      img: imgOne,
      title: "Choose Plan",
      desc: "Select a meal plan that fits your taste. Tailor your dining experience with our diverse options for culinary satisfaction.",
    },
    {
      id: 2,
      img: imgTwo,
      title: "Choose Nutritionist",
      desc: "Personalize your journey by picking a nutritionist. Our experts guide you towards healthier choices to enhance well-being.",
    },
    {
      id: 3,
      img: imgThree,
      title: "Signup",
      desc: "Sign up for a seamless culinary adventure! Join our community and enjoy stress-free, delicious meals delivered monthly.",
    },
  ];

  return (
    <div className="px-5 lg:px-0 md:px-16 py-16 lg:py-36 rounded-xl bg-[#0c1524]  ">
      <div className=" flex lg:flex-row flex-col  justify-center lg:gap-44  ">
        <div>
          <div className="mb-12 w-[70px] h-[5px] bg-white"></div>
          <div className="">
            <h2 className="mb-10 lg:mb-0 text-5xl md:text-3xl lg:text-5xl font-semibold">
              Build & manage
              <br className="md:hidden lg:block block" /> meal plans{" "}
              <br className="md:block lg:hidden hidden" />{" "}
              <br className="md:hidden lg:block block" /> like no one else.
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="mt-12 md:flex-row flex-col addFlexItems gap-5"
            >
              <div className="bg-[#2f666b] w-[50px] h-[50px] rounded-full">
                <img
                  className="w-[50px] -ml-4 -mt-3 h-[50px]"
                  src={step.img}
                  alt={step.title}
                />
              </div>
              <div key={step.id} className="">
                <h2 className="font-semibold md:text-left text-center  mb-2 text-2xl ">
                  {step.title}
                </h2>
                <p className="text-center md:text-left md:w-[500px] text-[#c7cdd1]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWork;
