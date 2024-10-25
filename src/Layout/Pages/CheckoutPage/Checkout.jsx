import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import CheckOutForm from "./checkOutForm";

console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Checkout = () => {
  const plan = useLoaderData();
  const [item] = plan;

  return (
    <div className="mt-20">
      <h2 className="text-3xl lg:text-4xl  text-center mb-10 lg:mb-10    font-bold">
        Payment <span className=" text-p1 "> details</span>
      </h2>
      <div className=" bg-p6 rounded-3xl h-[50vh] lg:w-[40%] mx-auto p-10">
        <div className="addFlexJustify">
          <div>
            <div className="addFlexBetween">
              <p className="  text-4xl  ">{item.planName}</p>

              <p className="text-5xl  font-semibold text-p1">
                <span className="font-thin">$</span>
                {item.price}
              </p>
            </div>

            <div className="addFlexJustify gap-4 my-8">
              <img
                className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-xl"
                src="https://i.ibb.co/ykChZxf/Visa-Straight.png"
              ></img>
              <img
                className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-xl"
                src="https://i.ibb.co/x3HfnTM/Mastercard-Curved.png"
              ></img>
              <img
                className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-xl"
                src="https://i.ibb.co/8NdBnxF/Discover-Straight.png"
              ></img>
              <img
                className="w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] rounded-xl"
                src="https://i.ibb.co/j4y84Zj/Delta-Curved.png"
              ></img>
            </div>
            <div className="lg:w-[350px]">
              <Elements stripe={stripePromise}>
                <CheckOutForm item={item}></CheckOutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
};

export default Checkout;
