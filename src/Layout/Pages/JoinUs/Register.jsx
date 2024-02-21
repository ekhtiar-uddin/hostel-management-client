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

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    signInUser,
    user,
    updateUserProfile,
    createUser,
    googleSignIn,
    logOut,
  } = useContext(AuthContext);

  console.log(user);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
            };

            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  reset();
                  new Swal(
                    "Thank you!",
                    "You have successfully completed your registration!",
                    "success"
                  );
                  navigate("/");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          })

          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate("/");
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          photoURL: res.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
        new Swal("Register Successful!", "Thank You!", "success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <Helmet>
        <title>Register | CampusBite</title>
      </Helmet>
      <div className=" my-20 ">
        <div className="bg-white flex lg:flex-row flex-col-reverse  rounded-3xl lg:w-2/3 lg:h-[550px]  mx-auto">
          <div className="flex-1 py-20 lg:py-0 text-[#FFF] lg:rounded-t-3xl rounded-t-[90px]    lg:rounded-tr-[170px] lg:rounded-br-[100px] bg-[#EB3656] flex justify-center items-center rounded-3xl">
            <div className="">
              <h2 className="mb-4 text-3xl  font-bold  text-center">Login</h2>
              <p className="text-center mb-4  ">
                Already have an account? You can
              </p>
              <div className="flex justify-center ">
                <Link to="/login">
                  <button className="px-4 lg:px-8 py-1 lg:py-2   font-medium hover:bg-[#870012] transition-all duration-200 border border-[#fff] hover:border-none  text-white rounded">
                    SIGN IN
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="flex-1 py-5 lg:py-8 lg:pl-8">
            <h2 className="lg:my-5 text-[#000] text-2xl lg:text-3xl  font-bold  text-center">
              Create Account With
            </h2>
            <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
              <div
                onClick={handleGoogleLogin}
                className="cursor-pointer justify-center flex items-center lg:gap-2 lg:mb-3 mt-2 py-2 px-5 rounded text-base border "
              >
                <div className="flex items-center gap-2">
                  <FcGoogle className="text-2xl"></FcGoogle>
                </div>
              </div>
              <p className="text-[#000]  text-center mb-3 ">
                or use your email password
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div>
                <input
                  className="bg-[#FFF] mb-3 lg:mb-5 py-2 outline-none  border  lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  name="name"
                />
                {errors.name && (
                  <span className="text-[#D24821] ">Name is required</span>
                )}

                <input
                  className="bg-[#FFF] mb-3 lg:mb-5 py-2 outline-none  border  lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="text"
                  placeholder="photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-[#D24821] ">photo is required</span>
                )}

                <input
                  className="bg-[#FFF] mb-3 lg:mb-5 py-2 outline-none  border  lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="emial"
                  placeholder="Username or Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <span className="text-[#D24821] ">email is required</span>
                )}
                <div className="relative mb-4 lg:w-[400px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="bg-[#FFF] mb-3 lg:mb-5 py-2 outline-none  border  lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
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
                    <p className="text-[#D24821] ">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-[#D24821] ">
                      Password must be at least 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-[#D24821] ">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#D24821] ">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xl cursor-pointer absolute right-14 lg:right-2 bottom-3"
                  >
                    {showPassword ? (
                      <AiFillEye className="text-[#D24821] "></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible className="text-[#D24821] "></AiFillEyeInvisible>
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-3 ml-10 lg:ml-0 text-sm lg:text-base">
                <input type="checkbox" name="terms" id="terms" />
                <label className=" text-[#D24821] font-medium">
                  {" "}
                  Accept our{" "}
                </label>
                <a className="text-[#D24821]  font-medium">
                  Terms and Conditions
                </a>
              </div>

              <div className="flex justify-center  mt-3">
                <button className="px-4 lg:px-10 py-1 lg:py-2   font-medium hover:bg-[#870012] transition-all duration-200 bg-[#EB3656]  text-white rounded">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer></Footer>
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Register;
