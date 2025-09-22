import P from "../../atoms/P/P";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css';
import { branchPageArray } from "../../../../core/constans/branchPageArray";
import Img from "../../atoms/Img/Img";

export function MenuPageBranchSection() {
    return (
        <div className="flex justify-center flex-col items-center  w-full">
            <P className={'text-2xl font-bold'}>
                شعبه اکباتان
            </P>
            <Swiper>
                {branchPageArray.map((item, index) => (
                    <SwiperSlide key={index}>   
                            <Img src={item.image} className={'w-20'}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}