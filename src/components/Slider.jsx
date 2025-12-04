import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Slider() {
  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-right">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="h-[500px]  rounded-xl my-10  "
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_50%]"
            src="https://images.unsplash.com/photo-1633209972478-2093659e0aec?q=80&w=1281&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_50%]"
            src="https://images.unsplash.com/photo-1622273509371-3ee5d873dcf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_50%]"
            src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_50%]"
            src="https://images.unsplash.com/photo-1642860608992-7d4f02bacb8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
