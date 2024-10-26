import { Bounce, toast } from "react-toastify";

const UseToastify = (event, title, img) => {
  const toastify = event ? toast[event] : toast;

  return toastify(
    <>
      {img ? (
        <div className="addFlexItems gap-2">
          <img className="w-[40px] h-[40px]" src={img} alt="" />
          <p>{title}</p>
        </div>
      ) : (
        <p>{title}</p>
      )}
    </>,
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }
  );
};

export default UseToastify;
