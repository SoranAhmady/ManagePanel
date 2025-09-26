import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import Button from "../../atoms/Button/Button";

function SliderHeaderPage() {
  const ArayImage = [
    {
      id: 1,
      img: "/public/assets/p1.jpg",
      text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    },
    { id: 2, img: "/public/assets/p2.jpg", text: "طعم بی‌نظیر طبیعت!" },
    {
      id: 3,
      img: "/public/assets/p3.jpg",
      text: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
    },
  ];

  return (
    <div className="w-full h-[35vh]  md:h-[50vh] flex items-center relative justify-center flex-col">
      <div className=" hidden md:flex items-center justify-center cursor-pointer Prev w-[40px] h-[40px] absolute left-5  z-10 rounded-full ">
        <Icon name="next" />
      </div>

      <Swiper
        modules={[Pagination, Navigation,Autoplay]}
        navigation={{ nextEl: ".Next", prevEl: ".Prev" }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            autoplay:false,
          },
        }}
        className="w-full h-full  "
      >
        {ArayImage.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="w-full h-full flex flex-col  items-center gap-8 justify-center bg-center bg-cover object-contain bg-no-repeat bg-[#1325189f] bg-blend-overlay "
            >
              <P className="text-white md:text-[2.5vw] text-[4.5vw] [direction:rtl] font-semibold mt-[5vw]">
                {item.text}
              </P>
              <Button className="md:w-[10vw] w-[30vw] md:h-[2.5vw] h-[8vw] md:text-[1vw] text-[3vw] text-white bg-[#417F56] rounded-[8px] hover:shadow-[inset_2px_2px_5px_0px_#193121]   ">
                سفارش آنلاین غذا
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" hidden md:flex items-center justify-center cursor-pointer Next w-[40px] h-[40px] absolute right-5 z-10 rounded-full ">
        <Icon name="prev" />
      </div>

      <div className="absolute  z-10  bottom-0 h-[23px] md:h-[33px] md:inverted-radius inverted-radius2 flex items-center justify-center ">
        <div className="custom-pagination w-full flex items-center justify-center "></div>
      </div>
    </div>
  );
}

export default SliderHeaderPage;
  