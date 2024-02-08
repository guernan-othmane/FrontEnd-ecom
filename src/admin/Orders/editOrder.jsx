import React, { useState } from 'react';
import './editOrder.css'; // CSS file for styling

const EditOrder = ({ order }) => {
  const [orderid, setOrderId] = useState(order?.orderid || '');
  const [customername, setCustomerName] = useState(order?.customername || '');
  const [totalamount, setTotalAmout] = useState(order?.totalamount || '');
  const [status, setStatus] = useState(order?.status || '');


  const handleEditUser = () => {
    // Logic for editing a product (to be implemented)
    console.log('OrderId:', orderid);
    console.log('CustomerName:', customername);
    console.log('TotalAmout:', totalamount);
    console.log('Status:', status);

  };

  return (
    <div className="edit-product-container">
      <h2>Edit Order</h2>
      <form onSubmit={handleEditUser}>
        <label>OrderId:</label>
        <input type="text" value={orderid} onChange={(e) => setOrderId(e.target.value)} />

        <label>CustomerName:</label>
        <textarea value={customername} onChange={(e) => setCustomerName(e.target.value)} />

        <label>TotalAmout:</label>
        <input type="text" value={totalamount} onChange={(e) => setTotalAmout(e.target.value)} />

        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditOrder;