"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const CountdownTimer = ({ expiryTimestamp }: any) => {
  const calculateTimeLeft = () => {
    const difference = expiryTimestamp - Date.now();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-7 w-[50%] gap-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-[Audiowide]">{timeLeft.days}</p>{" "}
        <p className="font-[Audiowide]">DAYS</p>
      </div>
      <Image
        src={"/timer-gap.svg"}
        className="w-12 h-12"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-[Audiowide]">{timeLeft.hours}</p>
        <p className="font-[Audiowide]">HOURS</p>
      </div>
      <Image
        src={"/timer-gap.svg"}
        className="w-12 h-12"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-[Audiowide]">{timeLeft.minutes}</p>
        <p className="font-[Audiowide]">MINS</p>
      </div>
      <Image
        src={"/timer-gap.svg"}
        className="w-12 h-12"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-[Audiowide]">{timeLeft.seconds}</p>
        <p className="font-[Audiowide]">SECS</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
