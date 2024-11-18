import React from 'react';

export default function TechTool() {
  return (
    <div className="space-y-20 ">
      <h1 className="font-interTight text-2xl font-semibold text-center text-gray-800">
        Tools And Technologies
      </h1>
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/mongodb.svg" alt="MongoDB" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/express.svg" alt="Express.js" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/react.svg" alt="React.js" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/node.svg" alt="Node.js" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/git.svg" alt="Git" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/github.svg" alt="GitHub" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/tailwind.svg" alt="Tailwind CSS" />
        <img className="w-12 h-12 hover:scale-110 transition-transform duration-200" src="/technologies/bootstraps.svg" alt="Bootstrap" />
      </div>
    </div>
  );
}
