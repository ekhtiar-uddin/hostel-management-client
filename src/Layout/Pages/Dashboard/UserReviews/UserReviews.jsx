import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";

import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseMeal from "../../../../Hooks/UseMeal";
import SingleReviewUser from "./SingleReviewUser";

const UserReviews = () => {
  const [meals, , ,] = UseMeal();

  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?userEmail=${user?.email}`);
      return res.data;
    },
  });
  const handleDeleteReview = (review) => {
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
        const res = await axiosPublic.delete(`/reviews/${review._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${review.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  console.log("UserReviews", reviews);

  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
        You have reviewed{" "}
        <span className="text-[#EB3656]"> {reviews?.length} meals </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-4 gap-4">
          {reviews?.map((item, index) => (
            <SingleReviewUser
              key={item._id}
              handleDeleteReview={handleDeleteReview}
              item={item}
            ></SingleReviewUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
