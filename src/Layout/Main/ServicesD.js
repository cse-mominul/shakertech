import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const ServicesD = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState(parseInt(id));
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Reverse Engineering Hero Sction */}
      <section id="div1" className={`mb-4 ${activeTab !== 1 ? "hidden" : ""}`}>
        <div class="text-center py-24 px-6">
          <h1 class="text-5xl text-sky-500 md:text-3xl xl:text-5xl font-bold tracking-tight mb-12">
            Reverse Engineering Services
          </h1>
          <span class="text-gray-500">
            Reverse code engineering of binary files & compiled applications,
            source code recovery, software localization, <br />
            software licensing & copy protection design.
          </span>
        </div>
      </section>

      {/* Source Code Recovery Hero Sction */}
      <section id="div2" className={`mb-4 ${activeTab !== 2 ? "hidden" : ""}`}>
        <div class="text-center py-24 px-6">
          <h1 class="text-5xl text-[#9B59B6] md:text-3xl xl:text-5xl font-bold tracking-tight mb-12">
            Source Code Recovery
          </h1>
          <span class="text-gray-500">
            Have you lost your source code? Was it an accident, hardware failure
            or a human mistake? I can <br /> help you to recover source code
            from the binary files of your applications.
          </span>
        </div>
      </section>

      {/* Software & Games Localization Hero Sction */}
      <section id="div3" className={`mb-4 ${activeTab !== 3 ? "hidden" : ""}`}>
        <div class="text-center py-24 px-6">
          <h1 class="text-5xl text-[#41BB19] md:text-3xl xl:text-5xl font-bold tracking-tight mb-12">
            Software & Games Localization
          </h1>
          <span class="text-gray-500">
            Reach a global audience with your localized software & games,
            software localization without <br /> access to the source code.
          </span>
        </div>
      </section>

      {/*  Software Protection Design Hero Sction */}
      <section id="div4" className={`mb-4 ${activeTab !== 4 ? "hidden" : ""}`}>
        <div class="text-center py-24 px-6">
          <h1 class="text-5xl text-[#FE781E] md:text-3xl xl:text-5xl font-bold tracking-tight mb-12">
            Software Protection Design
          </h1>
          <span class="text-gray-500">
            Custom software protection & license key system design for your
            software, copy protection, anti-cracking & <br /> anti-debug
            techniques.
          </span>
        </div>
      </section>

      {/* Tabview Buttons */}
      <div class="flex lg:ml-40 flex-col lg:flex-row lg:mr-40 border-green-500">
        <button
          onClick={() => handleTabClick(1)}
          className={` ${
            activeTab !== 1
              ? "py-4 px-6  font-semibold hover:border-t-4 hover:border-sky-500"
              : " py-4 px-6 font-semibold text-sky-500 border-t-4 border-sky-500 bg-transparent"
          }`}
        >
          Reverse Engineering
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={` ${
            activeTab !== 2
              ? "py-4 px-6  font-semibold hover:border-t-4 hover:border-[#9B59B6]"
              : " py-4 px-6 font-semibold text-sky-500 border-t-4 border-[#9B59B6] bg-transparent"
          }`}
        >
          Source Code Recovery
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={` ${
            activeTab !== 3
              ? "py-4 px-6  font-semibold hover:border-t-4 hover:border-[#41BB19]"
              : " py-4 px-6  border-t-4 border-[#41BB19] font-semibold text-[#41BB19] bg-transparent"
          }`}
        >
          Software Localization
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={` ${
            activeTab !== 4
              ? "py-4 px-6  font-semibold hover:border-t-4 hover:border-[#FE781E]"
              : " py-4 px-6 border-t-4 border-[#FE781E] font-semibold text-[#FE781E] bg-transparent"
          }`}
        >
          Software Protection Design
        </button>
        <button className="w-1/5 py-4 px-6 hover:border-t-4 hover:border-sky-500 font-semibold">
          <Link to="/testmonials">Testimonials</Link>
        </button>
      </div>

      <div class="container mx-auto mt-4 lg:ml-40">
        <div class="bg-white">
          <div class="p-8">
            {/* Tabview 1  */}
            <div
              id="div1"
              className={`mb-4 ${activeTab !== 1 ? "hidden" : " text-left"}`}
            >
              <h1 className="text-3xl mb-2">What is reverse engineering?</h1>
              <p>
                Reverse engineering is taking apart a computer program to see
                how it works in order to duplicate <br /> or enhance the
                software. It can be used for:
              </p>
              <ul className="list-disc ml-6 text-gry-500">
                <li>
                  source code recovery
                  <li>malware analysis </li>
                  <li>software localization</li>
                </li>
                <li>encrypted network protocols analysis</li>
                <li>software binary files structure analysis</li>
                <li>
                  decryption of application files (configurations, databases
                  etc.)
                </li>{" "}
                <li>analysis of abandonware and its algorithms</li>
                <li>custom encryption or compression algorithms recovery</li>
                <li>modification of closed source application </li>
                <li>extending current software with custom libraries</li>
              </ul>
              <h1 className="text-3xl mb-2 mt-4">
                Examples of services offered
              </h1>
            </div>

            {/* Tabview 2  */}
            <div
              id="div2"
              className={`mb-4 ${activeTab !== 2 ? "hidden" : ""}`}
            >
              <h1 className="text-3xl mb-2 mt-4 text-left">
                Recovering programming projects
              </h1>
              <p className="text-left">
                I can help you to recover source code, algorithms & resources
                from the compiled binary <br /> applications written in:
              </p>
            </div>

            {/* Tabview 3  */}
            <div
              id="div3"
              className={`mb-4 ${activeTab !== 3 ? "hidden" : "text-left"}`}
            >
              <h1 className="text-3xl mb-2 mt-4 text-left">Experience</h1>
              <p>
                I have worked on a special type of software and games
                localization for over a decade. <br />
                In most cases my work was done without access to the source
                codes or technical <br />
                documentation, just using reverse engineering skills.
              </p>
            </div>
            {/* Tabview 4 */}
            <div
              id="div4"
              className={`mb-4 ${activeTab !== 4 ? "hidden" : "text-left"}`}
            >
              <h1 className="text-3xl mb-2 mt-4 text-left">
                Software protection experience
              </h1>
              <p>
                I have developed software protection products like PELock,
                .netshrink and Obfuscator.
                <br /> Over the years I have written many articles for the
                computer programming press about reverse <br />
                engineering, copy protection, encryption and software cracking.
                You can read all of my articles right
                <br /> here. You can read about my reverse engineering
                experience and related services like source code <br /> recovery
                and software localization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesD;
