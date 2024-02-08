import React, { useState } from "react";
import "./orders.css";
import { Link } from "react-router-dom";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Nombre de produits par page
  

  // Données factices pour la démonstration
  const orders = [
    {
       orderid: 2,
       customername: "John Doe",
       totalamout:"222",
       status: "dispo"
       },
    // Ajoutez autant d'éléments que nécessaire
  ];

  // Index du dernier produit de la page actuelle
  const indexOfLastOrder = currentPage * ordersPerPage;
  // Index du premier produit de la page actuelle
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage; // Correction ici
  // Produits de la page actuelle
  const currentOrders = orders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="table-all">
        <p>
          <h3>Orders</h3>
        </p>
        <br />
        <div>
          <table className="table shadow mt-2">
            <thead className="table-dark">
              <tr className="th-text">
                <th>OrderId</th>
                <th>CustomerName</th>
                <th>TotalAmout</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.orderid}>
                  <td>{order.orderid}</td>
                  <td>{order.customername}</td>
                  <td>{order.totalamout}</td>
                  <td>{order.status}</td>
                  <td>
                    <Link to="/edit-order/:id"><button className="table-button">
                      <i className="fas fa-pen"></i>
                    </button></Link>
                    
                    &nbsp; &nbsp;
                    <Link><button className="table-button">
                      <i className="far fa-trash-alt"></i>
                    </button></Link>
                    
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
                    currentPage === Math.ceil(orders.length / ordersPerPage)
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
