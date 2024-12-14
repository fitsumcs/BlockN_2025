import React from "react";

const Features = () => {
  const features = [
    {
      title: "5,000,000+ Users",
      description: "Trusted by millions worldwide.",
    },
    {
      title: "60,000+ Cashback Partners",
      description: "Save more with every purchase.",
    },
    {
      title: "830+ Cities Covered",
      description: "Available across the globe.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Nomo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
