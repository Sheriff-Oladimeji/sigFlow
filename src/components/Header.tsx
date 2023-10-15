import React from "react";
import logo from "public/Sigflow.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div className=" border-b border-[#E6E7EC]">
      <div className="flex justify-between items-center py-6 w-[90%] mx-auto flex-wrap gap-6">
        <div className="md:invisible">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-green py-2 px-4 rounded-md">
            <h3 className="text-white  text-xl md:text-2xl font-extrabold">S</h3>
          </div>
          <div className="flex flex-col">
            <p className="text-dark  font-semibold">Sigflow</p>
            <p className="text-[#828282]">Adeoluwa Siyanbade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
