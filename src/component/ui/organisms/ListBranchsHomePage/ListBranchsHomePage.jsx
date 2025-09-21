import React, { useState } from "react";
import P from "../../atoms/P/P";
import { ArayShabe } from "../../../../core/constans/Home";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import { motion } from 'framer-motion';
import WindowBranchSelection from "../../moloculse/WindowBranchSelection/WindowBranchSelection";
import WindowImagesHome from "../../moloculse/WindowImagesHome/WindowImagesHome";

function ListBranchsHomePage() {
    const [openpage,setOpenpage]=useState(false)
    const [openImages,setOpenImages]=useState(false)
    const [inViwe,setinViwe]=useState(false)

  return (
    <motion.div  whileInView={()=>setinViwe(true)}
    className="w-[87%]  flex flex-col items-center gap-5 mx-auto ">

      <P className="md:text-[1.7vw] text-[4.5vw] text-[#353535] font-semibold ">ترخینه گردی</P>
      <div className="w-full grid md:flex items-center justify-between gap-8 ">
        {ArayShabe.slice(0,4).map((item,index) => (

          <motion.div initial={{ opacity: 0, y: 250 }} animate={inViwe&&{ opacity: 1, y: 0 }} transition={{ duration: index *0.3,repeat:1 }}   
          
          className="md:w-1/4 w-[90vw] h-[22vw] group transition-all [direction:rtl] duration-1000 ease-in-out bg-white rounded-lg flex md:flex md:flex-col items-center border-[#CBCBCB] hover:border-[#315F41] border-[1px] hover:shadow-[0px_0px_0px_0px_#0000001A,0px_1px_2px_0px_#0000001A,0px_4px_4px_0px_#00000017,0px_9px_5px_0px_#0000000D,0px_16px_6px_0px_#00000003,0px_25px_7px_0px_#00000000] ">
            <div style={{backgroundImage:`url(${item.img})`}} className="md:w-full w-[50%] h-full md:h-[200px] md:group-hover:h-[50%] transition-all duration-1000 ease-in-out md:rounded-t-lg rounded-r-lg bg-center bg-no-repeat bg-cover object-contain flex items-center justify-center md:group-hover:bg-blend-overlay md:bg-[#00000099]">
                <motion.button  onClick={()=>setOpenImages(true)} initial={{boxShadow:"0px 0px 0px 0.5px #E5F2E9"}}  animate={{boxShadow:"0px 0px 20px 2px #E5F2E9"}} transition={{duration:1, repeat: Infinity}}  className="w-[58px] h-[58px]  bg-[#ffffff3f] hidden md:flex items-center justify-center rounded-full  transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 ">
                    <div  className=" w-[42px] h-[42px]  bg-[#ffffff65] flex items-center justify-center rounded-full transition-opacity duration-1500 ease-in-out opacity-0 group-hover:opacity-100 ">
                    <Icon name="images" />
                    </div>
                </motion.button>
            </div>

            <div className="w-[50%] md:w-full  flex flex-col gap-3">
                <P className="w-full text-center text-[#353535] md:text-[1.4vw] text-[3.4vw] font-semibold ">{item.name}</P>
                <P className="w-full text-center md:text-[1vw] text-[2.8vw] text-[#717171] ">{item.text}</P>
            </div>

            <Button onClick={()=>setOpenpage(true)} className="group-hover:w-[9vw] px-3 group-hover:h-[2vw] mt-5 rounded text-[#315F41] border-[#315F41] hidden md:flex items-center justify-between border-[1px]  transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100">
              <Icon name="flashleftgreen" />
              <P>صفحه شعبه</P>
            </Button>
          </motion.div>
        ))}
      </div>
        {openpage&&<WindowBranchSelection setOpenpage={setOpenpage} />}
        {openImages&&<WindowImagesHome setOpenImages={setOpenImages} />}
    </motion.div>
  );
}

export default ListBranchsHomePage;
