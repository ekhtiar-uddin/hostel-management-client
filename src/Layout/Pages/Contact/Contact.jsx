import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import UseToastify from "../../../Hooks/UseToastify";
import SocialLink from "../../../Shared/SocialLinks/SocialLink";
import banner from "../../../assets/bannerAnimation/UXsWHFSAaz.json";
import Footer from "../Home/Footer/Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xajljns",
        "template_6f0tixi",
        form.current,
        "kHJAh1kbTL5cecFfo"
      )
      .then(
        (result) => {
          UseToastify("success", "Your Message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20">
      <Helmet>
        <title>Contact | Mealvy.</title>
      </Helmet>
      <div className="addFlexJustify flex-col-reverse lg:flex-row gap-10 lg:gap-20">
        <div>
          <form ref={form} onSubmit={sendEmail} className="container">
            <div className="addFlexBetween gap-5 lg:gap-10 container">
              <div className="relative">
                <input
                  className="inputAndTextarea 
                   lg:w-[300px] "
                  type="text"
                  name="first-name"
                  required
                />
                <label className="labelContact">First Name</label>
              </div>
              <div className="relative">
                <input
                  className="inputAndTextarea lg:w-[300px] "
                  type="text"
                  name="last-name"
                  required
                />
                <label className="labelContact">Last Name</label>
              </div>
            </div>
            <div className="relative">
              <input
                className="inputAndTextarea "
                type="email"
                name="user_email"
                required
              />
              <label className="labelContact">Email</label>
            </div>
            <div className="relative">
              <input
                className="inputAndTextarea "
                type="number"
                name="user-phone"
                required
              />
              <label className="labelContact">Phone</label>
            </div>
            <div className=" text-sm font-medium  mb-8">
              <h4 className="mb-2 font-semibold">
                You are <span className="text-p1">*</span>
              </h4>
              <input
                className="mr-2"
                type="radio"
                value="Student"
                name="info"
              />
              <span className="mr-2 ">Student</span>
              <input
                className="mr-2"
                type="radio"
                value="Faculty"
                name="info"
              />
              <span className="mr-2 ">Faculty</span>
              <input className="mr-2" type="radio" value="Staff" name="info" />
              <span className="">Staff</span> <br />
              <input
                className="mr-2"
                type="radio"
                value="Alumnus"
                name="info"
              />
              <span className="mr-2 ">Alumnus</span>
              <input className="mr-2" type="radio" value="Other" name="info" />
              <span className="">Other</span>
            </div>
            <div className="relative">
              <textarea
                className="inputAndTextarea mb-2"
                name="message"
                cols="50"
                rows="5"
                required
              ></textarea>
              <label className="labelContact">
                Question <span className="text-p1">*</span>
              </label>
            </div>
            <button className="btnAllGlobal bg-p1 ">
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div>
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>

      <Footer />

      <SocialLink />
    </div>
  );
};

export default Contact;
