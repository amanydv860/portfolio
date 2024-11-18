import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center font-interTight text-center md:text-left px-6 md:px-12">
        <div className="space-y-4">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl">
            Hello! I'm Aman Yadav
          </h1>
          <h1 className="font-medium text-xl md:text-2xl lg:text-3xl">
            {`< From Concept To console.log( ). />`}
          </h1>
          <p className="font-light text-base md:text-lg">
            Full Stack Web Developer
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center items-center">
        <img
          className="w-3/4 md:w-4/5 h-auto max-w-xs md:max-w-md lg:max-w-lg"
          src="/head.png"
          alt="Web Development"
        />
      </div>
    </div>
  );
}
