import React from "react";

export default function SocialLinks() {
  return (
    <div className="space-y-12 p-6">
      <h1 className="font-interTight text-2xl font-semibold text-center text-gray-800">
        Social Links
      </h1>
      <div className="flex justify-center flex-wrap gap-8">
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/aman-yadav-607120310"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
            src="/SocialLinks/linkedin.png"
            alt="LinkedIn"
          />
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/amanydv860"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
            src="/SocialLinks/github.svg"
            alt="GitHub"
          />
        </a>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/__amanydv__/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
            src="/SocialLinks/instagram.svg"
            alt="Instagram"
          />
        </a>

        {/* Gmail link */}
        <a
          href="mailto:amanydv860@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <img
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
            src="/SocialLinks/gmail.svg"
            alt="Gmail"
          />
        </a>
      </div>
    </div>
  );
}
