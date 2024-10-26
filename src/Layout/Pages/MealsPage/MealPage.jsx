import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFilterSearch from "../../../Hooks/useFilterSearch";
import UseMeal from "../../../Hooks/UseMeal";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";
import SingleBestRating from "./SingleBestRating";
import SingleMeal from "./SingleMeal";
import img from "/assets/checkmark.png";
const MealPage = () => {
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState("");

  const [asc, setAsc] = useState(true);
  const allMeals = useFilterSearch(asc, search);
  const [meals] = UseMeal();

  const [selectedOption, setSelectedOption] = useState("Dinner");
  const categoryValue = selectedOption.value;

  const bestRatingMeals = meals.filter((item) => item?.rating > 3);

  const filteredMeals = allMeals.filter(
    (meal) => meal.category === selectedOption.value
  );

  const options = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];

  const onSubmit = async (data) => {
    setSearch(data.title);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
  };

  return (
    <div className="">
      <Helmet>
        <title>Meals | Mealvy.</title>
      </Helmet>
      <div className="">
        <div className="mt-24  addFlexItems  flex-col-reverse lg:flex-row gap-10">
          <div className=" lg:w-1/2 ">
            <div
              className=" 
            "
            >
              <p className="  text-4xl  my-8   font-bold">
                <span className="text-p1">Eat</span> quality food{" "}
              </p>

              <p className="mb-7   font-medium">
                We fuel campus life with delicious bites! Our mission is to
                provide healthy and convenient food options to keep you
                energized. From fresh salads to mouthwatering sandwiches, our
                menu has something for everyone. Say goodbye to boring cafeteria
                food and hello to a culinary adventure at Mealvy!
              </p>

              <div className="">
                <div className="space-y-2 mb-5 ">
                  <div className="addFlexItems gap-2">
                    <img className="w-[30px]" src={img}></img>
                    <p className="    font-medium">
                      The food here uses 100% natural preservatives
                    </p>
                  </div>
                  <div className="addFlexItems gap-2">
                    <img className="w-[30px] " src={img}></img>
                    <p className="    font-medium">
                      The package here is very up to date and safe
                    </p>
                  </div>
                  <div className="addFlexItems gap-2">
                    <img className="w-[30px]" src={img}></img>
                    <p className="    font-medium">
                      A comfortable place to hang out with your friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/2 ">
            <div className="mb-3">
              <img
                className="rounded-3xl h-[350px] w-full"
                src="https://i.ibb.co/cTT24pr/vegetable-skewer-3317060-640.jpg"
              ></img>
            </div>

            <div className="flex gap-5">
              <div className="">
                <img
                  className=" rounded-xl"
                  src="https://i.ibb.co/bdcV0Zs/meal-1307604-640.jpg"
                ></img>
              </div>
              <div className="">
                <img
                  className=" rounded-xl"
                  src="https://i.ibb.co/mXykGW8/meal-5921491-640.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mt-10 lg:mt-20 mb-12 border-[#444] pb-10">
          <h2 className=" headTitle  ">
            Our <span className="text-p1"> specials</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row  gap-10">
          <div className="">
            <div className="  bg-c1  p-6  pb-20 rounded-3xl">
              <div className="flex gap-4 lg:gap-10">
                <div className="   ">
                  <div className=" ">
                    <h2 className="font-bold text-center mb-4   text-[19px]">
                      Filter By Category
                    </h2>
                    <Select
                      className="text-p4 "
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-center mb-4   text-[19px]">
                    Filter By Price
                  </h2>
                  <button
                    onClick={() => setAsc(!asc)}
                    className="cursor-pointer w-full  py-2 rounded button bg-p3 "
                  >
                    {asc ? "High to Low" : "Low to High"}{" "}
                  </button>
                </div>
              </div>

              <h2 className="font-medium  mb-10   text-2xl lg:text-4xl  mt-36 ">
                Best rating meal
              </h2>
              <div className="lg:w-[400px]">
                <Slider {...settings}>
                  {bestRatingMeals.map((item) => (
                    <SingleBestRating
                      key={item._id}
                      item={item}
                    ></SingleBestRating>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="mb-20 flex-1 ">
            <div className=" mb-5">
              <form onSubmit={handleSubmit(onSubmit)} className="  " action="">
                <div className=" relative w-[280px] lg:w-[350px]    flex rounded-lg ">
                  <input
                    {...register("title", { required: true })}
                    name="title"
                    id="field-id"
                    className="pl-3 bg-c1  rounded-lg  w-full py-3.5 outline-none   "
                    type="text"
                    placeholder="Find Food"
                  />

                  <button
                    type="submit"
                    className="absolute right-0  bg-p1 px-4 flex items-center justify-center m-1 h-[39px] rounded"
                  >
                    {" "}
                    <BsSearch className="text-[#444]   text-lg"></BsSearch>
                  </button>
                </div>
              </form>
            </div>
            {categoryValue ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                  <SingleMeal key={meal._id} meal={meal}></SingleMeal>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {allMeals.map((meal) => (
                  <SingleMeal key={meal._id} meal={meal}></SingleMeal>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default MealPage;
