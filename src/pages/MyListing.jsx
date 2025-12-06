import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const MyListing = () => {
  const [myListing, setMyListing] = useState([]);

  const { user } = useAuth();

  console.log(myListing);

  useEffect(() => {
    fetch(`http://localhost:3000/my-listing?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyListing(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

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
                  <Link className="btn btn-ghost btn-xs text-red-600 border border-red-500">
                    <MdDelete></MdDelete> Delete
                  </Link>
                  <Link to={`/update-listing/${list?._id}`} className="btn btn-ghost btn-xs text-secondary border border-secondary ">
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
