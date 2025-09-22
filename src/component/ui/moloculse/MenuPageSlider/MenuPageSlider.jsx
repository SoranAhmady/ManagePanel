import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css';
import Img from "../../atoms/Img/Img";
import { motion } from "framer-motion";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import { ChangeToFa } from "../ChangeToFa/ChangeToFa";
import { CalculatePrecentage } from "../CalculatePrecentage/CalculatePrecentage";
import { StarRating } from "../StarRating/StarRating";
import { useSelector } from "react-redux";
import MenuPageSliderLoader from "../Loader/Loader";

export function MenuPageSlider({ item = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevRef = useRef();
    const loading = useSelector(state => state.User.loding)

    return (
        <div className="w-full relative z-0 ">
            <Button
                ref={prevRef}
                className={
                    "sm:flex hidden border-2 p-2.5 px-3 rounded-lg absolute z-20 left-[160px] bg-white top-1/2 Prev1"
                }
            >
                <Icon name={"arrow-r"} />
            </Button>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ prevEl: prevRef.current }}
                spaceBetween={10}
                simulateTouch={false}
                allowTouchMove={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="w-full flex flex-row-reverse "
                loop
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                }}
                dir="rtl"
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                    },
                    480: {
                        slidesPerView: 2.5,
                    },
                    768: {
                        slidesPerView: 3.5,
                        autoplay: false,
                    },
                    1024: {
                        autoplay: false,
                        slidesPerView: 4.5,
                    },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {loading ? (
                    <>
                    <MenuPageSliderLoader />
                    </>
                ) : (
                    <>
                        {item.map((slide, index) => {
                            const prevIndex =
                                (activeIndex - 1 + item.length) % item.length;

                            const isPrev = index === prevIndex;
                            const ratings = (slide.rating / 5) * 100;

                            return (
                                <SwiperSlide key={index} className="flex flex-col ">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        viewport={{ once: true }}
                                        whileInView={{
                                            opacity: isPrev ? 0.5 : 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            repeat: 0,
                                            delay: index * 0.1,
                                        }}
                                        className={`bg-white w-[90%] h-full flex flex-col items-center gap-2 border-2 border-[#757575] rounded-lg `}
                                    >
                                        <Img src={slide.image} className="w-[100%]" />
                                        <div className="w-full flex flex-col gap-2 items-center">
                                            <P className={"font-bold flex justify-center text-md"}>
                                                {slide.name}
                                            </P>
                                            <div className="flex justify-between w-[92%]">
                                                <div className="flex gap-1 cursor-pointer items-center">
                                                    <Icon name={"love"} />
                                                    <P className={"sm:flex hidden text-[10px] text-[#ADADAD]"}>
                                                        افزودن به علاقمندی‌ها
                                                    </P>
                                                </div>
                                                {slide.discount > 0 && (
                                                    <div className="flex gap-3 items-center">
                                                        <P className={"text-[11px] line-through text-[#ADADAD]"}>
                                                            <ChangeToFa value={slide.price} />
                                                        </P>
                                                        <P className={"text-[#C30000] rounded-full bg-[#c3000044] text-[10px] py-0.5 pb-0.5 px-2.5"}>
                                                            %<ChangeToFa value={slide.discount} />
                                                        </P>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex justify-between w-[90%]">
                                                <div className="flex gap-1 items-center ">
                                                    <StarRating fillPercent={ratings} />
                                                    <P className={"text-[14px]"}>
                                                        <ChangeToFa value={slide.rating} />
                                                    </P>
                                                    <P className={"text-[10px] text-[#ADADAD]"}>
                                                        (<ChangeToFa value={slide.allRating} /> نظر)
                                                    </P>
                                                </div>
                                                <P className={"text-[15px]"}>
                                                    <CalculatePrecentage
                                                        total={slide.price}
                                                        precent={slide.discount}
                                                    />{" "}
                                                    تومان
                                                </P>
                                            </div>
                                        </div>
                                        <Button className={"bg-[#417F56] duration-500 transition-all hover:bg-[#20723b] text-[16px] px-2 py-1.5 mb-2 my-2 text-white w-[90%] rounded-md"}>
                                            افزودن به سبد خرید
                                        </Button>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </>
                )}
            </Swiper>
        </div>
    );
}
