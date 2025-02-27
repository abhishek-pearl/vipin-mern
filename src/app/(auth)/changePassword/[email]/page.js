"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { instance } from "@/utils/axiosInterceptor";
import { useParams, useRouter } from "next/navigation";

export default function ChangePassword({ params, searchParams }) {
  console.log(params, searchParams);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = useParams();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const password = data?.confirmPassword;
    const decodedEmail = decodeURIComponent(params?.email);
    try {
      // Simulating API call
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/verifyForgetPassword?token=${searchParams?.token}`,
        {
          password,
          email: decodedEmail,
        }
      );
      console.log(res?.data?.data, "data");
      router.push("/login");
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full mt-1 p-3 border outline-none border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Enter new password"
            />
            <button
              type="button"
              className="absolute bottom-3 right-3 flex items-center text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              })}
              className="w-full mt-1 p-3 border outline-none border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              className="absolute bottom-3 right-3 flex items-center text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
