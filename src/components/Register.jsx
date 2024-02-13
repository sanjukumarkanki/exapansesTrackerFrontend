import React, { useRef } from "react";
// import Cookies from "js-cookie";
import "../App.css";

const Register = () => {
  const formData = useRef({
    username: "",
    password: "",
    verifiedEmail: "",
    verifyPassword: "",
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData.current[name] = value;
  };

  const verifyLogin = (e) => {
    e.preventDefault();
    if (formData.current.password !== formData.current.verifyPassword) {
      formData.current.errorMessage = "Passwords do not match.";
    } else if (formData.current.username !== formData.current.verifiedEmail) {
      formData.current.errorMessage = "Email do not match.";
    } else if (
      formData.current.password !== formData.current.verifyPassword &&
      formData.current.username !== formData.current.verifiedEmail
    ) {
      formData.current.errorMessage = "Email and Password does not matched.";
    } else {
      const bodyData = {
        email: formData.current.username,
        password: formData.current.password,
      };
      console.log("body", bodyData);
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      };
      console.log(options);

      // Data Fetching
      fetch("https://expansestrackerapp.onrender.com/register", options)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((message) => {
              formData.current.errorMessage = message;
            });
          }
        })
        .then((data) => {
          alert("Your  account has been created! Please log in to continue");
          window.location.replace = "/login";
        })
        .catch((error) => {
          console.error(error, "error");
        });

      //  fETCHING DATA
    }
  };

  return (
    <div className="flex min-h-full bg-container flex flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="round-circle"></div>
      <div className=""></div>
      <div className="register-form-bg w-11/12 py-4 px-4 md:w-6/12">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={verifyLogin} className="space-y-6">
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
                  name="username"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Verify Email input */}
            <div>
              <label
                htmlFor="verify-email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Verify Email address
              </label>
              <div className="mt-2">
                <input
                  id="verify-email"
                  onChange={handleChange}
                  name="verifiedEmail"
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

            {/* Verify Password input */}
            <div>
              <label
                htmlFor="verify-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Verify Password
              </label>
              <div className="mt-2">
                <input
                  id="verify-password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                  onChange={handleChange}
                  name="verifyPassword"
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
                type="submit"
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
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
