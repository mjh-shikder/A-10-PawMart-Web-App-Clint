import React from "react";
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

  return <div></div>;
};

export default CardDetailsPage;
