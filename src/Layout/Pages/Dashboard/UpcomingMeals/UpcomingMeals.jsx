import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseMeal from "../../../../Hooks/UseMeal";

import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import SingleUpcoming from "./SingleUpcoming";

const UpcomingMeals = () => {
  const [meals, , ,] = UseMeal();

  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: upcomingMeals = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingMeals");
      return res.data;
    },
  });

  console.log("nowup", upcomingMeals);

  return (
    <div>
      <div>
        <h2 className=" my-12  uppercase text-4xl text-center text-white  font-extrabold">
          {upcomingMeals?.length} meals are{" "}
          <span className="text-[#EB3656]"> Upcoming </span>
        </h2>

        <div className="">
          <div className="grid grid-cols-6 gap-4">
            {upcomingMeals?.map((item, index) => (
              <SingleUpcoming key={item._id} item={item}></SingleUpcoming>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeals;
