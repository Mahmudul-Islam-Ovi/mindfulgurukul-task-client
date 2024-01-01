import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import { Link, useNavigate } from "react-router-dom";

const AddUsers = () => {
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Make an Axios POST request to the backend URL
      const response = await axios.post(`${BaseUrl}/api/users`, data);
      if (response.data.insertedId) {
        reset();
        Swal.fire({
          title: "Success",
          text: "User Create successFully",
          icon: "question",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-20 flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add User
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your username
                </label>
                <input
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    pattern: /^[A-Za-z ]+$/i,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                  })}
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Mobile
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  {...register("phone", {
                    required: true,
                  })}
                  placeholder="Phone Number"
                  id="number"
                />
              </div>
              <div className="flex justify-center gap-10">
                <button
                  className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                  type="submit"
                >
                  Save
                </button>
                <Link
                  to={"/"}
                  className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
