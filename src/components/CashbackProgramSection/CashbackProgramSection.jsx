import React from "react";
import CashbackTitle from "./CashbackTitle"; // Import the title component

const programs = [
  {
    title: "Cashback Partnership Program",
    description: "In development...",
    bgColor: "bg-orange-300",
    imgSrc: "/path/to/cashback-image.png",
  },
  {
    title: "Cryptocurrency Partnership Program",
    description: "In development...",
    bgColor: "bg-orange-300",
    imgSrc: "/path/to/crypto-image.png",
  },
  {
    title: "Business Referral",
    description: "In development...",
    bgColor: "bg-orange-300",
    imgSrc: "/path/to/business-referral-image.png",
  },
  {
    title: "User Referral",
    description: "In development...",
    bgColor: "bg-orange-300",
    imgSrc: "/path/to/user-referral-image.png",
  },
];

const CashbackProgramSection = () => {
  return (
    <div className="bg-white py-12">
      {/* Cashback Title */}
      <CashbackTitle />

      {/* Program Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-center ${program.bgColor}`}
          >
            <img
              src={program.imgSrc}
              alt={program.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-800">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackProgramSection;
