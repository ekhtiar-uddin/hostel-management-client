import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseFetchSecure from "../../../../Hooks/UseFetchSecure";
import UseToastify from "../../../../Hooks/UseToastify";
import SingleServe from "./SingleServe";

const ServeMeals = () => {
  const axiosSecure = UseAxiosSecure();

  const [allRequests, loading, refetch] = UseFetchSecure("/requestedMeals");

  const handleServeMeal = (request) => {
    axiosSecure.patch(`/requestedMeals/${request._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        UseToastify("success", `${request.title} has been delivered now!`);
      }
    });
  };

  console.log(allRequests);

  return (
    <div>
      <h2 className=" my-12 headTitle">
        Requests from <span className="text-p1"> users </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {allRequests?.map((item, index) => (
            <SingleServe
              key={item._id}
              handleServeMeal={handleServeMeal}
              item={item}
            ></SingleServe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServeMeals;
