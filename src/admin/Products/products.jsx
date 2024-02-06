import React, { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Nombre de produits par page
  

  // Données factices pour la démonstration
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description 1",
      quantity: 3,
      image: "image1.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description 2",
      quantity: 5,
      image: "image2.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description 3",
      quantity: 2,
      image: "image3.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description 4",
      quantity: 7,
      image: "image4.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description 5",
      quantity: 4,
      image: "image5.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      description: "Description 6",
      quantity: 1,
      image: "image6.jpg",
    },
    // Ajoutez autant d'éléments que nécessaire
  ];

  // Index du dernier produit de la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  // Index du premier produit de la page actuelle
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Produits de la page actuelle
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.image}</td>
                  <td>
                    <button className="table-button">
                      <i className="fas fa-pen"></i>
                    </button>
                    &nbsp; &nbsp;
                    <button className="table-button">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
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
