import React from "react";

const Header = () => {
  return (
    <div className="absolute top-8  right-[1%]">
      <div className="flex gap-2 items-center">
        <div className="bg-green py-2 px-4 rounded-md">
          <h3 className="text-white text-2xl font-extrabold">S</h3>
        </div>
        <div className="flex flex-col">
          <p className="text-dark  font-semibold">Sigflow</p>
          <p className="text-[#828282]">Adeoluwa Siyanbade</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
