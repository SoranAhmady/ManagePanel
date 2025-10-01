import { BranchPageNavBar } from "../../../../core/constans/BranchPageNavBar";
import Icon from "../../atoms/Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";

import P from "../../atoms/P/P";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../atoms/Button/Button";
import { Navigation } from "swiper/modules";
export function MenuPageNavBarCategory() {
    return (
        <div className="w-full flex gap-2 justify-center my-3 ">

            <div className="w-[92%] relative flex justify-end   ">
                <Button className={'bg-white   -mx-3  rounded-[4px]  border-2 py-0 h-[50%] my-3 p-0.5 px-1    left-2 z-20 top-4  prevvCat '}>
                    <Icon name={'nextttt'} />
                </Button>
                <Swiper
                    slidesPerView={6}
                    modules={[Navigation]}
                    spaceBetween={10}
                    loop
                    className="  !flex w-[75%]  !m-0"
                    navigation={{
                        nextEl: '.prevvCat'
                    }}
                >
                    {BranchPageNavBar.map((item, index) => (
                        <SwiperSlide key={index} className="!flex  w-10  !p-1  bg-[#EDEDED] text-[#353535] gap-2 justify-center !items-center rounded-[64px] cursor-pointer">
                            <Icon name={'arowwlll'} />
                            <P className={'text-[16px]'}>
                                {item.title}
                            </P>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}