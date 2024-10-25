const SingleBestRating = ({ item }) => {
  const {
    name,
    category,
    price,
    postTime,
    rating,
    likes,
    review,
    adminName,
    adminEmail,
    ingredient,
    description,
    image,
    _id,
  } = item;

  return (
    <div className="bg-[#111725] px-1 rounded-full  lg:pt-2 pb-3">
      <img
        className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] mx-auto rounded-full "
        src={image}
      ></img>

      <h2 className=" text-sm text-center  lg:mt-5 mt-3">{category}</h2>
      <p className="font-bold text-sm text-center ">
        $ <span className="lg:text-base  text-sm ">{price}</span>{" "}
      </p>
    </div>
  );
};

export default SingleBestRating;
