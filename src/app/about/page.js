"use client";
import React from "react";

import aboutImg from "../../../public/about.webp";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="py-10 px-20 flex flex-col gap-6 items-center">
        {/* <Image
          className="w-full max-w-[1000px] max-h-[500px] "
          src={aboutImg}
          width={700}
          height={320}
        /> */}
        <div className="w-full space-y-8">
          <div className="w-full text-center">
            <h1 className="text-3xl w-fit text-gray-800  shadow-[0_4px#ff0000]">
              About Us
            </h1>
          </div>
          <p>
            <span>
              Shree Dhan Laxmi Kuber. since 2021, under the Indian Partnership
              Act, 1932. We’re a Shree Dhan Laxmi Kuber company that enables
              financial sales partners to grow their business by offering a
              range of products to customers.
              <br />
              We're driven with a vision to ease access to financial products
              for your customers. As your trusted business partner, we offer
              proprietary technology, training and customer support to
              accelerate your business growth in the financial services domain.
              <br />
              <br />
              <strong>Our vision</strong>
              <br />
              <br />
              We care about a financially service and prosperous future for all
              Indians. Our vision is to digitally deliver a range of financial
              products to promote the financial well-being of the people of
              India. Over the next decade, the digital economy will be the
              primary catalyst for the Indian economy and will generate cost
              efficiencies and productivity gains across sectors and industries,
              creating a virtuous cycle of continuous, sustainable, and
              inclusive growth.
              <br />
              <br />
              <br />
              <strong>Why should you choose us?</strong>
              <br />
              If you have to need loan (Money). If, you cannot manage the
              expenses due to the shortage of funds, you can get a loan. There
              are multiple usages of a loan amount. SDLK provide some
              information related to the loan that why should you choose us.
              <br />
              <br />
              <strong>Easy apply</strong>
              <br />
              Getting a loan is not so difficult with us. Because we use the
              advanced associated with our team of experts, you do not have to
              wait long for your loan approval. You can apply for a loan with
              the appropriate documents from our website. Your loan will be
              approved in less time, and the amount will be disbursed to your
              account.
              <br />
              <br />
              <strong>Easy repayment</strong>
              <br />
              We provide a loan with a manageable repayment tenure so that you
              can easily pay your loan. We aim to provide an appropriate loan
              amount that will be comfortable to pay for you.
              <br />• Age limit - Your age must be more than 21 years
              <br />• Income - You must have a stable and appropriate monthly
              income.
              <br />• Citizens - You must be a citizen of India.
              <br />
              <br />
              <strong>SHREE DHAN LAXMI KUBER</strong> is an exponentially
              emerging platform where you can get instant financial help in any
              situation. Our executive helps approve your loan application in a
              few hours. So, you can choose us for instant approval of your loan
              to fulfill your multiple financial requirements.
            </span>
          </p>
        </div>
      </section>
      {/* <div className="bg-gray-50 text-gray-800 py-10 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          About Us
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Welcome to <span className="font-semibold">Dhan Laxmi Kuber</span>! We
          are a passionate team dedicated to creating innovative solutions and
          providing exceptional services. Our mission is to empower individuals,
          simplify complex tasks, and bring communities together.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Who We Are
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          At the heart of our company lies a commitment to excellence,
          integrity, and creativity. We believe in pushing boundaries and
          setting new standards in our industry. Our journey began with a simple
          idea: to make a difference in people's lives. Since then, we've grown
          into a trusted name for delivering outstanding results.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          What We Do
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          We specialize in delivering top-notch products and services tailored
          to meet your needs. Whether you're looking for innovative solutions or
          reliable support, we've got you covered. Our team combines expertise,
          cutting-edge technology, and a customer-first approach to ensure
          exceptional outcomes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Why Choose Us
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>
            <span className="font-bold">Experience:</span> Years of expertise in
            delivering solutions you can trust.
          </li>
          <li>
            <span className="font-bold">Quality:</span> We prioritize excellence
            and ensure the highest standards.
          </li>
          <li>
            <span className="font-bold">Customer Focus:</span> Your satisfaction
            drives us to exceed expectations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Our Vision
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Our vision is to inspire change and revolutionize our industry while
          staying true to our core values. Together, we can build a brighter
          future and create meaningful impacts.
        </p>

        <p className="text-lg text-gray-700">
          Thank you for choosing{" "}
          <span className="font-semibold">Dhan Laxmi Kuber</span>. We’re excited
          to be part of your journey!
        </p>
      </div> */}
    </>
  );
};

export default page;
