import { Link } from "react-router-dom";

const SingleReviewUser = ({ item, handleDeleteReview }) => {
  const { title, img, likes, reviewCount, detailsId } = item;
  return (
    <div className="bg-d2 flex gap-4 rounded-3xl ">
      <div className="">
        <img className="p-3 w-[150px] h-[150px] rounded-3xl" src={img}></img>
      </div>

      <div className="px-3 pb-3">
        <div className="p-2  ">
          <h2 className=" mt-3  text-lg font-semibold">
            {title?.split(" ")[0]} {title?.split(" ")[1]}
          </h2>
          <div className="flex  gap-4">
            <p>{likes} likes</p>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
        <div className="addFlexItems gap-2 mt-3 ">
          <button
            onClick={() => handleDeleteReview(item)}
            className=" deleteBtn"
          >
            Delete
          </button>
          <Link className="w-full" to={`/details/${item.detailsId}`}>
            <button className="detailsBtn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewUser;
