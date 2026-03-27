import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface ForgotPasswordInputs {
  email: string;
}

const ForgotPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>();

  const onSubmit = (data: ForgotPasswordInputs) => {
    alert(`Reset link sent to: ${data.email}`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-center">
        <h1 className="text-3xl font-black mb-2 tracking-tight">
          Reset Password
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Enter your email and we'll send you a link to get back into your
          account.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
        >
          <div className="flex flex-col gap-2 text-left">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all bg-gray-50/50 ${
                errors.email
                  ? "border-red-500 focus:ring-4 focus:ring-red-500/10"
                  : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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
              <span className="text-xs font-bold text-red-500 ml-1 mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-8">
          <Link
            to="/login"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
