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

    if (!accepted) {
      new Swal("Sorry !", " please accept our terms and conditions !", "error");
    } else {
      createUser(email, password)
        .then((res) => {
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
        .catch(() => new Swal("Sorry! User Already Exist", "error"));
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        navigate("/");
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          photoURL: res.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate("/");
        });
        new Swal("Login Successful!", "Thank You!", "success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <Helmet>
        <title>Register | Mealvy.</title>
      </Helmet>
      <div className=" my-20 ">
        <div className="bg-p6  flex lg:flex-row  flex-col-reverse  rounded-3xl lg:w-2/3 lg:h-[550px]  mx-auto">
          <div className="flex-1 text-p4 py-20 lg:py-0  lg:rounded-t-3xl rounded-t-[90px]    lg:rounded-tr-[170px] lg:rounded-br-[100px] bg-p1 addFlex rounded-3xl">
            <div className="">
              <h2 className="mb-4 text-3xl  font-bold  text-center">Login</h2>
              {errors.name && <p className="text-p4 mt-4">Name is required</p>}
              <p className="text-center mb-4  ">
                Already have an account? You can
              </p>
              <div className="addFlexJustify ">
                <Link to="/login">
                  <button
                    className="px-4 lg:px-8 py-1 lg:py-2  
                   font-medium bg-p3 text-white rounded-full"
                  >
                    SIGN IN
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="flex-1 py-5 lg:py-8 lg:pl-8">
            <h2 className="lg:my-5 text-2xl lg:text-3xl  font-semibold  text-center">
              Create account with
            </h2>
            <div className="addFlex gap-4 my-3 ">
              <div
                onClick={handleGoogleLogin}
                className="cursor-pointer justify-center addFlexItems gap-2 mb-3 mt-2 py-2 w-[50px]  px-2 rounded border-2 border-p1"
              >
                <div className="">
                  <FcGoogle className="text-2xl"></FcGoogle>
                </div>
              </div>
              <div>
                <p className=" text-center mb-3 ">or use your email password</p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div>
                <input
                  className="bg-p3 mb-3  py-2 outline-none  
                    lg:w-[400px]  w-3/4 mx-auto lg:mx-0
                      block pb-3 pl-3 rounded-lg"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  name="name"
                />
                {errors.name && (
                  <p className="registerInputWidth  errorText">
                    Name is required
                  </p>
                )}

                <input
                  className="bg-p3 mb-3 
                   py-2 outline-none    lg:w-[400px]
                     w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="text"
                  placeholder="photo URL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <p className="registerInputWidth errorText">
                    photo is required
                  </p>
                )}

                <input
                  className="bg-p3 mb-3  py-2 outline-none    lg:w-[400px]  w-3/4 mx-auto lg:mx-0  block pb-3 pl-3 rounded-lg"
                  type="emial"
                  placeholder="Username or Email"
                  {...register("email", { required: true })}
                  name="email"
                  required
                />
                {errors.email && (
                  <p className="registerInputWidth errorText">
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

                  <div className="lg:w-[400px]  w-3/4 mx-auto">
                    {errors.password?.type === "required" && (
                      <p className="errorText ">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="errorText ">
                        Password must be at least 6 characters
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="errorText ">
                        Password must be less than 20 characters
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="errorText ">
                        Password must contain at least one letter, one lowercase
                        letter, one number, and one special character
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:w-[400px]  w-3/4 mx-auto mb-2 -mt-2  lg:ml-0 ">
                <input
                  type="checkbox"
                  {...register("terms", { required: false })}
                />

                <label className=" "> Accept our </label>
                <a className=" ">Terms and Conditions</a>
              </div>

              <div className="lg:w-[400px]  w-3/4  mt-3 mx-auto">
                <button className="btnAllGlobal bg-p1 xl:-ml-6    ">
                  <span className=""> Continue</span>
                </button>{" "}
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
