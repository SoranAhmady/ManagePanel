import React from 'react'
import P from '../../atoms/P/P'
import { motion } from 'framer-motion';

function AboutPageImage() {
    return (
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}} className="w-full h-[35vh] bg-[url(/assets/bg1.jpg)] bg-no-repeat bg-center bg-blend-overlay bg-[#101f14b8] md:text-[3vw] text-[5vw] text-[#E5F2E9] font-semibold [direction:rtl] md:h-[50vh] flex items-center relative bg-cover justify-center ">
            <P>درباره ترخینه بیشتر بدانید!</P>
        </motion.div>
    )
}

export default AboutPageImage
