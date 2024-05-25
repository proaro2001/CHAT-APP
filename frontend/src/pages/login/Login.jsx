import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  // State variables to store the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  // function that handles the login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-yellow-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="text-purple-500 "> ChatApp</span>
        </h1>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          {/* Username Input field*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* Password Input field*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* SignUp Link */}
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't have an account?"}
          </Link>

          {/* Submit Button */}
          <div className="flex flex-col items-center ">
            {/* <button className="btn btn-block btn-sm mt-2">Login</button> */}
            <button className="btn  btn-sm mt-2 w-6/12" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
