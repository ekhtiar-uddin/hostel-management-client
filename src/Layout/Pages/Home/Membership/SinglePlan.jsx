import { Link } from "react-router-dom";
import "../../../../Css/App.css";

const SinglePlan = ({ plan }) => {
  const { planName, advantages, description, price } = plan;

  const bgColor = () => {
    if (planName === "Sliver") {
      return "bg-[#272C2C]";
    } else if (planName === "Gold") {
      return "bg-[#411C23]";
    } else {
      return "bg-[#272C2C]";
    }
  };

  const buttonColor = () => {
    if (planName === "Sliver") {
      return "bg-[#556B6A]";
    } else if (planName === "Gold") {
      return "bg-[#EB3656]";
    } else {
      return "bg-[#556B6A]";
    }
  };

  return (
    <div className="singlePlan rounded-xl ">
      <div
        className={` box p-8   rounded-xl mx-3 lg:mx-5 my-5 h-[630px]  md:h-[500px] lg:h-[600px] text-white ${bgColor()} `}
      >
        <h2 className="text-center text-3xl font-bold ">{planName}</h2>

        <h2 className="text-center text-3xl lg:text-4xl font-medium mt-4 mb-4 lg:mb-8 ">
          ${price}
          <span className="text-base font-normal">/Monthly</span>
        </h2>
        <div className="h-[300px] md:h-[260px] lg:h-[280px] ">
          {advantages?.map((item, index) => (
            <div
              key={index}
              className="mb-1 lg:mb-3 flex items-center     gap-7 "
            >
              {" "}
              <img
                className="w-[30px]"
                src="https://i.ibb.co/Xbtd0n3/check-removebg-preview.png"
              ></img>
              <p className="lg:text-base md:text-base text-sm">{item} </p>
            </div>
          ))}
        </div>
        <Link
          className="lg:mt-20 md:mt-5 mt-32  flex justify-center"
          to={`/checkout/${planName}`}
        >
          <button
            className={`${buttonColor()}   font-medium py-3 px-7  rounded-lg hover:shadow-lg hover:translate-y-2 transition-all duration-300`}
          >
            Make Deal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePlan;
