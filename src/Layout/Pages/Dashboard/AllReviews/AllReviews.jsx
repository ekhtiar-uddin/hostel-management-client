import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import UseMeal from "../../../../Hooks/UseMeal";
import UseReview from "../../../../Hooks/UseReview";
import SingleReview from "./SingleReview";

const AllReviews = () => {
  const [meals, , ,] = UseMeal();
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [reviews, , refetchReviews] = UseReview();

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

  const titleReviews = reviews.reduce((acc, review) => {
    const exist = acc.find((item) => item.title === review.title);
    if (exist) {
      exist.reviewCount += 1;
    } else {
      acc.push({
        detailsId: review.detailsId,
        _id: review._id,
        title: review.title,
        reviewCount: 1,
        likes: review.likeNumber,
        img: review.img,
      });
    }
    return acc;
  }, []);

  // const uniqueTitles = [...new Set(reviews.map((review) => review.title))];

  // const mostReviewedReviews = uniqueTitles.map((title) => {
  //   const reviewsWithTitle = reviews.filter((review) => review.title === title);

  //   const mostReviewedItem = reviewsWithTitle.reduce((first, second) =>
  //     first.reviewNumbers > second.reviewNumbers ? first : second
  //   );
  //   return mostReviewedItem;
  // });

  return (
    <div>
      <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
        {reviews?.length} Review From{" "}
        <span className="text-[#EB3656]"> Users </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {titleReviews.map((item, index) => (
            <SingleReview
              key={item._id}
              handleDeleteReview={handleDeleteReview}
              item={item}
            ></SingleReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
