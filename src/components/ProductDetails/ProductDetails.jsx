import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };
  console.log(selectedProduct[0].images[0]);
  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct[0].images[0]} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct[0].title}</h2>
            <div className="rate">
              {/* <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div> */}
              {/* <span>{selectedProduct?.avgRating} ratings</span> */}
            </div>
            <div className="info">
              <span className="price">${selectedProduct[0].price}</span> 
            </div>
            <br />
            <span>Category:{selectedProduct[0].category}</span>
            <br />
            <p>{selectedProduct[0].description}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(selectedProduct, quantity)}
            >
              <span className="text"> ADD TO CART</span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
