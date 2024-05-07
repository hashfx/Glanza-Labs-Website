import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const Links = [
    {
      name: "Hackathon",
      link: "/hackathon",
    },
    {
      name: "Accelerator",
      link: "/accelerator",
    },
    {
      name: "Platform",
      link: "/platform",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="w-full h-fit py-5 px-16 flex flex-row justify-between items-center">
      <div className=" flex justify-center items-center space-x-10">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-40 "
          />
        </Link>
        <div className="flex flex-row space-x-8 font-normal">
          {Links &&
            Links.map((value, id) => {
              return (
                <Link key={id} href={value.link}>
                  <p className="text-white hover:text-[#66b2f1]">
                    {value.name}
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
      <button className="uppercase font-mono bg-[#04312c] text-[#1acaa8] px-4 py-3 rounded-md">
        Sign up
      </button>
    </div>
  );
};

export default Navbar;
