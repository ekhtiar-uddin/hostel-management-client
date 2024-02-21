import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../../../../src/Css/App.css";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
const SingleUpcoming = ({ meal }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
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
  } = meal;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    if (user) {
      setIsLiked(!isLiked);
      const mealId = _id;
      const title = name;
      const state = isLiked;
      const mealInfo = { title, mealId, state };
      axiosPublic.post("/likedMealsUpcoming", mealInfo).then((data) => {
        //    refetch() ;
        console.log(data.data);
      });
    } else {
      navigate("/login");
    }
  };
  const likeButtonStyle = {
    color: isLiked ? "green" : "black",
  };

  return (
    <div className=" upcomingCard">
      <div className="">
        <img className="" src={image}></img>
      </div>

      <h2 className="absolute top-3 right-3 bg-[#870012] px-2 rounded text-white  max-w-min  font-semibold mb-2">
        {category}
      </h2>

      <div
        style={{
          backgroundColor: "rgba(11, 11, 11, 0.80)",
        }}
        className=" upcomingCardContent bg-blend-overlay   text-white "
      >
        <h2 className="  pt-1 text-center text-2xl  font-semibold">
          {name?.split(" ")[0]} {name?.split(" ")[1]}
        </h2>

        <div className="flex gap-4 justify-center items-center">
          <p className=" font-semibold">
            $ <span className="text-xl">{price}</span>{" "}
          </p>
          <div>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-white transition-all duration-200 hover:bg-[#870012] bg-[#EB3656] px-6  py-2 rounded flex justify-center items-center "
            onClick={handleLikeClick}
            style={likeButtonStyle}
          >
            <AiOutlineLike className=" text-white text-xl "></AiOutlineLike>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUpcoming;
