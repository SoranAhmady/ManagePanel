import React from 'react'
import { motion } from 'framer-motion';
import P from '../../atoms/P/P';

function ContactPageImage() {
    return (
          <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}} className="w-full h-[35vh] bg-[url(/assets/bg3.jpg)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[#101f14b8] text-[3vw] text-[#E5F2E9] font-semibold [direction:rtl] md:h-[50vh] flex items-center justify-center ">
            <P> با ترخینه در تماس باشید. </P>
        </motion.div>
    )
}

export default ContactPageImage
