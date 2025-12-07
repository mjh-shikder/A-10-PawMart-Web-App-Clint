import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";

const MyOrder = () => {
  const [myOrder, setMyorder] = useState([]);
  // console.log(myOrder);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://a10-paw-mart-backend.vercel.app/my-orders?email=${user?.email}`
      )
      .then((res) => {
        setMyorder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  return (
    <div className="overflow-x-auto">
      <title>My Orders</title>
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
              <td>{order?.listingName ? order.listingName : "Not Added"}</td>
              <td>{order?.name ? order.name : "Not Added"}</td>
              <td>{order?.price ? order.price : "Not Added"}</td>
              <td>{order?.quantity ? order.quantity : "Not Added"}</td>
              <td>{order?.address ? order.quantity : "Not Added"}</td>
              <td>{order?.date ? order.date : "Not Added"}</td>
              <td>{order?.phone ? order.phone : "Not Added"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
