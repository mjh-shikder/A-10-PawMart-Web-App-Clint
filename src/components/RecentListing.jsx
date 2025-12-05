import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Aos from "aos";

const RecentListing = () => {
  const [recentData, setRecentData] = useState([]);

  console.log(recentData);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recent-listing")
      .then((res) => {
        setRecentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in" className="bg-base-100 py-10 rounded-xl mt-10 ">
      <h1 className="text-4xl text-center font-semibold text-primary hover:text-secondary ">
        Recent Listing
      </h1>
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  ">
        {recentData.map((data) => (
          <Card data={data} key={data._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
