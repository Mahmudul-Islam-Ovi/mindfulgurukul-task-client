import { useState } from "react";
import AllUsers from "./AllUsers";
import Login from "../Login/Login";

const ShowLoginData = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to set the login state
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <div>
      {/* Conditionally render Login or Dashboard based on the login state */}
      {isLoggedIn ? <AllUsers /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default ShowLoginData;
