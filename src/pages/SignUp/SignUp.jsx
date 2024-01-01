import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from "../BaseUrl/BaseUrl";

const SignUp = () => {
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
      <section className="rounded-md bg-black/80 p-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Login
              </Link>
            </p>
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
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      {...register("password", {
                        required: true,
                        // pattern: /^[A-Za-z ]+$/i,
                      })}
                      placeholder="Password"
                      id="password"
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
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Gender
                    </label>
                    <div className="flex gap-5">
                      <div>
                        <label htmlFor="male">
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            {...register("gender", { required: true })}
                            className="mr-2"
                          />
                          Male
                        </label>
                      </div>
                      <div>
                        <label htmlFor="female">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            {...register("gender", { required: true })}
                            className="mr-2"
                          />
                          Female
                        </label>
                      </div>
                      <div>
                        <label htmlFor="other">
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            {...register("gender", { required: true })}
                            className="mr-2"
                          />
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      How did you hear about this?
                    </label>
                    <div>
                      <label htmlFor="linkedin">
                        <input
                          type="checkbox"
                          id="linkedin"
                          name="hearAbout"
                          value="LinkedIn"
                          {...register("hearAbout")}
                          className="mr-2"
                        />
                        LinkedIn
                      </label>
                    </div>
                    <div>
                      <label htmlFor="friends">
                        <input
                          type="checkbox"
                          id="friends"
                          name="hearAbout"
                          value="friends"
                          {...register("hearAbout")}
                          className="mr-2"
                        />
                        Friends
                      </label>
                    </div>
                    <div>
                      <label htmlFor="jobPortal">
                        <input
                          type="checkbox"
                          id="jobPortal"
                          name="hearAbout"
                          value="jobPortal"
                          {...register("hearAbout")}
                          className="mr-2"
                        />
                        Job Portal
                      </label>
                    </div>
                    <div>
                      <label htmlFor="others">
                        <input
                          type="checkbox"
                          id="others"
                          name="hearAbout"
                          value="others"
                          {...register("hearAbout")}
                          className="mr-2"
                        />
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      {...register("city", { required: true })}
                      className="border rounded w-full py-2 px-3"
                    >
                      <option value="">Select City</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      {...register("state", { required: true })}
                      className="border rounded w-full py-2 px-3"
                      placeholder="Type to search..."
                      list="stateSuggestions"
                    />
                    <datalist id="stateSuggestions">
                      <option value="Gujarat" />
                      <option value="Maharashtra" />
                      <option value="Karnataka" />
                    </datalist>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
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

export default SignUp;
