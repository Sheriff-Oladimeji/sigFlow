import React from 'react'

const Filter = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4  w-[90%] mx-auto mt-8">
      <h3 className="text-xl md:text-2xl font-semibold">Transformation</h3>
      <div className='flex flex-col gap-4'>
        <div className="flex flex-colum sm:flex-row gap-4 items-center">
          <button className="rounded-lg  bg-green text-white py-2  px-4">
            Create a new Transformation
          </button>
          <button className="rounded-lg  bg-green text-white py-2 px-4">
            Filters
          </button>
        </div>

        <form>
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Search transformation"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />

            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.5 16.5L11.5001 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z"
                  stroke="#32D583"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter