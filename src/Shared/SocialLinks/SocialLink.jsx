import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div>
      <div className="pb-10 lg:pb-0 ">
        <div className="addFlexBetween lg:flex-row flex-col   lg:h-[125px]">
          <div>
            <h2 className="  font-semibold">Dining Services</h2>
            <p className="text-p1  underline">Contact Us</p>
          </div>

          <div className="flex gap-5 my-5 lg:my-0">
            <div>
              <input
                type="text"
                className="inputAndTextarea  w-[250px] lg:w-[400px] "
                placeholder="Search site"
                name=""
                id=""
              />
            </div>
            <div>
              <button
                className="bg-p1 text-p4 
              py-1.5 px-4 hover:bg-p1 text-p4hover: font-semibold  rounded"
              >
                Search
              </button>
            </div>
          </div>

          <div>
            <ul className="flex gap-10">
              <a href="https:/instagram.com">
                <FaInstagram className="text-3xl text-p1 "></FaInstagram>
              </a>
              <a href="https:/twitter.com">
                <BsTwitterX className="text-3xl text-p1 "></BsTwitterX>
              </a>
              <a href="https:/facebook.com">
                <FaFacebookSquare className="text-3xl text-p1 "></FaFacebookSquare>
              </a>
              <a href="https:/youtube.com">
                <FaYoutube className="text-3xl text-p1 "></FaYoutube>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
