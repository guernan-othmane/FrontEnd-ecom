import React, { useState } from "react";
import "./categories.css";
import { Link } from "react-router-dom";

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5); // Nombre de produits par page

  // Données factices pour la démonstration
  const categories = [
    {
      id: 1,
      name: "skincare",
      description: "Description 1",
    },
    {
      id: 2,
      name: "elegance",
      description: "Description 2",

    },
    
  ];

  // Index du dernier produit de la page actuelle
  const indexOfLastCategory = currentPage * categoriesPerPage;
  // Index du premier produit de la page actuelle
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  // Produits de la page actuelle
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="table-all">
        <p>
          <h3>Categories</h3>
        </p>
        <div className="text-end">
          <Link to="/new-category">
            <button className="btn-add">Add</button>
          </Link>
        </div>
        <br />
        <div>
          <table className="table shadow mt-2">
            <thead className="table-dark">
              <tr className="th-text">
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Link to={'/category/:id'}>
                      <button className="table-button">
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link>
                    &nbsp; &nbsp;
                    <Link to={'/edit-category/:id'}>
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
                    currentPage === Math.ceil(categories.length / categoriesPerPage)
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
