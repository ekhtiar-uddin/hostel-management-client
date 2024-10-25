import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleMeal = ({ meal }) => {
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
  } = meal;
  return (
    <div className="">
      <div className=" bg-p6   rounded-3xl ">
        <div>
          <img
            className="rounded-3xl p-3 mx-auto  w-full h-[150px]"
            src={image}
          ></img>
        </div>
        <div className="addFlexJustify">
          <div className="space-y-1">
            <h2 className="font-semibold   text-xl">
              {name?.split(" ")[0]} {name?.split(" ")[1]}
            </h2>

            <Rating
              className="mx-auto"
              style={{ maxWidth: 110 }}
              value={rating}
              readOnly
            />

            <p className=" text-center ">{category}</p>
          </div>
        </div>
        <p className="text-p1 text-center mt-8 pb-10 font-medium   text-[19px]">
          USD ${price}
        </p>
      </div>
    </div>
  );
};

export default SingleMeal;

{
  /* <div className="absolute  left-[25%] -top-[40%]">
<img
  className="  rounded-full mx-auto  w-[150px] h-[150px]"
  src={image}
></img>
</div> */
}
