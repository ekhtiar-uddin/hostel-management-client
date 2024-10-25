import "@smastrom/react-rating/style.css";
import "react-awesome-button/dist/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";
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
  // bg-[#211718]
  return (
    <>
      <div className="border-b-2 border-p1 rounded-3xl">
        <img className="h-[300px] w-full rounded-t-3xl" src={image}></img>
        <div className="  w-full  ">
          <div className="bg-p3 p-4 rounded-b-3xl">
            <div className="addFlexBetween my-1">
              <h2 className="  text-xl font-semibold ">
                {name?.split(" ")[0]} {name?.split(" ")[1]}
              </h2>
              <Rating
                className=""
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
              />
            </div>

            <div className=" flex items-center justify-between ">
              <div className="">
                <p className="  font-extralight ">Price ${price}</p>
              </div>
              <Link to={`/details/${_id}`}>
                <button className="btnAll  py-2 px-5 mt-3   text-p1  border pb-2 border-p1 rounded-full">
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
