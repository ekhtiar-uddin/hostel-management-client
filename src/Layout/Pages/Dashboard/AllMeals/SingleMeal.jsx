import { Link } from "react-router-dom";

const SingleMeal = ({ item, handleDeleteMeal }) => {
  const { name, likes, review, adminName, adminEmail, image, category, price } =
    item;

  return (
    <div className="bg-d2 flex gap-4 rounded-3xl ">
      <div className="">
        <img
          className="w-[200px] rounded-tr-[70px] rounded-br-[50px] h-[200px] rounded-3xl"
          src={image}
        ></img>
      </div>

      <div className="p-2  ">
        <div className="addFlexItems gap-2 mt-3 ">
          <Link to={`/dashboard/updateMeal/${item._id}`}>
            {" "}
            <button className="updateBtn">Update</button>
          </Link>
          <button
            onClick={() => handleDeleteMeal(item)}
            className=" deleteBtn "
          >
            Delete
          </button>
          <Link to={`/details/${item._id}`}>
            <button className="detailsBtn ">Details</button>
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
          <h2 className="    font-medium">{adminName}</h2>
          <h2 className="    font-medium">{adminEmail}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
