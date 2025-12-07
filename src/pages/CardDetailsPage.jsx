import axios from "axios";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";

const CardDetailsPage = () => {
  const data = useLoaderData();

  const navigate = useNavigate();

  const { user } = useAuth();


  const {
    Price,
    category,
    
    description,
    email,
    image,
    location,
    name,
    _id,
  } = data;

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const listingId = form.listingID.value;
    const listingName = form.listingName.value;
    const quantity = form.quantity.value;
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const notes = form.notes.value;

    const formData = {
      name,
      email,
      listingId,
      listingName,
      quantity,
      price,
      address,
      date,
      phone,
      notes,
    };

    // console.log(formData);

    axios
      .post("https://a10-paw-mart-backend.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);
        toast.success("Data Submitted");
        e.target.reset();
        navigate("/my-orders");
      });
  };

  return (
    <div className="bg-base-200">
      <title>{name}</title>
      <div className="bg-white mt-10 rounded-xl md:p-10 md:grid md:grid-cols-12 flex flex-col justify-start ">
        {/* image container */}
        <div className="col-span-7">
          <img div className="rounded-xl w-full h-[430px] object-cover" src={image} alt="" />
        </div>
        {/* others info */}
        <div className="col-span-5 md:px-7 text-accent md:mt-0 mt-10 ">
          <h1 className="text-4xl font-semibold  ">{name}</h1>
          <p className="mt-3 text-lg text-gray-600 ">{description}</p>
          <p className="mt-4 text-lg text-secondary border border-secondary inline-block px-1.5 rounded-md ">
            {category}
          </p>
          <p className="mt-3 text-lg flex items-center gap-1.5 text-primary  ">
            <IoLocationSharp size={15}></IoLocationSharp>
            {location}
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
          <div className="border rounded-lg p-3 border-gray-100 text-gray-600 ">
            {" "}
            {/* Border */}
            <h3 className=" text-xl ">Contact</h3>
            <h3>Email : {email}</h3>
          </div>
          <div className="mt-5 flex gap-5 md:space-x-10 ">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-primary px-10 "
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Adopt/Order Now
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                {/* ============================================================ */}
                <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl ">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    Order Form
                  </h2>

                  <form onSubmit={handleForm} className="space-y-4">
                    {/* Buyer Name */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Buyer Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter buyer name"
                        className="w-full border px-3 py-2 rounded-lg "
                        value={user.displayName}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block mb-1 font-semibold">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={user.email}
                        // readOnly
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div>

                    {/* Product/Listing ID */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Product/Listing ID
                      </label>
                      <input
                        type="text"
                        name="listingID"
                        placeholder="Enter product ID"
                        readOnly
                        value={_id}
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div>

                    {/* Product/Listing Name */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Product/Listing Name
                      </label>
                      <input
                        type="text"
                        name="listingName"
                        placeholder="Enter product name"
                        value={name}
                        readOnly
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div>

                    {/* Quantity */}
                    {category == "Pets" ? <div>
                      <label className="block mb-1 font-semibold">
                        Quantity
                      </label>
                      <input
                        value={1}
                        type="number"
                        min="1"
                        name="quantity"
                        placeholder="Enter quantity"
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div> :<div>
                      <label className="block mb-1 font-semibold">
                        Quantity
                      </label>
                      <input
                        defaultValue={1}
                        type="number"
                        min="1"
                        name="quantity"
                        placeholder="Enter quantity"
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div> }
                    

                    {/* Price (Read Only) */}
                    <div>
                      <label className="block mb-1 font-semibold">Price</label>
                      <input
                        type="text"
                        readOnly
                        name="price"
                        placeholder="Free"
                        value={Price}
                        className="w-full border px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Address
                      </label>
                      <textarea
                        placeholder="Enter full address"
                        name="address"
                        className="w-full border px-3 py-2 rounded-lg"
                        rows="3"
                      ></textarea>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Date (Pick Up)
                      </label>
                      <input
                        type="date"
                        name="date"
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-1 font-semibold">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                        className="w-full border px-3 py-2 rounded-lg"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block mb-1 font-semibold">
                        Additional Notes
                      </label>
                      <textarea
                        placeholder="Add any notes"
                        name="notes"
                        className="w-full border px-3 py-2 rounded-lg"
                        rows="3"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-primary">
                      Place Order
                    </button>
                  </form>
                </div>
                {/*  */}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className="border-b border-gray-100 my-5"></div> {/* Border */}
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
