import { useQuery } from "@tanstack/react-query";
import "react-awesome-button/dist/styles.css";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import SinglePlan from "./SinglePlan";

const Membership = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: plansInfo = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const res = await axiosPublic.get("/plans");
      return res.data;
    },
  });

  // console.log(plansInfo);

  return (
    <div className="mt-16 lg:mt-20 ">
      <h2 className="text-3xl lg:text-4xl   font-bold text-center">
        <span className="text-p1">Choose</span> your plan
      </h2>
      <p className="  text-center">
        These are the cost effective and valuable for your growth
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {plansInfo?.map((plan) => (
          <SinglePlan key={plan._id} plan={plan}></SinglePlan>
        ))}
      </div>
    </div>
  );
};

export default Membership;
