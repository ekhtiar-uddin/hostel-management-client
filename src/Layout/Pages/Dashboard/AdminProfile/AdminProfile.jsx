import Lottie from "lottie-react";
import goldBedgeAnimation from "../../../../assets/lottie/Bedges/eyvoDqwwLu.json";
import silverAnimation from "../../../../assets/lottie/Bedges/rfB3OLjbdi.json";
import platinumAnimation from "../../../../assets/lottie/Bedges/uVh8iOBGBC.json";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useFetchSecure } from "../../../../Hooks/useFetchSecure";
const AdminProfile = () => {
  const { user } = UseAuth();

  const axiosSecure = UseAxiosSecure();
  const [payments, loading, refetch] = useFetchSecure(
    `/payments/${user.email}`
  );
  console.log(payments);

  // const { data: payments } = useQuery({
  //   queryKey: ["payments", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/payments/${user?.email}`);
  //     return res.data;
  //   },
  // });

  return (
    <div className="">
      <h2 className=" my-20 headTitle">
        You are a{" "}
        <span className="text-p1 lowercase"> {payments?.[0]?.plan} users </span>
      </h2>

      <div>
        {payments?.[0]?.plan === "Platinum" ? (
          <Lottie
            className="w-[400px] mx-auto"
            animationData={platinumAnimation}
            loop={true}
          />
        ) : payments?.[0]?.plan === "Gold" ? (
          <Lottie
            className="w-[400px] mx-auto"
            animationData={goldBedgeAnimation}
            loop={true}
          />
        ) : (
          <Lottie
            className="w-[400px] mx-auto"
            animationData={silverAnimation}
            loop={true}
          />
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
