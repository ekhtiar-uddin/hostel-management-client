import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <img
          className="w-[500px] rounded-3xl"
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.1973595152.1687198433&semt=ais"
        ></img>
        <h1 className="text-white text-3xl lg:text-4xl font-bold mt-8 text-center">
          404 - Not Found!
        </h1>
        <NavLink to="/">
          <div className="flex justify-center">
            <button className=" mt-4 px-6 lg:px-8 py-1 lg:py-2 font-Inter  font-medium hover:bg-[#870012] transition-all duration-200 rounded-full bg-[#BFFCF9] text-[#000000] hover:text-white">
              Go Home
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
