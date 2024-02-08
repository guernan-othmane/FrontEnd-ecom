import React, { useState } from 'react';
import './editUser.css'; // CSS file for styling

const EditUser = ({ user }) => {
  const [fullname, setFullName] = useState(user?.fullname || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phonenumber, setPhoneNumber] = useState(user?.phonenumber || '');

  const handleEditUser = () => {
    // Logic for editing a product (to be implemented)
    console.log('FullName:', fullname);
    console.log('Email:', email);
    console.log('PhoneNumber:', phonenumber);
  };

  return (
    <div className="edit-product-container">
      <h2>Edit User</h2>
      <form onSubmit={handleEditUser}>
        <label>FullName:</label>
        <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />

        <label>Email:</label>
        <textarea value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>PhoneNumber:</label>
        <input type="text" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;