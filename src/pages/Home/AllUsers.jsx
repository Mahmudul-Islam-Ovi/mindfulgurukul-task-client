import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { BaseUrl } from "./../BaseUrl/BaseUrl";
import { useForm } from "react-hook-form";

const AllUsers = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Make an Axios GET request to the backend URL
      const response = await axios.get(`${BaseUrl}/api/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BaseUrl}/api/users/search/${data.phone}`
      );
      setSearch(response.data);
      reset();
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center p-5">
          <div className="rounded-lg bg-gray-200 p-5">
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                </svg>
              </div>
              <input
                {...register("phone", { required: true })}
                type="text"
                className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder="search by number"
                id
              />
              <input
                type="submit"
                defaultValue="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>
      </form>

      {search ? (
        <div>
          <div className="flex  items-center justify-center">
            <div className="w-96  h-80 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
              <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  fill="currentColor"
                  className="bi bi-person-fill text-white dark:text-indigo-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <figcaption className="sr-only">No data found</figcaption>
              </figure>
              <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                {search.name}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {search.email}
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {search.phone}
              </p>
              <div className="flex items-center justify-center">
                <Link
                  to={`/singleUser/${search._id}`}
                  className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-10  flex-wrap gap-10 items-center justify-center">
          {loading ? (
            <Loading></Loading>
          ) : users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="">
                <div>
                  <div className="w-96 h-80 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                    <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={48}
                        height={48}
                        fill="currentColor"
                        className="bi bi-person-fill text-white dark:text-indigo-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <figcaption className="sr-only">{user.name}</figcaption>
                    </figure>
                    <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      {user.name}
                    </h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {user.email}
                    </p>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {user.phone}
                    </p>
                    <div className="flex items-center justify-center">
                      <Link
                        to={`/singleUser/${user._id}`}
                        className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex  items-center justify-center">
              <div className="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
                <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    fill="currentColor"
                    className="bi bi-person-fill text-white dark:text-indigo-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <figcaption className="sr-only">No data found</figcaption>
                </figure>
                <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  No data found
                </h2>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
