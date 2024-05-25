// import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-yellow-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="text-purple-500 "> ChatApp</span>
        </h1>

        {/* Input Fields */}
        <form>
          {/* Username Input field*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Password Input field*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
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
            <button className="btn  btn-sm mt-2 w-6/12">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
