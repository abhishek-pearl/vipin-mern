import Link from "next/link"

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md overflow-hidden">
        <div className="text-center p-6">
          <svg 
            className="w-16 h-16 text-green-500 mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your order has been processed successfully.
          </p>
        </div>
        {/* <div className="bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-700 mb-2">Order Details</h3>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">#12345</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-medium">$99.99</span>
          </div>
        </div> */}
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4 text-center">
            A confirmation email has been sent to your registered email address.
          </p>
          <Link href="/" className="block">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}