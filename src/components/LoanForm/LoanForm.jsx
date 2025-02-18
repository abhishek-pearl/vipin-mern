"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import GetLoanForm from "../GetLoanModal/GetLoanForm";
import { useForm } from "react-hook-form";
import { instance } from "@/utils/axiosInterceptor";
import OffersDisplay from "./OfferDisplay";
import CommonLoanForm from "../CommonLoanForm";

const LoanForm = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loanModal, setLoanModal] = useState(true);
  const [adsData, setAdsData] = useState([]);
  const [showAdModal, setShowAdModal] = useState(false);

  const [serviceTypes,setServiceTypes] = useState(null);


  async function getData()
  {
     try{
    
      const res = await instance.get(`${process.env.NEXT_PUBLIC_API_URL}/services/serviceTitles`);
      setServiceTypes(res?.data?.data);

     }catch(err)
     {
      console.log(err);
     }
  }
  const getAds = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ad/single?showBanner=true`)
    console.log(response?.data?.data, "response")
    if (response?.data?.data) {
      setAdsData(response?.data?.data?.banner)
      setShowAdModal(true)
    }

  }
  useEffect(() => {
    getAds();
    getData();
  }, [])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  // Removed localStorage usage to show banner and form every time
  // useEffect(() => {
  //   if (mounted) {
  //     if (localStorage.getItem('alreadyShown')) {
  //       setIsFirstTime(false);
  //       setShowBanner(false);
  //       setShowForm(false);
  //     } else {
  //       localStorage.setItem('alreadyShown', 'true');
  //     }
  //   }
  // }, [mounted]);

  const submitLoan = async (data) => {
    console.log(data)
    const formData = new FormData()
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

  const handleBannerClose = () => {
    setShowBanner(false);
    setShowForm(true);
  };

  return (
    <>
      {isFirstTime && mounted && showBanner && createPortal(
        <div className="bg-black/30 backdrop-blur-sm fixed top-0 left-0 h-full w-full grid place-items-center z-50">
          <button
            onClick={handleBannerClose}
            className="absolute top-3 right-3 text-white"
          >
            <IoMdClose size={30} />
          </button>

          <main className="w-auto h-[90vh] flex shadow-[0_0_0_1px#ff0000] rounded-sm">
            <img className="h-full" src="./CovidG.jpeg" alt="Banner" />
          </main>
        </div>,
        document.body
      )}

      {isFirstTime && mounted && showForm && createPortal(
        <CommonLoanForm setShowForm={setShowForm} showForm={showForm} />,
        document.body
      )}
      {isFirstTime && mounted && showAd && createPortal(
        <div className="bg-black/30 backdrop-blur-sm fixed top-0 left-0 h-full w-full grid place-items-center z-50">
          <button
            onClick={() => setShowAd(false)}
            className="absolute top-3 right-3 text-white"
          >
            <IoMdClose size={30} />
          </button>

          <main className="max-w-7xl min-h-[90vh] w-full flex  rounded-sm">
            <OffersDisplay data={adsData} />
          </main>
        </div>,
        document.body
      )}
    </>
  );
};

export default LoanForm;
