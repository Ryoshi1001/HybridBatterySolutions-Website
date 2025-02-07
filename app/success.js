import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md">
        <h3 className="text-4xl font-bold text-gradient mb-4">
          Form Submitted Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <Link 
          href="/" 
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
