import Image from "next/image";
import React from "react";
import SupporterCard from "./SupporterCard";

const Supporters = () => {
  return (
    <div className="flex flex-col w-[70%] mx-auto space-y-10">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-medium text-5xl">
          Top ecosystem founders got their <br />
          start in Solana hackathons
        </h1>
        <Image
          src={"/globe.svg"}
          className="w-40"
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-3">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <div
            key={i}
            className="border border-[#1f1f1f] rounded-xl p-1"
          >
            <SupporterCard icon={"/dummylogo.png"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supporters;
