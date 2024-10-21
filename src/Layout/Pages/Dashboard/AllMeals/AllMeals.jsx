import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseMeal from "../../../../Hooks/UseMeal";
import SingleMeal from "./SingleMeal";

const AllMeals = () => {
  const [meals, loading, refetch] = UseMeal();
  const axiosPublic = useAxiosPublic();
  // { name, category,price,postTime,rating,likes,review,adminName,adminEmail,ingredient,description,
  //     image, _id }

  const handleDeleteMeal = (meal) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/meals/${meal._id}`);

        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${meal.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
        Added <span className="text-[#EB3656]"> meals </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-3 gap-4">
          {meals.map((item, index) => (
            <SingleMeal
              key={item._id}
              handleDeleteMeal={handleDeleteMeal}
              item={item}
            ></SingleMeal>
          ))}
        </div>
      </div>

      {/* <div className="overflow-x-auto">
        <table className="table border w-full">
          <thead>
            <tr>
              <th className="text-center text-lg font-serif text-[#444]">#</th>
              <th className="text-center text-lg font-serif text-[#444]">
                Name
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Total Likes
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Total Reviews
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Distributor Name
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Distributor Email
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Update
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                Delete
              </th>
              <th className="text-center text-lg font-serif text-[#444]">
                View Meal
              </th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal, index) => (
              <tr key={meal._id}>
                <th className="text-sm text-[#444] font-normal  text-center ">
                  {index + 1}
                </th>
                <td className="text-sm text-[#444] font-normal  text-center ">
                  {meal.name}
                </td>

                <td className="text-sm text-[#444] font-normal  text-center ">
                  {meal.likes}
                </td>
                <td className="text-sm text-[#444] font-normal  text-center ">
                  {meal.review}
                </td>
                <td className="text-sm text-[#444] font-normal  text-center ">
                  {meal.adminName}
                </td>
                <td className="text-sm text-[#444] font-normal  text-center ">
                  {meal.adminEmail}
                </td>

                <td className="text-sm text-[#444] font-normal  text-center ">
                  <Link to={`/dashboard/updateMeal/${meal._id}`}>
                    {" "}
                    <button className="bg-purple-500 p-2 rounded text-[#fff] ">
                      Update
                    </button>
                  </Link>
                </td>

                <td className="text-sm text-[#444] font-normal  text-center ">
                  <button
                    onClick={() => handleDeleteMeal(meal)}
                    className="bg-red-500 p-2 rounded text-[#fff] "
                  >
                    Delete
                  </button>
                </td>
                <td className="text-sm text-[#444] font-normal  text-center ">
                  <Link to={`/details/${meal._id}`}>
                    <button className="bg-blue-500 p-2 rounded text-[#fff] ">
                      View Meal
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default AllMeals;
