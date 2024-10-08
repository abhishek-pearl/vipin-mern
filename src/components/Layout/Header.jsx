"use client";

import React, { useState } from "react";
import GetLoanForm from "../GetLoanModal/GetLoanForm";
import Link from "next/link";
import { userStore } from "@/store/authStore";

const Header = () => {
  const { user, error, loading, login, isUserLoggedIn, logout } = userStore();
  const [loanModal, setLoanModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg text-white px-4 lg:px-8 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            {/* Logo Section */}
            <Link href="/" className="flex items-center">
              <img
                src="/LogoSDL.jpeg"
                className="mr-3 h-12 transition-transform transform hover:scale-105"
                alt="Logo"
              />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap">
                SDLK
              </span> */}
            </Link>



            {/* Action Buttons */}
            <div className="flex items-center lg:order-2 space-x-4">
              <button
                onClick={() => setLoanModal(true)}
                className="text-red-600 bg-white hover:bg-red-500 hover:text-white hover:shadow-lg font-medium rounded-full px-5 py-2 transition duration-300"
              >
                Get a Loan
              </button>

              {isUserLoggedIn ? (
                <button
                  onClick={logout}
                  className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-medium rounded-full px-5 py-2 transition duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <div className="space-x-3">
                  <Link
                    href="/signUp"
                    className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-medium rounded-full px-5 py-2 transition duration-300"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-medium rounded-full px-5 py-2 transition duration-300"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Main Menu */}
            <div
              className={`${menuOpen ? "block" : "hidden"
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pr-4 pl-3 text-white hover:text-red-300 border-b border-transparent hover:border-red-300 lg:hover:border-transparent lg:hover:text-red-300 lg:p-0 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pr-4 pl-3 text-white hover:text-red-300 border-b border-transparent hover:border-red-300 lg:hover:border-transparent lg:hover:text-red-300 lg:p-0 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block py-2 pr-4 pl-3 text-white hover:text-red-300 border-b border-transparent hover:border-red-300 lg:hover:border-transparent lg:hover:text-red-300 lg:p-0 transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="block py-2 pr-4 pl-3 text-white hover:text-red-300 border-b border-transparent hover:border-red-300 lg:hover:border-transparent lg:hover:text-red-300 lg:p-0 transition duration-300"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="block py-2 pr-4 pl-3 text-white hover:text-red-300 border-b border-transparent hover:border-red-300 lg:hover:border-transparent lg:hover:text-red-300 lg:p-0 transition duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-100 rounded-lg lg:hidden hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
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
