import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ item, handleDeleteReview, reviews }) => {
  const { title, likeNumber, img, review, reviewNumbers } = item;
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
            <p>{likeNumber} likes</p>
            <p>{reviewNumbers} reviews</p>
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
            <button className="py-1  hover:text-[#FFF]   font-medium  text-sm w-full bg-[#BFFCF9] transition-all text-[#000000] duration-300 hover:bg-[#870012] rounded">
              View Meal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
