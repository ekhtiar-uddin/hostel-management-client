import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseMeal from "../../../../Hooks/UseMeal";
import SingleServe from "./SingleServe";

const ServeMeals = () => {
  const [meals, , ,] = UseMeal();
  const axiosSecure = UseAxiosSecure();

  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: allRequests = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["requestedMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requestedMeals");
      return res.data;
    },
  });
  const handleServeMeal = (request) => {
    axiosSecure.patch(`/requestedMeals/${request._id}`).then((res) => {
      console.log(res.data);
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

  console.log("rightNow", allRequests);

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
