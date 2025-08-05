import { useState } from "react";
import ScrollFadeIn from "./ScrollInFade";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  
  return (
    <div className="bg-black text-white py-24">
      <div className="container px-8 md:px-10 lg:px-24 mx-auto" id="about">
        <ScrollFadeIn direction="up">
        <h1 className="text-3xl text-center font-bold mb-12">About Me</h1>
        <div className="flex flex-col md:flex-row space-x-8 items-center py-8">
          <img
            className="rounded mx-auto mb-8 md:mb-2 w-72 h-90 object-cover 
            border border-emerald-400 transform transition-transform duration-300 hover:scale-105"
            src="./ezgif.com-resize.png"
            alt="hero-image"
          />
          <div className="flex-1">
            <p className="text-gray-300 mb-8">
              A dedicated Full Stack Developer with a strong passion for
              learning new technologies and building impactful web applications.
              I have hands-on experience in developing responsive frontend and
              backend applications using technologies like React.js, Node.js,
              HTML, CSS, and JavaScript and Next.js. I focus on writing clean,
              maintainable code and building user-friendly, scalable solutions.{" "}
            </p>
            <div className="space-y-4">
              {[
                { label: "HTML & CSS", width: "w-10/12" },
                { label: "JavaScript", width: "w-8/12" },
                { label: "ReactJS", width: "w-9/12" },
                { label: "NodeJS", width: "w-9/12" },
                { label: "MongoDB", width: "w-9/12"},
                { label: "NextJS", width: "w-8/12"},
              ].map(({ label, width }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center gap-2"
                >
                  <label htmlFor={label} className="md:w-2/12">
                    {label}
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${width}`}
                    ></div>
                  </div>
                </div>
              ))}
              {/* <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  ReactJS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  NodeJS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  MongoDB
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  NextJS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                  transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
        </div></ScrollFadeIn>
      </div>
      <div className="flex justify-center mt-8 space-x-6">
        <ScrollFadeIn direction="up" >
        <button
          onClick={() => setActiveTab("education")}
          className={`text-2xl font-semibold border-b-2 transition duration-300 ${
            activeTab === "education"
              ? "border-emerald-400 text-emerald-400"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          Education
        </button></ScrollFadeIn>
        <ScrollFadeIn direction="up" >
        <button
          onClick={() => setActiveTab("experience")}
          className={`text-2xl font-semibold border-b-2 transition duration-300 ${
            activeTab === "experience"
              ? "border-emerald-400 text-emerald-400"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          Experience
        </button></ScrollFadeIn>
      </div>
      {activeTab === "education" ? (
        <ScrollFadeIn direction="up" >
        <div className="space-y-4 grid grid-cols-1 justify-items-center mt-20 mb-10 mx-10">
          <div className="border border-emerald-400 rounded-lg p-4 w-full max-w-2xl bg-[#1a1a1a]">
            <h3 className="text-xl font-bold">Bachelor of Technology</h3>
            <p className="text-gray-400">
              Electronics and Communication Engineering – St.Mary's Engineering
              College (2015–2019)
            </p>
            <p className="text-gray-400">Hyderabad, Telangana</p>
          </div>
          <div className="border border-emerald-400 rounded-lg p-4 w-full max-w-2xl bg-[#1a1a1a]">
            <h3 className="text-xl font-bold">Intermediate</h3>
            <p className="text-gray-400">Vikas Junior College - (2013–2015)</p>
            <p className="text-gray-400">Peddapally, Telangana</p>
          </div>
        </div></ScrollFadeIn>
      ) : (
        <ScrollFadeIn direction="up" >
        <div className="space-y-4 grid grid-cols-1 justify-items-center mt-20 mx-10">
          <div className="border border-emerald-400 rounded-lg p-4 w-full max-w-2xl bg-[#1a1a1a]">
            <h3 className="text-xl font-bold">IT Recruiter</h3>
            <div className="text-gray-400">
              SCreatives Software Pvt Ltd. - (July-2021 to Dec-2022)
              <br />
              <div className="mt-4">
                <span className="font-semibold text-gray-300 ">
                  Description:
                </span>
                <ul className="p-2">
                  <li>Identifying Job Requirements.</li>
                  <li>Sourcing and Attracting Candidates.</li>
                  <li>Screening and Evaluating Candidates.</li>
                  <li>Facilitating Interviews and Hiring Decisions.</li>
                  <li>Coordinating Interviews and Decision Making.</li>
                  <li>Managing Job Offers and Onboarding.</li>
                </ul>
              </div>
            </div>
          </div>
        </div></ScrollFadeIn>
      )}
    </div>
  );
};

export default About;
