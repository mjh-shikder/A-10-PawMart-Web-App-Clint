import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData } from "react-router";

const CardDetailsPage = () => {
  const data = useLoaderData();

  const {
    Price,
    category,
    date,
    description,
    email,
    image,
    location,
    name,
    _id,
  } = data;

  return (
    <div className="bg-base-200">
      <title>{name}</title>
      <div className="bg-white mt-10 rounded-xl md:p-10 md:grid md:grid-cols-12 flex flex-col justify-start ">
        {/* image container */}
        <div className="col-span-7">
          <img div className="rounded-xl w-full " src={image} alt="" />
        </div>
        {/* others info */}
        <div className="col-span-5 md:px-7 text-accent">
          <h1 className="text-4xl font-semibold  ">{name}</h1>
          <p className="mt-3 text-lg text-gray-600 ">{description}</p>
          <p className="mt-4 text-lg text-secondary border border-secondary inline-block px-1.5 rounded-md ">{category}</p>
          <p className="mt-3 text-lg flex items-center gap-1.5 text-primary  ">
            <IoLocationSharp size={15}></IoLocationSharp>{location}
          </p>
          <div className="border-b border-gray-100 my-5"></div>
          <div>
            {Price == 0 ? (
              <h3 className=" text-secondary text-xl items-center">
                Free for Adoption
              </h3>
            ) : (
              <h3 className="text-secondary text-xl  items-center">
                ৳ {Price}
              </h3>
            )}
           
          </div>
          <div className="border-b border-gray-100 my-5"></div> {/* Border */}
          
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
