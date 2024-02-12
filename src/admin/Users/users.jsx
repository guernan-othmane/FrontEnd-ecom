import React, { useEffect, useState } from "react";
import "./users.css";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axios";

export default function Users() {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosClient.get("http://localhost:4444/accounts/")
    .then((response) => {
      console.log(response.data);
      setUsers(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

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
                <th>role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link to={`/edit-user/${user._id}`}>
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
      </div>
    </section>
  );
}
