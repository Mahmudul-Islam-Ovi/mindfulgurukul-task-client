import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BaseUrl } from "../BaseUrl/BaseUrl";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Make an Axios POST request to the login endpoint
      const response = await axios.post(`${BaseUrl}/api/users/login`, data);
      if (response.data) {
        reset();
        Swal.fire("Login Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  return (
    <div>
      <div className="h-screen w-full">
        <div className="h-full w-full flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full">
            <div className="flex flex-col hover:blur-0 h-full bg-center bg-cover items-center justify-center w-full gap-5 bg-gradient-to-tr from-violet-700 to-violet-500">
              <h1 className="my-6">
                <h1 className="text-6xl font-bold text-white">Login</h1>
              </h1>
              <ul className="inline-flex items-center text-xl gap-10">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="p-3 border-white text-violet-500 rounded-full border hover:scale-110 transition-all hover:bg-vifrom-violet-700 hover:text-white"
                    x="0px"
                    y="0px"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="white"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDasharray
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M15.00391,3c-6.629,0 -12.00391,5.373 -12.00391,12c0,6.627 5.37491,12 12.00391,12c10.01,0 12.26517,-9.293 11.32617,-14h-1.33008h-2.26758h-7.73242v4h7.73828c-0.88958,3.44825 -4.01233,6 -7.73828,6c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c2.009,0 3.83914,0.74575 5.24414,1.96875l2.8418,-2.83984c-2.134,-1.944 -4.96903,-3.12891 -8.08203,-3.12891z" />
                      </g>
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="p-3 border-white text-violet-500 rounded-full border hover:scale-110 transition-all hover:bg-vifrom-violet-700 hover:text-white"
                    x="0px"
                    y="0px"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="white"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDasharray
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z" />
                      </g>
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="p-3 border-white text-violet-500 rounded-full border hover:scale-110 transition-all hover:bg-vifrom-violet-700 hover:text-white"
                    x="0px"
                    y="0px"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="white"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth={1}
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit={10}
                      strokeDasharray
                      strokeDashoffset={0}
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z" />
                      </g>
                    </g>
                  </svg>
                </li>
              </ul>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                placeholder="Enter Your Email Here!"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="bg-white/50 hover:bg-white md:bg-white placeholder:text-violet-500 placeholder:text-sm text-violet-500 py-3 px-5 focus:text-violet-500 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                placeholder="Enter Your Password Here!"
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
              <div className="text-right">
                <Link
                  to="/signUp"
                  href
                  className="italic text-white/50 text-sm underline decoration-violet-500 text-violet-500 hover:text-white hover:text-violet-700 transition"
                >
                  Dont have account? Sign Up
                </Link>
              </div>
              <button className="px-6 py-2 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
