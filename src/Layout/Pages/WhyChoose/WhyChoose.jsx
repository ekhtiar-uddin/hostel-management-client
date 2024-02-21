const WhyChoose = () => {
  return (
    <div className="lg:my-24">
      <h2 className="text-3xl lg:text-4xl uppercase text-center mb-16 lg:mb-20  text-white  font-extrabold">
        Why <span className=" text-[#EB3656] "> Choose Us?</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
        <div className="flex gap-5 lg:flex-row  flex-col">
          <div className="hover:bg-white border transition-all duration-150 border-[#EB3656] rounded-lg h-[100px] lg:w-[180px] lg:h-full flex items-center justify-center">
            <img
              className="w-[40px] lg:w-[60px]"
              src="https://i.ibb.co/fMKwyc5/diet.png"
            ></img>
          </div>

          <div>
            <h2 className="text-white  font-bold mb-1 lg:mb-3 text-xl lg:text-2xl">
              Balanced Diet
            </h2>
            <p className=" text-white  text-sm lg:text-base font-medium">
              {" "}
              Discover the perfect blend of nutrients for a healthy and
              nourishing lifestyle with balanced meals.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row  flex-col  gap-5">
          <div className="hover:bg-white border transition-all duration-150 border-[#EB3656] rounded-lg lg:w-[180px] h-[100px] lg:h-full flex items-center justify-center">
            <img
              className="w-[40px] lg:w-[60px]"
              src="https://i.ibb.co/NY6H8jJ/salad.png"
            ></img>
          </div>

          <div>
            <h2 className="text-white  font-bold mb-1 lg:mb-3 text-xl lg:text-2xl ">
              Variety Foods
            </h2>
            <p className=" text-white  text-sm lg:text-base font-medium">
              {" "}
              Indulge in a world of flavors and textures with our diverse range
              of delicious, nutritious options.
            </p>
          </div>
        </div>

        <div className="flex  lg:flex-row  flex-col gap-5">
          <div className="hover:bg-white border transition-all duration-150 border-[#EB3656] rounded-lg lg:w-[200px] h-[100px] lg:h-full  flex items-center justify-center">
            <img
              className="w-[40px] lg:w-[60px]"
              src="https://i.ibb.co/mSmM9HJ/weighing-machine.png"
            ></img>
          </div>

          <div className="">
            <h2 className="text-white  font-bold mb-1 lg:mb-3 text-xl lg:text-2xl">
              Control
            </h2>
            <p className=" text-white  text-sm lg:text-base font-medium">
              {" "}
              Take charge of your wellness journey by maintaining mindful
              portions and fostering self-discipline effortlessly.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row  flex-col  gap-5">
          <div className="hover:bg-white border transition-all duration-150 border-[#EB3656] rounded-lg lg:w-[220px] h-[100px] lg:h-full flex items-center justify-center">
            <img
              className="w-[40px] lg:w-[70px]"
              src="https://i.ibb.co/ZmKwhJP/exercise-1.png"
            ></img>
          </div>

          <div>
            <h2 className="text-white  font-bold mb-1 lg:mb-3 text-xl lg:text-2xl">
              Exercise
            </h2>
            <p className=" text-white  text-sm lg:text-base font-medium">
              {" "}
              Ignite your vitality with invigorating workouts, enhancing your
              overall well-being and promoting an active lifestyle .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
