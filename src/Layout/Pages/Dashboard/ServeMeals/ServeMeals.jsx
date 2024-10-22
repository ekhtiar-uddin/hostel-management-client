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
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${request.title} has been delivered now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
        Requests From <span className="text-[#EB3656]"> Users </span>
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
