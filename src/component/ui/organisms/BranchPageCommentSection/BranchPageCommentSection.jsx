import P from "../../atoms/P/P";
import { BranchPageComment } from "../../../../core/constans/BrancPageComment";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Img from "../../atoms/Img/Img";
import { StarRating } from "../../moloculse/StarRating/StarRating";
import { ChangeToFa } from "../../moloculse/ChangeToFa/ChangeToFa";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import { motion } from "framer-motion";
export function BranchPageCommentSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex w-full relative flex-col  gap-2 items-center">
            <P className={'font-bold text-2xl'}>
                نظرات کاربران
            </P>
            <div className="flex flex-col relative items-start  w-[100%] gap-2">
                <div className="flex  flex-col relative items-center w-[90%] gap-2">
                    <Button className={'prev34 absolute sm:block hidden left-[265px] top-1/2 z-20 p-0.5 rounded-lg bg-white border-2 '}>
                        <Icon name={'arowlll'} />
                    </Button>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop
                        autoplay={{
                            delay: 2500
                        }}
                        spaceBetween={25}
                        style={{
                            display: 'flex',
                            gap: '5px !important'
                        }}
                        navigation={{
                            prevEl: '.prev34'
                        }}
                        dir="rtl"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        allowTouchMove={false}
                        simulateTouch={false}
                        pagination={{ clickable: true, enabled: true, el: '.paginate11' }}
                        breakpoints={{
                            348: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 2.5,
                                autoplay: false
                            }
                        }}
                        className={`sm:w-full w-screen items-center !flex justify-center`}
                    >
                        {BranchPageComment.map((item, index) => {
                            const prevIndex = (activeIndex - 4 + BranchPageComment.length) % BranchPageComment.length;
                            const isPrev = index === prevIndex;
                            return <SwiperSlide
                                key={index}

                                style={{ display: "flex !important" }}

                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{
                                        opacity: isPrev ? 0.5 : 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        repeat: 0,
                                        delay: index * 0.1,
                                    }}
                                    className={`flex-row items-center  z-0  swiper-slider-item  border-2 rounded-lg gap-4 p-4 w-[90%] sm:w-full  ${isPrev ? 'opacity-50' : 'opacity-100'}`}>
                                    <div className="flex flex-col items-center min-w-[100px]">
                                        <Img
                                            src={item.image}
                                            className="w-24 h-24 rounded-full "
                                            alt={item.name}
                                        />
                                        <P className="mt-2 font-semibold text-[#717171]">{item.name}</P>
                                        <P dir="rtl" className="text-sm text-[#717171]">{item.date}</P>
                                    </div>
                                    <div className="flex flex-col justify-between flex-1 text-right  ">
                                        <P className=" border-2 border-white px-2 py-1 w-fit rounded-md text-black">
                                            {item.title}
                                        </P>
                                        <div className="flex  justify-start flex-row-reverse gap-2">
                                            <P>
                                                <ChangeToFa value={item.rate} />
                                            </P>
                                            <StarRating fillPercent={50} />
                                        </div>
                                    </div>
                                </motion.div>

                            </SwiperSlide>

                        })}
                    </Swiper>
                </div>
                <div className="  paginate11 z-10  h-[23px] md:h-[33px]  hidden sm:flex items-center justify-center mb-4 mt-2" >
                    <div className=" w-full flex items-center justify-center "></div>
                </div>
            </div>
        </div>
    )
}