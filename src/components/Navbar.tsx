import Image, { StaticImageData } from "next/image";
import React from "react";
import logo from "public/Sigflow.svg";
import selector from "public/selector.svg";
import file from "public/file-02.svg";
import pipe from "public/link-05.svg";
import share from "public/share-04.svg";
import transform from "public/transform.svg";
import user from "public/user-01.svg";
import settings from "public/settings-01.svg";
import book from "public/book.svg";
interface Item {
  id: number;
  img: StaticImageData;
  text: string;
}

const items: Item[] = [
  {
    id: 1,
    img: file,
    text: "Events",
  },
  {
    id: 2,
    img: pipe,
    text: "Pipeline",
  },
  {
    id: 3,
    img: share,
    text: "Source",
  },
  {
    id: 4,
    img: share,
    text: "Destination",
  },
  {
    id: 5,
    img: transform,
    text: "Transformations",
  },
];

const items2: Item[] = [
  {
    id: 1,
    img: user,
    text: "Account",
  },
  {
    id: 2,
    img: settings,
    text: "Settings",
  },
];
const items3: Item[] = [
  {
    id: 1,
    img: book,
    text: "Help",
  },
  {
    id: 2,
    img: book,
    text: "Documentation",
  },
];
const Navbar = () => {
  return (
    <nav className="w-[20%] bg-zinc-50 px-8 hidden md:flex flex-col gap-6 h-full py-12">
      <div>
        <Image src={logo} alt="" />
      </div>
      <main>
        <div className="bg-[#f2f2f2]  flex items-center justify-between p-3 rounded-md">
          <h3 className="font-semibold">Sigflow</h3>
          <Image src={selector} alt="" />
        </div>
        <div className="flex flex-col gap-4 py-10  ">
          {items.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 5
                  ? "text-green bg-[#ECFDF3] p-2 rounded-md"
                  : "text-[#828282]"
              } font-semibold flex  gap-4 item-center`}
            >
              <Image src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <hr className="text-[#E7E7E7] w-full p-0" />
        <div className="flex flex-col gap-4 my-8">
          {items2.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 5
                  ? "text-green bg-[#ECFDF3] p-2 rounded-md"
                  : "text-[#828282]"
              } font-semibold flex  gap-4 item-center`}
            >
              <Image src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mb-8 mt-16">
          {items3.map((item) => (
            <div
              key={item.id}
              className={`
                text-green  font-semibold flex  gap-4 item-center`}
            >
              <Image src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
