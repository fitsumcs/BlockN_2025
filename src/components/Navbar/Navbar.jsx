import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false); // Language dropdown state
  const [selectedLang, setSelectedLang] = useState("English"); // Default selected language
  const [activeMenu, setActiveMenu] = useState("Кешбек"); // Active menu item
  const navigate = useNavigate(); // Hook for navigation

  const handleLangSelect = (lang) => {
    setSelectedLang(lang); // Update selected language
    setIsLangOpen(false); // Close the dropdown
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-black text-white py-3">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="h-7 w-7 flex-shrink-0">
            <svg
              width="41"
              height="42"
              viewBox="0 0 83 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="82.5" height="83.5" rx="23" fill="#FF8D2A" />
              <path
                d="M13.5 48V21.25C13.5 21.1119 13.6119 21 13.75 21H27.8973C27.9631 21 28.0262 21.0259 28.073 21.0722L69.567 62.0722C69.726 62.2292 69.6147 62.5 69.3913 62.5H49.1036C49.0373 62.5 48.9737 62.4737 48.9268 62.4268L28.8536 42.3536C28.5386 42.0386 28 42.2617 28 42.7071V62.5C19.9919 62.5 13.5 56.0081 13.5 48Z"
                fill="white"
              />
              <path
                d="M55.5 44.3884V21.2101C55.5 21.0941 55.5941 21 55.7101 21C63.6022 21 70 27.3978 70 35.2899V56.9401C70 57.1563 69.7441 57.2706 69.5831 57.1262L55.5831 44.5745C55.5302 44.5271 55.5 44.4594 55.5 44.3884Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Menu Items */}
          <ul className="hidden sm:flex space-x-6 pl-12 text-sm">
            {["Кешбек", "Карта", "Криптовалюта", "Партнерство", "Хто Ми"].map(
              (menu) => (
                <li
                  key={menu}
                  className={`cursor-pointer ${
                    activeMenu === menu
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-500"
                  }`}
                  onClick={() => {
                    setActiveMenu(menu);
                    // Navigate for specific menu items
                    if (menu === "Кешбек") navigate("/");
                    if (menu === "Партнерство") navigate("/partnerships");
                  }}
                >
                  {menu}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Actions (Logout Button and Language Dropdown) */}
        <div className="flex items-center space-x-4">
          {/* Logout Button */}
          <button className="bg-orange-500 text-black px-4 py-1 rounded-full text-sm hover:bg-orange-600">
            Вихід
          </button>

          {/* Language Icon and Dropdown */}
          <div className="relative language-dropdown">
            <button
              className="text-white flex items-center"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown from closing immediately
                setIsLangOpen(!isLangOpen);
              }}
            >
              <FontAwesomeIcon icon={faGlobe} className="text-xl" />
              <span className="ml-2">{selectedLang}</span>
            </button>
            {isLangOpen && (
              <ul className="absolute right-0 mt-2 bg-black text-white shadow-lg rounded-md">
                {["English", "Українська", "Deutsch"].map((lang) => (
                  <li
                    key={lang}
                    className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                      selectedLang === lang ? "text-orange-500" : ""
                    }`}
                    onClick={() => handleLangSelect(lang)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
