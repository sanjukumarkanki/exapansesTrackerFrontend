import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const formData = useRef({ email: "", password: "", errorMessage: "" });

  const token = Cookies.get("token");
  if (token !== undefined) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData.current[name] = value;
  };

  const verifyLogin = async () => {
    const bodyData = {
      email: formData.current.email,
      password: formData.current.password,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    };

    try {
      const response = await fetch(
        "https://expansestrackerapp.onrender.com/login",
        options
      );
      if (response.ok) {
        const data = await response.json();
        Cookies.set("token", data.jwtToken);
        localStorage.setItem("userId", JSON.stringify(data.userDetails));
        window.location.href = "/";
      } else {
        const data = await response.json();
        console.log(data, "data");
        formData.current.errorMessage = data.message;
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div className="flex min-h-full bg-container flex flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="register-form-bg w-11/12 py-4 px-4 md:w-6/12">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="button"
                onClick={verifyLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <p className="text-sm mt-3 text-red-500 font-semibold">
                {formData.current.errorMessage === ""
                  ? null
                  : formData.current.errorMessage}
              </p>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't you have an account?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
