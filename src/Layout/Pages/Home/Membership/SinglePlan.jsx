import { Link } from "react-router-dom";
import imgOne from "/assets/checkOne.png";
import imgTwo from "/assets/checkTwo.png";
const SinglePlan = ({ plan }) => {
  const { planName, advantages, description, price } = plan;

  const bgColor = () => {
    if (planName === "Sliver") {
      return "bg-[#1c2230]";
    } else if (planName === "Gold") {
      return "bg-p1 text-p4";
    } else {
      return "bg-[#1c2230]";
    }
  };

  return (
    <>
      <div className={` p-8   rounded-xl mx-3 lg:mx-5 my-5  ${bgColor()} `}>
        <h2 className="text-center text-2xl font-medium ">{planName}</h2>

        <h2 className="text-center text-5xl lg:text-6xl font-medium mt-4 mb-4 lg:mb-8 ">
          ${price}
          <span className="text-xl font-normal ">/monthly</span>
        </h2>
        <div className=" ">
          {advantages?.map((item, index) => (
            <div key={index} className="mb-1 lg:mb-3 addFlexItems     gap-7 ">
              {" "}
              <img
                className="w-[30px]"
                src={planName === "Gold" ? imgOne : imgTwo}
              ></img>
              <p className="lg:text-base md:text-base text-sm">{item} </p>
            </div>
          ))}
        </div>
        <Link
          className="lg:mt-10 md:mt-5 mt-10  addFlexJustify"
          to={`/checkout/${planName}`}
        >
          <button
            className={`border border-white
               ${
                 planName === "Gold"
                   ? "border-none font-semibold bg-p3 text-white "
                   : ""
               }   font-medium py-3 px-10  rounded-full hover:shadow-lg hover:translate-y-2 transition-all duration-300`}
          >
            Make Deal
          </button>
        </Link>
      </div>
    </>
  );
};

export default SinglePlan;
