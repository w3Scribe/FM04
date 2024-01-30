"use client";

import Image from "next/image";
import accordionData from "./constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Accordion(): JSX.Element {
  const [isOpen, setIsOpen] = useState<number | null>(0);

  const getControlIconSrc = (key: number) => {
    return isOpen === key ? "/icon-minus.svg" : "/icon-plus.svg";
  };

  const openDesc = (key: number) => setIsOpen(isOpen === key ? null : key);

  const openTransition = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <main className=" w-full h-svh sm:h-screen relative before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-1/2 before:sm:h-[45%] before:bg-mobile before:sm:bg-desk before:-z-10 grid place-items-center transition-all ease-linear">
      <div className="w-[330px] min-h-52 sm:w-[500px] bg-white rounded-lg shadow-xl shadow-grayish-purple/20 p-5 sm:p-6">
        {/* title */}
        <div className="flex justify-start items-center gap-x-3">
          <Image
            src={"/icon-star.svg"}
            alt="brand icon"
            width={25}
            height={25}
          />
          <h3 className="text-dark-purple text-2xl font-bold">FAQs</h3>
        </div>
        {/* list accordiion container */}
        <div className=" my-4 flex flex-col gap-2">
          {accordionData.map(
            ({ title, desc }, key): JSX.Element => (
              <div
                key={key}
                className={`border-b border-purple-200 py-2 last:border-none`}
              >
                <button
                  className=" w-full flex justify-between items-start sm:items-center sm:gap-x-2"
                  onClick={() => openDesc(key)}
                >
                  <h5
                    className={`text-left text-sm sm:text-base font-semibold text-dark-purple hover:text-purple-800 ${
                      isOpen === key ? "text-purple-800" : "text-dark-purple"
                    }`}
                  >
                    {title}
                  </h5>
                  <Image
                    src={getControlIconSrc(key)}
                    alt="control accordion icon"
                    width={20}
                    height={20}
                  />
                </button>
                <AnimatePresence>
                  {isOpen === key && (
                    <motion.div
                      variants={openTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <p className="text-xs sm:text-sm  text-dark-purple text-justify py-3 pr-5">
                        {desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>
      </div>
      <p className="absolute bottom-0 text-xs p-5 text-zinc-800">
        Challange By{" "}
        <a
          href="https://www.frontendmentor.io/"
          className="underline underline-offset-2 decoration-slate-400 font-semibold hover:text-purple-700"
        >
          Frontend Mentor
        </a>{" "}
        and coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/w3Scribe"
          className="underline underline-offset-2 decoration-slate-400 font-semibold hover:text-purple-700"
        >
          Sudhir Gadpayle
        </a>
      </p>
    </main>
  );
}
