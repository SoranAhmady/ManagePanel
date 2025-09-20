import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../atoms/Input/Input";

export function CustomField({ placeholder }) {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState("");

    const isActive = isFocus || value.length > 0;

    return (
        <div className="relative w-full">
            <motion.label
                initial={false}
                animate={{
                    y: isActive ? -20 : 0,
                    scale: isActive ? 0.8 : 1,
                    color: isActive ? "#ffffff" : "white",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute right-5 top-3 text-sm pointer-events-none origin-right text-white z-20 " 
            >
                {placeholder}
            </motion.label>

            <Input
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className=" w-full bg-transparent text-right text-sm flex justify-center items-center text-white outline-none border-2 border-[#717171] rounded-[8px] p-2.5 px-5 "
            />
        </div>
    );
}
