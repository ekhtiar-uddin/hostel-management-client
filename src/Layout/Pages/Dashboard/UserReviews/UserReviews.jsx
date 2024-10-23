import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseFetch from "../../../../Hooks/UseFetch";
import SingleReviewUser from "./SingleReviewUser";

const UserReviews = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [reviews, loading, refetch] = UseFetch(
    `/reviews?userEmail=${user?.email}`
  );

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

  return (
    <div>
      <h2 className=" my-12  dashboardTitle">
        You have reviewed{" "}
        <span className="text-p1"> {titleReviews?.length} meals </span>
      </h2>

      <div className="">
        <div className="grid grid-cols-4 gap-4">
          {titleReviews?.map((item, index) => (
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
