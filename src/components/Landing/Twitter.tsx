import Image from "next/image";
import React from "react";

const Twitter = () => {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-center font-bold text-5xl">
        What Crypto <s>Twitter</s> X is Saying
      </h1>
      <div className="flex flex-row justify-between items-center w-[90%] mx-auto">
        <Image
          src={"/pillar-left.png"}
          className="h-screen w-fit"
          alt=""
          width={1000}
          height={1000}
        />
        <div className="flex flex-row justify-center items-center w-full h-full overflow-hidden">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              At dawn from the gateway to Mars, the launch of Starship’s second
              flight test
              <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a>
            </p>
            &mdash; SpaceX (@SpaceX)
            <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">
              December 7, 2023
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
        <Image
          src={"/pillar-right.png"}
          className="h-screen w-fit"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Twitter;
