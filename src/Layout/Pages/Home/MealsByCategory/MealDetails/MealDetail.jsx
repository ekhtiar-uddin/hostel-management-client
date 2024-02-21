import "@smastrom/react-rating/style.css";
import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import UseMeal from "../../../../../Hooks/UseMeal";

import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { AiOutlineLike } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import UseAxiosSecure from "../../../../../Hooks/UseAxiosSecure";
import SocialLink from "../../../../../Shared/SocialLinks/SocialLink";
import banner from "../../../../../assets/bannerAnimation/is5WNsFx8i.json";
import Footer from "../../Footer/Footer";
const MealDetail = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [meals, loading] = UseMeal();
  const mealDetail = useLoaderData();
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
  } = mealDetail;

  console.log("details", mealDetail);

  const { register, handleSubmit } = useForm();

  const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?title=${name}`);
      return res.data;
    },
  });

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    if (user) {
      setIsLiked(!isLiked);
      const mealId = _id;
      const title = name;
      const state = isLiked;
      const mealInfo = { title, mealId, state };
      axiosPublic.post("/likedMeals", mealInfo).then((data) => {
        refetch();
      });
    }
    // else{
    //   navigate('/login')
    // }
  };

  const likeButtonStyle = {
    color: isLiked ? "#939A00" : "black",
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
    console.log(data);
    const userEmail = user?.email;
    const title = name;
    const likeNumber = likes;
    const reviewNumbers = allReviews.length + 1;
    const review = data.review;
    const detailsId = _id;
    const img = image;
    const reviewInfo = {
      title,
      likeNumber,
      reviewNumbers,
      review,
      userEmail,
      detailsId,
      img,
    };
    axiosSecure.post(`/reviews`, reviewInfo).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have added a Review",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className=" my-20">
        <div className="relative">
          <div className="flex  gap-5 lg:flex-row flex-col-reverse justify-between ">
            <div className="flex justify-center lg:w-1/2  lg:items-center">
              <div className="">
                <div className="flex justify-center mb-5">
                  <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                </div>
                <h2 className="text-3xl lg:text-4xl text-center text-white  font-extrabold mb-5">
                  <span className=" text-[#EB3656] uppercase ">
                    {" "}
                    {name?.split(" ")[0]} {name?.split(" ")[1]}
                  </span>
                </h2>
                <p className=" text-center  mt-2 text-white">
                  {description?.slice(0, 210)}
                </p>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={handleMealRequest}
                    className=" px-8 py-2   font-medium hover:bg-[#870012] transition-all duration-200 bg-[#EB3656] rounded text-white"
                  >
                    Make Request
                  </button>
                  <button
                    className="text-2xl p-2 text-white transition-all duration-200 hover:bg-[#870012] bg-[#EB3656] rounded flex justify-center items-center "
                    onClick={handleLikeClick}
                    style={likeButtonStyle}
                  >
                    <AiOutlineLike className="text-white"></AiOutlineLike>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="border lg:hidden border-[#444] bg-[#161515]  rounded-xl 
             "
            >
              <div className="py-7 px-4 text-white">
                <div className="flex gap-3 lg:gap-5 justify-center">
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    {postTime}
                  </h2>{" "}
                  <span className="hidden lg:block text-[#870012] ext-xl mb-2   font-medium  text-center">
                    ||
                  </span>
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    <span className="lg:block hidden"> Total</span> Review{" "}
                    {allReviews?.length}
                  </h2>
                  <span className="hidden lg:block text-[#870012] ext-xl mb-2   font-medium  text-center">
                    ||
                  </span>
                  <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                    Likes {likes}
                  </h2>
                </div>
                <h2 className="text-xl lg:text-2xl mb-2   font-bold  text-center">
                  Ingredients :
                </h2>
                <div className="flex  flex-wrap items-center  mx-auto justify-center ">
                  {ingredient.slice(0, 4).map((item, index) => (
                    <span
                      key={index}
                      className="mr-3 text-center text-sm lg:text-[17px]  font-medium  flex items-center gap-2"
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
            <div className="py-7 text-white">
              <div className="flex gap-3 lg:gap-5 justify-center">
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  {postTime}
                </h2>{" "}
                <span className="hidden lg:block text-[#870012] ext-xl mb-2   font-medium  text-center">
                  ||
                </span>
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  Total Review {allReviews?.length}
                </h2>
                <span className="hidden lg:block text-[#870012] ext-xl mb-2   font-medium  text-center">
                  ||
                </span>
                <h2 className=" lg:text-xl mb-2   font-medium  text-center">
                  Likes {likes}
                </h2>
              </div>
              <h2 className="text-xl lg:text-2xl mb-2   font-bold  text-center">
                Ingredients :
              </h2>
              <div className="flex  flex-wrap items-center  mx-auto justify-center ">
                {ingredient.slice(0, 4).map((item, index) => (
                  <span
                    key={index}
                    className="mr-3 text-center text-sm lg:text-[17px]  font-medium  flex items-center gap-2"
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

      <h2 className=" uppercase text-center  mt-10 text-white text-3xl lg:text-4xl font-bold ">
        Add Your <span className="text-[#EB3656]">Thoughts</span> Here{" "}
      </h2>

      <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-20">
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

              <div className="flex justify-center lg:justify-normal">
                <button className="btnAll mt-4 px-6 lg:px-8 py-1 lg:py-2   font-medium  transition-all duration-200 rounded bg-[#EB3656] ">
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
        <h2 className=" uppercase text-center my-10 text-white text-2xl lg:text-4xl font-bold ">
          Word from our <span className="text-[#EB3656]">customers</span>{" "}
        </h2>
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {allReviews.map((item) => (
              <SwiperSlide className=" text-white " key={item._id}>
                <div className="bg-white lg:w-9/12 h-[40vh] lg:h-[20vh] mx-auto rounded-xl flex justify-center items-center">
                  <p className="mx-10 text-black"> {item.review}</p>
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
