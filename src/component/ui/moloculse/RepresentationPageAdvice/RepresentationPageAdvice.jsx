import React from "react";
import P from "../../atoms/P/P";
import Input from './../../atoms/Input/Input';
import Button from './../../atoms/Button/Button';

function RepresentationPageAdvice() {
  return (
    <div className="w-[85%] mx-auto flex flex-col items-center justify-center py-10 gap-6  border-b-[1px]  border-[#CBCBCB] ">
        <P className="text-[#353535] text-[1.5vw] font-bold ">دریافت مشاوره</P>
        <div className="w-full flex items-center justify-center gap-5 [direction:rtl]">
            <Input placeholder="نام و نام‌خانوادگی" className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  " />
            <Input placeholder="شماره تماس" className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  " />
            <Input type="date" placeholder="زمان ایده‌آل" className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  " />
        </div>
        <Button className=" bg-[#417F56] py-2 px-5 rounded text-white  ">
            درخواست مشاوره
        </Button>
      </div>
  );
}

export default RepresentationPageAdvice;
