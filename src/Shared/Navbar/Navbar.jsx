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
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
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
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/upcomingMeals"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
          }
        >
          Upcoming Meals
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isLoading }) =>
            isLoading ? "pending" : isActive ? "navActive" : "navInActive"
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
      <div className="pt-6 addFlexBetween items-center">
        <div className="addFlexItems gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <FaBars className="text-2xl text-p1"></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm 
              dropdown-content z-[1] shadow  
              rounded-box bg-p3 w-52 text-p1 absolute -right-[140px] top-0"
            >
              {user ? navLinks : navlinksBeforeLogin}
            </ul>
          </div>

          <div className="">
            {/* <img
              className="w-[50px] lg:w-[70px]"
              src="https://i.ibb.co/Zfz6Pjz/Mealvy.-2.png"
            ></img> */}
            <h2 className="text-2xl font-semibold text-p1">Mealvy.</h2>
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
                    className="addFlexItems gap-1 
                     font-semibold text-p1 hover:text-p5"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-p3  w-[140px]"
              >
                <li className=" hover:bg-p1 hover:text-p4 py-1   rounded-xl   text-center ">
                  {user?.displayName}
                </li>
                {user && isAdmin && (
                  <li
                    className="hover:bg-p1 hover:text-p4 
                   rounded-xl  w-[70%] mx-auto "
                  >
                    <Link to="/dashboard/adminProfile"> Dashboard</Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li
                    className="hover:bg-p1 hover:text-p4  
                   rounded-xl w-[70%] mx-auto  "
                  >
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
                    ? "border border-p5  rounded-full  font-semibold py-2.5 px-6"
                    : "border border-p5  rounded-full  font-semibold py-2.5 px-6"
                }
              >
                join now
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
