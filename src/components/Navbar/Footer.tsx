import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" flex flex-row mx-auto justify-between items-center p-20 bg-[#000000]">
      <div className="flex flex-col justify-center items-start space-y-20">
        <div>
          <Image
            src={"/logo.png"}
            className="w-fit"
            alt=""
            width={1000}
            height={1000}
          />
          <p>2024 Colosseum © All Rights Reserved</p>
        </div>
        {/* socials */}
        <div className="flex flex-row space-x-5 justify-center items-center">
          <Link href={""} className="hover:text-[#66b2f1]">
            <BsTwitterX size={30} />
          </Link>
          <Link href={""} className="hover:text-[#66b2f1]">
            <TiSocialYoutube size={30} />
          </Link>
          <Link href={""} className="hover:text-[#66b2f1]">
            <IoLogoLinkedin size={30} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col space-y-10">
          <h1 className="text-gray-500 text-sm">Compete</h1>
          <div className="flex flex-col space-y-3">
            <Link href={""} className="hover:text-[#66b2f1]">
              Hackathon
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Accelerator
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-gray-500 text-sm">Build</h1>
          <div className="flex flex-col space-y-3">
            <Link href={""} className="hover:text-[#66b2f1]">
              Join Colosseum
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Find Cofounders
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Developer Resources
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              News
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-gray-500 text-sm">Organization</h1>
          <div className="flex flex-col space-y-3">
            <Link href={""} className="hover:text-[#66b2f1]">
              About Colosseum
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Code of Ethics
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Press & Brand
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-gray-500 text-sm">Legal</h1>
          <div className="flex flex-col space-y-3">
            <Link href={""} className="hover:text-[#66b2f1]">
              Terms of Service
            </Link>
            <Link href={""} className="hover:text-[#66b2f1]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
