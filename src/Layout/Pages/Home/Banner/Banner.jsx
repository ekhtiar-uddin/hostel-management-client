import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://dining.uiowa.edu/sites/dining.uiowa.edu/files/styles/ultrawide__1312_x_562/public/2024-08/2019_06_05-UHD%20Commercial%20Food%20Shoot%20jatorner%20-0335.jpg?h=0dca3afc&itok=LcLRMHYi')",
      }}
      className="bg-no-repeat bg-[#01010144] bg-blend-overlay rounded-xl bg-cover lg:h-[70vh] h-[40vh] mt-10 lg:mt-10 addFlexItems "
    >
      <div className="ml-5 lg:ml-24 ">
        <div className="space-y-6 lg:space-y-5">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl  
          font-semibold  "
          >
            Best food options <br />
            <span className=" text-p1"> for students</span>
          </h2>
          <p className="  hidden lg:block w-2/3">
            On campus dining locations provide an essential service for the CB
            community of students, staff, and faculty. Whether it’s comfort food
            for dinner take-out, sushi ordered via your mobile device for lunch,
            or a quick coffee and breakfast sandwich, you’ll find a variety of
            menu options to fill every craving.
          </p>

          <div className="">
            <Link to={`/login`}>
              <button className="btnAllGlobal  bg-p1">
                <span className=""> Start Now</span>
              </button>{" "}
            </Link>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Banner;
