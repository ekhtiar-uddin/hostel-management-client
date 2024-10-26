import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseFetchSecure from "../../../../Hooks/UseFetchSecure";
import SingleServe from "./SingleServe";

const ServeMeals = () => {
  const axiosSecure = UseAxiosSecure();

  const [allRequests, loading, refetch] = UseFetchSecure("/requestedMeals");

  const handleServeMeal = (request) => {
    axiosSecure.patch(`/requestedMeals/${request._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        console.log(res.data.modifiedCount);
        refetch();
        Swal.fire({
          title: "Good job!",
          text: `${request.title} has been delivered now!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2 className=" my-12 headTitle">
        Requests from <span className="text-p1"> users </span>
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
    </div>
  );
};

export default ServeMeals;
