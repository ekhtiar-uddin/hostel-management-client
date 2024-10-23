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
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive " : "navActive"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
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
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navInActive" : "navActive"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
    localStorage.removeItem("likesData");
    navigate("/");
  };
  return (
    <>
      <div className="py-4 addFlexBetween items-center">
        <div className="addFlexItems gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <FaBars className="text-2xl text-p1"></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] shadow  rounded-box bg-[#2C2C2C] w-52 text-p1 absolute -right-[140px] top-0"
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

        <div className="addFlexItems">
          <ul className="hidden  lg:flex gap-5">
            {user ? navLinks : navlinksBeforeLogin}
          </ul>
        </div>

        <div>
          {user ? (
            <div className="dropdown lg:block dropdown-end">
              <div className="addFlexItems gap-3 ">
                <div>
                  <button
                    onClick={handleLogOut}
                    className="text-sm addFlexItems gap-1  font-semibold text-p2 hover:text-p1"
                  >
                    Logout{" "}
                    <HiOutlineLogout className="text-xl"></HiOutlineLogout>
                  </button>
                </div>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-[60px] rounded-full ">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-[#2C2C2C]  "
              >
                <li className=" hover:bg-[#161515] py-1 px-4 rounded-xl   text-center">
                  {user?.displayName}
                </li>
                {user && isAdmin && (
                  <li className="hover:bg-[#161515] px-4   rounded-xl   ">
                    <Link to="/dashboard/adminProfile"> Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li className="hover:bg-[#161515] px-4   rounded-xl   ">
                    <Link to="/dashboard/userProfile">Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          ) : (
            <button className="">
              <NavLink
                to="/login"
                className={({ isActive, isLoading }) =>
                  isLoading
                    ? "pending"
                    : isActive
                    ? "text-sm bg-[#870012]   rounded-full  font-semibold py-2 px-4"
                    : " text-sm hover:bg-[#870012] bg-p1    rounded-full  font-semibold py-2 px-4"
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
