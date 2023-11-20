import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UserTable from "./UserTable";
import useAxios from "../../../Hooks/useAxios";
// import { axiosSecure } from "../../../Hooks/useAxios";

// probirghosh.ph@gmail.com

const AllUsers = () => {
    const axiosSecure = useAxios();
    
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
      const result = await axiosSecure.get("/users"
    //   ,{
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('access-token')}`,
    //     }
    //   }
      );
      console.log("result", result);
      return result.data;
    },
  }
  );
  return (
    <div>
      <SectionTitle
        subTitle={"How many??"}
        title={"Manage All Users"}
      ></SectionTitle>

      <div className="ml-5">
        <h2 className="text-3xl">Total users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra-zebra w-full">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <UserTable
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></UserTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
