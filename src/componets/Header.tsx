
import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="container mx-auto px-4 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left spacer - hidden on mobile */}
        <div className="hidden md:block md:w-1/3"></div>

        {/* Logo & Website Info */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="shrink-0">
            <Image
              height={50}
              width={50}
              src="/logo.webp"
              alt="Bangla News 69 Logo"
            />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl text-red-700 font-bold">
              Bangla News 69
            </h2>

            <p className="text-sm sm:text-base text-gray-600">
              {date}
            </p>
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center justify-center gap-2 md:w-1/3 md:justify-end">
          <button className="btn btn-sm sm:btn-md">
            সাইন ইন
          </button>

          <button className="btn bg-red-700 text-white btn-sm sm:btn-md">
            সাইন আপ
          </button>
        </div>

      </div>

      <NavLinks/>
    </header>
  );
};

export default Header;
