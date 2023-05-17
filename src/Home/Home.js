import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServicesD from "../Layout/Main/ServicesD";

const Home = () => {
  const [id, setId] = useState(1);

  const handleIdChange = (i) => {
    setId(id);
  };
  return (
    <div>
      {/* Hero Section */}
      <section class="mb-20">
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
      {/* Services */}
      <section className="lg:ml-48 mb-20 lg:mr-48">
        <div class="container mx-auto text-white ">
          <div class="flex flex-wrap">
            <Link
              onClick={() => handleIdChange(1)}
              to={`/services/reverse/${1}`}
              class="w-full md:w-1/2 px-4 py-2 mb-6"
            >
              <div class="bg-[#1699DE] p-4 text-center">
                <h2 class="text-xl font-bold mt-12 mb-4">
                  Reverse Engineering{" "}
                </h2>
                <p className="mb-20">
                  Reverse engineering, software reversing, discover hidden
                  features of binary files & compiled applications.
                </p>
              </div>
            </Link>
            <Link
              onClick={() => handleIdChange(2)}
              to={`/services/reverse/${2}`}
              class="w-full md:w-1/2 px-4 py-2 "
            >
              <div class="bg-[#8C4AA8] p-4 text-center">
                <h2 class="text-xl mt-12 font-bold mb-4">
                  Source Code Recovery
                </h2>
                <p className="mb-20">
                  Recover lost programming projects from binaries only, uncover
                  algorithms from compiled applications
                </p>
              </div>
            </Link>
            <Link
              onClick={() => handleIdChange(3)}
              to={`/services/reverse/${3}`}
              class="w-full md:w-1/2 px-4 py-2 "
            >
              <div class="bg-[#36AE71] p-4 text-center">
                <h2 class="text-xl mt-12 font-bold mb-4">
                  {" "}
                  Software localization
                </h2>
                <p className="mb-20">
                  Localize games & applications without access to the source
                  code
                </p>
              </div>
            </Link>
            <Link
              onClick={() => handleIdChange(4)}
              to={`/services/reverse/${4}`}
              class="w-full md:w-1/2 px-4 py-2 "
            >
              <div class="bg-[#F79A29] p-4 text-center">
                <h2 class="text-xl mt-12 font-bold mb-4">
                  {" "}
                  Software protection
                </h2>
                <p className="mb-20">
                  Custom software protection design for your software, copy
                  protection & anti-cracking techniques
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
