import React from 'react';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-6 md:p-12">
      {/* Left Column */}
      <div className="flex justify-center items-center">
        <img
          className="w-3/4 md:w-4/5 lg:w-3/5 h-auto"
          src="/details.png"
          alt="Web Development"
        />
      </div>

      {/* Right Column */}
      <div className="flex justify-center items-center font-interTight">
        <div className="space-y-4 text-center md:text-left px-4 md:px-0">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl">
            I'm a Full Stack Web Developer
          </h1>
          <p className="font-light text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
            "I am currently pursuing my BCA from Amity Online University and
            have successfully completed a comprehensive web development course.
            Through this journey, I have built real-world projects using the MERN stack
            and enhanced them with additional frameworks like Tailwind CSS and Material UI."
          </p>
        </div>
      </div>
    </div>
  );
}
