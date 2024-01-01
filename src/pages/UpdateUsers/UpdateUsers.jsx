import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import Loading from "../Loading/Loading";

const UpdateUsers = () => {
  const [user, setUser] = useState([]);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/users/${id}`);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You update ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const response = await axios.put(`${BaseUrl}/api/users/${id}`, data);

          if (response.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "Users has been update.",
              icon: "success",
            });
            navigate("/");
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: "Users  updated failed.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <section className="rounded-md bg-black/80 p-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">
              User Update
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      defaultValue={user.name}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      {...register("name", {
                        required: true,
                      })}
                      id="name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      defaultValue={user.email}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                      })}
                      placeholder="Email"
                      id="email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="Number"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Phone{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      defaultValue={user.phone}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      {...register("phone", {
                        required: true,
                      })}
                      placeholder="Phone Number"
                      id="number"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateUsers;
