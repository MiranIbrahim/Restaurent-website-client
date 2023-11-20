import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../Hooks/useAxios";

const UserTable = ({ user, index, refetch }) => {
  const handleDelete = (user) => {
    Swal.fire({
      title: `Are you sure want to delete ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} has been deleted.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleRole = (user) => {
    Swal.fire({
      title: `Are you sure want to make Admin ${user.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Admin Created",
              text: `${user.name} is Admin now.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <span className="text-green-600 font-bold">Admin</span>
        ) : (
          <button
            onClick={() => handleRole(user)}
            className="btn btn-ghost btn-lg"
          >
            <div className="">
              <FaUsers className="bg-yellow-600 text-white text-4xl p-2 rounded-md"></FaUsers>
            </div>
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(user)}
          className="btn btn-ghost btn-lg"
        >
          <FaTrashAlt className="text-red-600 text-3xl"></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
