import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import SingleRequest from "./SingleRequest";

const RequestedMeals = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const [requestedMeals, setRequestedMeals] = useState([]);

  // const res = axiosSecure.get(`/requestedMeals?userEmail=${user?.email}`);
  const url = `/requestedMeals?userEmail=${user?.email}`;

  useEffect(() => {
    axiosSecure
      .get(url)

      .then((res) => {
        setRequestedMeals(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [url]);

  const handleDeleteRequest = (meal) => {
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
        const res = await axiosSecure.delete(`/requestedMeals/${meal._id}`);

        if (res.data.deletedCount > 0) {
          // refetch to update the ui

          const newRequestedArray = requestedMeals.filter(
            (item) => item._id !== meal._id
          );
          setRequestedMeals(newRequestedArray);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${meal.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className=" my-12 headTitle">
        You have{" "}
        <span className="text-p1">
          {" "}
          requested {requestedMeals?.length} meals{" "}
        </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {requestedMeals?.map((item, index) => (
            <SingleRequest
              key={item._id}
              handleDeleteRequest={handleDeleteRequest}
              item={item}
            ></SingleRequest>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestedMeals;
