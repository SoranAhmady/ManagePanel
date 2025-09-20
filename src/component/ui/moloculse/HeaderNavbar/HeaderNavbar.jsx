import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Icon from '../../atoms/Icon/Icon';
import P from '../../atoms/P/P';
import { ArayDropDown1, ArayDropDown2 } from '../../../../core/constans/ArayDrop';
import DropDownHeader from '../DropDownHeader/DropDownHeader';

function HeaderNavbar() {
      const [clicked, setClicked] = useState("4");
    return (
        <div className="  w-fit text-[#717171] flex items-center justify-between gap-[1.5vw] ">
            <motion.p onClick={() => setClicked("1")}   animate={{borderBottom: clicked=="1" ? "2px solid #417F56" : "none",color: clicked=="1" ? "#417F56" : "#717171",fontWeight:clicked=="1"?"bold":"normal" }}
                  transition={{ duration: 0.2 }}>تماس با ما</motion.p>

            <motion.p  onClick={() => setClicked("2")}   animate={{borderBottom: clicked=="2" ? "2px solid #417F56" : "none",color: clicked=="2" ? "#417F56" : "#717171",fontWeight:clicked=="2"?"bold":"normal" }}
                  transition={{ duration: 0.2 }}>درباره ما</motion.p>

            <motion.p  onClick={() => setClicked("3")}   animate={{borderBottom: clicked=="3" ? "2px solid #417F56" : "none",color: clicked=="3" ? "#417F56" : "#717171",fontWeight:clicked=="3"?"bold":"normal" }}
                  transition={{ duration: 0.2 }}>اعطای نمایندگی</motion.p>

            <DropDownHeader Option={ArayDropDown2} defultText="منو" classDirections="top-10 right-5 z-10 " />

            <DropDownHeader Option={ArayDropDown1} defultText="شعبه" classDirections="top-10 left-5  z-10" />

            <motion.p  onClick={() => setClicked("4")}   animate={{borderBottom: clicked=="4" ? "2px solid #417F56" : "none",color: clicked=="4" ? "#417F56" : "#717171",fontWeight:clicked=="4"?"bold":"normal" }}
                  transition={{ duration: 0.2 }}>صفحه اصلی</motion.p>

        </div>
    )
}

export default HeaderNavbar
