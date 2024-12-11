import Link from "next/link"

export default function PaymentFailed() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md overflow-hidden">
        <div className="text-center p-6">
          <svg 
            className="w-16 h-16 text-red-500 mx-auto mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-red-700 mb-2">Payment Failed</h2>
          <p className="text-gray-600 mb-4">
            We're sorry, but there was an issue processing your payment.
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-700 mb-2">What happened?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Your payment could not be completed due to one of the following reasons:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Insufficient funds</li>
            <li>Incorrect payment information</li>
            <li>Temporary issue with your payment method</li>
            <li>Technical problem on our end</li>
          </ul>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4 text-center">
            Please try again or contact our support team if the problem persists.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="block">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                Try Again
              </button>
            </Link>
            <Link href="/" className="block">
              <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}