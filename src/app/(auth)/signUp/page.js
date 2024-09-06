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
      console.log(result);
    } catch (error) {
      setLoading(false);

      toast.error("Something Went Wrong...", { position: "top-center" });
    }
    // Handle form submission (e.g., send data to server)
  };

  // This block of code is used to set Indian states dropdown Values.
  useEffect(() => {
    const states = State.getStatesOfCountry("IN");
    if (states?.length > 0) {
      setStateLists(
        states.map((state) => {
          return {
            label: state?.name,
            value: state?.isoCode,
          };
        })
      );
    }
  }, []);

  const fetchCitiesList = (state) => {
    const citiesList = City.getCitiesOfState("IN", state?.value);
    setCityLists(
      citiesList.map((city) => {
        return {
          label: city?.name,
          value: city?.name,
        };
      })
    );
  };

  return (
    <main className="w-full h-[92.5vh] flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-lg">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                {...register("fullName", { required: "Name is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
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
                {...register("pincode", {
                  required: "Pin Code is required",
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>

            <Select
              options={stateLists}
              // value={value || null}
              onChange={(val) => {
                // resetField("City");
                // onChange(val);
                setState(val.label);

                console.log(val);
                fetchCitiesList(val);
              }}
              getOptionLabel={(e) => e.label}
              getOptionValue={(e) => e.value}
              // closeMenuOnSelect={true}
            />

            <Select
              // value={value || null}
              options={cityList}
              onChange={(val) => {
                setCity(val.value);
                console.log(val);
              }}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
