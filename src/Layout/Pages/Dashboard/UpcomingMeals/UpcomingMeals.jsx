import UseAuth from "../../../../Hooks/UseAuth";

import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseFetch from "../../../../Hooks/UseFetch";
import SingleUpcoming from "./SingleUpcoming";

const UpcomingMeals = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [productionMeals, loading, refetch] = UseFetch("/productionMeals");

  return (
    <div>
      <div>
        <h2 className=" my-12 headTitle">
          {productionMeals?.length} meals are{" "}
          <span className="text-p1"> upcoming </span>
        </h2>

        <div className="">
          <div className="grid grid-cols-6 gap-4">
            {productionMeals?.map((item, index) => (
              <SingleUpcoming key={item._id} item={item}></SingleUpcoming>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeals;
