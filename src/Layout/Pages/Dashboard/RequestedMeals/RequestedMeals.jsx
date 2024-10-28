import Lottie from "lottie-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import banner from "../../../../assets/bannerAnimation/loading.json";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useFetchSecure } from "../../../../Hooks/useFetchSecure";
import UseToastify from "../../../../Hooks/UseToastify";
import SingleRequest from "./SingleRequest";
const RequestedMeals = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const url = `/requestedMeals?userEmail=${user?.email}`;

  const [requestedMeals, loading, refetch] = useFetchSecure(url);

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
          UseToastify("success", `${meal.title} has been deleted!`);
          refetch();
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
          <h2 className=" my-12 headTitle">
            You have{" "}
            <span className="text-p1">
              {" "}
              requested {requestedMeals?.length} meals{" "}
            </span>
          </h2>
          <div className="grid grid-cols-6 gap-4">
            {requestedMeals?.map((item, index) => (
              <SingleRequest
                key={item._id}
                handleDeleteRequest={handleDeleteRequest}
                item={item}
              ></SingleRequest>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RequestedMeals;
