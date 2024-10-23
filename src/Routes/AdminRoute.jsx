import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import banner from "../assets/bannerAnimation/kJf7VPLhza.json";
const AdminRoute = ({ children }) => {
  const { user, loading, setLoading } = UseAuth();

  const [isAdmin, isAdminLoading] = UseAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="addFlex lg:h-[70vh]">
        {" "}
        <Lottie className="w-[300px]" animationData={banner} loop={true} />{" "}
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default AdminRoute;
