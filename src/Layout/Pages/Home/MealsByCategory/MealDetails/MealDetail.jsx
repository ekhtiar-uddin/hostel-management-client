import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useForm } from "react-hook-form";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/navigation";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import { useFetchGlobal } from "../../../../../Hooks/useFetchGlobal";
import UseReviewTitle from "../../../../../Hooks/UseReviewTitle";
import UseToastify from "../../../../../Hooks/UseToastify";
import SocialLink from "../../../../../Shared/SocialLinks/SocialLink";
import Footer from "../../Footer/Footer";
const MealDetail = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [mealDetails, loading, refetch] = useFetchGlobal(`/meals/${id}`);
  const [toggle, setToggle] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
  } = mealDetails;

  console.log("name email", adminName, adminEmail);

  const [allReviews, loadingReview, refetchReviews] = UseReviewTitle(name);
  useEffect(() => {
    if (name) {
      refetchReviews();
    }
  }, [name, refetchReviews]);
  const { register, handleSubmit } = useForm();

  const handleLikeClick = () => {
    if (user) {
      const mealId = _id;
      axiosPublic
        .patch(`/likedMeals/${mealId}`, { userLiked: toggle })
        .then(() => {
          refetch();
          setToggle(!toggle);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };

  const handleMealRequest = () => {
    if (user) {
      const title = name;
      const likeNumber = likes;
      const userName = user?.displayName;
      const userEmail = user?.email;
      const status = "pending";
      const reviews = allReviews.length;
      const img = image;
      const detailsId = _id;
      const requestedMealInfo = {
        title,
        likeNumber,
        status,
        reviews,
        userName,
        userEmail,
        img,
        detailsId,
      };

      if (user?.email === adminEmail) {
        UseToastify("error", `You can't make request to your added meals!`);
      } else {
        axiosSecure.post("/mealRequest", requestedMealInfo).then((data) => {
          if (data.data.insertedId) {
            UseToastify("success", ` You have done a Request!`);
          }
        });
      }
    } else {
      UseToastify("error", `You Need to Login First to request!`);

      navigate("/login");
    }
  };

  const onSubmit = async (data) => {
    const userEmail = user?.email;
    const title = name;
    const likeNumber = likes;
    const reviewTitle = data.review;
    const detailsId = _id;
    const img = image;
    const reviewInfo = {
      title,
      likeNumber,
      reviewTitle,
      userEmail,
      detailsId,
      img,
    };

    axiosSecure.post(`/reviews`, reviewInfo).then((data) => {
      if (data.data.insertedId) {
        axiosSecure
          .patch(`/increaseReview/${_id}`)
          .then(() => {})
          .catch((err) => console.log(err));
        refetchReviews();
        UseToastify("success", `You have added a Review!`);
      }
    });
  };

  return (
    <div>
      <div className=" my-20">
        <div className="relative">
          <div className="flex  gap-5 lg:flex-row flex-col-reverse  ">
            <div className="addFlexJustify lg:w-1/2  lg:items-center">
              <div className="">
                <div className="addFlexJustify mb-5">
                  <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                </div>
                <h2 className="text-3xl lg:text-4xl text-center   font-bold mb-5">
                  <span className=" text-p1  ">
                    {" "}
                    {name?.split(" ")[0]} {name?.split(" ")[1]}
                  </span>
                </h2>
                <p className=" text-center  mt-2 ">
                  {description?.slice(0, 210)}
                </p>
                <div className="mt-8 addFlex  gap-2">
                  <button
                    onClick={handleMealRequest}
                    className=" btnAllGlobal 
                  bg-d2  "
                  >
                    {" "}
                    <span className="text-white "> Make Request</span>
                  </button>

                  {toggle && (
                    <button onClick={handleLikeClick}>
                      <MdOutlineFavoriteBorder className=" text-5xl text-p1" />
                    </button>
                  )}
                  {!toggle && (
                    <button onClick={handleLikeClick}>
                      <MdFavorite className=" text-5xl text-p1" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div
              className="border lg:hidden border-[#444] bg-[#161515]  rounded-xl 
             "
            >
              <div className="py-7 px-4 ">
                <div className="flex gap-3 lg:gap-5 justify-center">
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    {postTime}
                  </h2>{" "}
                  <span className="hidden lg:block  ext-xl mb-2   font-medium  text-center">
                    ||
                  </span>
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    <span className="lg:block hidden"> Total</span> Review{" "}
                    {allReviews?.length}
                  </h2>
                  <span className="hidden lg:block ext-xl mb-2   font-medium  text-center">
                    ||
                  </span>
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    Likes {likes}
                  </h2>
                </div>
                <h2 className="text-xl lg:text-2xl mb-2   font-bold  text-center">
                  Ingredients :
                </h2>
                <div className="addFlex flex-wrap   mx-auto ">
                  {ingredient?.slice(0, 4).map((item, index) => (
                    <span
                      key={index}
                      className="mr-3 text-center text-sm lg:text-[17px]  font-medium  addFlexItems gap-2"
                    >
                      {" "}
                      <TiTick className="hidden lg:block text-2xl text-p5"></TiTick>{" "}
                      {item}{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="">
              <img
                className="lg:w-[700px] lg:h-[700px] rounded-3xl"
                src={image}
              ></img>
            </div>
          </div>

          <div
            className="bg-d2  rounded-xl 
            lg:w-2/3  absolute lg:bottom-0 hidden lg:block"
          >
            <div className="py-7 ">
              <div className="addFlexJustify gap-3 lg:gap-5 ">
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  {postTime}
                </h2>{" "}
                <span className="hidden lg:block  mb-2   font-medium  text-center">
                  ||
                </span>
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  Total Review {allReviews?.length}
                </h2>
                <span className="hidden lg:block  text-xl mb-2   font-medium  text-center">
                  ||
                </span>
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  Likes {likes}
                </h2>
              </div>
              <h2 className="text-xl lg:text-2xl mb-2   font-bold  text-center">
                Ingredients :
              </h2>
              <div className="addFlex  flex-wrap   mx-auto  ">
                {ingredient?.slice(0, 4).map((item, index) => (
                  <span
                    key={index}
                    className="mr-3 text-center text-sm lg:text-[17px]  font-medium  addFlexItems gap-2"
                  >
                    {" "}
                    <TiTick className="hidden lg:block text-2xl text-[#870012]"></TiTick>{" "}
                    {item}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="  text-center  my-10  text-3xl lg:text-4xl font-bold ">
        Add Your <span className="text-p1">Thoughts</span> Here{" "}
      </h2>
      <div className="flex lg:flex-row flex-col gap-10 ">
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="outline-none rounded w-full bg-d2 h-[15vh]
               md:h-[20vh] mb-3 pl-5 pt-5  text-sm"
              {...register("review", { required: true })}
              id=""
              cols="50"
              rows="6"
            ></textarea>

            <div className="addFlexJustify lg:justify-normal">
              <button className="btnAllGlobal  bg-d2 ">
                <span className="text-white "> Make Review</span>
              </button>{" "}
            </div>
          </form>
        </div>{" "}
        {/* <Lottie animationData={banner} loop={true} /> */}
        <div className="lg:w-[50%]">
          <Slider {...settings}>
            {allReviews.map((item) => (
              <div
                key={item._id}
                className="bg-p3 rounded   h-[25vh]
            md:h-[20vh]  addFlex items-center "
              >
                <p className="p-4"> {item?.reviewTitle}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
};

export default MealDetail;
