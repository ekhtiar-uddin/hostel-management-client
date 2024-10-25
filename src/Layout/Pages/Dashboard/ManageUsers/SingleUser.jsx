import { FaUsers } from "react-icons/fa";

const SingleUser = ({ user, handleMakeAdmin }) => {
  const { name, email, role, photoURL } = user;

  return (
    <div className="bg-d2 border-t-2 border-b1 brder p-4 rounded-3xl relative">
      <img
        className="w-[100px] mx-auto rounded-full h-[100px]"
        src={photoURL}
      ></img>
      <h2 className="text-center mt-2  text-lg font-medium">{name}</h2>
      <p className="text-center   text-sm ">{email}</p>
      <div className="addFlexJustify  mt-3 ">
        {user.role === "admin" ? (
          <span className="bg-p6  top-[80px] right-[40px] absolute text-sm px-2 py-1 rounded">
            Admin
          </span>
        ) : (
          <button
            onClick={() => handleMakeAdmin(user)}
            className=" px-4 py-1 rounded bg-p6 addFlexItems gap-2 text-sm"
          >
            Make Admin
            <FaUsers className=" text-xl  transition-all duration-200 "></FaUsers>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
