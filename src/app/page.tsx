'use client'

import Image from "next/image"
import accordionData from "./constants"
import {motion, AnimatePresence} from "framer-motion"
import { useState } from "react"

export default function Accordion():JSX.Element{

  const [isOpen, setIsOpen] = useState<number | null>(null);

  const getControlIconSrc = (key:number) =>{
    return isOpen ? '/icon-minus.svg' : '/icon-plus.svg';
  }

 return (
   <main className=" w-full h-svh sm:h-screen relative before:content-[''] before:left-0 before:top-0 before:absolute before:w-full before:h-1/2 before:sm:h-[45%] before:bg-mobile before:sm:bg-desk before:-z-10 grid place-items-center">
     <div className="min-w-[330px] min-h-52 sm:w-[450px] bg-white rounded-lg shadow-xl shadow-grayish-purple/20 p-5">
       {/* title */}
       <div className="flex justify-start items-center gap-x-3">
         <Image
           src={"/icon-star.svg"}
           alt="brand icon"
           width={25}
           height={25}
         />
         <h3 className=" text-dark-purple text-2xl font-bold">FAQs</h3>
       </div>
       {/* list accordiion container */}
       <div className="my-4 flex flex-col gap-3">
         {accordionData.map(
           ({ title, desc }, key): JSX.Element => (
             <div key={key}>
               <button className=" w-full flex justify-between items-center gap-x-2">
                 <h5 className=" text-[12px] sm:text-sm font-semibold text-dark-purple hover:text-purple-800">{title}</h5>
                 <Image
                   src={getControlIconSrc(key)}
                   alt="control accordion icon"
                   width={20}
                   height={20}
                 />
               </button>
             </div>
           )
         )}
       </div>
     </div>
   </main>
 );
}