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

            </main>
          </div>,
          document.body
        )}
    </>
  );
};

export default LoanForm;
