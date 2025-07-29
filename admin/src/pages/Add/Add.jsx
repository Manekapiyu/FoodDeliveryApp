import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload a product image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error("Failed to add product.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Check console for details.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        {/* Image Upload */}
        <div className="add-img-upload flex-col">
          <label htmlFor="image">Upload Image</label>
          <label htmlFor="image" className="upload-preview">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}
        <div className="add-product-name flex-col">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Product Description */}
        <div className="add-product-description flex-col">
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            name="description"
            rows="6"
            placeholder="Write content here..."
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Category and Price */}
        <div className="add-category-price">
          <div className="add-category flex-col">
            <label htmlFor="category">Product Category</label>
            <select
              id="category"
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              required
            >
              <option value="">Select category</option>
              <option value="Rice">Rice</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Street Foods">Street Foods</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <label htmlFor="price">Product Price (Rs)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Rs 600"
              value={data.price}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <button type="submit" className="add-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
