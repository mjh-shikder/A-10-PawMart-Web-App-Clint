import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyListing = () => {
  const [myListing, setMyListing] = useState([]);

  const { user } = useAuth();

  // console.log(myListing);

  useEffect(() => {
    fetch(
      `https://a10-paw-mart-backend.vercel.app/my-listing?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyListing(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  // Delete button
  const handleDelete = (id) => {
    // sweet alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // baki function
        axios
          .delete(`https://a10-paw-mart-backend.vercel.app/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const filterData = myListing.filter((list) => list._id != id);
            // console.log(filterData);
            setMyListing(filterData);
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    });
    //
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <title>My Listing</title>
        <h1 className="text-2xl text-center text-secondary font-bold">
          My Listing
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-primary">Name</th>
              <th>Description</th>
              <th className="text-accent">Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myListing?.map((list) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={list?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-xl">
                        {list?.name}
                      </div>
                      {/* <div className="text-sm opacity-50">{list?.price}</div> */}
                    </div>
                  </div>
                </td>
                <td>{list?.description}</td>
                <td className="text-accent">{list?.category}</td>
                <td className="flex gap-2 ">
                  <Link
                    onClick={() => handleDelete(list?._id)}
                    className="btn btn-ghost btn-xs text-red-600 border border-red-500"
                  >
                    <MdDelete></MdDelete> Delete
                  </Link>
                  <Link
                    to={`/update-listing/${list?._id}`}
                    className="btn btn-ghost btn-xs text-secondary border border-secondary "
                  >
                    <FaEdit></FaEdit> Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
