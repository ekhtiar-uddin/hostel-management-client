import imgOne from "/assets/diet-1.png";
import imgFour from "/assets/exercise.png";
import imgTwo from "/assets/salad.png";
import imgThree from "/assets/weighing-machine.png";

const items = [
  {
    image: imgOne,
    title: "Balanced Diet",
    description:
      "Discover the blend of nutrients for a healthy, nourishing lifestyle.",
  },
  {
    image: imgTwo,
    title: "Variety Foods",
    description:
      "Indulge in a range of flavors and textures with our nutritious options.",
  },
  {
    image: imgThree,
    title: "Control",
    description:
      "Take charge of your journey by maintaining portions and fostering discipline.",
  },
  {
    image: imgFour,
    title: "Exercise",
    description:
      "Ignite your vitality with workouts, promoting an active lifestyle.",
  },
];

const WhyChoose = () => {
  return (
    <div className="lg:my-24  my-16">
      {/* <h2 className="text-3xl lg:text-4xl text-center mb-16 lg:mb-14 font-bold">
        Why <span className="text-p1">choose us?</span>
      </h2> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 ">
        {items.map((item, index) => (
          <div key={index} className="">
            <div className={`w-[70px] h-[70px] mx-auto`}>
              <img
                className="w-[120px] lg:w-[120px]"
                src={item.image}
                alt={item.title}
              />
            </div>

            <h2 className="text-center font-semibold  mt-4 text-xl lg:text-2xl">
              {item.title}
            </h2>
            <p className="text-[#858992] lg:w-[400px] mx-auto text-center  font-medium mt-1">
              {item.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit, omnis!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
