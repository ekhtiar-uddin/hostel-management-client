import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useForm } from "react-hook-form";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import UseFetch from "../../../../../Hooks/UseFetch";
import UseReviewTitle from "../../../../../Hooks/UseReviewTitle";
import SocialLink from "../../../../../Shared/SocialLinks/SocialLink";
import banner from "../../../../../assets/bannerAnimation/is5WNsFx8i.json";
import Footer from "../../Footer/Footer";
const MealDetail = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [mealDetails, loading, refetch] = UseFetch(`/meals/${id}`);
  const [toggle, setToggle] = useState(true);

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
      const requestedMealInfo = {
        title,
        likeNumber,
        status,
        reviews,
        userName,
        userEmail,
        img,
      };

      axiosSecure.post("/mealRequest", requestedMealInfo).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have done a Request",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You Need to Login First to request",
        showConfirmButton: false,
        timer: 1500,
      });
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
        toast(
          <div className="addFlexItems gap-2 ">
            {" "}
            <RiVerifiedBadgeLine className="text-xl text-p4"></RiVerifiedBadgeLine>{" "}
            You have added a Review!
          </div>,
          {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
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
                    className=" px-8 py-2   font-medium hover:bg-p2transition-all duration-200 bg-p1 rounded "
                  >
                    Make Request
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
                  <span className="hidden lg:block text-p2ext-xl mb-2   font-medium  text-center">
                    ||
                  </span>
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    <span className="lg:block hidden"> Total</span> Review{" "}
                    {allReviews?.length}
                  </h2>
                  <span className="hidden lg:block text-p2ext-xl mb-2   font-medium  text-center">
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
                      <TiTick className="hidden lg:block text-2xl text-[#870012]"></TiTick>{" "}
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
            className="border border-[#444] bg-[#161515]  rounded-xl 
            lg:w-2/3  absolute lg:bottom-0 hidden lg:block"
          >
            <div className="py-7 ">
              <div className="addFlexJustify gap-3 lg:gap-5 ">
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  {postTime}
                </h2>{" "}
                <span className="hidden lg:block text-p2ext-xl mb-2   font-medium  text-center">
                  ||
                </span>
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  Total Review {allReviews?.length}
                </h2>
                <span className="hidden lg:block text-p2ext-xl mb-2   font-medium  text-center">
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
      <h2 className="  text-center  mt-10  text-3xl lg:text-4xl font-bold ">
        Add Your <span className="text-p1">Thoughts</span> Here{" "}
      </h2>
      <div className="addFlex lg:flex-row flex-col-reverse   lg:gap-20">
        <div>
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="outline-none rounded-lg border-2 w-[370px] lg:w-[600px]  mb-3 pl-5 pt-5  text-sm"
                {...register("review", { required: true })}
                id=""
                cols="50"
                rows="6"
              ></textarea>

              <div className="addFlexJustify lg:justify-normal">
                <button className="btnAll mt-4 px-6 lg:px-8 py-1 lg:py-2   font-medium  transition-all duration-200 rounded bg-p1 ">
                  <span className=""> Make Review</span>
                </button>{" "}
              </div>
            </form>
          </div>
        </div>

        <div className="">
          {" "}
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>
      <div className="">
        <h2 className="  text-center my-10  text-2xl lg:text-4xl font-bold ">
          Word from our <span className="text-p1">customers</span>{" "}
        </h2>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {loadingReview
              ? "Loading"
              : allReviews?.map((item) => (
                  <SwiperSlide className="  " key={item._id}>
                    <div className="bg-white lg:w-9/12 h-[40vh] lg:h-[20vh] mx-auto rounded-xl addFlex">
                      <p className="mx-10 text-p4"> {item?.reviewTitle}</p>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
};

export default MealDetail;
