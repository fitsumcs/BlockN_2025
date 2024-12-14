import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nomo - Your Personal Beneficiary
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Maximize your savings with Nomo – enjoy cashback, cryptocurrency
          benefits, and more!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-orange-500 px-6 py-3 rounded-md">
            Get Started
          </button>
          <button className="bg-gray-700 px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>
        <img
          src="your-image-path.png"
          alt="App Preview"
          className="mt-10 w-full md:w-2/3 mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
