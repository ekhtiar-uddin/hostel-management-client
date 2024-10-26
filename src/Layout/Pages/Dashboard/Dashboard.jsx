import { useQuery } from "@tanstack/react-query";
import {
  FaEye,
  FaListAlt,
  FaMedal,
  FaPray,
  FaRecordVinyl,
  FaRedRiver,
  FaRegQuestionCircle,
  FaServer,
  FaUpload,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  const { user } = UseAuth();

  // console.log(isAdmin);

  const axiosSecure = UseAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const adminNavLinks = (
    <>
      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/adminProfile"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaPray></FaPray>
          Membership
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaUser></FaUser>
          Manage Users
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/addMeal"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaMedal></FaMedal>
          Add Meal
        </NavLink>{" "}
      </li>
      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/allMeals"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaListAlt></FaListAlt>
          All Meals
        </NavLink>{" "}
      </li>
      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/allReviews"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaRedRiver></FaRedRiver>
          All Reviews
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/serveMeals"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaServer></FaServer>
          Serve Meals
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/upcomingMeals"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaUpload></FaUpload>
          Upcoming Meals
        </NavLink>{" "}
      </li>
      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/analytics"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaUpload></FaUpload>
          Membership Analytics
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaEye></FaEye>
          Go Home
        </NavLink>{" "}
      </li>
    </>
  );

  const userNavLinks = (
    <>
      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/userProfile"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaPray></FaPray>
          Membership
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/requestedMeals"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaRegQuestionCircle></FaRegQuestionCircle>
          Requested Meals
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/dashboard/userReviews"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaRecordVinyl></FaRecordVinyl>
          My Reviews
        </NavLink>{" "}
      </li>

      <li className="w-[220px]  mx-auto">
        <NavLink
          to="/"
          className={({ isActive, isLoading }) =>
            isLoading
              ? "pending"
              : isActive
              ? "dashboardActive"
              : "dashboardInActive"
          }
        >
          <FaEye></FaEye>
          Go Home
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="bg-d1">
      <ToastContainer />
      <div className="flex">
        <div className="w-[300px] rounded-r-3xl min-h-screen bg-d2">
          <div className=" addFlex mx-10    my-5">
            {/* <img className="w-[50px] lg:w-[70px]" src={img}></img> */}
            <h2 className="text-4xl font-semibold text-p1">Mealvy.</h2>
          </div>

          <div className="relative pt-5 border-t border-b border-[#444] pb-5 mb-5">
            <img
              className="w-[60px] h-[60px] rounded-full mx-auto mb-4"
              src={user?.photoURL}
            ></img>
            <span
              className="absolute
            top-14 right-[90px] bg-[#FFF] text-p4  text-sm px-2 rounded"
            >
              {isAdmin ? "Admin" : "User"}
            </span>
            <p className="text-center  text-lg font-semibold">
              {user?.displayName}
            </p>
            <p className="text-center  text-sm -mt-1">{user?.email}</p>
          </div>

          <ul className="space-y-2">
            {isAdmin ? adminNavLinks : userNavLinks}
          </ul>
        </div>

        <div className="flex-1 p-12 min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
