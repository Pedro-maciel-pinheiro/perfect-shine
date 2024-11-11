"use client";
import { getProductData } from "@/api/get-api";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Test() {
  const productItems = getProductData();
  const [activeImageIndex, SetActiveImageIndex] = useState(0);

  const handlePreviusClick = () => {
    SetActiveImageIndex(
      !activeImageIndex ? productItems.length - 1 : activeImageIndex - 1,
    );
  };

  const handleNextClick = () => {
    SetActiveImageIndex((activeImageIndex + 1) % productItems.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <>
      {/* <h1 className="text-center text-5xl mt-36"> test 01</h1>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence>
          {productItems.map(
            (image, index) =>
              activeImageIndex === index && (
                <motion.div
                  key={image.title}
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1 },
                  }}
                >
                  <Image
                    src={image.image}
                    alt={image.title}
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div className="flex gap-2 items-center justify-between max-w-2xl w-full h-full mx-auto">
          <button onClick={handlePreviusClick}>Back</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div> */}

      <h1 className="text-center text-5xl"> test 02</h1>

      <div className="flex min-h-screen flex-col items-center justify-center">
        {productItems.map((image, index) => (
          <motion.div
            key={image.title}
            className={`absolute transition-opacity duration-500 ${
              activeImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeImageIndex === index ? 1 : 0 }}
            transition={{
              opacity: { duration: 1 },
            }}
          >
            <Image
              src={image.image}
              alt={image.title}
              width={500}
              height={500}
              className="mx-auto"
            />
          </motion.div>
        ))}

        <div className="mx-auto flex h-full w-full max-w-2xl items-center justify-between gap-2">
          <button onClick={handlePreviusClick}>Back</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </>
  );
}
