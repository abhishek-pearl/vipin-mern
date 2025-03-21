
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { instance } from "@/utils/axiosInterceptor";

const CommonLoanForm = ({ setShowForm, showForm }) => {
  const [loading, setLoading] = useState(false);

  const [serviceTypes, setServiceTypes] = useState(null);


  async function getData() {
    try {

      const res = await instance.get(`${process.env.NEXT_PUBLIC_API_URL}/services/serviceTitles`);
      setServiceTypes(res?.data?.data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitLoan = async (data) => {
    console.log(data)
    const formData = new FormData()
    // formData.append('document', data?.document[0])
    formData.append('email', data?.email)
    formData.append('loanRequired', data?.loanRequired)
    formData.append('mobile', data?.mobile)
    formData.append('name', data?.name)
    formData.append('pincode', data?.pincode)
    formData.append('typeOfLoan', data?.typeOfLoan)
    try {
      setLoading(true);
      const response = await instance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/enquiry`,
        formData
      );
      setLoading(false);
      toast.success("Successfully Submitted...");
      setShowForm(false);
      console.log(response, "response");
    } catch (error) {
      setLoading(false);
      toast.error("Server is busy. Please try again later.");
      console.log(error.message);
    }
  };
  if (!showForm) return null;
  return (
    <div className="bg-black/30 backdrop-blur-sm fixed top-0 left-0 h-full w-full flex justify-end z-50">
      <button
        onClick={() => {
          setShowForm(false)

        }}
        className="absolute top-3 right-0 text-black"
      >
        <IoMdClose size={30} />
      </button>

      <main className="w-auto h-full flex shadow-[0_0_0_1px#ff0000] rounded-md bg-white">
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mt-5">
              Enquiry Form
            </h3>
          </div>
          <form onSubmit={handleSubmit(submitLoan)} className="space-y-5 h-fit px-6 py-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.name ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-medium">Mobile No.</label>
              <input
                type="tel"
                {...register("mobile", { required: "Mobile number is required" })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-medium">Pincode</label>
              <input
                type="text"
                {...register("pincode", { required: "Pincode is required" })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.pincode ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="loanType" className="font-medium">
                Loan Type
              </label>
              <select
                id="loanType"
                {...register("typeOfLoan", {
                  required: "Please select a loan type",
                })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.typeOfLoan ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select a loan type</option>
                {
                  serviceTypes && serviceTypes.map((el, idx) => {
                    return <option key={idx} value={el?.serviceTitle}>{el?.serviceTitle}</option>

                  })
                }

              </select>
              {errors.typeOfLoan && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.typeOfLoan.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium">Loan Requirement Amount</label>
              <input
                type="number"
                {...register("loanRequired", {
                  required: "Loan Requirement is required",
                })}
                className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${errors.pincode ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.loanRequirement && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.loanRequirement.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150 ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default CommonLoanForm