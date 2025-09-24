import React from "react";
import P from "../../atoms/P/P";
import Input from "../../atoms/Input/Input";

function RepresentationPageFormProperty() {
  return (
    <div className="w-full flex flex-col items-end gap-3 my-10  ">
      <P className="text-[#353535] text-[1.3vw] font-medium ">
        مشخصات ملک متقاضی
      </P>
      <div className="w-full flex items-center justify-center gap-5 [direction:rtl]">
        <Input
          placeholder="نوع مالکیت"
          className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  "
        />
        <Input
          placeholder="مساحت ملک (متر مربع)"
          className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  "
        />
        <Input
          placeholder=" سن بنا"
          className="border-[#CBCBCB] border-[1px] w-1/3 px-5 text-[#717171] rounded py-2  "
        />
      </div>
    </div>
  );
}

export default RepresentationPageFormProperty;
