import { Link } from "react-router-dom";

const SingleServe = ({ item, handleServeMeal }) => {
  const { title, likeNumber, userEmail, userName, status } = item;
  return (
    <div className="bg-d2 rounded-3xl ">
      <div className="px-4 pb-4">
        <div className="p-2  ">
          <h2 className=" mt-3 text-center  text-lg font-semibold">
            {title?.split(" ")[0]} {title?.split(" ")[1]}
          </h2>

          <p className="text-center">
            {" "}
            Position : {item.status === "delivered" ? "Delivered" : "Pending"}
          </p>
        </div>
        <div className="addFlexItems gap-2 mt-3 ">
          <button
            onClick={() => handleServeMeal(item)}
            className="w-full rounded bg-p1 hover:bg-p2transition-all duration-300 
           py-1  font-medium  text-sm  text-p4"
          >
            {status === "delivered" ? " Served" : "Accept"}
          </button>
          <Link className="w-full" to={`/details/${item.detailsId}`}>
            <button className="detailsBtn">View Meal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServe;
