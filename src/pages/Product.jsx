import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import axios from "axios";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const { id } = useParams();
  // const [selectedProduct, setSelectedProduct] = useState([]);
  // const [relatedProducts, setRelatedProducts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setData([res.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  //  fetch(`https://dummyjson.com/products`)
  //     .then((res) => {
  //       const persons = res.data.products;
  //       setSelectedProduct(persons);
  //     })
  //     console.log(setSelectedProduct)
    // },[]);
    // setRelatedProducts(
    //   data.filter(
    //     (item) =>
    //       item.category === selectedProduct?.category &&
    //       item.id !== selectedProduct?.id
    //   )
    // );


  useWindowScrollToTop();

  return data.length>0?(
    <Fragment>
      <Banner title={data.title} />
      <ProductDetails selectedProduct={data} />
      {/* <ProductReviews selectedProduct={data} /> */}
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={data} />
      </section>
    </Fragment>
   
    
  ):(
    <div>Loading...</div>
  )
};

export default Product;
