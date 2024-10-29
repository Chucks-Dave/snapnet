"use client";

import Image from "next/image";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="flex lg:justify-between max-md:flex-col-reverse max-md:justify-center max-md:items-center md:gap-2 px-8 py-8 items-center">
      <button className="lg:w-1/2 lg:hidden md:hidden max-md:w-full bg-gradient-to-r max-md:text-[1rem] max-md:leading-[1.15rem] text-[1.25rem] leading-[1.4375rem] px-3 font-bold from-light-purple to-light-pink py-3 rounded-[10px] text-white">
        {" "}
        🎉 Create my event
      </button>
      <Image
        src="/image 1.png"
        height={775.69}
        width={440}
        alt=""
        className="aspect-square w-[27.5rem] h-[48.48rem]"
      />

      <div className="space-y-3 max-md:flex max-md:justify-center max-md:flex-col max-md:gap-1 max-md:items-center">
        <TextHeader text="Imagine if" />
        <p className="bg-gradient-to-r font-bold lg:leading-[4.599375rem] max-md:text-[2.25rem] max-md:leading-[2.5875rem] lg:text-[4rem] from-light-purple to-light-pink bg-clip-text text-transparent">
          Snapchat
        </p>
        <TextHeader text="had events." />
        <p className="lg:text-[1.5rem] max-md:hidden max-md:text-[1rem] text-darkgray lg:leading-[1.725rem] font-light max-md:leading-[1.15rem]">
          Easily host and share events with your friends
          <br /> across any social media.
        </p>
        <p className="lg:text-[1.5rem] lg:hidden max-md:text-[1rem] max-md:text-center text-darkgray lg:leading-[1.725rem] font-light max-md:leading-[1.15rem]">
          Easily host and share events with your friends across any social
          media.
        </p>
        <button className="lg:w-1/2 max-md:hidden px-3 max-md:w-full bg-gradient-to-r max-md:text-[1rem] max-md:leading-[1.15rem] text-[1.25rem] leading-[1.4375rem] font-bold from-light-purple to-light-pink py-3 rounded-[10px] text-white">
          {" "}
          🎉 Create my event
        </button>
      </div>
    </div>
  );
}

type props = {
  text: string;
};

const TextHeader = ({ text }: props) => {
  return (
    <h1 className="helvetica text-purple font-bold lg:text-[4rem] max-md:text-[2.25rem] max-md:leading-[2.25rem] lg:leading-[4rem]">
      {text}
    </h1>
  );
};
