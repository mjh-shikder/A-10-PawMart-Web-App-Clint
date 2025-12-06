import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Aos from "aos";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "aos/dist/aos.css";
import { Link } from "react-router";

const RecentListing = () => {
  const [recentData, setRecentData] = useState([]);
  const [category, setCategory] = useState("");
  console.log(category);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/recent-listing")
  //     .then((res) => {
  //       setRecentData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/listing?category=${category}`)
      .then((res) => {
        setRecentData(res.data);
      });
  }, [category]);

  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" className="bg-base-100 py-10 rounded-xl mt-10 ">
      <h2 className="text-4xl text-center font-semibold text-primary hover:text-secondary mt-10">
        Category
      </h2>

      {/*  */}
      <div
  onClick={(e) => {
    const value = e.target.getAttribute("data-value");
    if (value) {
      setCategory(value);
    }
  }}
  className=" flex flex-col md:flex-row  justify-center items-center md:justify-between space-y-5 px-10 my-20  "
>
  <div
    data-value="Pets"
    className="px-10 py-3 rounded-xl bg-primary text-white cursor-pointer items-center justify-center flex font-bold text-2xl"
  >
    Pets
  </div>

  <div
    data-value="Pet Food"
    className="px-10 py-3 rounded-xl bg-primary text-white cursor-pointer items-center justify-center flex font-bold text-2xl"
  >
    Pet Food
  </div>

  <div
    data-value="Accessories"
    className="px-10 py-3 rounded-xl bg-primary text-white cursor-pointer items-center justify-center flex font-bold text-2xl"
  >
    Accessories
  </div>

  <div
    data-value="Pet Care Products"
    className="px-10 py-3 rounded-xl bg-primary text-white cursor-pointer items-center justify-center flex font-bold text-2xl"
  >
    Pet Care Products
  </div>
</div>


      <h1 className="text-4xl text-center font-semibold text-primary hover:text-secondary  ">
        Recent Listing
      </h1>
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  "
      >
        {recentData.slice(0, 6).map((data) => (
          <Card data={data} key={data._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
