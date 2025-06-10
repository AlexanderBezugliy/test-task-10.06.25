import quotes from "../assets/quotes.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Pagination from "./Pagination";
import { data } from "../data/data";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";


const Content = () => {
    const [page, setPage] = useState(0);

    const [mobileIndex, setMobileIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1144);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentItems = isMobile
                        ? [data[mobileIndex]]
                        : data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1144);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const handlePrev = () => {
        if (mobileIndex > 0) setMobileIndex((prev) => prev - 1);
    };
    const handleNext = () => {
        if (mobileIndex < data.length - 1) setMobileIndex((prev) => prev + 1);
    };

    const changePage = () => {
        setPage((prev) => (prev === 0 ? 1 : 0))
    };
    
    return (
        <motion.section 
            className="w-full flex my-20 change-cart:my-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
        >
            <div className="max-w-[1172px] mx-auto relative">
                {/* Cart */}
                <div className="flex p-5 gap-[15px] change-cart:flex-col change-cart:items-center">
                    {currentItems.map((item, index) => (
                        <div key={index} className="w-[370px] h-[502px]">
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col border border-border-cart">
                                {/* Logo */}
                                <div className="mb-3 h-[28%] flex items-center justify-start">
                                    <img
                                        src={item.logo}
                                        className="w-13 h-auto"
                                        alt={item.name}
                                    />
                                </div>
                        
                                {/* Descr */}
                                <div className="mb-6 flex-grow">
                                    <p className="font-medium text-gray-custom text-xl leading-[35px] mr-[-15px]">{item.text}</p>
                                </div>
                        
                                {/* Persons */}
                                <div className="relative flex h-[25%] pt-5">
                                    <img src={item.avatar} alt={item.name} className="w-14 h-14" />

                                    <div className="ml-4 w-[240px]">
                                        <p className="font-bold text-2xl text-black">{item.name}</p>
                                        <p className="font-medium text-xl text-black leading-[28px]">{item.title}</p>
                                    </div>

                                    <img src={quotes} className="absolute -top-8 right-0" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* mobile navigation */}
                {isMobile && (
                    <>
                        <button
                            onClick={handlePrev}
                            disabled={mobileIndex === 0}
                            className="absolute top-[45%] -translate-y-1/2 -left-[50px] bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center border border-border-arrow hover:bg-gray-200 transition duration-300 z-10 disabled:opacity-40"
                        >
                            <img src={arrowLeft} alt="arrow-left" />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={mobileIndex === data.length - 1}
                            className="absolute top-[45%] -translate-y-1/2 -right-[50px] bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center border border-border-arrow hover:bg-gray-200 transition duration-300 z-10 disabled:opacity-40"
                        >
                            <img src={arrowRight} alt="arrow-right" />
                        </button>
                    </>
                )}

                {/* desctop navigation */}
                {!isMobile && (
                    <>
                        <div className="hide-nav:hidden">
                            <Navigation changePage={changePage} />
                        </div>

                        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
                    </>
                )}               
            </div>
        </motion.section>
    );
};

export default Content;
