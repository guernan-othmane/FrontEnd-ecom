import React, { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Nombre de produits par page
  const [products, setProducts] = useState([]);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:4444/products/");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(`Something went wrong! error: ${error}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("check:  ", products?.paginatedProducts);
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
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products
                ? products?.paginatedProducts?.map((page) =>
                    page?.map((product) => (
                      <tr key={product._id}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.image}</td>
                        <td>
                          <Link to={"/product/:id"}>
                            <button className="table-button">
                              <i className="fas fa-eye"></i>
                            </button>
                          </Link>
                          &nbsp; &nbsp;
                          <Link
                            to={`/edit-product/${product._id}`}
                          >
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
                  )
                : "no data"}
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
