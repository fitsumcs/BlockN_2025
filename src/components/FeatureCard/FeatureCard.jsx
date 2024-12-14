const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full relative">
      {/* Title */}
      <div className="text-center">
        <div className="bg-black text-white font-semibold rounded-full px-6 py-2 w-fit mx-auto -mt-8 shadow-md">
          {title}
        </div>
        {/* Description */}
        <p className="mt-6 text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Icon and Line */}
      <div className="flex flex-col items-center mt-6">
        {/* Icon container */}
        <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">
          <img src={icon} alt="icon" className="w-6 h-6" />
        </div>
      </div>

      {/* Orange line at the very bottom */}
      <div className="absolute bottom-0 left-2 right-2 h-4 bg-orange-500 rounded-full"></div>
    </div>
  );
};

export default FeatureCard;
