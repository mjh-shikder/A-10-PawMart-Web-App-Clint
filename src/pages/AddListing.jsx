import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router";

const AddListing = () => {
  const { user } = useAuth();
  console.log(user.email);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = "Not added";
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    console.log(formData);

    axios
      .post(
        "https://a-10-backend-paw-mart-web-app.vercel.app/add-listing",
        formData
      )
      .then((res) => {
        console.log(res);
        toast.success("Data Submitted");
        e.target.reset();
        navigate("/pets-supplies");
      });
  };

  return (
    <div>
      <title>Add Listing</title>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white text-primary shadow-md p-6 rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
          Create Listing
        </h2>

        {/* Product / Pet Name */}
        <div>
          <label className="font-semibold">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            defaultValue={0}
          />
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            rows="3"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="font-semibold">Image (URL)</label>
          <input
            type="text"
            name="image"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Date (Pick Up) */}
        {/* <div>
          <label className="font-semibold">Pick Up Date</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
          />
        </div> */}

        {/* Email (Read-only) */}
        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
            className="w-full border p-2 bg-gray-100 rounded cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-primary text-white p-2 rounded font-semibold">
          Submit Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;
