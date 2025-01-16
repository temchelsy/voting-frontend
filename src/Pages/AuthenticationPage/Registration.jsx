import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Footer from "../../Components/Footer";
import API_URL from "../Constants/Constants";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      
      if (response.ok) {
        const responseData = JSON.parse(responseText);
        toast.success(
          "Registration successful! Please check your email for verification instructions."
        );
        navigate("/verify-email");
      } else {
        let errorData = {};
        try {
          errorData = JSON.parse(responseText);
        } catch (error) {
          errorData = { message: "Unknown error occurred" };
        }
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        "An error occurred during registration. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex flex-col w-full max-w-md px-6 py-8 space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">
                Create your account
              </h2>
              <p className="text-gray-200">
                Join Electrify and start creating your elections
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Choose a username"
                />
                {errors.username && (
                  <p className="text-yellow-400 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <p className="text-yellow-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      }
                    })}
                    type={passwordVisible ? "text" : "password"}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {passwordVisible ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-yellow-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-lg"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="text-center">
                <p className="text-gray-200">
                  Already have an account?{" "}
                  <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Registration;