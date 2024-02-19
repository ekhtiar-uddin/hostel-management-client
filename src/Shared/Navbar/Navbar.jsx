import { FaBars } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const [isAdmin] = UseAdmin();
  const { user, logOut } = UseAuth();

  const navigate = useNavigate();

  const navlinksBeforeLogin = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-sm bg-[#101010] text-[#EB3656] font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4 "
              : " text-sm hover:bg-[#101010] text-white  font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm bg-[#101010] text-[#EB3656] font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
              : " text-sm hover:bg-[#101010] text-white  font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm bg-[#101010] text-[#EB3656] font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm hover:bg-[#101010] text-white  font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>
    </>
  );

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm bg-[#101010]  text-[#EB3656] font-Inter rounded-full transition-all duration-150  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm hover:bg-[#101010] text-white font-Inter rounded-full transition-all duration-150  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm bg-[#101010] text-[#EB3656] font-Inter rounded-full transition-all duration-150  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm hover:bg-[#101010] text-white font-Inter rounded-full transition-all duration-150  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm lg:bg-[#101010] text-[#EB3656] font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm hover:bg-[#101010] text-white font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-sm bg-[#101010] text-[#EB3656] font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
              : "text-sm hover:bg-[#101010] text-white font-Inter rounded-full  font-semibold py-1 lg:py-2 lg:px-4"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      <div className="py-4 flex  items-center justify-between">
        <div className="flex  items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <FaBars className="text-2xl text-[#EB3656]"></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] shadow  rounded-box bg-[#2C2C2C] w-52 text-[#EB3656] absolute -right-[140px] top-0"
            >
              {user ? navLinks : navlinksBeforeLogin}
            </ul>
          </div>

          <div className="">
            <img
              className="w-[50px] lg:w-[70px]"
              src="https://i.ibb.co/Zfz6Pjz/Campusbite-2.png"
            ></img>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="hidden  lg:flex gap-5">
            {user ? navLinks : navlinksBeforeLogin}
          </ul>
        </div>

        <div>
          {user ? (
            <div className="dropdown lg:block dropdown-end">
              <div className="flex gap-3 items-center">
                <div>
                  <button
                    onClick={handleLogOut}
                    className="text-sm flex items-center gap-1 font-Inter font-semibold text-[#BFFCF9] hover:text-[#EB3656]"
                  >
                    Logout{" "}
                    <HiOutlineLogout className="text-xl"></HiOutlineLogout>
                  </button>
                </div>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-[60px] rounded-full text-white">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-[#2C2C2C]  "
              >
                <li className=" hover:bg-[#161515] py-1 px-4 rounded-xl text-white font-Inter text-center">
                  {user?.displayName}
                </li>
                {user && isAdmin && (
                  <li className="hover:bg-[#161515] px-4   rounded-xl text-white font-Inter ">
                    <Link to="/dashboard/adminProfile"> Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li className="hover:bg-[#161515] px-4   rounded-xl text-white font-Inter ">
                    <Link to="/dashboard/userProfile">Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          ) : (
            <button className="">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-sm bg-[#870012] text-white font-Inter rounded-full  font-semibold py-2 px-4"
                    : " text-sm hover:bg-[#870012] bg-[#EB3656] text-white  font-Inter rounded-full  font-semibold py-2 px-4"
                }
              >
                Join Now
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
