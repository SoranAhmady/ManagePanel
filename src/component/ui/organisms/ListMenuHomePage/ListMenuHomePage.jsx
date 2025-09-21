import React from "react";
import P from "../../atoms/P/P";
import { ArayMenu } from "./../../../../core/constans/Home";
import Img from "../../atoms/Img/Img";
import Button from "./../../atoms/Button/Button";

function ListMenuHomePage() {
  return (
    <div className="w-full md:h-fit h-[50vh] flex flex-col items-center gap-[8vw] ">
      <P className="text-[#353535] font-semibold md:text-[1.9vw] text-[5vw]  ">
        منوی رستوران
      </P>
      <div className="w-[87%] grid md:grid-cols-4 grid-cols-[repeat(2,1fr)] md:gap-5 gap-5 gap-y-20 ">
        {ArayMenu.map((item) => (
          <div className="w-full md:h-[11vw] h-[21vw]  bg-[#417F56] rounded-lg relative flex flex-col items-center  ">
            <Img
              src={item.img}
              className="w-[90%] md:h-[15vw] h-[25vw] absolute md:bottom-10 bottom-6   object-contain  "
            />
            <Button className="bg-white text-[#353535] md:text-[1.1vw] text-[3.1vw] md:font-semibold font-medium  md:w-[10vw] w-[25vw] md:py-[0.7vw] py-[1.8vw] rounded-md shadow-[0px_5px_8px_0px_#00000040] absolute md:top-36 top-16 ">
              {item.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMenuHomePage;
