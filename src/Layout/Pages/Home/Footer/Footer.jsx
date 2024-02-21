const Footer = () => {
  return (
    <div className="mb-10">
      <div className="flex lg:flex-row flex-col justify-center gap-20 pt-20">
        <div className="w-[330px] lg:w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#BFFCF9]">
            <h2 className=" text-[22px] font-bold text-white ">About Us</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white  link link-hover">
              Our People
            </a>
            <a className=" font-medium text-white  link link-hover">
              Contact Us
            </a>
            <a className=" font-medium text-white  link link-hover">
              Community Involvement
            </a>
            <a className=" font-medium text-white  link link-hover">Careers</a>
            <a className=" font-medium text-white  link link-hover">
              Project and Media Requests
            </a>
            <a className=" font-medium text-white  link link-hover">
              In the Press
            </a>
          </ul>
        </div>
        <div className=" w-[330px] lg:w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#BFFCF9]">
            <h2 className="text-[22px] font-bold text-white ">
              Plans & Points
            </h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white  link link-hover">
              Meal Plans
            </a>
            <a className=" font-medium text-white  link link-hover">FAQs</a>
            <a className=" font-medium text-white  link link-hover">
              Where to Use Meals & Points
            </a>
            <a className=" font-medium text-white  link link-hover">
              Where to Use Meals & Points
            </a>
            <a className=" font-medium text-white  link link-hover">
              Terrier Meal Share
            </a>
          </ul>
        </div>
        <div className=" w-[330px] lg:w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#BFFCF9]">
            <h2 className="text-[22px] font-bold text-white ">Catering</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white  link link-hover">
              Student Group Catering
            </a>
            <a className=" font-medium text-white  link link-hover">
              Plan a gathering, corporate event, or <br /> celebration
            </a>
            <a className=" font-medium text-white  link link-hover">
              Sustainability & Zero-Waste Events
            </a>
          </ul>
        </div>
        <div className=" w-[330px] lg:w-[350px]">
          <div className="border-b-4 pb-1 mb-4  border-[#BFFCF9]">
            <h2 className="text-[22px] font-bold text-white ">For Parents</h2>
          </div>
          <ul className="flex flex-col space-y-2">
            <a className=" font-medium text-white  link link-hover">
              Give Convenience Points
            </a>
            <a className=" font-medium text-white  link link-hover">
              Follow our Social Media
            </a>
            <a className=" font-medium text-white  link link-hover">
              Submit a Family Recipe
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
