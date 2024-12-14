import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CashbackProgramSection from "../../components/CashbackProgramSection/CashbackProgramSection";

const PartnershipPage = () => {
  const features = [
    {
      title: "Customer Attraction",
      description:
        "Elevate your customer engagement with Nomo—our cutting-edge cryptocurrency cashback app that offers shoppers the opportunity to earn cryptocurrency rewards for their purchases at your store. Designed with user experience in mind, our intuitive app enhances customer loyalty and drives repeat business. Provide your clients with an innovative and secure cashback experience and set your business apart from the competition today!",
      icon: "👍",
      bgColor: "bg-gray-200",
      borderColor: "#FF8D2A",
    },
    {
      title: "Sales Enhancement",
      description:
        "Boost your sales performance with Nomo—the cryptocurrency cashback app that incentivizes customers with cryptocurrency rewards for every purchase. By returning a portion of their spending in cryptocurrency, our app encourages more frequent transactions and fosters long-term customer relationships. Leverage Nomo’s advanced solutions to increase customer retention and drive higher sales volumes.",
      icon: "💲",
      bgColor: "bg-gray-200",
      borderColor: "#FF8D2A",
    },
    {
      title: "Audience Expansion",
      description:
        "Broaden your market reach with Nomo—our advanced cryptocurrency cashback app that attracts users globally who are keen on cryptocurrency. Our platform enables you to engage new customers by offering a contemporary and rewarding cashback experience. Integrate Nomo into your business strategy to unlock new growth opportunities and expand your customer base effectively.",
      icon: "🌐",
      bgColor: "bg-gray-200",
      borderColor: "#FF8D2A",
    },
    {
      title: "Competitive Advantage",
      description:
        "Achieve a significant competitive edge with Nomo—our innovative cryptocurrency cashback app that provides distinctive cryptocurrency rewards for purchases. By differentiating your business with unique and valuable offers, Nomo enhances your market presence and appeal. Implement Nomo to elevate your brand’s visibility and attractiveness in a crowded marketplace.",
      icon: "🏆",
      bgColor: "bg-gray-200",
      borderColor: "#FF8D2A",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          Nomo Affiliate Program
        </h1>
        <p className="text-gray-600 text-lg">
          Offer for digital, marketing, and branding agencies. <br />
          By becoming a partner, you get:
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center py-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
            borderColor={feature.borderColor}
          />
        ))}
      </div>
      {/* Cashback Partnership Program */}
      <CashbackProgramSection />
    </div>
  );
};

export default PartnershipPage;
