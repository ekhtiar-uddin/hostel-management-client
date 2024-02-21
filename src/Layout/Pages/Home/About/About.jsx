import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-10 lg:my-20">
      <h2 className="text-3xl lg:text-4xl uppercase text-center lg:mb-16  text-white  font-extrabold">
        About <span className=" text-[#EB3656] "> CampusBite</span>
      </h2>
      <div className=" flex lg:flex-row flex-col-reverse gap-10 justify-between ">
        <div className="flex-1">
          <p className=" text-white lg:mt-10   font-medium">
            Beyond being a meal service, CampusBite is a community hub. Connect
            with fellow students through exclusive events and shared culinary
            adventures, fostering bonds that go beyond the lecture halls. Our
            mission is to bring students together over the joy of good food,
            enhancing your college experience. Streamline your life with
            CampusBite's user-friendly website and mobile app. Easily manage
            your subscription, customize preferences, and track deliveries
            effortlessly.
          </p>
          <p className=" text-white mt-5 lg:mt-10   font-medium ">
            Join us in redefining student dining – where convenience meets
            community, and each meal becomes a celebration of your academic
            journey. Experience the difference with CampusBite, where we're not
            just serving meals; we're creating moments that enrich your college
            life.
          </p>

          <Link to={`/contact`}>
            <button className="btnAll mt-7 lg:mt-12 px-4 lg:px-8 py-2 lg:py-2     font-medium  transition-all duration-200 rounded bg-[#EB3656] ">
              <span className=""> Contact Us</span>
            </button>{" "}
          </Link>
        </div>

        <div className="flex-1 mt-10">
          <img
            className="border-b-8 border-[#870012] rounded-[100px] w-[600px]"
            src="https://i.ibb.co/wsw6Z03/menu-3356828-1280.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
