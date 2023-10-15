import React from "react";
import Header from "./Header";
import dot from "public/dots-vertical.svg";
import Image from "next/image";

interface Item {
  id: number;
  name: string;
  date: string;
  status: string;
}

const items: Item[] = [
  {
    id: 1,
    name: "Gotham Asylum",
    date: "10th Aug, 2023",
    status: "Paused",
  },
  {
    id: 2,
    name: "Gotham Asylum",
    date: "10th Aug, 2023",
    status: "Archived",
  },
  {
    id: 3,
    name: "Gotham Asylum",
    date: "10th Aug, 2023",
    status: "Paused",
  },
  {
    id: 3,
    name: "Gotham Asylum",
    date: "10th Aug, 2023",
    status: "Paused",
  },
  {
    id: 4,
    name: "Gotham Asylum",
    date: "10th Aug, 2023",
    status: "Archived",
  },
];

const Transformation = () => {
  return (
    <div className="relative w-full md:w-[80%] ">
      <Header />
      <main className="border border-[#E6E7EC] rounded-md py-8 px-4  md:px-12 mx-4 sm:mx-6 md:mx-8 my-12">
        <div className="grid grid-cols-4 text-[#828282] justify-between mb-8 w-full items-center font-semibold">
          <small>Name</small>
          <small>Creation Date</small>
          <small>Status</small>
          <small className="invisible">hi</small>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {items.map((item) => (
            <div
              className="grid grid-cols-4 pb-4 text-[#828282] justify-between items-center font-semibold border-b  border-gray-100 w-full"
              key={item.id}
            >
              <small>{item.name}</small>
              <small>{item.date}</small>
              <small>{item.status}</small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99999 4.99999C10.4602 4.99999 10.8333 4.6269 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 9.99999 3.33333C9.53975 3.33333 9.16666 3.70642 9.16666 4.16666C9.16666 4.6269 9.53975 4.99999 9.99999 4.99999Z"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            
          ))}
        
        </div>
      </main>
    </div>
  );
};

export default Transformation;
