import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { signInUser, user, googleSignIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((res) => {
        new Swal("Login Successful!", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => {
        new Swal("Please Register!", "", "error");
        navigate("/register");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        new Swal("Login Successful!", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | CampusBite</title>
      </Helmet>
      <div className="   mt-20 ">
        <div className="bg-white  flex lg:flex-row flex-col  rounded-3xl lg:w-2/3 w-full lg:h-[550px]  mx-auto">
          <div className="flex-1 py-5 lg:py-8 lg:pl-8">
            <h2 className="my-5 text-[#000] text-3xl  font-bold  text-center">
              Sign In With
            </h2>
            <div
              onClick={handleGoogleLogin}
              className="cursor-pointer justify-center addFlexItems gap-2 mb-3 mt-2 py-2 w-[100px] mx-auto px-2 rounded text-base border"
            >
              <div className="addFlexItems gap-2">
                <FcGoogle className="text-2xl"></FcGoogle>
              </div>
            </div>
            <p className="text-[#000]  text-center mb-3 ">
              or use your email password
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div>
                <input
                  className="bg-[#FFF] w-3/4 mx-auto lg:mx-0 mb-5 py-2 outline-none  border  lg:w-[400px]  block pb-3 pl-3 rounded-lg"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-[#D24821]">email is required</span>
                )}

                <div className="relative mb-4 lg:w-[400px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border w-3/4 mx-auto lg:mx-0  pl-3 rounded-lg lg:w-[400px]  py-2 outline-none block pb-3  bg-[#FFF]"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-[#D24821]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#D24821]">
                      Password must be at least 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#D24821]">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#D24821]">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer absolute right-14 lg:right-2 bottom-3"
                  >
                    {showPassword ? (
                      <AiFillEye className="text-p1"></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible className="text-p1"></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-3 ml-12 lg:ml-0 lg:text-left text-sm">
                <input type="checkbox" name="terms" id="terms" />
                <label className=" text-[#D24821] font-medium">
                  {" "}
                  Accept our{" "}
                </label>
                <a className="text-[#D24821]  font-medium">
                  Terms and Conditions
                </a>
              </div>

              <div className="addFlexJustify  mt-3">
                <button className="px-4 lg:px-10 py-1 lg:py-2   font-medium hover:bg-[#870012] transition-all duration-200 bg-p1   rounded">
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1  py-20 lg:py-0 text-[#FFF]  lg:rounded-tl-[170px] lg:rounded-bl-[100px] bg-p1 addFlex rounded-3xl lg:rounded-t-3xl rounded-t-[90px]">
            <div className="">
              <h2 className="mb-4 text-2xl lg:text-3xl  font-bold  text-center">
                Create Account
              </h2>
              <p className="text-center lg:text-base text-sm mb-4  ">
                Don't have an account?{" "}
              </p>
              <div className="addFlexJustify ">
                <Link to="/register">
                  <button className="px-4 lg:px-8 py-1 lg:py-2   font-medium hover:bg-[#870012] transition-all duration-200 border border-[#fff] hover:border-none   rounded">
                    SIGN UP
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Login;
