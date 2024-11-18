import React from "react";

const projects = [
  {
    name: "WanderLust",
    description:
      "WanderLust is a full-stack MERN app for hotel owners and travelers. It lets owners list properties, while customers can search, book, and rate hotels. Key features include a dynamic search bar, 5-star rating system, and an interactive map with Leaflet.js. The app uses Tailwind CSS and Material UI for a responsive and seamless user experience.",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Tailwind CSS"],
    link: "https://wander-lust-three.vercel.app/",
  },
  {
    name: "WebTalk",
    description:
      "WebTalk is a web application that enables real-time video communication, built with React and WebRTC. It allows users to join video meetings, stream video, and handle peer-to-peer connections seamlessly. The app supports features like video display, username integration, and smooth video streaming during calls. With a user-friendly interface and reliable video functionality, WebTalk offers an efficient solution for online meetings and communication.",
    tags: ["ReactJs", "WebRTC", "NodeJs", "MongoDB", "ExpressJs", "Tailwind"],
    link: "https://web-talk.netlify.app/",
  },
  {
    name: "X-newsto",
    description:
      "X-NewTO is a news app built with React and Vite, allowing users to browse news articles by category such as politics, sports, technology, and business. The app fetches data from an external news API and displays headlines, photos, and article details. Key features include a dynamic search bar, responsive design with Tailwind CSS, and an easy-to-navigate layout using Material UI. X-NEW offers a seamless user experience across devices, providing real-time news updates in a clean and organized interface.",
    tags: ["News API", "Tailwind", "ReactJs", "Axios", "Material UI"],
    link: "https://x-newsto.netlify.app/",
  },
  {
    name: "Zerodha-Insphired UI",
    description:
      "Zerodha-inspired UI from Vercel to showcase my frontend skills! This project gave me the chance to dive deep into React, Tailwind CSS, and Material UI—perfecting my attention to detail and delivering a responsive, user-friendly design.",
    tags: ["ReactJs", "Tailwind", "Material UI"],
    link: "https://zerodha-ui.vercel.app/",
  },
];

export default function Project() {
  return (
    <div className="min-h-screen p-6 ">
      <h1 className="font-interTight text-3xl md:text-4xl font-semibold text-white mb-8 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-600 to-pink-400 p-6 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-500 transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold text-white hover:underline">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h2>
            <p className="text-white mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-200 text-pink-900 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#top"
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow hover:bg-gray-700 transition duration-200"
      >
        ▲
      </a>
    </div>
  );
}
