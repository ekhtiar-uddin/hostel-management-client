import Lottie from "lottie-react";
import banner from "../../../../assets/bannerAnimation/loading.json";
import UseAuth from "../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import { useFetchGlobal } from "../../../../Hooks/useFetchGlobal";
import SingleUpcoming from "./SingleUpcoming";

const UpcomingMeals = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [productionMeals, loading, refetch] =
    useFetchGlobal("/productionMeals");

  return (
    <div>
      {loading ? (
        <div className="addFlex lg:h-[70vh]">
          <Lottie className="w-[300px]" animationData={banner} loop={true} />
        </div>
      ) : (
        <>
          <h2 className=" my-12 headTitle">
            {productionMeals?.length} meals are{" "}
            <span className="text-p1"> upcoming </span>
          </h2>
          <div className="">
            <div className="grid grid-cols-6 gap-4">
              {productionMeals &&
                productionMeals?.map((item, index) => (
                  <SingleUpcoming key={item._id} item={item}></SingleUpcoming>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpcomingMeals;
