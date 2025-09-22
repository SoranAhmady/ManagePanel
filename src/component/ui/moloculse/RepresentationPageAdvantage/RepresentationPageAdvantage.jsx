import React from "react";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import { motion } from 'framer-motion';

function RepresentationPageAdvantage() {
  const Advantage = [
    { id: 1, text: "استفاده از برند شناخته شده ترخینه" },
    { id: 2, text: "به حداقل رساندن ریسک سرمایه گذاری" },
    { id: 3, text: "تسریع روند بازگشت سرمایه" },
    { id: 4, text: "مشاوره های تخصصی جهت مدیریت رستوران" },
    { id: 5, text: "مشاوره در امور حقوقی، مالی و مالیاتی" },
    { id: 6, text: "پشتیبانی بازاریابی و منابع انسانی" },
    { id: 7, text: "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات" },
    { id: 8, text: "طرح های تشویقی برای ارتقا فروش" },
  ];
  return (
    <div className="w-[85%] mx-auto flex items-center justify-center py-10  border-b-[1px] border-[#CBCBCB] ">
      <div className="w-[80%]  flex flex-col items-center justify-between  gap-6 ">
        <P className="text-[#353535] text-[1.5vw] font-bold ">
          مزیت دریافت نمایندگی
        </P>
        <div className="flex items-center justify-center  flex-wrap  gap-5  ">
          {Advantage.map((item,index) => (
            <div
              className="w-1/3 flex items-center justify-start [direction:rtl] gap-2 "
              key={item.id}
            >
              <Icon name="lozee" />
              <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: index * 0.3}} className="text-[#353535] text-[1vw] font-medium  ">
                {item.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepresentationPageAdvantage;
