import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import API_URL from "../Constants/Constants";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setRefetchCurrentUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Submitted data:", data);
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (response.ok) {
        const { accessToken, refreshToken } = await response.json();
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setRefetchCurrentUser((prev) => !prev);
        toast.success("Login Successfull")
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        toast.error(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-custom-first min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl px-6 py-8 gap-12 lg:gap-24 3xl:max-w-[120rem] 3xl:px-16">
          <div className="flex flex-col justify-center items-start w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-center lg:text-left text-white mb-4 3xl:text-6xl">
              Welcome Back
            </h1>
            <p className="text-lg text-center lg:text-left text-white mb-8 3xl:text-2xl">
              Log in to continue to your dashboard
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-custom-second rounded-lg shadow-md p-6 space-y-4 sm:p-8 3xl:p-16">
            <h2 className="text-2xl font-bolds text-center mb-6 3xl:text-4xl text-white">
              Login
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2 3xl:text-xl"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="bg-white border border-gray-300 w-full p-2.5 rounded-lg 3xl:h-24 3xl:w-[50rem] 3xl:text-3xl"
                  placeholder="name@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 mb-2 3xl:text-xl"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type={passwordVisible ? "text" : "password"}
                    className="bg-white border border-gray-300 w-full p-2.5 rounded-lg 3xl:h-24 3xl:w-[50rem] 3xl:text-3xl"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 3xl:text-3xl"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-custom-blue text-white p-2.5 rounded-lg text-xl 3xl:text-3xl"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>

              <p className="text-sm text-center mt-4 text-white 3xl:text-3xl">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary-600">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <div className="bg-white h-3 w-full"></div>
      <Footer />
    </>
  );
};

export default Login;
