import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseMeal from "../../../../Hooks/UseMeal";
import SingleReview from "./SingleReview";

const AllReviews = () => {
  const [meals, , ,] = UseMeal();
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const {
    data: reviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
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

  const uniqueTitles = [...new Set(reviews.map((review) => review.title))];
  // console.log("uniqueTitles", uniqueTitles);

  const mostReviewedReviews = uniqueTitles.map((title) => {
    const reviewsWithTitle = reviews.filter((review) => review.title === title);

    console.log("title-review", reviewsWithTitle);

    const mostReviewedItem = reviewsWithTitle.reduce((first, second) =>
      first.reviewNumbers > second.reviewNumbers ? first : second
    );
    return mostReviewedItem;
  });

  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
        Review From <span className="text-[#EB3656]"> Users </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {mostReviewedReviews.map((item, index) => (
            <SingleReview
              key={item._id}
              handleDeleteReview={handleDeleteReview}
              item={item}
              reviews={reviews}
            ></SingleReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
