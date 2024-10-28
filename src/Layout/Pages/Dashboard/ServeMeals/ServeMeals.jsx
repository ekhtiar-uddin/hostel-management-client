import Lottie from "lottie-react";
import banner from "../../../../assets/bannerAnimation/loading.json";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useFetchSecure } from "../../../../Hooks/useFetchSecure";
import UseToastify from "../../../../Hooks/UseToastify";
import SingleServe from "./SingleServe";

const ServeMeals = () => {
  const axiosSecure = UseAxiosSecure();

  const [allRequests, loading, refetch] = useFetchSecure("/requestedMeals");

  const handleServeMeal = (request) => {
    axiosSecure.patch(`/requestedMeals/${request._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        console.log(res.data.modifiedCount);
        refetch();
        UseToastify("success", `${request.title} has been deleted!`);
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
          <h2 className=" my-12 headTitle">
            {allRequests?.length} Requests from{" "}
            <span className="text-p1"> users </span>
          </h2>

          <div className="">
            <div className="grid grid-cols-6 gap-4">
              {allRequests &&
                allRequests?.map((item, index) => (
                  <SingleServe
                    key={item._id}
                    handleServeMeal={handleServeMeal}
                    item={item}
                  ></SingleServe>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServeMeals;
