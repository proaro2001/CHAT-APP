// import React from 'react'

import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-yellow-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign Up
          <span className="text-purple-500 "> ChatApp</span>
        </h1>

        <form>
          {/* Full Name */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Please confirm your password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* GENDER CHECKBOX GOES HERE */}
          <GenderCheckbox />

          {/* Already have an account */}
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div className="flex flex-col items-center ">
            <button className="btn  btn-sm mt-2 w-6/12">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
