import quotes from "../assets/quotes.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Pagination from "./Pagination";
import { data } from "../data/data";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import Title from "./Title";


const Content = () => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1144);
  
    const itemsPerPage = isMobile ? 1 : 3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const currentItems = data.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage);
  
    useEffect(() => {
      const handleResize = () => {
        const mobile = window.innerWidth <= 1144;
        setIsMobile(mobile);
  
        setIndex(0);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const handlePrev = () => {
      if (index > 0) setIndex((prev) => prev - 1);
    };
  
    const handleNext = () => {
      if (index < totalPages - 1) setIndex((prev) => prev + 1);
    };
  
    return (
      <motion.section
        className="w-full flex flex-col my-20 change-cart:my-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
      >
        <div className="max-w-[1280px] mx-auto relative">
            < Title />
            
          {/* Cards */}
          <div className="flex px-[80px] gap-[15px] change-cart:flex-col change-cart:items-center">
            {currentItems.map((item, idx) => (
              <div
                key={idx}
                className="w-[370px] h-[532px] max-[540px]:w-[300px] max-[420px]:w-[250px] max-[420px]:h-auto"
              >
                <div className="bg-white rounded-xl shadow-lg p-7 h-full flex flex-col border border-border-cart max-[540px]:p-5">
                  {/* Logo */}
                  <div className="mb-3 h-[28%] flex items-center justify-start">
                    <img src={item.logo} className="w-13 h-auto max-[540px]:w-10" alt={item.name} />
                  </div>
  
                  {/* Descr */}
                  <div className="mb-6 flex-grow">
                    <p className="font-medium text-gray-custom text-xl leading-[35px] mr-[-15px] max-[540px]:text-base max-[540px]:leading-6">
                      {item.text}
                    </p>
                  </div>
  
                  {/* Persons */}
                  <div className="relative flex h-[25%] pt-5 max-[540px]:pt-3">
                    <img src={item.avatar} alt={item.name} className="w-14 h-14 max-[540px]:w-10 max-[540px]:h-10" />
                    <div className="ml-4 w-[240px] max-[540px]:w-[180px]">
                      <p className="font-bold text-2xl text-black max-[540px]:text-lg">{item.name}</p>
                      <p className="font-medium text-xl text-black leading-[28px] max-[540px]:text-base max-[540px]:leading-[22px]">
                        {item.title}
                      </p>
                    </div>
                    <img src={quotes} className="absolute -top-8 right-0 max-[540px]:w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Навигация (всегда показываем стрелки и пагинацию) */}
          <>
            {/* Arrow left */}
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="absolute top-[55%] left-0 flex items-center justify-center ml-2 -translate-y-1/2  bg-white rounded-full w-[50px] h-[50px] border border-border-arrow hover:bg-gray-200 transition duration-300 disabled:opacity-40"
            >
              <img src={arrowLeft} alt="arrow-left" />
            </button>
            {/* Arrow right */}
            <button
              onClick={handleNext}
              disabled={index >= totalPages - 1}
              className="absolute top-[55%] right-0 mr-2 -translate-y-1/2  bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center border border-border-arrow hover:bg-gray-200 transition duration-300 z-10 disabled:opacity-40"
            >
              <img src={arrowRight} alt="arrow-right" />
            </button>
          </>
  
          {/* Pagination Dots */}
          <Pagination totalPages={totalPages} page={index} setPage={setIndex} />
        </div>
      </motion.section>
    );
  };
  
  export default Content;
