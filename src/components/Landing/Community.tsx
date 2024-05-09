import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="grid grid-cols-2 mx-auto w-[80%] justify-center items-center gap-40">
      <div className="flex flex-col space-y-10">
        <h1 className="font-bold text-8xl">JOIN COLOSSEUM&apos;S COMMUNITY</h1>
        <p className="text-lg">
          Colosseum runs 2-3 online hackathons per year, each followed by an
          accelerator cohort. Sign up for a Colosseum account, create a builder
          profile, search to find cofounders, and share product ideas in the
          forum before the next hackathon.
        </p>
        <div className="flex flex-row space-x-5 font-mono">
          <button className="px-6 py-3 text-lg rounded-md uppercase bg-[#04312c] text-[#1acaa8] hover:bg-[#173d39]">
            sign up
          </button>
          <button className="px-6 py-3 text-lg rounded-md uppercase bg-white text-black hover:bg-gray-200">
            sign in
          </button>
        </div>
      </div>
      <Image src={"/alex.png"} width={1000} height={1000} className="" alt="" />
    </div>
  );
};

export default Community;
