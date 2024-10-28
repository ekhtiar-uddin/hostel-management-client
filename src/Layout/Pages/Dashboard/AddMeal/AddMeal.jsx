import { format, parseISO } from "date-fns";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import banner from "../../../../assets/lottie/SsKQcPBeWP.json";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseToastify from "../../../../Hooks/UseToastify";
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
      UseToastify("success", `${data.name} is added!`);
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
      UseToastify("success", `${data.name} is added!`);
    }
  };

  return (
    <div className=" h-full">
      <div className="addFlex flex-col lg:flex-row h-full  gap-10 ">
        <div>
          <h2 className="headTitle">
            Add a <span className="text-p1">meal</span>{" "}
          </h2>

          <Lottie className="w-[400px]" animationData={banner} loop={true} />
        </div>

        <div className="w-3/6 ">
          <form className="w-full ">
            <div className="flex gap-5 w-full ">
              <div className=" w-full">
                <input
                  {...register("name", { required: true })}
                  required
                  type="text"
                  placeholder="Meal Name"
                  className="inputAndTextarea "
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
                  className="inputAndTextarea"
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
                className="inputAndTextarea"
              />

              <input
                type="number"
                placeholder="Rating"
                {...register("rating", { required: true })}
                className="inputAndTextarea"
              />
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="inputAndTextarea"
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
                className="inputAndTextarea"
              />
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="Distributor Email"
                {...register("adminEmail")}
                name=""
                id=""
                className="inputAndTextarea"
              />
            </div>
            <div className="flex gap-5 w-full">
              <textarea
                {...register("ingredients", { required: true })}
                placeholder="Ingredients"
                className="inputAndTextarea"
              ></textarea>

              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                className="inputAndTextarea"
              ></textarea>
            </div>
            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="imageURL"
                className="inputAndTextarea"
              />
            </div>
            <div className="mb-3">
              {errors.name && (
                <span className="errorAddMeal ">Name is required</span>
              )}

              {errors.category && (
                <span className="errorAddMeal ">Select a category</span>
              )}

              {errors.date && (
                <span className="errorAddMeal ">Date is required</span>
              )}

              {errors.rating && (
                <span className="errorAddMeal ">Rating is required</span>
              )}

              {errors.price && (
                <span className="errorAddMeal ">Price is required</span>
              )}

              {errors.ingredients && (
                <span className="errorAddMeal ">
                  Meal ingredients is required
                </span>
              )}
              {errors.description && (
                <span className="errorAddMeal ">
                  Meal description is required
                </span>
              )}

              {errors.image && (
                <span className="errorAddMeal ">
                  Meals photoURL is required
                </span>
              )}
            </div>
            <button
              onClick={handleSubmit(onSubmitAddMeal)}
              className="btnAllGlobal  bg-p1"
            >
              <span className=""> Add Meal</span>
            </button>{" "}
            <button
              onClick={handleSubmit(onSubmitUpcomingMeal)}
              className="btnAllGlobal  bg-p1 ml-4"
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
