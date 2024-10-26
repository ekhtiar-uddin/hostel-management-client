const SingleUpcoming = ({ item }) => {
  const { name, category, image, likes, price, postTime } = item;
  return (
    <div className="bg-d2 rounded-3xl p-4 relative">
      <p className="bg-d1  text-sm absolute py-1 w-[87%] top-4 rounded-t-xl px-1 text-center">
        {postTime}
      </p>

      <div className="">
        <div
          style={{
            backgroundImage: `URL(${image})`,
          }}
          className="addFlex bg-no-repeat bg-cover w-full h-[200px]  rounded-3xl"
        >
          <h2 className=" bg-b1  px-3 py-1 rounded    font-semibold ">
            Likes {likes}
          </h2>
        </div>
      </div>

      <div className=" ">
        <div className="p-2  ">
          <h2 className=" mt-3  text-lg font-semibold">
            {name?.split(" ")[0]} {name?.split(" ")[1]}
          </h2>
          <div className="addFlexBetween ">
            <p> {category} </p>
            <p>
              {" "}
              $ <span>{price}</span>{" "}
            </p>
          </div>
        </div>
        <div className="addFlexItems gap-2 mt-3 ">
          <button className=" w-full updateBtn addFlex">Production</button>
        </div>
      </div>
    </div>
  );
};

export default SingleUpcoming;
