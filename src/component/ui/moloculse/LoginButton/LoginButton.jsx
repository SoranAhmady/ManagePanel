import React, { useContext, useEffect, useState } from 'react'
import Input from './../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Span from './../../atoms/Span/Span';
import P from '../../atoms/P/P';
import { motion } from 'framer-motion';
import { LoginContaxt } from '../../../../context/LoginWindow';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

function LoginButton({setNumbers}) {
    const [start,setStart]=useState()
    const [valueinput,setvalueinput]=useState("")
    const {setNextWindow } = useContext(LoginContaxt);
    
    

const handelNext = () => {
  const phoneRegex = /^09\d{9}$/;
  if (!valueinput) {
    toast.error("شماره همراه را وارد کنید.");
    return;
  }
  if (!phoneRegex.test(valueinput)) {
    toast.error("شماره همراه نادرست است.");
    return;
  }
  setNumbers(valueinput);
  setNextWindow("2");
};


 
    return (
        <div  className="my-[1vw]">
            <div onClick={()=>setStart(true)}  className="w-full h-[3vw]  flex items-center justify-center relative border-[#353535] rounded-lg border-[2px] outline-none px-5 ">
                <Input  type="number" id='input1' 
                    maxLength={11}
                    onChange={(e)=>setvalueinput(e.target.value)}
                    inputMode="numeric" 
                    onKeyDown={(e) => {if (e.key === "Enter")handelNext()}}
                    value={valueinput}
                    onInput={() => {
                    const target =document.getElementById("input1");
                     target.value = target.value.replace(/\D/g, "");
                     if (target.value.length > target.maxLength) {
                       target.value = target.value.slice(0, target.maxLength);
                     }
                }} className="w-full h-full text-[1.2vw] text-[#353535]  outline-none" />
                <motion.p  transition={{duration:3}} animate={start?{position:"absolute",bottom:35,right:15,backgroundColor:"white",padding:2}:{position:"absolute",right:15,color:"#717171"}} >شماره همراه</motion.p>
            </div>
            <Button onClick={handelNext} className={` w-full h-[3vw]  flex items-center justify-center ${valueinput.length==11?"bg-[#417F56] text-[#353535] ":"bg-[#EDEDED] text-[#CBCBCB] "} my-[2vw] rounded-lg text-[1.5vw] `} >
                ادامه
            </Button>
            <P className="w-[85%] text-[#353535] [direction:rtl] text-[0.9vw] font-medium mx-auto  " >
                ورود و عضویت در ترخینه به منزله قبول <Span className="text-[#417F56] cursor-pointer"> قوانین و مقررات</Span> است.
            </P>
            <ToastContainer stacked  toastClassName={"bg-[#E5F2E9] [direction:rtl] px-10 text-[#d35d4d] text-[1.5vw] "} />
        </div>
    )
}

export default LoginButton

// https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
//https://www.geeksforgeeks.org/reactjs/how-to-get-the-enter-key-in-reactjs/
//translate