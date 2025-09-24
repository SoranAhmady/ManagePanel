import React from "react";
import P from "../../atoms/P/P";
import Img from "../../atoms/Img/Img";
import { motion } from "framer-motion";

function AboutPageTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-[87%] mx-auto flex flex-col items-end md:my-10 my-5 md:gap-5 gap-1 "
    >
      <P className="md:text-[1.5vw] text-[4vw] text-[#353535] font-semibold ">درباره‌ما</P>
      <div className="w-full h-[70vh] hidden md:flex items-center justify-center gap-5 ">
        <Img
          src="/assets/bg2.jpg"
          className={
            "w-[50%] h-full object-cover border-[#353535] border-[1px] rounded-lg   "
          }
        />
        <P className="w-[50%] h-full text-[1.4vw] [direction:rtl] text-[#717171] leading-9 md:flex flex-col ">
          رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این
          سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش
          برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت
          مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این
          زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات
          قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه
          شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
          جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را
          دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
          آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان
          می‌باشند.
          <span>
            چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
            آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
            روز که همه ایرانیان سالم و سلامت باشند.
          </span>
        </P>
      </div>

      <div className="w-full h-[45vh] md:hidden flex flex-col justify-between  gap-2 ">
        <div className="w-full h-[40%] flex items-center justify-between gap-3">
          <Img
            src="/assets/bg2.jpg"
            className={
              "w-[50%] h-full object-cover border-[#353535] border-[1px] rounded-lg   "
            }
          />
          <P className="w-[50%] h-full text-[2.4vw] [direction:rtl] text-[#717171] leading-6 md:flex flex-col ">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت
            جلب رضایت مشتریان بوده است.
          </P>
        </div>

        <P className="w-full  text-[2.4vw] [direction:rtl] text-[#717171] leading-6 flex flex-col ">
          دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای
          خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در
          بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده
          که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما
          مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی
          شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد
          کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
          <span>
            چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
            آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
            روز که همه ایرانیان سالم و سلامت باشند.
          </span>
        </P>
      </div>
    </motion.div>
  );
}

export default AboutPageTitle;
