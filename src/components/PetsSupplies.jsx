import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import Card from "./Card";
import axios from "axios";

const PetsSupplies = () => {
  // const allData = useLoaderData();
  const [allData, setAllData] = useState([]);
  const [category, setCategory] = useState("");

  console.log(category);

  // useEffect(() => {
  //   fetch('http://localhost:3000/listing')
  //     .then(res => res.json())
  //     .then(data => setAllData(data))
  //   .catch(err => console.log(err)
  //   )
  // },[setAllData])

  useEffect(() => {
    axios.get(`http://localhost:3000/listing?category=${category}`).then((res) => {
      setAllData(res.data);
    });
  }, [category]);

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
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue="Filter By Category"
        className="select rounded-xl text-gray-700"
      >
        <option disabled={true}>Filter By Category</option>
        <option>Pets</option>
        <option>Pet Food</option>
        <option>Accessories</option>
        <option>Pet Care Products</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center ">
        {allData.map((data) => (
          <Card data={data} key={data._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default PetsSupplies;
