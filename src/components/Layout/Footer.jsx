import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-red-500 text-white border-t">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                SDLK
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2> */}
              <ul class="  font-medium">
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
              </ul>
            </div>
            <div>
              {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2> */}
              <ul class="  font-medium">
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

              </ul>
            </div>
            <div>
              {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2> */}
              <ul class=" font-medium">
                <li class="mb-4">
                  <Link href="/contactus" class="hover:underline">
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        {/* <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm  sm:text-center ">
            © 2024{" "}
            <Link href="/" class="hover:underline">
              SDLK™
            </Link>
            . All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
