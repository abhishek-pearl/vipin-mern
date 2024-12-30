"use client";

import React, { useEffect, useState } from "react";
import GetLoanForm from "../GetLoanModal/GetLoanForm";
import Link from "next/link";
import { userStore } from "@/store/authStore";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const { user, error, loading, login, isUserLoggedIn, logout } = userStore();
  const router = useRouter()
  const [loanModal, setLoanModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [triggerAuth, setTriggerAuth] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path == '/auctionProperties') {
      setTriggerAuth(true);
    }
    else {
      setTriggerAuth(false);

    }
  }, [path]);
  return (
    <>
      <header>
        <nav className="bg-white text-red-500 px-4 lg:px-8 py-4 border-b-4 border-red-500">
          <div className="flex flex-wrap gap-4 justify-between items-center mx-auto max-w-screen-2xl">
            {/* Logo Section */}
            <Link href="/" className="flex items-center mx-auto md:mx-0">
              <img
                src="/LogoSDL.png"
                className="mr-3 h-[5rem] transition-transform transform hover:scale-105"
                alt="Logo"
              />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap">
                SDLK
              </span> */}
            </Link>



            {/* Action Buttons */}
            {triggerAuth && <div className="flex items-center lg:order-2 space-x-4">


              {isUserLoggedIn ? (
                <button
                  onClick={() => {
                    logout()
                    router.push('/')
                  }}
                  className="bg-red-500 h-full text-white hover:shadow-lg text-[20px] rounded-full px-5 py-2 transition duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <div className="space-x-3">
                  <Link
                    href="/signUp"

                  >
                    <button
                      className="bg-red-500 text-white hover:shadow-lg text-[20px] rounded-full px-5 py-2 transition duration-300"
                    >
                      Sign Up
                    </button>
                  </Link>
                  <Link
                    href="/login"

                  >
                    <button
                      className="bg-red-500 text-white hover:shadow-lg text-[20px] rounded-full px-5 py-2 transition duration-300"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>}

            {/* Main Menu */}
            <div
              className={`${menuOpen ? "block" : "hidden"
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 text-[24px] lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    News
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/pay"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    Pay
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contactus"
                    className="block py-2 pr-4 pl-3 text-red-500  border-b border-transparent  lg:hover:border-transparent  lg:p-0 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setLoanModal(true)}
                    className="bg-red-500 text-white hover:shadow-lg text-[20px] rounded-full px-5 py-2 transition duration-300"
                  >
                    Get a Loan
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile menu toggle button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center p-2 ml-1 absolute right-0 ${menuOpen ? 'top-[115px]' : ''}  text-sm text-red-500 rounded-lg lg:hidden  focus:outline-none `}
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen ? "true" : "false"}
            >

              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Loan Modal */}
      <div>
        <GetLoanForm setLoanModal={setLoanModal} loanModal={loanModal} />
      </div>
    </>
  );
};

export default Header;
