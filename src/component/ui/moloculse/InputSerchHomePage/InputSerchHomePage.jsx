import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Input from "../../atoms/Input/Input";

function InputSerchHomePage() {
  return (
    <div className="w-[87%] flex items-center justify-center  ">
      <div className="w-full flex items-center  h-[32px] justify-center rounded-md border-[#CBCBCB] border-[1px] ">
        <div  className="w-[15%] rounded-l-md  flex items-center justify-center bgwhite">
          <Icon name="serchblack" />
        </div>
        <Input placeholder='جستجو' className="w-[85%] h-[70%] text-[#353535] outline-0 [direction:rtl] px-3  rounded-r-md  flex items-center justify-center   bgwhite " />
      </div>
    </div>
  );
}

export default InputSerchHomePage;
