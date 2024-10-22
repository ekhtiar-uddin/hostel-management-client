import { format, parseISO } from "date-fns";

import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import banner from "../../../../assets/lottie/SsKQcPBeWP.json";
const AddMeal = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitAddMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");

    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());

    const defaultLikes = 0;
    const defaultReviews = 0;

    const mealInfo = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      postTime: formattedDateTime,
      rating: parseFloat(data.rating),
      likes: defaultLikes,
      review: defaultReviews,
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      ingredient: ingredientsArray,
      description: data.description,
      image: data.image,
      toggle: false,
    };
    const mealRes = await axiosPublic.post("/meals", mealInfo);

    if (mealRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onSubmitUpcomingMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = format(date, "MMMM d 'at' h:mm a");

    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());

    const defaultLikes = 0;
    const defaultReviews = 0;

    const upcomingMealInfo = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      postTime: formattedDateTime,
      rating: parseFloat(data.rating),
      likes: defaultLikes,
      review: defaultReviews,
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      ingredient: ingredientsArray,
      description: data.description,
      image: data.image,
      toggle: false,
      likedUsers: [],
    };

    const upcomingMealRes = await axiosPublic.post(
      "/upcomingMeals",
      upcomingMealInfo
    );

    if (upcomingMealRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className=" h-full">
      <div className="flex h-full justify-center gap-10 items-center">
        <div>
          <h2 className="text-4xl   font-extrabold text-center uppercase">
            Add a <span className="text-[#EB3656]">Meal</span>{" "}
          </h2>

          <Lottie className="w-[400px]" animationData={banner} loop={true} />
        </div>

        <div className="w-3/6 ">
          <form className="w-full text-[#BFFCF9]">
            <div className="flex gap-5 w-full mb-8">
              <div className=" w-full">
                <input
                  {...register("name", { required: true })}
                  required
                  type="text"
                  placeholder="Meal Name"
                  className="outline-none rounded-lg bg-[#161515]  w-full pl-2 border  border-[#BFFCF9] py-2 "
                />
              </div>

              <div className="w-full ">
                <select
                  name="category"
                  defaultValue="default"
                  {...register("category", {
                    required: true,
                    validate: (value) => value !== "default",
                  })}
                  className="outline-none rounded-lg bg-[#161515] w-full pl-2 border border-[#BFFCF9] py-2"
                >
                  <option value="default" disabled>
                    Select Category
                  </option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>
            </div>
            <div className="flex w-full gap-4  ">
              <input
                type="datetime-local"
                {...register("date", { required: true })}
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full "
              />

              <input
                type="number"
                placeholder="Rating"
                {...register("rating")}
                className="outline-none rounded-lg bg-[#161515]    pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              />
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
            </div>
            <div className="flex w-full gap-4 ">
              <input
                type="text"
                placeholder="Distributor Name"
                {...register("adminName")}
                defaultValue={user?.displayName}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="Distributor Email"
                {...register("adminEmail")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] w-full py-2 mb-7 "
              />
            </div>
            <div className="flex gap-5 w-full">
              <textarea
                {...register("ingredients", { required: true })}
                placeholder="Ingredients"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              ></textarea>

              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-[#BFFCF9] py-2 mb-7  w-full"
              ></textarea>
            </div>
            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="imageURL"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border w-full border-[#BFFCF9] py-2 mb-7 "
              />
            </div>
            <div>
              {errors.name && (
                <span className="text-[#D24821] mr-4 ">Name is required</span>
              )}

              {errors.category && (
                <span className="text-[#D24821] mr-4 ">Select a category</span>
              )}

              {errors.date && (
                <span className="text-[#D24821] mr-4 ">Date is required</span>
              )}

              {errors.price && (
                <span className="text-[#D24821] mr-4 ">Price is required</span>
              )}

              {errors.ingredients && (
                <span className="text-[#D24821] mr-4 ">
                  Meal ingredients is required
                </span>
              )}
              {errors.description && (
                <span className="text-[#D24821] mr-4 ">
                  Meal description is required
                </span>
              )}

              {errors.image && (
                <span className="text-[#D24821]  ">
                  Meals photoURL is required
                </span>
              )}
            </div>
            <button
              onClick={handleSubmit(onSubmitAddMeal)}
              className="btnAll mt-4 px-6 lg:px-8 py-1 lg:py-2     font-medium  transition-all duration-200 rounded bg-[#EB3656] "
            >
              <span className=""> Add Meal</span>
            </button>{" "}
            <button
              onClick={handleSubmit(onSubmitUpcomingMeal)}
              className="btnAll ml-4 mt-4 px-6 lg:px-8 py-1 lg:py-2     font-medium  transition-all duration-200 rounded bg-[#EB3656] "
            >
              <span className=""> Add To Upcoming</span>
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
