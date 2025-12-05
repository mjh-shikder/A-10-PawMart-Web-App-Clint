import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const Card = ({ data }) => {
  const { Price, category, date, image, location, name, _id } = data;

  return (
    <div className="card bg-base-200 w-96 shadow-sm text-accent ">
      <figure>
        <img className="h-64 w-full" src={image} alt="kids-toy" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between ">
          <h2 className="cardTitle text-primary font-semibold text-2xl ">
            {name}
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sec border border-accent rounded-md px-1.5">
            <h3>{category}</h3>
          </div>
          <div className="flex items-center bg-white py-0.5 border border-gray-100 rounded-md px-1.5">
            <IoLocationSharp size={17}></IoLocationSharp> {location}
          </div>
        </div>

        <div className="flex  justify-between items-center">
          {Price == 0 ? (
            <h3 className=" text-secondary bg-white py-0.5 border border-gray-100 rounded-md px-1.5 items-center">
              Free for Adoption
            </h3>
          ) : (
            <h3 className="text-secondary text-lg  bg-white py-0.5 border border-gray-100 rounded-md px-1.5 items-center">
              ৳ {Price}
            </h3>
          )}
        </div>
        <Link
          to={`/card-details/${_id}`}
          className="btn btn-primary hover:btn-secondary mt-1.5 "
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
