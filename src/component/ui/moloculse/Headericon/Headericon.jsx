import React, { useContext, useState } from "react";
import Icon from "./../../atoms/Icon/Icon";
import Button from "./../../atoms/Button/Button";
import { motion } from "framer-motion";
import { ArayUser } from "../../../../core/constans/ArayDrop";
import { LoginContaxt } from "../../../../context/LoginWindow";

function Headericon() {
  const [open, setOpen] = useState(false);
      
  const { setopenLogin } = useContext(LoginContaxt);


  return (
    <div className="flex items-center justify-center gap-3  ">
      <div className="relative">
        <motion.button
          onClick={() =>(setopenLogin(true))}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className={`w-fit ${open?"":"max-w-[2vw]"}  h-[2vw] bg-[#E5F2E9] rounded-md flex items-center justify-center p-[6px]  `}
        >
          {open&&<Icon name="dropGreen" />}
          <Icon name="user" />
        </motion.button>
        {open && (
          <motion.div initial={{opacity:0,x:-10,h:0}}  animate={{opacity:1,x:0}} transition={{duration:1}} className="w-[9vw]  h-[11vw] bg-white shadow-[0px_0px_6px_0px_#00000026] absolute top-10 rounded-md text-[#353535] text-[0.8vw] flex flex-col items-center   ">
            {ArayUser.map((item,index) => (
              <motion.div initial={{opacity:0,y:-30,h:0}}  animate={{opacity:1,y:0}} transition={{delay: index * 0.5}} whileHover={{backgroundColor:"#E5F2E9"}} className="w-[90%]  border-b-[1px] border-[#EDEDED] flex items-center justify-end px-[0.5vw] py-[0.48vw] gap-1 rounded-sm   ">
                <motion.p>{item.text}</motion.p>
                <Icon name={item.icon} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <motion.button
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-[2vw] h-[2vw] bg-[#E5F2E9] rounded-md flex items-center justify-center p-[6px] "
      >
        <Icon name="basked" />
      </motion.button>
      <motion.button
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-[2vw] h-[2vw] bg-[#E5F2E9] rounded-md flex items-center justify-center p-[6px] "
      >
        <Icon name="serch" />
      </motion.button>
    </div>
  );
}

export default Headericon;
