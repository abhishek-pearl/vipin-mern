"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default () => {
  const [state, setState] = useState("");
  const [stateLists, setStateLists] = useState([]);
  const [cityList, setCityLists] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedUserType, setSelectedUserType] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log({ ...data, city, state });
    try {
      setLoading(true);
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
        {
          ...data,
          city,
          state,
        }
      );
      if (result?.data.status === "SUCCESS") {
        toast.success("Succesfully Created!!");
        router.push("/login");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something Went Wrong...", { position: "top-center" });
    }
  };

  useEffect(() => {
    const states = State.getStatesOfCountry("IN");
    if (states?.length > 0) {
      setStateLists(
        states.map((state) => ({
          label: state?.name,
          value: state?.isoCode,
        }))
      );
    }
  }, []);

  const fetchCitiesList = (state) => {
    const citiesList = City.getCitiesOfState("IN", state?.value);
    setCityLists(
      citiesList.map((city) => ({
        label: city?.name,
        value: city?.name,
      }))
    );
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 ">
      <div className="w-full space-y-6 text-gray-600 max-w-md mx-auto">
        <div className="text-center">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Create an account
          </h3>
          <p className="mt-2">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Log in
            </Link>
          </p>
        </div>
        <div className="bg-white  p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* <div>
              <p className="text-gray-700 mb-4">I am a</p>
              <div className="flex gap-6">
                {["Buyer", "Seller", "Investor", "Agent"].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={type.toLowerCase()}
                      checked={selectedUserType === type.toLowerCase()}
                      onChange={() => setSelectedUserType(type.toLowerCase())}
                      {...register("userType", {
                        required: "Please select a user type",
                      })}
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
            </div> */}
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: "Name is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600  rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">Mobile Number</label>
              <input
                type="text"
                {...register("phone", {
                  required: "Mobile Number is required",
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">Pin Code</label>
              <input
                type="text"
                {...register("pincode", { required: "Pin Code is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">State</label>
              <Select
                options={stateLists}
                onChange={(val) => {
                  setState(val.label);
                  fetchCitiesList(val);
                }}
                className="mt-2"
              />
            </div>

            <div>
              <label className="font-medium">City</label>
              <Select
                options={cityList}
                onChange={(val) => {
                  setCity(val.value);
                }}
                className="mt-2"
              />
            </div>

            <button
              type="submit"
              className="w-full   mt-6 px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
