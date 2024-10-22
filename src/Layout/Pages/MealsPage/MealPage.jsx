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
        <title>Meals | CampusBite</title>
      </Helmet>
      <div className="">
        <h2 className="text-white my-16 text-3xl lg:text-4xl text-center   font-extrabold  uppercase">
          Eat Quality <span className="text-[#EB3656]"> Food</span>
        </h2>

        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className=" flex items-center lg:w-1/2 ">
            <div
              className=" 
            "
            >
              <p className="text-center  text-2xl uppercase my-8 text-white  font-bold">
                <span className="text-[#EB3656]">Welcome</span> to CampusBite
                Meals page{" "}
              </p>

              <p className="mb-7 text-white  font-medium">
                We fuel campus life with delicious bites! Our mission is to
                provide a world of diverse, healthy, and convenient food options
                to keep you energized throughout your busy day. Whether you're
                craving a hearty meal or a quick snack between classes, we've
                got you covered. From fresh salads to mouthwatering sandwiches
                and everything in between, our menu has something for everyone.
                Say goodbye to boring cafeteria food and hello to a culinary
                adventure right on campus. Join us at CampusBite and let your
                taste buds explore!
              </p>

              <div className="">
                <div className="space-y-2 mb-5 ">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[30px]"
                      src="https://i.ibb.co/qxknKhC/checkmark.png"
                    ></img>
                    <p className=" text-white text-sm  font-medium">
                      The food here uses 100% natural preservatives
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[30px] "
                      src="https://i.ibb.co/qxknKhC/checkmark.png"
                    ></img>
                    <p className=" text-white text-sm  font-medium">
                      The package here is very up to date and safe
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[30px]"
                      src="https://i.ibb.co/qxknKhC/checkmark.png"
                    ></img>
                    <p className=" text-white text-sm  font-medium">
                      A comfortable place to hang out with your friends.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" lg:w-2/3 mx-auto  mt-10 ">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" flex bg-white rounded-3xl"
                  action=""
                >
                  <input
                    {...register("title", { required: true })}
                    name="title"
                    id="field-id"
                    className="pl-4 rounded-l-3xl w-full outline-none"
                    type="text"
                    placeholder="Find Food"
                  />
                  <button
                    type="submit"
                    className="bg-[#BFFCF9] rounded-3xl text-[#000000] hover:bg-[#870012] transition-all duration-150  hover:text-white flex items-center  justify-center w-[200px] h-[45px]  lg:h-[50px] text-lg font-semibold "
                  >
                    {" "}
                    <BsSearch></BsSearch>
                  </button>
                </form>
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
          <h2 className="text-white text-3xl uppercase lg:text-4xl text-center   font-extrabold  ">
            Our <span className="text-[#EB3656]"> Specials</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row  gap-10">
          <div className="">
            <div className="  bg-white  p-6  pb-20 rounded-3xl">
              <div className="flex gap-4 lg:gap-10">
                <div className=" bg-[#FFF]  ">
                  <div className=" ">
                    <h2 className="font-bold text-center mb-4 text-[#000]  text-[19px]">
                      Filter By Category
                    </h2>
                    <Select
                      className=""
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-center mb-4 text-[#000]   text-[19px]">
                    Filter By Price
                  </h2>
                  <button
                    onClick={() => setAsc(!asc)}
                    className="cursor-pointer w-full  py-2 rounded button  bg-[#161515] hover:bg-[#444] text-white"
                  >
                    {asc ? "High to Low" : "Low to High"}{" "}
                  </button>
                </div>
              </div>

              <h2 className="font-bold text-center mb-10 text-[#000]  text-3xl lg:text-4xl  mt-36 ">
                Best Rating Meal
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
