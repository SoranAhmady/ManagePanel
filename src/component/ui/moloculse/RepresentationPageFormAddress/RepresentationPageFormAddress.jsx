import React, { useState } from "react";
import CostomInputSlectbox from "../CostomInputSlectbox/CostomInputSlectbox";
import P from "../../atoms/P/P";
import { ArayIran, cities, rurals } from './../../../../core/constans/ArayIran';
import Input from "../../atoms/Input/Input";
import Map from "../Map/Map";

function RepresentationPageFormAddress() {
    const [Citie,setCitie]=useState("")
    console.log(Citie);
    

  return (
    <div className="w-full ">
        <P>آدرس ملک متقاضی</P>
        
      <div className="grid grid-cols-5 grid-rows-3 gap-x-[416.5px]  w-full  ">
        <div className="row-span-3 h-[150px] w-[400px] border-[#CBCBCB] bg-white border-[1px]  text-[#717171] rounded py-2">
            <Map/>
        </div>
        <CostomInputSlectbox placeholder="شهر" Option={cities}  classW="w-[400px] h-[40px]  " />
        <div className="row-span-2 col-start-2 row-start-2 w-[400px]   ">
          <textarea placeholder="آدرس دقیق" className="border-[#CBCBCB]  resize-none border-[1px] w-full px-5 h-[100px] text-[#717171] rounded py-2 [direction:rtl]"></textarea>
        </div>
        <CostomInputSlectbox placeholder="استان" setCitie={setCitie}  Option={ArayIran} classW="col-start-3 row-start-1 w-[400px] h-[40px]  " />
        <CostomInputSlectbox placeholder="منطقه" Option={rurals}  classW="col-start-3 row-start-2 w-[400px] h-[40px]  " />
      </div>
    </div>
  );
}
{
  /* <CostomInputSlectbox/> */
}

export default RepresentationPageFormAddress;
