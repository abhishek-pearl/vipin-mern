import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-red-500  text-white border-t py-4">
      <div class="mx-auto w-full max-w-screen-xl ">
        <div class="grid gap-8">

          <div class="grid place-items-center text-white ">
            <div className="grid text-base lg:text-md xl:text-xl ">

              <ul className="font-medium 
              grid grid-cols-3 md:flex md:gap-6 px-6">
                <li className="mb-2 md:mb-0">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/news" className="hover:underline">
                    News
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/contactus" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/privacyPolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/refundPolicy" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-2 md:mb-0">
                  <Link href="/termsAndCondition" className="hover:underline line-clamp-1">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>


          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
