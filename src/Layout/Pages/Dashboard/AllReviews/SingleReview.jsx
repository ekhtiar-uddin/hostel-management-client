import { Link } from "react-router-dom";

const SingleReview = ({ item, handleDeleteReview, reviews }) => {
  const { detailsId, _id, title, reviewCount, likes, img } = item;
  return (
    <div className="bg-d2 rounded-3xl ">
      <div className="">
        <img className="w-full h-[200px] rounded-3xl" src={img}></img>
      </div>

      <div className="px-4 pb-4">
        <div className="p-2  ">
          <h2 className=" mt-3  text-lg font-semibold">
            {title?.split(" ")[0]} {title?.split(" ")[1]}
          </h2>
          <div className="flex  gap-4">
            <p>{likes} likes</p>
            <p>{reviewCount} reviews</p>
          </div>
        </div>
        <div className="addFlex gap-2 mt-3 ">
          <button
            onClick={() => handleDeleteReview(item)}
            className="w-[90px] addFlex deleteBtn"
          >
            Delete
          </button>
          <Link className="" to={`/details/${item.detailsId}`}>
            <button className="detailsBtn">View Meal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
