import React from "react";

const page = () => {
  return (
    <>
      <section className="py-14 px-20 flex flex-col space-y-10">
        <div className="w-full text-center flex justify-center">
          <h1 className="text-3xl w-fit text-gray-800  shadow-[0_4px#ff0000]">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Phone"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="name"
                  id="name"
                  rows={5}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
                  placeholder="Message"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </form>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 flex flex-col gap-2">
            <div className="text-2xl">Details:</div>
            <div className="flex flex-col gap-2 justify-center h-full text-lg">
              <div>
                <span className="font-semibold">Company name: </span>
                sdlk
              </div>
              <div>
                <span className="font-semibold">Phone: </span>
                +91 9999999999
              </div>
              <div>
                <span className="font-semibold">E-Mail: </span> sdlk@sdlk.com
              </div>
              <div>
                <span className="font-semibold">Address: </span> 188, Rajpur
                Road In between Sai Baba Temple and Sakya Centre Buddhist
                Monastry, Uttarakhand 248001, India
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
