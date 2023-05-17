import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServicesD = () => {
  const { id } = useParams();
  
  const [activeTab, setActiveTab] = useState(parseInt(id));
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
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

      <div class="flex lg:ml-40 lg:mr-40">
        <button
          onClick={() => handleTabClick(1)}
          className={` ${
            activeTab !== 1
              ? "py-4 px-6  font-semibold"
              : " py-4 px-6 w-1/5  font-semibold text-sky-500 border-t-4 border-sky-500 bg-transparent"
          }`}
        >
          Reverse Engineering
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={` ${
            activeTab !== 2
              ? "py-4 px-6  font-semibold"
              : " py-4 px-6 font-semibold text-sky-500 border-t-4 border-[#9B59B6] font-semibold text-[#9B59B6] bg-transparent"
          }`}
        >
          Source Code Recovery
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={` ${
            activeTab !== 3
              ? "py-4 px-6  font-semibold"
              : " py-4 px-6  border-t-4 border-[#41BB19] font-semibold text-[#41BB19] bg-transparent"
          }`}
        >
          Software Localization
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={` ${
            activeTab !== 4
              ? "py-4 px-6  font-semibold"
              : " py-4 px-6 border-t-4 border-[#FE781E] font-semibold text-[#FE781E] bg-transparent"
          }`}
        >
          Software Protection Design
        </button>
        <Link
          to="/testmonials"
          class="w-1/5 py-4 px-6 bg-gray-100 border-b-2 border-gray-200 font-semibold"
        >
          Testimonials
        </Link>
      </div>
      <div class="container mx-auto mt-4 lg:ml-40">
        <div class="bg-white">
          <div class="p-8">
            <div
              id="div1"
              className={`mb-4 ${activeTab !== 1 ? "hidden" : " text-left"}`}
            >
              <h1 className="text-3xl mb-2">What is reverse engineering?</h1>
              <p>
                Reverse engineering is taking apart a computer program to see
                how it works in order to duplicate or enhance the software. It
                can be used for:
              </p>
            </div>
            <div
              id="div2"
              className={`mb-4 ${activeTab !== 2 ? "hidden" : ""}`}
            >
              <p>Content of Tab 2</p>
            </div>
            <div
              id="div3"
              className={`mb-4 ${activeTab !== 3 ? "hidden" : ""}`}
            >
              <p>Content of Tab 3</p>
            </div>
            <div
              id="div4"
              className={`mb-4 ${activeTab !== 4 ? "hidden" : ""}`}
            >
              <p>Content of Tab 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesD;
