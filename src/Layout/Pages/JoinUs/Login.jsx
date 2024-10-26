import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import UseToastify from "../../../Hooks/UseToastify";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import Footer from "../Home/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
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
    const accepted = data.terms;

    console.log(data);

    if (!accepted) {
      UseToastify("error", "please accept our terms and conditions!");
    } else {
      signInUser(email, password)
        .then((res) => {
          UseToastify("success", "Login Successful!");

          navigate("/");
        })
        .catch((error) => {
          UseToastify("error", " Please Register!");

          navigate("/register");
        });
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        UseToastify("success", "Login Successful!");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | Mealvy.</title>
      </Helmet>
      <div className="   mt-20 ">
        <div className="bg-p6 flex lg:flex-row flex-col  rounded-3xl lg:w-2/3 w-full lg:h-[550px]  mx-auto">
          <div className="flex-1 py-5 lg:py-8 lg:pl-8">
            <h2 className="my-5  text-3xl  font-semibold text-center">
              Sign in with
            </h2>
            <div
              onClick={handleGoogleLogin}
              className="cursor-pointer justify-center addFlexItems gap-2 mb-3 mt-2 py-2 w-[50px] mx-auto px-2 rounded border-2 border-p1"
            >
              <div className="addFlexItems gap-2">
                <FcGoogle className="text-2xl"></FcGoogle>
              </div>
            </div>
            <p className="  text-center mb-3 ">or use your email password</p>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div>
                <input
                  className="bg-p3 mb-3  py-2 outline-none    lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="emial"
                  placeholder="Username or Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <p className="registerInputWidth  errorText">
                    email is required
                  </p>
                )}

                <div className=" mb-4 lg:w-[400px]">
                  <div className="addFlexBetween relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="bg-p3 mb-3  py-2 outline-none  
                        lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 
                        rounded-lg"
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <p
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xl cursor-pointer -ml-5 absolute 
                      top-3 lg:right-2 md:right-24 sm:right-20 right-14"
                    >
                      {showPassword ? (
                        <AiFillEye className="text-p5  "></AiFillEye>
                      ) : (
                        <AiFillEyeInvisible className="text-p5 "></AiFillEyeInvisible>
                      )}
                    </p>
                  </div>

                  <div className="registerInputWidth  errorText ">
                    {errors.password?.type === "required" && (
                      <p className="">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="">Password must be at least 6 characters</p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="">
                        Password must be less than 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="">
                        Password must contain at least one letter, one lowercase
                        letter, one number, and one special character
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:w-[400px] my-5 w-3/4 mx-auto lg:ml-0 text-sm lg:text-base">
                <input
                  type="checkbox"
                  {...register("terms", { required: false })}
                />

                <label className="  font-medium"> Accept our </label>
                <a className="  font-medium">Terms and Conditions</a>
              </div>

              <div className="lg:w-[400px]  w-3/4  mt-3 mx-auto">
                <button className="btnAllGlobal bg-p1 xl:-ml-6">
                  <span className=""> Continue</span>
                </button>{" "}
              </div>
            </form>
          </div>

          <div className="flex-1  py-20 lg:py-0   lg:rounded-tl-[170px] lg:rounded-bl-[100px] bg-p1 addFlex rounded-3xl lg:rounded-t-3xl rounded-t-[90px]">
            <div className="">
              <h2 className="mb-4 text-2xl lg:text-3xl  font-bold  text-center">
                Create Account
              </h2>
              <p className="text-center lg:text-base text-sm mb-4  ">
                Don't have an account?{" "}
              </p>
              <div className="addFlexJustify ">
                <Link to="/register">
                  <button
                    className=" px-7 lg:px-8 py-3 
    font-medium  bg-p3  rounded-full"
                  >
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
