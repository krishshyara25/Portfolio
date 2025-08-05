// src/components/sections/Certificates.jsx
import React from "react";

// Import your certificate images
import cert1 from "../../assets/certificates/ProblemSolving(Basic).png";
import cert2 from "../../assets/certificates/RestAPI(Intermediate).png";
import cert3 from "../../assets/certificates/React(basic).png";
import cert4 from "../../assets/certificates/JavaScript(Intermediate).png";
import cert5 from "../../assets/certificates/JavaScript(basic).png";
import cert6 from "../../assets/certificates/Node.js(Intermediate).png";

const certificateImages = [cert1, cert2, cert3, cert4, cert5, cert6]; // add more if needed

export const Certificates = () => {
  return (
    <section id="certificates" className="py-16 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificateImages.map((img, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={img}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto rounded-md border border-gray-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
