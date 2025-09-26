import P from "../../atoms/P/P";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css';
import { branchPageArray } from "../../../../core/constans/branchPageArray";
import Icon from "../../atoms/Icon/Icon";
import { motion } from "framer-motion";
import { Autoplay, Navigation } from "swiper/modules";
import { BranchPageTime } from "../../moloculse/BrnachPageTime/BranchPageTime";
export function MenuPageBranchSection() {
    return (
        <div className="flex flex-col items-center w-full  ">
            <P className="text-2xl font-bold mb-6">شعبه اکباتان</P>
            <Swiper
                slidesPerView={1}
                loop
                navigation
                modules={[Autoplay, Navigation]}
                className="w-full "
            >
                {branchPageArray.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative swiper-wrapper2 w-full border-3 pb-96 bg-white  border-black flex justify-center items-end"
                    >
                        <motion.img
                            initial={{ y: 80 }}
                            src={item.image}
                            viewport={{ once: true }}
                            whileInView={{
                                y: 0,
                            }}
                            alt={`branch-${index}`}
                            className="absolute  w-full h-[50vh] inset-0  object-cover"
                        />
                        <div className="absolute inset-0 bg-transparent " />
                        <div className="relative z-20 sm:mb-6 w-[80%] sm:w-[50%]    translate-y-[350px]  bg-white rounded-xl shadow-lg sm:p-7 sm:justify-around items-start  flex-col flex sm:flex-row gap-4 border-2 border-[#417F56]">
                            <div className="sm:block hidden">
                                <BranchPageTime item={item} />

                            </div>
                            <div className="flex items-center sm:my-0 my-2 gap-4  justify-center sm:justify-center  flex-row sm:flex-col-reverse   sm:gap-3 text-[16px]  w-[100%]  sm:w-fit">
                                <div className="flex flex-col text-sm font-medium text-gray-700 gap-2">
                                    <P className={'sm:w-48 l flex sm:text-[16px] text-[10px]  justify-end items-start text-center'}>{item.adrdess}</P>
                                </div>
                                <Icon name="locationw" />
                            </div>
                            <div className="flex items-center justify-center  sm:flex-col gap-5 sm:gap-3 text-[16px] pb-2  w-full sm:w-fit">
                                <div className="sm:hidden block">
                                    <BranchPageTime item={item} />
                                </div>
                                <div className="flex flex-row sm:flex-col-reverse  text-sm font-medium text-gray-700 gap-2 items-center">
                                    <P className={'sm:text-[16px] text-[10px] '}>{item.phone1}</P>
                                    <P className={'sm:text-[16px] text-[10px] sm:block hidden'}>{item.phone2}</P>
                                    <Icon name="phone222" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
