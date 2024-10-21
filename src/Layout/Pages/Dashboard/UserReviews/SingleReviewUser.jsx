import { Link } from "react-router-dom";

const SingleReviewUser = ({ item, handleDeleteReview }) => {
  const { title, img, likes, reviewCount, detailsId } = item;
  return (
    <div className="bg-[#2C2C2C] flex gap-4 rounded-3xl ">
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
        <div className="flex items-center gap-2 mt-3 text-[#000000]">
          <button
            onClick={() => handleDeleteReview(item)}
            className=" w-full rounded bg-[#EB3656] hover:bg-[#870012] transition-all duration-300 items-center py-1  font-medium  text-sm  text-white"
          >
            Delete
          </button>
          <Link className="w-full" to={`/details/${item.detailsId}`}>
            <button className="py-1 px-1  hover:text-[#FFF]   font-medium  text-sm w-full bg-[#BFFCF9] transition-all text-[#000000] duration-300 hover:bg-[#870012] rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewUser;
