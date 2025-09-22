import React from "react";
import P from "../../atoms/P/P";
import Input from "../../atoms/Input/Input";

function RepresentationPageFormFeaturesInput() {
  return (
    <div className="w-full flex flex-col items-start [direction:rtl] gap-5  ">
      <P className="text-[#717171] text-[1.35vw] " >ملک متقاضی:</P>
      <div className="grid grid-cols-2 gap-x-10  ">
        <div className="flex items-center justify-start gap-2">
          <Input type="checkbox" className="w-4 h-4 " />
          <P className="text-[#717171]  text-[1.2vw] " >پروانه کسب دارد.</P>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Input type="checkbox" className="w-4 h-4 " />
          <P className="text-[#717171]  text-[1.2vw] " >آشپزخانه دارد.</P>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Input type="checkbox" className="w-4 h-4 " />
          <P className="text-[#717171]  text-[1.2vw] " >پارکینگ دارد.</P>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Input type="checkbox" className="w-4 h-4 " />
          <P className="text-[#717171]  text-[1.2vw] " >انبار دارد.</P>
        </div>
      </div>
    </div>
  );
}

export default RepresentationPageFormFeaturesInput;
