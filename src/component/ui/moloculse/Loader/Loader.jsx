import React from "react";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import Button from "../../atoms/Button/Button";
import { motion } from "framer-motion";
const MenuPageSliderLoader = () => {
    const fakeSlides = Array.from({ length: 5 });

    return (
        <div className="w-full flex gap-4 overflow-hidden">
            {fakeSlides.map((_, index) => (
                <motion.div
                    initial={{ y: 50 }}
                    viewport={{ once: true }}
                    whileInView={{
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: 0,
                        delay: index * 0.1,
                    }}
                    key={index}
                    className="bg-white w-[90%] h-full flex flex-col items-center gap-2 border-2 border-[#757575] rounded-lg animate-pulse"
                >
                    <div className="w-full h-36 bg-gray-300 rounded" />
                    <div className="w-full flex flex-col gap-2 items-center px-2">
                        <div className="h-4 w-32 bg-gray-200 rounded-full" />
                        <div className="flex justify-between w-full">
                            <div className="flex gap-3 items-center">
                                <div className="h-3 w-16 bg-gray-200 rounded-full" />
                                <div className="h-4 w-10 bg-gray-200 rounded-full" />
                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="h-4 w-28 bg-gray-200 rounded-full" />

                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-1 items-center">
                                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                                <div className="h-3 w-6 bg-gray-200 rounded-full" />
                                <div className="h-3 w-12 bg-gray-200 rounded-full" />
                            </div>
                            <div className="h-4 w-20 bg-gray-200 rounded-full" />
                        </div>
                    </div>
                    <Button className="bg-gray-300 text-transparent text-[16px] px-2 py-1.5 mb-2 my-2 w-[90%] rounded-md">
                        افزودن به سبد خرید
                    </Button>
                </motion.div>
            ))}
        </div>
    );
};

export default MenuPageSliderLoader;
