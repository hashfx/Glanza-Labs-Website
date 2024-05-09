import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col space-y-20 justify-center items-center">
      <h1 className="font-medium text-6xl">
        Colosseum powers <br /> Solana hackathons
      </h1>
      <div className="grid grid-cols-3 justify-center items-center w-[80%]">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-[Audiowide] text-4xl">60 , 000+</h1>
          <p className="font-[Raleway] text-sm font-semibold">BUILDERS</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-[Audiowide] text-4xl">4 , 000+</h1>
          <p className="font-[Raleway] text-sm font-semibold">
            PRODUCTS LAUNCHED
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-[Audiowide] text-4xl">$600M</h1>
          <p className="font-[Raleway] text-sm font-semibold">
            RAISED BY WINNERS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
