import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateListing = () => {
  const { user } = useAuth();

  const { id } = useParams();

  const [currentList, setCurrentList] = useState();

  // to set defalut category
  const [category, setCategory] = useState(currentList?.category);

  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`https://a-10-backend-paw-mart-web-app.vercel.app/listing/${id}`)
      .then((res) => {
        setCurrentList(res.data);
        setCategory(res.data.category);
      });
  }, [id]);

  console.log(currentList);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
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
      createdAt: currentList?.createdAt,
    };

    axios
      .put(
        `https://a-10-backend-paw-mart-web-app.vercel.app/update/${id}`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Data Updated");
        navigation("/my-listing");
      })
      .catch((err) => {
        console.log(err);
        toast.warning(err);
      });
  };

  return (
    <div>
      <title>Update Listing</title>
      <div>
        <form
          onSubmit={handleUpdate}
          className="max-w-xl mx-auto bg-white text-secondary shadow-md p-6 rounded-xl space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
            Update Listing
          </h2>

          {/* Product / Pet Name */}
          <div>
            <label className="font-semibold">Product / Pet Name</label>
            <input
              type="text"
              name="name"
              defaultValue={currentList?.name}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="font-semibold">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              defaultValue={currentList?.price}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={currentList?.location}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              defaultValue={currentList?.description}
              className="w-full border p-2 rounded"
              rows="3"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold">Image (URL)</label>
            <input
              type="text"
              defaultValue={currentList?.image}
              name="image"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Date (Pick Up) */}
          <div>
            <label className="font-semibold">Pick Up Date</label>
            <input
              type="date"
              defaultValue={currentList?.date}
              name="date"
              className="w-full border p-2 rounded"
            />
          </div>

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
          <button className="w-full bg-secondary hover:bg-accent text-white p-2 rounded font-semibold">
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateListing;
