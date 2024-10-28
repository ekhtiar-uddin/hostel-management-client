import Lottie from "lottie-react";
import goldBedgeAnimation from "../../../../assets/lottie/Bedges/eyvoDqwwLu.json";
import silverAnimation from "../../../../assets/lottie/Bedges/rfB3OLjbdi.json";
import platinumAnimation from "../../../../assets/lottie/Bedges/uVh8iOBGBC.json";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useFetchSecure } from "../../../../Hooks/useFetchSecure";
const UserProfile = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [payments, loading, refetch] = useFetchSecure(
    `/payments/${user.email}`
  );
  console.log("before", payments);

  const latestPayment = payments?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )[0];
  console.log("here", latestPayment);
  return (
    <div className="">
      <h2 className=" my-20  headTitle">
        You are a{" "}
        <span className="text-p1 lowercase">
          {" "}
          {latestPayment?.plan ? latestPayment?.plan : "Silver"} Member{" "}
        </span>
      </h2>

      <div>
        {latestPayment?.plan === "Platinum" ? (
          <Lottie
            className="w-[400px] mx-auto"
            animationData={platinumAnimation}
            loop={true}
          />
        ) : latestPayment?.plan === "Gold" ? (
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

export default UserProfile;
