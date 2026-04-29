const Footer = () => {
  return (
    <footer className="mb-10 overflow-x-hidden">
      <div className="pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="min-w-0">
            <div className="border-b-4 pb-1 mb-4 border-p1">
              <h2 className="text-[22px] font-bold">About Us</h2>
            </div>
            <ul className="flex flex-col space-y-2 break-words">
              <a className="font-medium link link-hover">Our People</a>
              <a className="font-medium link link-hover">Contact Us</a>
              <a className="font-medium link link-hover">
                Community Involvement
              </a>
              <a className="font-medium link link-hover">Careers</a>
              <a className="font-medium link link-hover">
                Project and Media Requests
              </a>
              <a className="font-medium link link-hover">In the Press</a>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="border-b-4 pb-1 mb-4 border-p1">
              <h2 className="text-[22px] font-bold">Catering</h2>
            </div>
            <ul className="flex flex-col space-y-2 break-words">
              <a className="font-medium link link-hover">
                Student Group Catering
              </a>
              <a className="font-medium link link-hover">
                Plan a gathering, corporate event, or <br /> celebration
              </a>
              <a className="font-medium link link-hover">
                Sustainability & Zero-Waste Events
              </a>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="border-b-4 pb-1 mb-4 border-p1">
              <h2 className="text-[22px] font-bold">Plans & Points</h2>
            </div>
            <ul className="flex flex-col space-y-2 break-words">
              <a className="font-medium link link-hover">Meal Plans</a>
              <a className="font-medium link link-hover">FAQs</a>
              <a className="font-medium link link-hover">
                Where to Use Meals & Points
              </a>
              <a className="font-medium link link-hover">
                Where to Use Meals & Points
              </a>
              <a className="font-medium link link-hover">Terrier Meal Share</a>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="border-b-4 pb-1 mb-4 border-p1">
              <h2 className="text-[22px] font-bold">For Parents</h2>
            </div>
            <ul className="flex flex-col space-y-2 break-words">
              <a className="font-medium link link-hover">
                Give Convenience Points
              </a>
              <a className="font-medium link link-hover">
                Follow our Social Media
              </a>
              <a className="font-medium link link-hover">
                Submit a Family Recipe
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
