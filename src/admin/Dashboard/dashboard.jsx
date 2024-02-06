import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <section className="section-all">
      <p>
        <h3 className="text-dash">Dashboard</h3>
      </p>
      <div class="container">
        <div class="row card-dashboard">
          <div class="col-6 col-lg-3">
            <div class="card l-bg-cherry">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Orders</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">3,243</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card l-bg-blue-dark">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-users"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Customers</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">15.07k</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card l-bg-green-dark">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-solid fa-eye"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Visits</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">578</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="card l-bg-orange-dark">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Revenue</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <b>Recent Orders</b>
        <br />
        <table className="table shadow mt-2">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
