import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import logo from './MainImage/loginlogo.png'

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    if (location.state?.Register) {
      setIsRegistering(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setAlertType("error");
      return;
    }
    axios
      .post("http://localhost:3001/RegisterDetails", { name, email, password })
      .then((result) => {
        console.log(result);
        setIsRegistering(!isRegistering);
        setAlertMessage("Registration Successful!");
        setAlertType("success");
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Error registering user!");
        setAlertType("error");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/", {
          state: { alertMessage: "Login Successful!", alertType: "success" },
        });
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Invalid email or password!");
        setAlertType("error");
      });
  };

  return (
    <div className="flex min-h-screen relative bg-white">
      {alertMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-white 
          ${alertType === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {alertMessage}
        </div>
      )}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={logo}
          alt="Placeholder"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2 flex items-center bg-white pl-24 ">
        <div className="max-w-md w-full space-y-8 p-12 rounded-lg shadow-xl shadow-white bg-[#3674B5] text-white">
          <h2 className="text-center text-2xl font-bold">
            {isRegistering ? "Register" : "Sign In"}
          </h2>
          <form
            className="mt-8 space-y-6"
            onSubmit={isRegistering ? handleRegister : handleLogin}
          >
            {isRegistering && (
              <div >
                <label 
                  htmlFor="username"
                  className="block text-lg font-medium  text-white"
                >
                  User Name
                </label>
                <input
                  type="name"
                  id="username"
                  required
                  value={name}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {isRegistering && (
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-lg font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  value={confirmPassword}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isRegistering ? "Register" : "Sign In"}
              </button>
            </div>
          </form>
          <div className="text-center">
            <button
              onClick={toggleForm}
              className="text-white hover:underline"
            >
              {isRegistering
                ? "Already have an account? Sign In"
                : "Need an account? Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
