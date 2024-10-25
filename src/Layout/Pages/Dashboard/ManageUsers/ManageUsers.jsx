import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import SingleUser from "./SingleUser";

const ManageUsers = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h2 className=" my-12 headTitle">
        All user <span className="text-p1"> data </span>
      </h2>

      {/* todo : membership pending */}

      <div className="">
        <div className="grid grid-cols-6 gap-4">
          {users.map((user, index) => (
            <SingleUser
              key={user._id}
              handleMakeAdmin={handleMakeAdmin}
              user={user}
            ></SingleUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
