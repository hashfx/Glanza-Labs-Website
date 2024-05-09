import Community from "@/components/Landing/Community";
import CountdownTimer from "@/components/Landing/Countdown";
import Cover from "@/components/Landing/Cover";
import Stats from "@/components/Landing/Stats";
import Supporters from "@/components/Landing/Supporters";
import Twitter from "@/components/Landing/Twitter";
import Video from "@/components/Landing/Video";
import Image from "next/image";
import React from "react";

const Home = () => {
  const expiryTimestamp = Date.now() + 1000 * 60 * 60 * 24;
  return (
    <div className="grid-bg flex flex-col space-y-20">
      <Cover />
      <div className="border p-1 border-gray-500 w-[50%] mx-auto rounded-xl flex flex-row items-center justify-center">
        <Video />
      </div>
      <div className="grid-bg flex flex-col space-y-20 justify-center items-center">
        <CountdownTimer expiryTimestamp={expiryTimestamp} />
        <h1 className="font-semibold text-4xl w-[50%] text-center">
          The Solana Foundation&apos;s next <p></p>hackathon is happening now!
        </h1>
        <button className="uppercase font-mono bg-[#04312c] text-[#1acaa8] px-7 py-3 text-xl rounded-md hover:bg-[#173d39] w-fit">
          Sign Up
        </button>
      </div>
      <div className="relative flex flex-col space-y-40">
        <Image
          src={"/alexander.png"}
          width={1000}
          height={1000}
          className="absolute w-[50vw] h-full object-cover object-center z-0 "
          alt=""
        />
        <div className="h-screen w-full my-auto">
          <Stats />
        </div>
      </div>
      <div>
        <Supporters />
      </div>
      <div>
        <Community />
      </div>
      <div>
        <Twitter />
      </div>
    </div>
  );
};

export default Home;
