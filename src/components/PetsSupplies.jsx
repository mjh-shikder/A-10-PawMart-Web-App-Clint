import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const PetsSupplies = () => {
  const allData = useLoaderData();

//   console.log(allData);

  // Aos fucntion
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" className="bg-base-100 rounded-xl p-10 mt-10">
      <title>Pet & Supplies</title>
      <h1 className="text-center text-4xl font-semibold text-primary hover:text-secondary  ">
        Pet & Supplies
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center '>
              {
                  allData.map(data => <Card data={data} key={data._id}></Card>)
              }
          </div>

    </div>
  );
};

export default PetsSupplies;
