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
          <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-end pb-12 md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg ">
                  Find Your Furry Friend Today!
                </h2>
                <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow-md">
                  Find the perfect companion waiting for you today.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
                    <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1763928342329-4f6d4781325c?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-end pb-12 md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg ">
                  Because Every Pet Deserves Love and Care.
                </h2>
                <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow-md">
                  Love Is Not a Luxury, But a Right for All Companion Animals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-end pb-12 md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg ">
                  Adopt, Don’t Shop Give a Pet a Home.
                </h2>
                <p className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow-md">
                  Simple Acts of Kindness That Change a Pet's Entire World.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
