import React from 'react';

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold font-interTight mb-4">
          Got a Problem? <br />
          Let's Talk
        </h1>
        <div className="text-sm font-interTight mb-4">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img className="w-4 h-4" src="/SocialLinks/newgmail.svg" alt="Gmail Icon" />
            <a href="mailto:amanydv860@gmail.com" className="text-blue-500 hover:underline">
              amanydv860@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white p-6 rounded-lg border shadow-md">
        <form className="space-y-6 font-interTight">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-darkred text-white font-semibold py-2 px-6 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
