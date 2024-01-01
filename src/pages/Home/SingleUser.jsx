import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const SingleUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/users/${userId}`);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Loading></Loading>
      </div>
    );
  }

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const response = await axios.delete(`${BaseUrl}/api/users/${userId}`);

          if (response.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Users has been deleted.",
              icon: "success",
            });
            navigate("/");
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Users  deleted failed.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className=" flex  justify-center mt-20">
      <div className="w-[600px] h-[500px]">
        <div className="flex flex-col justify-center items-center w-auto gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
          <div className="flex justify-center items-center w-28 h-28 p-5 bg-gradient-to-r from-green-400 to-[#002Ff9] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
            <svg
              className="logo-svg"
              viewBox="0 0 29.667 31.69"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                transform="translate(0 0)"
                d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
                data-name="Path 6"
                id="Path_6"
              />
              <path
                transform="translate(-45.91 0)"
                d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                data-name="Path 7"
                id="Path_7"
              />
              <path
                transform="translate(0 -51.963)"
                d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                data-name="Path 8"
                id="Path_8"
              />
            </svg>
          </div>
          <div className="max-w-sm h-auto space-y-3">
            <div className="flex justify-center items-center sm:justify-between">
              <h2 className="text-white text-2xl font-bold tracking-widest">
                {user.name}
              </h2>
              <svg
                viewBox="0 0 24 24"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:flex hover:scale-150 duration-300 fill-white cursor-pointer"
              >
                <path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z" />
              </svg>
            </div>
            <p className="text-sm text-gray-200">{user.email}</p>
            <div className="flex gap-6 items-center justify-center">
              <p className="text-white font-bold text-lg"> {user.phone}</p>
              <p className="text-gray-300 font-semibold text-sm ">
                {user.gender}
              </p>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <p className="text-white font-bold text-lg"> City: {user.city}</p>
              <p className="text-gray-300 font-semibold text-sm ">
                State: {user.state}
              </p>
            </div>
            <div className="flex justify-around items-center my-2">
              <button
                onClick={handleDelete}
                className="px-2 bg-blue-600 p-1 rounded-md text-white font-semibold shadow-xl shadow-blue-500/50 hover:ring-2 ring-blue-400 hover:scale-75 duration-500"
              >
                Delete
              </button>
              <Link
                to={`/updateUser/${userId}`}
                className="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
