import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input/Input";
import P from "../../atoms/P/P";
import { motion } from "framer-motion";
import Button from "../../atoms/Button/Button";

function CostomInputSlectbox({ classW, placeholder, Option }) {
  const [open, setOpen] = useState(false);
  const [Slected, setSlected] = useState("");
  const [Slected2, setSlected2] = useState("");
  const [valueInput, setValueInput] = useState("");
  console.log(valueInput);
  

  useEffect(() => {
    if (valueInput) {
      setSlected("");
      setSlected2(valueInput);
    } else {
      setSlected2(Slected);
    }
  }, [Slected, valueInput]);
  
  
  const Serche = Option.filter((item) => item.name.includes(valueInput));

  return (
    <div className={` ${classW} relative`}>
      <Input
        placeholder={placeholder}
        value={Slected2}
        dir="rtl"
        className="border-[#CBCBCB] border-[1px] w-full px-5 text-[#717171] rounded py-2   "
        onChange={(e) => setValueInput(e.target.value)}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          onBlur={() => setOpen(false)}
          className="bg-[#ffff] w-full py-2 px-2 max-h-[191px]  absolute z-10 top-12 overflow-auto  rounded-lg shadow-[0px_5px_7px_5px_#0000001A] "
        >
          {Serche.map((item) => (
            <Button
              onClick={() => (setSlected(item.name), setOpen(false))}
              className="w-full border-b-[1px] flex items-center justify-end text-[#353535] py-[7px] border-b-[#CBCBCB] "
            >
              <P>{item.name}</P>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CostomInputSlectbox;
