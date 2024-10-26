import imgOne from "/assets/diet.png";
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
    <div className="lg:my-24">
      <h2 className="text-3xl lg:text-4xl text-center mb-16 lg:mb-14 font-bold">
        Why <span className="text-p1">choose us?</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex lg:flex-row flex-col gap-5">
            <div
              className={`border transition-all duration-150 border-p1 rounded-lg  w-[150px] h-[120px]   addFlexItems justify-center`}
            >
              <img
                className="w-[60px] lg:w-[60px]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div>
              <h2 className="text-center md:text-left font-bold mb-1 lg:mb-3 text-xl lg:text-2xl">
                {item.title}
              </h2>
              <p className="md:block hidden font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
