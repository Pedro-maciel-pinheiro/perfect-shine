"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { ChevronUp } from "lucide-react";
import { AccordionData } from "@/constant/car-detail-price";
import { perfectshine_font } from "@/constant/font";
import ContactUsForm from "./contact-us";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const isActive = (index: number): boolean => {
    return activeIndex === index;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={fadeIn(0.1)}
      className="mx-4 my-10  w-full grid md:grid-cols-2 place-items-center rounded-lg
       border bg-black/70 text-white px-8 shadow-2xl max-w-7xl min-h-[700px]"
    >
      <div className={`w-full h-full  ${perfectshine_font.className}`}>
        {AccordionData.map((item, index) => (
          <motion.div
            key={index}
            className="w-full border-b max-w-[450px]"
            initial="hidden"
            animate={activeIndex ? "visible" : "visible"}
            variants={fadeIn(0.2)}
          >
            <button
              className="w-full p-4 text-left font-bold focus:outline-none max-w-[450px]"
              onClick={() => toggleAccordion(index)}
              disabled={isActive(index)}
            >
              <div className="flex w-full justify-between">
                <h2
                  className={`text-xl transition-all duration-500  uppercase
                    ${activeIndex === index ? "text-red-500 " : "text-white"}`}
                >
                  {item.title}
                </h2>
                <ChevronUp
                  className={`transition-all duration-500 ${
                    isActive(index) ? "text-gray-300" : "text-white"
                  }`}
                  style={{
                    transform: isActive(index) ? "scaleY(1)" : "scaleY(-1)",
                  }}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isActive(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className=" overflow-hidden"
                >
                  <motion.div className="p-6">{item.content}</motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className={`w-full h-full flex flex-col items-center gap-6 mt-10 ${perfectshine_font.className}`}>
       <h1 className={`text-red-500 text-xl text-center
        uppercase font-bold `}>Contact us</h1>
        <ContactUsForm/>
      </div>
    </motion.div>
  );
};

export default Accordion;
