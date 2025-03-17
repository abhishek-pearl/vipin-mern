"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const [registrationType, setRegistrationType] = useState("Individual");

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <div className="text-sm text-gray-700 mb-2">Register as:</div>
        <select
          value={registrationType}
          onChange={(e) => setRegistrationType(e.target.value)}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="Individual">Individual</option>
          <option value="Organization">Organization</option>
          <option value="Company">Company</option>
        </select>
      </div>

      {/* Aadhar Card Verification */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">Aadhar Card Verification</h2>
          <span className="text-red-500 ml-1">*</span>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-2">Aadhar Card Number</div>
          <div className="flex gap-2">
            <input
              {...register("aadharNumber", {
                required: "Aadhar Number is required",
              })}
              placeholder="Aadhar Card Number *"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
            />
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-orange-500  hover:bg-orange-600 text-white"
            >
              Verify
            </button>
          </div>
        </div>
      </div>

      {/* PAN Card Verification */}
      <div className="mb-6">
        <label className="text-base font-bold">
          PAN Card Verification<span className="text-red-500"> *</span>
        </label>
        <div className="border-t border-gray-200 pt-4 space-y-3">
          <div className="w-full md:w-2/3">
            <div className="mb-2">PAN Card Number</div>
            <div className="flex gap-2">
              <input
                {...register("panNumber", {
                  required: "PAN Number is required",
                })}
                placeholder="PAN Card Number *"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
              />
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-orange-500  hover:bg-orange-600 text-white"
              >
                Verify
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              <label className="mb-2 block">
                Upload PAN Card<span className="text-red-500"> *</span>
              </label>
              <input
                {...register("panFile", {
                  required: "PAN Card file is required",
                })}
                type="file"
                accept=".jpg,.jpeg,.png"
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-orange-500 file:text-white hover:file:bg-orange-600"
              />
              <div className="flex justify-between items-start mt-2">
                <div className="">
                  <div className="text-xs text-gray-500">
                    Supported types: JPEG, JPG, PNG
                  </div>
                  <div className="text-xs text-gray-500">File size: 4MB</div>
                </div>
                {errors.panFile && (
                  <p className="text-red-500 text-sm ">Pan is required</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bidder Details */}
      <div className="mb-6">
        <h2 className="text-base font-bold mb-2">Bidder Details</h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Name :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Full Name *"
                  {...register("name", { required: true })}
                />
                <p className="text-red-500 text-sm mt-2">
                  {errors.name && "Field is required"}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Father's/Husband's Name :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Father's/Husband's Name *"
                  {...register("father_husband_name", { required: true })}
                />
                <p className="text-red-500 text-sm mt-2">
                  {errors.father_husband_name && "Field is required"}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Mobile Number :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Mobile Number *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Email ID :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Email ID *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Date of Birth :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Date Of Birth *"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="mb-6">
        <h2 className="text-base font-bold mb-2">Address</h2>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-base font-semibold mb-4">
            Correspondence Address
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Address :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Address, House Number, Building *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Street/Area :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Street/Area *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Pincode :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Pincode *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">City :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="City *"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">State :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="State *"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Permanent Address */}
      <div className="mb-6">
        <h2 className="text-base font-bold mb-2">Permanent Address</h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Address :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Address, House Number, Building"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Street/Area :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Street/Area"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">Pincode :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">City :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-1/3 pt-2">State :</div>
              <div className="w-2/3">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                  placeholder="State"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">Profile Image</h2>
          <span className="text-red-500 ml-1">*</span>
        </div>
        <input
          {...register("profileImage", {
            required: "PAN Card file is required",
          })}
          type="file"
          accept=".jpg,.jpeg,.png"
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-orange-500 file:text-white hover:file:bg-orange-600"
        />
        <div className="flex justify-between items-start mt-2">
          <div className="">
            <div className="text-xs text-gray-500">
              Supported types: JPEG, JPG, PNG
            </div>
            <div className="text-xs text-gray-500">File size: 4MB</div>
          </div>
          {errors.profileImage && (
            <p className="text-red-500 text-sm ">Pan is required</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-orange-500  hover:bg-orange-600 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
