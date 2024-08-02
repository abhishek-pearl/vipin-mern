import React from "react";

const page = () => {
  return (
    <>
      <section className="py-4 px-20 flex flex-col-reverse md:flex-row gap-6 md:justify-center">
        <div className="w-full md:w-1/2 space-y-8">
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
        <div
          className="w-full h-[300px] md:h-auto md:w-1/2"
          style={{ backgroundImage: "url(/banner.jpeg)" }}
        ></div>
      </section>
    </>
  );
};

export default page;
