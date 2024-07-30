import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";

const LoanForm = () => {
  const [modal, setModal] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return (
    <>
      {mounted &&
        modal &&
        createPortal(
          <div className="  bg-black/30 backdrop-blur-sm fixed top-0 left-0  h-full w-full grid place-items-center ">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="absolute top-3 right-3 text-white"
            >
              <IoMdClose size={30} />
            </button>

            <main className="w-full mx-auto max-w-7xl h-[80vh] flex">
              <div className="relative flex-1 hidden items-center justify-center h-full bg-slate-300 lg:flex">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">
                    Covid-19 Guidelines
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <IoCheckmarkSharp className="w-5 h-5 inline-block mr-2 text-primary" />
                      Wear a mask in public settings
                    </li>
                    <li>
                      <IoCheckmarkSharp className="w-5 h-5 inline-block mr-2 text-primary" />
                      Maintain 6 feet of distance from others
                    </li>
                    <li>
                      <IoCheckmarkSharp className="w-5 h-5 inline-block mr-2 text-primary" />
                      Wash your hands frequently
                    </li>
                    <li>
                      <IoCheckmarkSharp className="w-5 h-5 inline-block mr-2 text-primary" />
                      Stay home if you feel unwell
                    </li>
                    <li>
                      <IoCheckmarkSharp className="w-5 h-5 inline-block mr-2 text-primary" />
                      Get vaccinated when eligible
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute inset-0 my-auto h-[500px]"
                  style={{
                    background:
                      "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                    filter: "blur(118px)",
                  }}
                ></div>
              </div>
              <div className="flex-1 flex items-center justify-center h-full bg-white">
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                  <div className="">
                    <img
                      src="https://floatui.com/logo.svg"
                      width={150}
                      className="lg:hidden"
                    />
                    <div className="mt-5 space-y-2">
                      <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Enquiry Form
                      </h3>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                  >
                    <div>
                      <label className="font-medium">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Mobile No.</label>
                      <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="loanType" className="font-medium">
                        Loan Type
                      </label>
                      <select
                        id="loanType"
                        name="loanType"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      >
                        <option value="">Select a loan type</option>
                        <option value="personal">Personal Loan</option>
                        <option value="auto">Auto Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="student">Student Loan</option>
                        <option value="business">Business Loan</option>
                      </select>
                    </div>

                    <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </div>,
          document.body
        )}
    </>
  );
};

export default LoanForm;
