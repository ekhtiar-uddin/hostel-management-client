import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-awesome-button/dist/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import UseAuth from "../../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import "../MealCard/MealCard.css";
const MealCard = ({ item }) => {
  const {
    name,
    category,
    price,
    postTime,
    rating,
    likes,
    review,
    adminName,
    adminEmail,
    ingredient,
    description,
    image,
    _id,
  } = item;

  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();

  return (
    <>
      <div className="meal relative h-[330px]  ">
        <img className="h-full w-full rounded-3xl" src={image}></img>
        <div className="rounded-3xl info bottom-0 absolute w-full bg-[#211718]  h-1/3 addFlex">
          <div className="w-[90%]">
            <h2 className=" mt-4  text-xl font-bold text-center">
              {name?.split(" ")[0]} {name?.split(" ")[1]}
            </h2>
            <div className=" addFlexJustify gap-8">
              <Rating
                className=""
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
              <p className="  text-xl font-semibold ">Price ${price}</p>
            </div>
            <div className="addFlexJustify">
              <Link to={`/details/${_id}`}>
                <button className="btnAll py-2 px-5 mt-3 invisible   font-medium   rounded bg-p1 ">
                  <span className=""> Explore More</span>
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCard;
