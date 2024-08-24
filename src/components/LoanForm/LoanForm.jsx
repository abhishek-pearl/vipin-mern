"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "sonner";

const LoanForm = () => {
  const [modal, setModal] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true)

  useEffect(() => {
    setMounted(true);



    return () => setMounted(false);
  }, []);
  useEffect(() => {
    if (mounted) {
      if (localStorage.getItem('alreadyShown')) {
        setIsFirstTime(false)
      } else {
        localStorage.setItem('alreadyShown', 'true')
      }
    }
  }, [mounted])


  async function submitLoan(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const typeOfLoan = formData.get("typeOfLoan");
    const loanRequired = formData.get("loanRequired");
    const pincode = formData.get("pincode");
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/enquiry`, {
        name,
        email,
        mobile,
        typeOfLoan,
        loanRequired,
        pincode,
      });
      setLoading(false);
      toast.success("Successfully Submited...");
      setModal(false);

      console.log(response, "response");
    } catch (error) {
      setLoading(false);
      toast.error("Server is busy. Please try again later.");
      console.log(error.message);
    }

    console.log(name, email, mobile, typeOfLoan, loanRequired);
  }
  return (
    isFirstTime && <>
      {mounted &&
        modal &&
        createPortal(
          <div className="  bg-black/30 backdrop-blur-sm fixed top-0 left-0  h-full w-full grid place-items-center z-50 ">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="absolute top-3 right-3 text-white"
            >
              <IoMdClose size={30} />
            </button>

            <main className="w-auto h-[90vh] flex shadow-[0_0_0_1px#ff0000] rounded-sm">
              <img className="h-full" src="./CovidG.jpeg" alt="" />
              <div className="space-y-4 text-gray-600  h-full overflow-auto bg-white w-[350px] py-4 px-8">
                <div className="">
                  <div className="mt-5 space-y-2">
                    <h3 className="text-gray-800 text-2xl font-bold">
                      Enquiry Form
                    </h3>
                  </div>
                </div>

                <form action={submitLoan} className="space-y-2">
                  <div>
                    <label className="font-medium text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Mobile No.</label>
                    <input
                      name="mobile"
                      type="mobile"
                      required
                      className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-sm">Pincode</label>
                    <input
                      name="pincode"
                      type="pincode"
                      required
                      className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="loanType" className="font-medium text-sm">
                      Loan Type
                    </label>
                    <select
                      id="loanType"
                      name="typeOfLoan"
                      required
                      className="w-full mt-1 px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    >
                      <option value="" disabled>Select a loan type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="auto">Auto Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="student">Student Loan</option>
                      <option value="business">Business Loan</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium">Loan Requirement Amount</label>
                    <input
                      type="number"
                      name="loanRequired"
                      required

                      className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600  border-gray-300
                        }`}
                    />

                  </div>
                  {/* <div>
                    <p class="font-medium mb-1 text-gray-500 text-sm">Loan Required?</p>
                    <div class="flex gap-x-4">
                      <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-3 py-2 font-medium text-gray-700">
                        <input
                          class="peer hidden"
                          type="radio"
                          name="loanRequired"
                          value="yes"
                          id="radio1"
                          checked
                        />
                        <label
                          class="peer-checked:border-red-400 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                          for="radio1"
                        >
                          {" "}
                        </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">Yes</span>
                      </div>
                      <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-3 py-2 font-medium text-gray-700">
                        <input
                          class="peer hidden"
                          type="radio"
                          name="loanRequired"
                          value="no"
                          id="radio3"
                          checked
                        />
                        <label
                          class="peer-checked:border-red-400 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                          for="radio3"
                        >
                          {" "}
                        </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">No</span>
                      </div>
                    </div>
                  </div> */}

                  {loading ? (
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </main>
          </div>,
          document.body
        )}
    </>
  );
};

export default LoanForm;
