import React from "react";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import { motion } from 'framer-motion';

function AboutPageInformaition() {
  const ArayInformaition = [
    { id: 1, icon: "dafter", text: "منوی متنوع", border: true },
    { id: 2, icon: "homewifai", text: "محیطی دلنشین و آرام", border: true },
    { id: 3, icon: "amaresh", text: "کیفیت بالای غذاها", border: true },
    { id: 4, icon: "usersbig", text: "پرسنلی مجرب و حرفه‌ای", border: false },
  ];
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:1}} className="w-full bg-[#EDEDED] flex items-center justify-center my-3  ">
      <div className="w-[90%] h-full flex items-center justify-between md:py-7 py-5 ">
        {ArayInformaition.map((item) => (
          <div className={`w-1/4  md:border-r-[2px] ${item.border&&"md:border-[#CBCBCB]"} text-[#717171] md:text-[1.3vw] text-[2.5vw] text-center flex flex-col gap-2  items-center justify-center `}>
            <Icon name={item.icon} />
            <P>{item.text}</P>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AboutPageInformaition;
