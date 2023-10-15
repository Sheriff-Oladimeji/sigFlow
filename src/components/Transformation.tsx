import React from "react";
import Header from "./Header";
import dot from "public/dots-vertical.svg";
import Image from "next/image";
import Filter from "./Filter";

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
      <Filter/>
      <main className="border border-[#E6E7EC] rounded-md py-8 px-4  md:px-12 mx-4 sm:mx-6 md:mx-8 my-12">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Creation Date
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="sm:border-b text-[12px] ">
                <td className="py-4 px-6 font-medium">{item.name}</td>
                <td className="py-4 px-6">{item.date}</td>
                <td className={`py-2 px-6 `}>
                  <p
                    className={`rounded-md py-1 px-4 w-max font-semibold ${
                      item.status === "Paused"
                        ? "bg-[#ECFDF3] text-green "
                        : "bg-[#E0E0E0] text-white"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="py-4 px-6">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Transformation;
