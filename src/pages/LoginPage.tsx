import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Define the shape of our login data
interface LoginInputs {
  email: string;
  password?: string; // Optional if you prefer, but usually required
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit = (data: LoginInputs) => {
    console.log("Login Attempt:", data);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Log in to manage your orders and profile.
          </p>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.email 
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10" 
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-xs font-bold text-red-500 ml-1">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[11px] font-black uppercase tracking-widest text-gray-400">
                Password
              </label>
              <Link 
                to="/forgot-password" 
                className="text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800"
              >
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.password 
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10" 
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-xs font-bold text-red-500 ml-1">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg mt-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4"
            >
              Sign Up Free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;