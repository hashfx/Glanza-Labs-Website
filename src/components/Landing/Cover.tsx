import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <div className="relative h-screen flex flex-col justify-start py-28 items-center space-y-8">
      <h1 className="w-full text-center text-9xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-200">
        Enter the Arena
      </h1>
      <p className="w-[70%] text-center text-lg">
        Join the world&apos;s most competitive online hackathons, where elite
        crypto builders launch startups on Solana. <br /> Select hackathon
        winners are accepted into Colosseum&apos;s accelerator to establish
        their products, access an exclusive founder network, and receive
        pre-seed capital from Colosseum.
      </p>
      <div className="flex flex-row space-x-5">
        <button className="px-6 py-3 text-lg rounded-md uppercase font-[Roboto Mono] bg-[#04312c] text-[#1acaa8]">
          sign up
        </button>
        <button className="px-6 py-3 text-lg rounded-md uppercase font-[Roboto Mono] bg-white text-black">
          sign in
        </button>
      </div>
      <Image src={"/colosseum.svg"} className="absolute -bottom-40 w-fit" alt="colosseum" width={1000} height={1000}/>
    </div>
  );
};

export default Cover;
