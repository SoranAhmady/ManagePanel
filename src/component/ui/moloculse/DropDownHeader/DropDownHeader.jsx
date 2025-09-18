import { useState } from "react";
import { motion } from 'framer-motion';
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";

function DropDownHeader({Option,defultText}) {
      const [open, setOpen] = useState(false);
      const [selected, setSelected] = useState(defultText);
    
    return (
         <div className="w-[3.5vw] h-[1.8vw]  relative">
        <motion.button
          onClick={() => setOpen(!open)}
          className={`w-[6vw] h-[2vw]  rounded-md flex items-center justify-center gap-2   `}
        >
          <Icon name="dropBlack" />
          <P>{selected}</P>
        </motion.button>
        {open && (
          <motion.div initial={{opacity:0,x:-10,h:0}} tabIndex={0} onBlur={()=>(setSelected(defultText),setOpen(false))} animate={{opacity:1,x:0}} transition={{duration:1}} className="w-[9vw]  h-[11vw] bg-white shadow-[0px_0px_6px_0px_#00000026] absolute top-10 rounded-md text-[#353535] text-[0.8vw] flex flex-col items-center   ">
            {Option.map((item,index) => (
              <motion.div initial={{opacity:0,y:-30,h:0}} onClick={()=>(setSelected(item),setOpen(false))}  animate={{opacity:1,y:0}} transition={{delay: index * 0.5}} whileTap={{backgroundColor:"#E5F2E9"}} className="w-[90%]  border-b-[1px] border-[#EDEDED] flex items-center justify-end px-[0.5vw] py-[0.75vw] gap-1 rounded-sm   ">
                <motion.p>{item}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    )
}

export default DropDownHeader
