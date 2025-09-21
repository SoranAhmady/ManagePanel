import { motion } from "framer-motion";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import { ArayIconDis } from "../../../../core/constans/Home";
import Button from "../../atoms/Button/Button";

function InformationHomePage() {
  
  return (
    <motion.div initial={{ opacity: 0,  }} 
      whileInView={{ opacity: 1,  }} 
      transition={{ duration: 0.8 ,repeat:0}} className="w-full overflow-hidden md:h-[50vh] h-[60vh] overflow-x-hidden px-[7vw] grid  md:flex items-center justify-center py-4  bg-[url(/assets/p5.jpg)] bg-blend-overlay bg-[#00000088] bg-center bg-cover ">
      <motion.div animate={{y:250}} whileInView={{y:0}} transition={{duration:1 ,repeat:0}} className="md:w-[50%] w-full h-full hidden md:flex items-center justify-start ">
        <div className="w-[60%] grid grid-cols-2   gap-[1vw]   ">
        {ArayIconDis.map((item) => (
          <div className="w-[12vw] h-[7vw]  flex flex-col items-center justify-center gap-5 text-white  ">
            <Icon name={item.icon} />
            <P>{item.text}</P>
          </div>
        ))}
      </div>
      </motion.div>

      <motion.div animate={{y:250}} whileInView={{y:0}} transition={{duration:1 ,repeat:0}} className="md:w-[50%] w-full   text-[#ffff] [direction:rtl]  hidden md:flex flex-col items-end  gap-[1vw]  ">
        <P className="text-[1.7vw] font-semibold  w-full " >رستوران‌های زنجیره‌ای ترخینه</P>
        <P className="text-[1.4vw] font-thin w-full  " >
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </P>
        <Button className="border-[#FFFFFF] border-[1px] rounded flex items-center justify-center gap-3 w-[12vw] h-[2.5vw]   ">
            <P>اطلاعات بیشتر</P>
            <Icon name="flashleft" />
        </Button>
      </motion.div>


      <motion.div animate={{x:250}} whileInView={{x:0}} transition={{duration:2}} className="md:w-[50%] w-full md:hidden  text-[#ffff]  [direction:rtl] flex flex-col items-end  gap-[1vw]  ">
        <P className=" text-[4vw] font-medium  w-full " >رستوران‌های زنجیره‌ای ترخینه</P>
        <P className="text-[2.8vw] font-extralight w-full leading-6  " >
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </P>
        <Button className="border-[#FFFFFF] border-[1px] rounded flex items-center justify-center gap-3 w-[40vw] h-[8vw] px-5 text-[3vw]    ">
            <P>اطلاعات بیشتر</P>
            <Icon name="flashleft" />
        </Button>
      </motion.div>

      <motion.div animate={{x:-250}} whileInView={{x:0}} transition={{duration:2}} className=" w-full h-full flex md:hidden items-center justify-start ">
        <div className="w-full grid grid-cols-2  gap-[3vw]   ">
        {ArayIconDis.map((item) => (
          <div className="w-[40vw] h-[16vw] flex flex-col items-center justify-center gap-3 text-white  ">
            <Icon name={item.icon} />
            <P>{item.text}</P>
          </div>
        ))}
      </div>
      </motion.div>

    </motion.div>
  );
}

export default InformationHomePage;
