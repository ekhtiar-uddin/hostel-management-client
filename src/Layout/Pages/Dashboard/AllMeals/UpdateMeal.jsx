import { parseISO } from "date-fns";
import Lottie from "lottie-react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import banner from "../../../../assets/lottie/SsKQcPBeWP.json";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseToastify from "../../../../Hooks/UseToastify";
const UpdateMeal = () => {
  const mealInfo = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
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
  } = mealInfo;

  const formattedDate = moment(postTime, "MMM Do YY").format("YYYY-MM-DD");

  const defaultIngredients = ingredient.join(", ");

  const { register, handleSubmit } = useForm();

  const onSubmitUpdateMeal = async (data) => {
    let date;

    if (data.date) {
      date = parseISO(data.date);
    } else {
      date = new Date();
    }

    const formattedDateTime = moment(data.date).format("MMM Do YY");

    const ingredientsArray = data.ingredients
      .split(", ")
      .map((ingredient) => ingredient.trim());

    const updatedMealInfo = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      postTime: formattedDateTime,
      rating: parseFloat(data.rating),
      likes: parseFloat(data.like),
      review: parseFloat(data.review),
      adminName: data.adminName,
      adminEmail: data.adminEmail,
      ingredient: ingredientsArray,
      description: data.description,
      image: data.image,
    };

    const updateMealRes = await axiosSecure.put(
      `/updateMeals/${_id}`,
      updatedMealInfo
    );

    if (updateMealRes.data.modifiedCount > 0) {
      UseToastify("success", `${name} has been updated!`);
    }
  };

  return (
    <div className=" h-full">
      <div className="addFlex h-full  gap-10 ">
        <div>
          <h2 className="headTitle">
            Update <span className="text-p1">Meal</span>{" "}
          </h2>

          <Lottie className="w-[400px]" animationData={banner} loop={true} />
        </div>

        <div className="w-3/6 relative">
          <form className="w-full text-p2">
            <div className="flex gap-5 w-full mb-6">
              <div className=" w-full">
                <input
                  {...register("name", { required: true })}
                  required
                  type="text"
                  defaultValue={name}
                  placeholder="Meal Name"
                  className="outline-none rounded-lg bg-[#161515]  w-full pl-2 border  border-p2 py-2 "
                />
              </div>

              <div className="w-full ">
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="outline-none rounded-lg bg-[#161515] w-full pl-2 border   border-p2 py-2 "
                >
                  <option disabled value="default">
                    Select a category{" "}
                  </option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch </option>
                  <option value="Dinner">Dinner </option>
                </select>
              </div>
            </div>
            <div className="flex w-full gap-4 ">
              <input
                type="date"
                defaultValue={formattedDate}
                {...register("date")}
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 py-2 w-full "
              />

              <input
                type="number"
                defaultValue={rating}
                {...register("rating")}
                className="outline-none  rounded-lg bg-[#161515]   pl-2 border border-p2 py-2 w-full"
              />

              <input
                type="number"
                defaultValue={likes}
                placeholder="Likes"
                {...register("like")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]   pl-2 border border-p2 py-2 w-full"
              />
            </div>
            <div className="flex w-full gap-4 mt-6">
              <input
                type="number"
                defaultValue={review}
                {...register("review")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 w-full py-2"
              />
              <input
                type="number"
                defaultValue={price}
                {...register("price")}
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 w-full py-2  "
              />
            </div>
            <div className="flex w-full gap-4 mt-12">
              <input
                type="text"
                placeholder="Distributor Name"
                {...register("adminName")}
                defaultValue={user?.displayName}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 w-full py-2 mb-7 "
              />
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="Distributor Email"
                {...register("adminEmail")}
                name=""
                id=""
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 w-full py-2 mb-7 "
              />
            </div>
            <div className="flex gap-5 w-full">
              <textarea
                {...register("ingredients")}
                defaultValue={defaultIngredients}
                placeholder="Ingredients"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 py-2 mb-7  w-full"
              ></textarea>

              <textarea
                {...register("description")}
                defaultValue={description}
                cols="10"
                rows="5"
                placeholder="Description"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border border-p2 mb-7 py-2 w-full"
              ></textarea>
            </div>
            <div className="w-full">
              <input
                {...register("image", { required: true })}
                type="text"
                defaultValue={image}
                placeholder="imageURL"
                className="outline-none rounded-lg bg-[#161515]  pl-2 border w-full border-p2 py-2 mb-7 "
              />
            </div>
            <button
              onClick={handleSubmit(onSubmitUpdateMeal)}
              className="btnAll mt-4 px-4 lg:px-6 py-1 lg:py-2   font-medium  transition-all duration-200 rounded bg-p1 "
            >
              <span className="">Update Meal</span>
            </button>{" "}
          </form>
          <h2 className=" top-[13%] left-[38%] absolute">Rating</h2>
          <h2 className=" top-[13%] right-[23%] absolute">Likes</h2>
          <h2 className=" top-[24.5%] left-7 absolute">Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default UpdateMeal;
