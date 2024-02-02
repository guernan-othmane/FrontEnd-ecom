import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
// import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Shop = () => {

  const [data, setData] = useState([]);
  const [categorySelected,setCategorySelected]=useState('')
  

  useEffect(() => {
    axios
      .get(
        `https://dummyjson.com/products${
          categorySelected ? `/category/${categorySelected}` : "/"
        }`
      )
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.error(err));
  }, [categorySelected]);



  // useWindowScrollToTop();

  return data?(
<>
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect handleCategorySelected={setCategorySelected}/>
            </Col>
            <Col md={8}>
              <SearchBar/>
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={data} />
        </Container>
      </section>
    </Fragment>
    </>
  ):(
    <div >loading</div>
  );
  }

export default Shop;
