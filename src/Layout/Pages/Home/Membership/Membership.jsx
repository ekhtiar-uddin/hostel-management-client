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
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const res = await axiosPublic.get("/plans");
      return res.data;
    },
  });
  return (
    <div className="mt-16 lg:mt-20 ">
      <h2 className="text-3xl lg:text-4xl uppercase  font-bold  text-white mb-2 text-center">
        <span className="text-[#EB3656]">Choose</span> Your Plan
      </h2>
      <p className="text-white  text-center">
        These are the cost effective and valuable for your growth
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-6 py-20">
        {plansInfo.map((plan) => (
          <SinglePlan key={plan._id} plan={plan}></SinglePlan>
        ))}
      </div>
    </div>
  );
};

export default Membership;
