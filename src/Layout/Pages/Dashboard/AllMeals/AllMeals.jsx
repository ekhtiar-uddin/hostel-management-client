import Lottie from "lottie-react";
import Swal from "sweetalert2";
import banner from "../../../../assets/bannerAnimation/loading.json";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import { useFetchGlobal } from "../../../../Hooks/useFetchGlobal";
import UseToastify from "../../../../Hooks/UseToastify";
import SingleMeal from "./SingleMeal";
const AllMeals = () => {
  const [meals, loading, refetch] = useFetchGlobal("/meals");
  const axiosPublic = useAxiosPublic();

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
          refetch();
          UseToastify("success", `${meal.name} has been deleted!`);
        }
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div className="addFlex lg:h-[70vh]">
          <Lottie className="w-[300px]" animationData={banner} loop={true} />
        </div>
      ) : (
        <>
          <h2 className="my-12 headTitle">
            Added <span className="text-p1"> meals </span>
          </h2>
          <div className="">
            <div className="grid grid-cols-3 gap-4">
              {meals?.map((item, index) => (
                <SingleMeal
                  key={item._id}
                  handleDeleteMeal={handleDeleteMeal}
                  item={item}
                ></SingleMeal>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllMeals;
