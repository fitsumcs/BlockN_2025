import React from "react";

const CashbackTitle = () => {
  return (
    <div className="relative text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black relative inline-block">
        Cashback Partnership{" "}
        <span className="relative">
          Program
          {/* Circle Background */}
          <div className="absolute -right-[-50px] -top-[25px] w-20 h-20 md:w-24 md:h-24 bg-orange-100 rounded-full opacity-30">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255, 141, 42, 0.15), rgba(255, 141, 42, 0.15) 5px, transparent 5px, transparent 10px)",
              }}
            ></div>
          </div>
        </span>
      </h2>
    </div>
  );
};

export default CashbackTitle;
