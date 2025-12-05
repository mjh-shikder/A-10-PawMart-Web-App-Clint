import React, { useEffect } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Aos from 'aos';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import 'aos/dist/aos.css'
import { Link } from 'react-router';

const Category = () => {

      // Aos fucntion
    useEffect(() => {
        Aos.init();
    }, [])

    return (
           <div data-aos="fade-right">
      <h2 className="text-4xl text-center font-semibold text-primary hover:text-secondary mt-10">
        Category
      </h2>
      <div className="bg-white mt-10 rounded-xl px-9 py-0.5">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="h-80 rounded-xl my-10"
        >
          
          <SwiperSlide className="rounded-2xl ">
            <Link>
               <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full items-center  md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg ">
                  Pet (Adoption)
                </h2>
                
              </div>
            </div>
          </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link>
               <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1696507398173-863ae397a059?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full items-center  md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg ">
                  Pet Food
                </h2>
                
              </div>
            </div>
          </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link>
               <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1589924749359-9697080c3577?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full items-center  md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg ">
                  Accessories
                </h2>
                
              </div>
            </div>
          </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            <Link>
               <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
              src="https://images.unsplash.com/photo-1631511231050-24f8dba10537?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full items-center  md:items-center md:justify-start md:pb-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg text-center">
                  Pet Care
                </h2>
                
              </div>
            </div>
          </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
    );
};

export default Category;