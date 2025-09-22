import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArayShabe, ArayShabe2 } from "../../../../core/constans/Home";
import P from "../../atoms/P/P";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import WindowBranchSelection from "../../moloculse/WindowBranchSelection/WindowBranchSelection";
import WindowImagesHome from "../../moloculse/WindowImagesHome/WindowImagesHome";

function ContactPageListBranchs() {
  const [openpage, setOpenpage] = useState(false);
  const [openImages, setOpenImages] = useState(false);
  const [inViwe, setinViwe] = useState(false);

  return (
    <motion.div
      whileInView={() => setinViwe(true)}
      className="w-[87%]  flex flex-col items-center my-10 mx-auto "
    >
      <div className="w-full md:grid flex flex-col items-center justify-between gap-8 ">
        {ArayShabe2.slice(0, 4).map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={inViwe && { opacity: 1, y: 0 }}
            transition={{ duration: index * 0.3, repeat: 0 }}
            className="  w-[90vw] md:h-[22vw] h-[250px] group transition-all [direction:rtl] duration-1000 ease-in-out bg-white rounded-lg md:flex-row flex flex-col  items-center justify-center border-[#CBCBCB] hover:border-[#315F41] border-[1px] hover:shadow-[0px_0px_0px_0px_#0000001A,0px_1px_2px_0px_#0000001A,0px_4px_4px_0px_#00000017,0px_9px_5px_0px_#0000000D,0px_16px_6px_0px_#00000003,0px_25px_7px_0px_#00000000] "
          >
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="  md:w-[50%] w-full h-[50%] md:h-full     transition-all duration-1000 ease-in-out   md:rounded-r-lg  rounded-t-lg  bg-center bg-no-repeat bg-cover object-contain flex items-center justify-center  md:group-hover:bg-blend-overlay  md:bg-[#00000099]"
            >َ
              <motion.button
                onClick={() => setOpenImages(true)}
                initial={{ boxShadow: "0px 0px 0px 0.5px #E5F2E9" }}
                animate={{ boxShadow: "0px 0px 20px 2px #E5F2E9" }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-[58px] h-[58px]   bg-[#ffffff3f] hidden md:flex items-center justify-center rounded-full  transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 "
              >
                <div className=" w-[42px] h-[42px]  bg-[#ffffff65] flex items-center justify-center rounded-full transition-opacity duration-1500 ease-in-out opacity-0 group-hover:opacity-100 ">
                  <Icon name="images" />
                </div>
              </motion.button>
            </div>

            <div className="md:w-[50%] w-full flex-col flex items-center justify-center md:my-0 my-2 ">
              <div className="w-full  flex flex-col items-center justify-center gap-2 md:gap-3">
                <P className="w-full text-center text-[#353535]  md:text-[2vw] text-[3vw] md:font-semibold font-medium ">
                  {item.name}
                </P>
                <P className="w-full text-center text-[2.5vw]  md:text-[1.5vw] text-[#717171] md:mt-2 ">
                  {item.text}
                </P>
                <P className="w-full text-center   text-[2.5vw]  md:text-[1.5vw] text-[#717171] ">
                  {item.phne}
                </P>
                <P className="w-full text-center   text-[2.5vw]  md:text-[1.5vw] text-[#717171] ">
                  {item.time}
                </P>
              </div>

              <div className="w-full flex items-center justify-center gap-5 px-6">
                <Button className="md:group-hover:w-[9vw] w-1/2  md:group-hover:h-[2.5vw] mt-5  md:rounded-lg rounded-md  md:text-[1vw] text-[3vw] py-1 text-[#315F41] border-[#315F41] flex items-center justify-center border-[1px]  transition-all duration-1000 ease-in-out md:opacity-0 md:group-hover:opacity-100">
                  <P>صفحه شعبه</P>
                </Button>
                <Button
                  onClick={() => setOpenpage(true)}
                  className="md:group-hover:w-[9vw] w-1/2  md:group-hover:h-[2.5vw] mt-5 md:rounded-lg rounded-md  md:text-[1vw] text-[3vw] py-1 text-white bg-[#315F41] flex items-center justify-center border-[1px]  transition-all duration-1000 ease-in-out md:opacity-0 md:group-hover:opacity-100"
                >
                  <P> دیدن در نقشه</P>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {openpage && <WindowBranchSelection setOpenpage={setOpenpage} />}
      {openImages && <WindowImagesHome setOpenImages={setOpenImages} />}
    </motion.div>
  );
}

export default ContactPageListBranchs;
