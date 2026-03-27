import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface RegisterInputs {
  fullName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const password = watch("password");

  const onSubmit = (data: RegisterInputs) => {
    console.log("Registering user:", data);
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tighter text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Join the GUZA community today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.fullName
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10"
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("fullName", { required: "Name is required" })}
            />
            {errors.fullName && (
              <span className="text-xs font-bold text-red-500 ml-1">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.email
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10"
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-xs font-bold text-red-500 ml-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.password
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10"
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
            />
            {errors.password && (
              <span className="text-xs font-bold text-red-500 ml-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Repeat password"
              className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all bg-gray-50/50 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10"
                  : "border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              }`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-xs font-bold text-red-500 ml-1">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg mt-6 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
