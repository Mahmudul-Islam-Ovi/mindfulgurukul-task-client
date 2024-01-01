import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleUser from "../pages/Home/SingleUser";
import AddUsers from "../pages/AddUsers/AddUsers";
import UpdateUsers from "../pages/UpdateUsers/UpdateUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/singleUser/:userId",
        element: <SingleUser></SingleUser>,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUsers></UpdateUsers>,
      },
      {
        path: "/addUser",
        element: <AddUsers></AddUsers>,
      },
    ],
  },
]);
