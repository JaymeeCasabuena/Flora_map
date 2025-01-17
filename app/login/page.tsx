"use client";

import { useState } from "react";
import "../../styles/globals.css";

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    regEmail: "",
    regPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const toggleForm = () => setIsSignUpActive(!isSignUpActive);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-row justify-between items-center p-5">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 38 48"
            fill="none"
          >
            <path
              d="M25.0008 24C25.0008 27.3137 22.3145 30 19.0008 30C15.6871 30 13.0008 27.3137 13.0008 24C13.0008 20.6863 15.6871 18 19.0008 18C22.3145 18 25.0008 20.6863 25.0008 24Z"
              fill="#FFC505"
            />
            <path
              d="M25.0008 10C25.0008 13.3137 22.3145 16 19.0008 16C15.6871 16 13.0008 13.3137 13.0008 10C13.0008 6.68629 15.6871 4 19.0008 4C22.3145 4 25.0008 6.68629 25.0008 10Z"
              fill="#FFC505"
            />
            <path
              d="M37.125 31C37.125 34.3137 34.4387 37 31.125 37C27.8113 37 25.125 34.3137 25.125 31C25.125 27.6863 27.8113 25 31.125 25C34.4387 25 37.125 27.6863 37.125 31Z"
              fill="#FFC505"
            />
            <path
              d="M37.127 17.0002C37.127 20.3139 34.4407 23.0002 31.127 23.0002C27.8132 23.0002 25.127 20.3139 25.127 17.0002C25.127 13.6865 27.8132 11.0002 31.127 11.0002C34.4407 11.0002 37.127 13.6865 37.127 17.0002Z"
              fill="#FFC505"
            />
            <path
              d="M25.0008 38C25.0008 41.3137 22.3145 44 19.0008 44C15.6871 44 13.0008 41.3137 13.0008 38C13.0008 34.6863 15.6871 32 19.0008 32C22.3145 32 25.0008 34.6863 25.0008 38Z"
              fill="#FFC505"
            />
            <path
              d="M12.877 17C12.877 20.3137 10.1907 23 6.87695 23C3.56324 23 0.876953 20.3137 0.876953 17C0.876953 13.6863 3.56324 11 6.87695 11C10.1907 11 12.877 13.6863 12.877 17Z"
              fill="#FFC505"
            />
            <path
              d="M12.875 30.9997C12.875 34.3134 10.1887 36.9997 6.875 36.9997C3.56129 36.9997 0.875 34.3134 0.875 30.9997C0.875 27.686 3.56129 24.9997 6.875 24.9997C10.1887 24.9997 12.875 27.686 12.875 30.9997Z"
              fill="#FFC505"
            />
          </svg>
          <p>Pollinate</p>
        </div>
        <button
          className="btn w-40 px-8 py-3 mt-5 rounded-full font-semibold text-white"
          onClick={toggleForm}
        >
          {isSignUpActive ? "Login" : "Sign up"}
        </button>
      </div>
      <div className="flex justify-center mt-52">
        <div className="max-w-md left-1/2 p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Pollinate</h1>
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 mb-4 rounded text-center">
              {errorMessage}
            </div>
          )}
          <form>
            {isSignUpActive ? (
              <>
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  value={formData.userName}
                  className="w-full p-3 mb-3 border rounded"
                />
                <input
                  type="email"
                  name="regEmail"
                  placeholder="Email Address"
                  value={formData.regEmail}
                  className="w-full p-3 mb-3 border rounded"
                />
                <input
                  type="password"
                  name="regPassword"
                  placeholder="Password"
                  value={formData.regPassword}
                  className="w-full p-3 mb-3 border rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  className="w-full p-3 mb-3 border rounded"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  className="w-full p-3 mb-3 border rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
                >
                  Log In
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
