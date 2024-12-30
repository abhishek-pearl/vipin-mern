import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white text-white border-t pt-8">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="grid gap-8">
          {/* <div class="mb-6 md:mb-0 mx-auto">
            <Link href="/" className="flex items-center">
              <img
                src="/LogoSDL.png"
                className="mr-3 h-[4rem]"
                alt=""
              />
             
            </Link>
          </div> */}
          <div class="grid place-items-center text-red-500 ">
            <div className="grid text-xl ">
              {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2> */}
              <ul class=" font-medium grid place-items-center md:place-items-start md:flex gap-3 md:gap-6  mx-auto">
                <li class="mb-4">
                  <Link href="/" class="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about" class="hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <Link
                    href="/services"
                    class="hover:underline "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    class="hover:underline"
                  >
                    News
                  </Link>
                </li>

                <li class="mb-4">
                  <Link href="/contactus" class="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/privacyPolicy" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/refundPolicy" class="hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/termsAndCondition" class="hover:underline">
                    Terms And Condition
                  </Link>
                </li>
              </ul>
            </div>


          </div>
        </div>

      </div>
      {/* <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
      {/* <div class="grid place-items-center bg-red-500 text-white py-4 ">
        <span class="text-sm md:text-xl   ">
          © 2024{" "}
          <Link href="/" class="hover:underline">
            SDLK™
          </Link>
          . All Rights Reserved. Developed By <a href="https://www.pearlorganisation.com/" target="_blank" rel="noopener noreferrer">Pearl Organisation</a>
        </span>

      </div> */}
    </footer>
  );
};

export default Footer;
