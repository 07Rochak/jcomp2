import React from "react";
import chef from '../assets/chef.jpg'
import Image from "next/image";

function HeroCompA({ title = "We are more than a multiple service", children }) {
  return (
    <div className="relative overflow-hidden isolate bg-gradient-to-b from-indigo-100/20 pt-14 bg-white">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="px-6 py-32 mx-auto max-w-7xl sm:py-40 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2">
            {title}
          </h1>
          <div className="max-w-xl mt-6 lg:mt-0">
            <div className="text-lg leading-8 text-gray-600">{children}</div>
            <div className="flex items-center mt-10 gap-x-6"></div>
          </div>
          <Image
            src={chef}
            alt=""
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}

export default HeroCompA;
