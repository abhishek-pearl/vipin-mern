"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { instance } from "@/utils/axiosInterceptor";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { amount: 1500 } });

  // const onSubmit = (data) => {
  //   console.log({ ...data, userType: selectedUserType });
  //   axios.post('http://localhost:8000/api/v1/payment/order',{
  //     data:{
  //        amount:1000
  //     }

  //   },{
  //     withCredentials:true
  //   })
  //   .then(res => {
  //     window.location.href = res.data;
  //   })
  //   .catch(err=>{
  //     console.log(err,"error");
  //   })
  // };
  async function onSubmittion(data) {
    try {
      // setLoading(true);
      const payload = {
        amount: parseInt(data.amount),
        number: data.phoneNumber,
        budget: data.budget,
        state: data.state,
        auctionType: data.propertyType,
        locality: data.locality,
        city: data.city,
        name: data.name,
        userType: data.userType,
      };
      console.log("data", data);

      instance
        .post(
          `${process.env.NEXT_PUBLIC_API_URL_PRODUCTION}/payment/order`,
          {
            ...payload,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          window.location.href = res.data;
        })
        .catch((err) => {
          console.log(err, "error");
        });
      // if (result?.data.status === "SUCCESS") {
      //   toast.success("Succesfully Created!!");
      //   router.push("/login");
      //   setLoading(false);

      // }
    } catch (error) {
      // setLoading(false);
      toast.error("Something Went Wrong...", { position: "top-center" });
    }
  }

  const password = watch("password");

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmittion)} className="space-y-6">
        <div>
          <p className="text-gray-700 mb-4">I am a</p>
          <div className="flex gap-6">
            {["Buyer", "Seller", "Investor", "Agent"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={type.toLowerCase()} // Sets the value as lowercase (e.g., "buyer")
                  {...register("userType", {
                    required: "Please select a user type",
                  })} // Registers the input with react-hook-form
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
          {errors.userType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userType.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div> */}

          {/* <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div> */}

          {/* <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password *
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              {...register("state", { required: "State is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              State at which you are looking to buy / sell property
            </p>
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              City at which you are looking to buy / sell property
            </p>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Locality
            </label>
            <input
              type="text"
              {...register("locality", { required: "Locality is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Locality at which you are looking to buy / sell property
            </p>
            {errors.locality && (
              <p className="text-red-500 text-sm">{errors.locality.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Auction Type *
            </label>
            <select
              {...register("propertyType", {
                required: "Property type is required",
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select property type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="vehical">Vehical</option>
            </select>
            {errors.propertyType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.propertyType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget *
            </label>
            <select
              {...register("budget", { required: "Budget is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select budget range</option>
              <option value="0.5-5 lakh">50,000 - 5 Lakhs</option>
              <option value="5-10 lakh">5 Lakhs - 10 Lakhs</option>
              <option value="10-15 lakh">10 Lakhs - 15 Lakhs</option>
              <option value="15-20 lakh">15 Lakhs - 20 Lakhs</option>
              <option value="20-25 lakh">20 Lakhs - 25 Lakhs</option>
              <option value="25-30 lakh">25 Lakhs - 30 Lakhs</option>
              <option value="30-35 lakh">30 Lakhs - 35 Lakhs</option>
              <option value="35-40 lakh">35 Lakhs - 40 Lakhs</option>
              <option value="40-45 lakh">40 Lakhs - 45 Lakhs</option>
              <option value="45-50 lakh">45 Lakhs - 50 Lakhs</option>
              <option value="50-55 lakh">50 Lakhs - 55 Lakhs</option>
              <option value="55-60 lakh">55 Lakhs - 60 Lakhs</option>
              <option value="60-65 lakh">60 Lakhs - 65 Lakhs</option>
              <option value="65-70 lakh">65 Lakhs - 70 Lakhs</option>
              <option value="70-75 lakh">70 Lakhs - 75 Lakhs</option>
              <option value="75-80 lakh">75 Lakhs - 80 Lakhs</option>
              <option value="80-85 lakh">80 Lakhs - 85 Lakhs</option>
              <option value="85-90 lakh">85 Lakhs - 90 Lakhs</option>
              <option value="90-95 Crore">90 Lakhs - 95 Lakhs</option>
              <option value="95-100 Crore">95 Lakhs - 1 Crore</option>
              <option value="95-100 Crore">1 Crore - 5 Crore</option>
              <option value="95-100 Crore">5 Crore - 10 Crore+</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Consultancy Fee *
            </label>
            <input
              type="amount"
              // value={1500}
              // defaultValue={1500}
              disabled
              {...register("amount")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("agreeToTerms", {
              required: "You must agree to the terms",
            })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm text-gray-700">
            I agree to the Sarfaesi Auctions{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
