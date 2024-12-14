import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BlockN</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Partnership</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
