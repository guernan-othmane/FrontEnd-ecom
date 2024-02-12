import React, { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Nombre de produits par page
  const [products, setProducts] = useState([]);
  // Données factices pour la démonstration
  // const products = [
  //   {
  //     id: 1,
  //     title: "Product 1",
  //     description: "Description 1",
  //     quantity: 3,
  //     image: "image1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Product 2",
  //     description: "Description 2",
  //     quantity: 5,
  //     image: "image2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     description: "Description 3",
  //     quantity: 2,
  //     image: "image3.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Product 4",
  //     description: "Description 4",
  //     quantity: 7,
  //     image: "image4.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Product 5",
  //     description: "Description 5",
  //     quantity: 4,
  //     image: "image5.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Product 6",
  //     description: "Description 6",
  //     quantity: 1,
  //     image: "image6.jpg",
  //   },
  //   // Ajoutez autant d'éléments que nécessaire
  // ];

  // Index du dernier produit de la page actuelle


  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:4444/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(`Something went wrong! error: ${error}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("check:  ",products?.paginatedProducts);
  return (
    <section>
      <div className="table-all">
        <p>
          <h3>Products</h3>
        </p>
        <div className="text-end">
          <Link to="/new-product">
            <button className="btn-add">Add</button>
          </Link>
        </div>
        <br />
        <div>
          <table className="table shadow mt-2">
            <thead className="table-dark">
              <tr className="th-text">
                <th>Title</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products ? products?.paginatedProducts?.map((page) =>
                page?.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.image}</td>
                    <td>
                      <Link to={"/product/:id"}>
                        <button className="table-button">
                          <i className="fas fa-eye"></i>
                        </button>
                      </Link>
                      &nbsp; &nbsp;
                      <Link to={"/edit-product/:id"}>
                        <button className="table-button">
                          <i className="fas fa-pen"></i>
                        </button>
                      </Link>
                      &nbsp; &nbsp;
                      <Link>
                        <button className="table-button">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : "no data"}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage(
                    currentPage === 1 ? currentPage : currentPage - 1
                  )
                }
              >
                {"<"}
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage(
                    currentPage === Math.ceil(products.length / productsPerPage)
                      ? currentPage
                      : currentPage + 1
                  )
                }
              >
                {">"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
