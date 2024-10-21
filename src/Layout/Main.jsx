import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../Shared/Navbar/Navbar";
// lg:px-64 px-12
const Main = () => {
  return (
    <div className="w-[75%]  mx-auto  ">
      <ToastContainer />
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
