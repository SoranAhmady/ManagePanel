import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import { ArayShabe } from "../../../../core/constans/Home";
import Img from "./../../atoms/Img/Img";

function WindowImagesHome({setOpenImages}) {
  const [all, setAll] = useState("assets/h3.jpg");
  return (
   <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center"
>
  <div className="absolute inset-0 backdrop-blur-sm bg-[#00000099]"></div>
  <div
    style={{ backgroundImage: `url(${all.img || all})` }}
    className="relative z-10 w-[50vw] h-[27vw] bg-no-repeat bg-center bg-cover object-contain rounded-lg"
  >
    <div className="w-full h-full BgImageGradint p-5 flex flex-col justify-between rounded-lg">
      <Button onClick={() => setOpenImages(false)}>
        <Icon name="backWhite" />
      </Button>
      <div className="w-[80%] flex items-center justify-between gap-3 mx-auto [direction:rtl] ">
        {ArayShabe.slice(3, 9).map((item, index) => (
          <Button
            key={index}
            onClick={() => setAll(item)}
            className="w-1/6 h-[72px] focus:border-[1px] focus:scale-110 focus:border-[#FFFFFF] rounded-md"
          >
            <Img src={item.img} className="w-full h-full rounded-md" />
          </Button>
        ))}
      </div>
    </div>
  </div>
</motion.div>

  );
}

export default WindowImagesHome;
