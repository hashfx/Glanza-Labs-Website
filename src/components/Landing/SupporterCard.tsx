import Image from "next/image";
import React from "react";

const SupporterCard = ({ icon }: any) => {
  return (
    <div className="bg-[#131212] border border-[#1f1f1f] rounded-xl hover:bg-[#020202] grid-card justify-center items-center flex">
      <Image
        src={icon}
        width={1000}
        height={1000}
        className="h-28 w-20 items-center justify-center"
        alt=""
      />
    </div>
  );
};

export default SupporterCard;
