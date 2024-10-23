import { Link } from "react-router-dom";

const SingleReview = ({ item, handleDeleteReview, reviews }) => {
  const { detailsId, _id, title, reviewCount, likes, img } = item;
  return (
    <div className="bg-[#2C2C2C] rounded-3xl ">
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
        <div className="addFlexItems gap-2 mt-3 ">
          <button
            onClick={() => handleDeleteReview(item)}
            className=" w-full rounded  bg-p1 hover:bg-[#870012] transition-all duration-300  py-1  font-medium  text-sm  "
          >
            Delete
          </button>
          <Link className="w-full" to={`/details/${item.detailsId}`}>
            <button className="py-1  hover:text-[#FFF]   font-medium  text-sm w-full bg-p2 transition-all text-[#000000] duration-300 hover:bg-[#870012] rounded">
              View Meal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
