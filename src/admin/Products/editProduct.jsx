import React, { useState, useEffect } from "react";
import "./EditProduct.css";
import { axiosClient } from "../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      .get("products/" + id)
      .then((response) => {console.log(response)
        setTitle(response.data.product.title);
        setDescription(response.data.product.description);
        setPrice(response.data.product.price);
        setImage(response.data.product.image);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.put("products/update/"+id, { title, description, price, image })
    .then((res)=> {
      console.log(res)
      navigate('/products')
      }).catch((err)=>{
        console.log('Error in updating the product');
        });
        };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form  onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title}  onChange={(e) => setTitle(e.target.value)} />
        <label>Description:</label>
        <textarea name="description"  value={description}  onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className="image">
          <label>Image:</label>
          <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <label>Price:</label>
        <input type="number" name="price" value={price}  onChange={(e) => setPrice(Number(e.target.value))} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProduct;
