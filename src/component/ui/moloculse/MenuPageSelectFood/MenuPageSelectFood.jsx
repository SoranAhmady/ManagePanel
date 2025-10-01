import { useState } from "react";
import { motion } from "framer-motion";
import { MenuPageFoodCategor } from "../../../../core/constans/BranchPageNavBar";
import Button from "../../atoms/Button/Button";

export function MenuPageSelectFood() {
    const [active, setActive] = useState(1);

    function HandleClick(id) {
        setActive(id);
    }

    return (
        <div className="w-full  flex justify-center bg-[#EDEDED]">
            <div className="w-[90%] flex-row-reverse flex gap-5 h-14 relative">
                {MenuPageFoodCategor.map((item, index) => (
                    <Button
                        key={index}
                        onClick={() => HandleClick(item.id)}
                        className={`relative cursor-pointer h-full flex items-center py-2 text-xl transition-colors duration-200 
                            ${active === item.id ? "text-[#417F56]" : "text-gray-700"}`}
                    >
                        {item.title}

                        {active === item.id && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 right-0 h-1 bg-[#417F56] rounded-t"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </Button>
                ))}
            </div>
        </div>
    );
}
