import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import Img from "./../../atoms/Img/Img";
import { motion } from "framer-motion";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import Button from "../../atoms/Button/Button";

function SliderHeaderPage() {
  const ArayImage = [
    {id: 1,img: "/public/assets/p1.jpg",text: "تجربه غذای سالم و گیاهی به سبک ترخینه",},
    { id: 2, img: "/public/assets/p2.jpg", text: "طعم بی‌نظیر طبیعت!" },
    {id: 3,img: "/public/assets/p3.jpg",text: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",},
  ];

  return (
    <div
      className="w-full  h-[50vh] flex items-center relative justify-center flex-col"
    >
      <div className=" flex items-center justify-center cursor-pointer Prev w-[40px] h-[40px] absolute left-5  z-10 rounded-full ">
        <Icon name="next" />
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{ nextEl: ".Next", prevEl: ".Prev" }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={10}
        loop
        slidesPerView={1}
        className="w-full h-full  "
      >
        {ArayImage.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="w-full h-full flex flex-col  items-center gap-8 justify-center bg-center bg-cover object-contain bg-no-repeat bg-[#1325189f] bg-blend-overlay "
            >
              <P className="text-white text-[2.5vw] [direction:rtl] font-semibold mt-[5vw]">
                {item.text}
              </P>
              <Button className="w-[10vw] h-[2.5vw] text-white bg-[#417F56] rounded-[8px] hover:shadow-[inset_2px_2px_5px_0px_#193121]   ">
                سفارش آنلاین غذا
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" flex items-center justify-center cursor-pointer Next w-[40px] h-[40px] absolute right-5 z-10 rounded-full ">
        <Icon name="prev" />
      </div>

      <div className="absolute  z-10  bottom-0 h-[33px] inverted-radius flex items-center justify-center ">
        <div className="custom-pagination w-full flex items-center justify-center "></div>
      </div>
    </div>
  );
}

export default SliderHeaderPage;
