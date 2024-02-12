import React, { useEffect, useState } from 'react';
import './editUser.css'; // CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';
import { axiosClient } from '../../utils/axios';

const EditUser = () => {
  const {id} = useParams();
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axiosClient
      .get("accounts/" + id)
      .then((response) => {
        console.log(response.data); // Vérifiez le contenu de response.data
        setFullName(response.data.fullname);
        setEmail(response.data.email);
        setRole(response.data.role);
      })
      .catch((error) => console.log(error));
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.put("accounts/update/"+id, {   fullname: fullname, email: email, role: role})
    .then((res)=> {
      console.log(res)
      navigate('/users')
      }).catch((err)=>{
        console.log('Error in updating the user');
        });
        };
  
  return (
    <div className="edit-product-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>FullName:</label>
        <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)}/>

        <label>Email:</label>
        <textarea value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;