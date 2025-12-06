import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const [myOrder, setMyorder] = useState([]);
  // console.log(myOrder);

  useEffect(() => {
    axios
      .get("http://localhost:3000/my-orders")
      .then((res) => {
        setMyorder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Buyer Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Date</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{order?.listingName}</td>
              <td>{order?.name}</td>
              <td>{order?.price}</td>
              <td>{order?.quantity}</td>
              <td>{order?.address}</td>
              <td>{order?.date}</td>
              <td>{order?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
