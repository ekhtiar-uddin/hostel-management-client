import { Link } from "react-router-dom";
import imgOne from "/assets/head-1.png";
import imgTwo from "/assets/head-2.png";
import imgThree from "/assets/head-3.png";
const About = () => {
  return (
    <div className="my-10 lg:my-20">
      <div className="addFlexBetween lg:flex-row flex-col-reverse gap-16 lg:gap-32 ">
        <div
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/564x/ab/51/73/ab5173eb1ef2d973ae36a028f53755b9.jpg")',
          }}
          className="flex-1 mt-10 rounded-tr-[100px] w-[400px] lg:w-[500px] bg-no-repeat bg-cover rounded-lg h-[500px] relative"
        >
          <div className="md:block lg:hidden h-[500px]"></div>
          {/* <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/564x/ab/51/73/ab5173eb1ef2d973ae36a028f53755b9.jpg")',
            }}
            className="mt-10 rounded-tr-[100px]  bg-no-repeat bg-cover rounded-lg h-[500px] relative"
          >
            {" "}
          </div> */}
          <img
            className="-rotate-[10deg] absolute -top-20 lg:-top-12 right-[60%] lg:right-[15%] rounded-full w-[170px] h-[170px]"
            src="https://i.pinimg.com/564x/b2/73/ab/b273abb13bef73395622b584b2c1e4c5.jpg"
            alt=""
          />
          <img
            className="-rotate-[11deg] lg:-rotate-[10deg] absolute bottom-0 -right-7 lg:-right-14 rounded-xl w-[200px] lg:w-[280px] h-[150px] lg:h-[200px]"
            src="https://i.pinimg.com/564x/e7/a8/bc/e7a8bcfbe44c54a0d384c44830b92368.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 ">
          <div className="addFlexBetween rounded-full px-3 py-2 lg:w-[60%] bg-p6">
            <div className="flex -space-x-2">
              <img
                className="w-[50px] rounded-full h-[50px]"
                src={imgOne}
                alt=""
              />
              <img
                className="w-[50px] rounded-full h-[50px]"
                src={imgTwo}
                alt=""
              />
              <img
                className="w-[50px] rounded-full h-[50px]"
                src={imgThree}
                alt=""
              />
            </div>
            <div>
              <p>Mostly students are happy</p>
            </div>
          </div>
          <p className="mt-6 text-xl border-b-4 max-w-max border-p5 ">
            About us
          </p>
          <h2 className="text-3xl lg:text-5xl mb-3 mt-2  lg:mb-5 font-bold">
            More than just <br />
            <span className=" text-p1 "> food.</span>
          </h2>
          <p className="font-medium">
            {" "}
            Mealvy connects students through culinary events that enhance
            college life. Our app simplifies subscription management, preference
            customization, and delivery tracking. Join us in transforming
            dining—where convenience meets community, and every meal enriches
            your college experience. Discover Mealvy today!
          </p>
          <Link to={`/contact`}>
            <button className="btnAllGlobal bg-p1 mt-8">
              <span className=""> Contact Us</span>
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
