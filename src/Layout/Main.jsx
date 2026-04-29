import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../Shared/Navbar/Navbar";
// lg:px-64 px-12
const Main = () => {
  return (
    <div className="customWidth ">
      <ToastContainer />
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
