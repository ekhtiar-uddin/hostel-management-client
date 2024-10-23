import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import UseAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
const SingleUpcoming = ({ meal, upcomingRefetch }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const userEmail = user?.email;
  const [toggle, setToggle] = useState(false);
  const userId = user?.uid;
  const [productions, setProductions] = useState([]);
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
    likedUsers,
  } = meal;

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("productions"));
    setProductions(arr);
  }, []);

  const handleLikeClick = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    const newLikesCount = toggle ? likes - 1 : likes + 1;
    await axiosPublic
      .patch(`/upcomingToggle/${_id}`, { isLiked: toggle })
      .then(() => {
        upcomingRefetch();
        setToggle(!toggle);
      })
      .catch((err) => console.log(err));

    await axiosPublic
      .patch(`/upcominglikeAddRemove/${_id}`, {
        userLiked: toggle,
        uid: userId,
      })
      .then((res) => {
        upcomingRefetch();
        let arr = JSON.parse(localStorage.getItem("likesData")) || [];
        const isMatch = arr?.find((item) => item.id === _id);
        if (!isMatch) {
          const all = [...arr, { id: _id }];
          localStorage.setItem("likesData", JSON.stringify(all));
        } else {
          const filtered = arr.filter((item) => item.id !== _id);
          localStorage.setItem("likesData", JSON.stringify(filtered));
        }
      })
      .catch((err) => console.log(err));

    console.log("inside hanlde", newLikesCount);

    if (newLikesCount >= 10) {
      console.log("inside", productions);
      const isExist = productions?.find((item) => item.mealId === _id);
      if (!isExist) {
        await axiosPublic
          .post("/addToProductionList", {
            name,
            category,
            image,
            likes: newLikesCount,
            price,
            postTime,
            mealId: _id,
          })
          .then((res) => {
            if (res.data?.result?.insertedId) {
              toast.success("added to upcoming");
              setProductions(res.data?.allProductions);
              localStorage.setItem(
                "productions",
                JSON.stringify(res.data?.allProductions)
              );
            }
          });
      }
    }
  };

  console.log("produc", productions);

  useEffect(() => {
    const likesData = JSON.parse(localStorage.getItem("likesData"));
    const isMatch = likesData?.find((item) => item.id === _id);
    if (isMatch) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [_id]);

  return (
    <div className=" upcomingCard">
      <div className="">
        <img className="h-[370px] w-full" src={image}></img>
      </div>

      <h2 className="absolute top-3 right-3 bg-[#870012] px-2 rounded   max-w-min  font-semibold mb-2">
        {category}
      </h2>
      <h2 className="absolute top-3 left-3 bg-[#870012] px-2 rounded    font-semibold mb-2">
        Likes {likes}
      </h2>

      <div
        style={{
          backgroundColor: "rgba(11, 11, 11, 0.80)",
        }}
        className=" upcomingCardContent bg-blend-overlay    "
      >
        <h2 className="  pt-1 text-center text-2xl  font-semibold">
          {name?.split(" ")[0]} {name?.split(" ")[1]}
        </h2>

        <div className="addFlex gap-4 ">
          <p className=" font-semibold">
            $ <span className="text-xl">{price}</span>{" "}
          </p>
          <div>
            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          </div>
        </div>
        <div className="addFlexJustify">
          {toggle && (
            <button onClick={handleLikeClick}>
              <MdFavorite className=" text-5xl text-p1" />
            </button>
          )}
          {!toggle && (
            <button onClick={handleLikeClick}>
              <MdOutlineFavoriteBorder className=" text-5xl text-p1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleUpcoming;
