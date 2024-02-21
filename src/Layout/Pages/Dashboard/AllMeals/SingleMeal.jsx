import { Link } from "react-router-dom";

const SingleMeal = ({ item, handleDeleteMeal }) => {
  const { name, likes, review, adminName, adminEmail, image, category, price } =
    item;

  return (
    <div className="bg-[#2C2C2C] flex gap-4 rounded-3xl ">
      <div className="">
        <img
          className="w-[200px] rounded-tr-[70px] rounded-br-[50px] h-[200px] rounded-3xl"
          src={image}
        ></img>
      </div>

      <div className="p-2  ">
        <div className="flex items-center gap-2 mt-3 text-[#000000]">
          <Link to={`/dashboard/updateMeal/${item._id}`}>
            {" "}
            <button className=" px-4 py-1 rounded bg-[#BFFCF9] flex items-center gap-2 text-sm  ">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDeleteMeal(item)}
            className=" px-4 py-1 rounded bg-[#EB3656] flex items-center gap-2 text-sm text-white"
          >
            Delete
          </button>
          <Link to={`/details/${item._id}`}>
            <button className=" px-4 py-1 rounded bg-[#161515] flex items-center gap-2 text-sm text-[#EB3656]">
              Details
            </button>
          </Link>
        </div>

        <h2 className=" mt-3  text-lg font-semibold">
          {name?.split(" ")[0]} {name?.split(" ")[1]}
        </h2>
        <div className="flex  gap-4">
          <p>{likes} likes</p>
          <p>{review} reviews</p>
        </div>
        <div className="mt-3">
          <h2 className="  text-sm  font-medium">{adminName}</h2>
          <h2 className="  text-sm  font-medium">{adminEmail}</h2>
        </div>
      </div>

      {/* <div className="bg-[#BFFCF9] h-[7vh] rounded-tr-[70px] rounded-tl-[90px]">
        ksdjdk
      </div> */}
    </div>
  );
};

export default SingleMeal;
