import React, { useState } from "react";
import "./users.css";
import { Link } from "react-router-dom";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Nombre de produits par page
  

  // Données factices pour la démonstration
  const users = [
    {
       id: 2,
       fullname: "John Doe",
       email:"john@gmail.com",
       phoneNumber: "0678945321"
       },
       {
        id: 1,
        fullname: "Jane Smith",
        email: "jane@yahoo.fr",
        phoneNumber: "0698765432"
        },


    // Ajoutez autant d'éléments que nécessaire
  ];

  // Index du dernier produit de la page actuelle
  const indexOfLastUser = currentPage * usersPerPage;
  // Index du premier produit de la page actuelle
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Correction ici
  // Produits de la page actuelle
  const currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="table-all">
        <p>
          <h3>Users</h3>
        </p>
        <div className="text-end">
          <Link to="/new-user">
            <button className="btn-add">Add</button>
          </Link>
        </div>
        <br />
        <div>
          <table className="table shadow mt-2">
            <thead className="table-dark">
              <tr className="th-text">
                <th>fullname</th>
                <th>email</th>
                <th>phoneNumber</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <Link to="/edit-user/:id"><button className="table-button">
                      <i className="fas fa-pen"></i>
                    </button></Link>
                    
                    &nbsp; &nbsp;
                    <Link><button className="table-button">
                      <i className="far fa-trash-alt"></i>
                    </button></Link>
                    
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
                    currentPage === Math.ceil(users.length / usersPerPage)
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
