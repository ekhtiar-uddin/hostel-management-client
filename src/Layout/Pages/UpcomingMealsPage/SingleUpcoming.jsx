import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../../src/Css/App.css";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
const SingleUpcoming = ({ meal, upcomingRefetch }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const userEmail = user?.email;

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
    toggle,
  } = meal;

  const handleLikeClick = async () => {
    if (!user) {
      navigate("/login");
    }
    if (likes < 10) {
      await axiosPublic
        .patch(`/upcomingToggle/${_id}`, { isLiked: toggle })
        .then(() => {
          upcomingRefetch();
        })
        .catch((err) => console.log(err));

      await axiosPublic
        .patch(`/UpcominglikedMeals/${_id}`, { userLiked: toggle })
        .then(() => {
          upcomingRefetch();
        })
        .catch((err) => console.log(err));
    } else {
      await axiosPublic
        .post("/addToProductionList", {
          name,
          category,
          image,
          likes,
          price,
          postTime,
        })
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("added to upcoming");
          }
        });
    }
  };

  return (
    <div className=" upcomingCard">
      <div className="">
        <img className="h-[370px] w-full" src={image}></img>
      </div>

      <h2 className="absolute top-3 right-3 bg-[#870012] px-2 rounded text-white  max-w-min  font-semibold mb-2">
        {category}
      </h2>
      <h2 className="absolute top-3 left-3 bg-[#870012] px-2 rounded text-white   font-semibold mb-2">
        Likes {likes}
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
          {toggle && (
            <button onClick={handleLikeClick}>
              <MdFavorite className=" text-5xl text-[#EB3656]" />
            </button>
          )}
          {!toggle && (
            <button onClick={handleLikeClick}>
              <MdOutlineFavoriteBorder className=" text-5xl text-[#EB3656]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUpcoming;
