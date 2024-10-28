import Lottie from "lottie-react";
import Swal from "sweetalert2";
import banner from "../../../../assets/bannerAnimation/loading.json";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useFetchGlobal } from "../../../../Hooks/useFetchGlobal";
import UseToastify from "../../../../Hooks/UseToastify";
import SingleReview from "./SingleReview";
const AllReviews = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [reviews, loading, refetchReviews] = useFetchGlobal("/reviews");

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
        const res = await axiosSecure.delete(`/reviews/${review._id}`);
        if (res.data.deletedCount > 0) {
          refetchReviews();
          UseToastify("success", `${review.title} has been deleted!`);
        }
      }
    });
  };

  const titleReviews = reviews?.reduce((acc, review) => {
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

  return (
    <div>
      {loading ? (
        <div className="addFlex lg:h-[70vh]">
          <Lottie className="w-[300px]" animationData={banner} loop={true} />
        </div>
      ) : (
        <>
          <h2 className=" my-12  headTitle">
            {reviews?.length} review From{" "}
            <span className="text-p1"> users </span>
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
        </>
      )}
    </div>
  );
};

export default AllReviews;
