import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="addFlexBetween lg:flex-row flex-col-reverse gap-16 lg:gap-10  ">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl mb-8   lg:mb-10 font-bold">
            About <span className=" text-p1 "> Mealvy.</span>
          </h2>
          <p className="  lg:mt-10   font-medium">
            Mealvy. is a community hub for students, connecting peers through
            events and culinary experiences that enhance college life. Our
            user-friendly website and app let you easily manage subscriptions,
            customize preferences, and track deliveries.
          </p>
          <p className="  mt-5 lg:mt-10   font-medium ">
            Join us in redefining student dining—where convenience meets
            community, and every meal celebrates your academic journey.
            Experience the difference with Mealvy. and create moments that
            enrich your college experience.
          </p>

          <Link to={`/contact`}>
            <button className="btnAllGlobal bg-p1 mt-8">
              <span className=""> Contact Us</span>
            </button>{" "}
          </Link>
        </div>

        <div className="flex-1 mt-10">
          <img
            className="border-b-8 border-p1 rounded-[100px] w-[600px]"
            src="https://i.ibb.co/wsw6Z03/menu-3356828-1280.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
