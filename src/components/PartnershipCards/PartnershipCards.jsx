import React from "react";

const PartnershipCards = () => {
  const programs = [
    {
      title: "Customer Attraction",
      description: "Boost customer engagement with Nomo cashback.",
    },
    {
      title: "Sales Enhancement",
      description: "Increase sales through crypto cashback offers.",
    },
    {
      title: "Audience Expansion",
      description: "Reach a wider audience with our referral tools.",
    },
    {
      title: "Competitive Advantage",
      description: "Stand out with unique cashback opportunities.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Partnership Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipCards;
