import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LoanMasterPage.css";

 const Item = () => {
//   const [loanCards, setLoanCards] = useState([]);
const item = [{
    "id": "1",  "description": "Tea Table", "issueStatus" : "Y", "itemMake":"Wooden", "itemCategory":"Furniture","itemValuation":"4000"
},{
  "id": "1",  "description": "Tea Table", "issueStatus" : "Y", "itemMake":"Wooden", "itemCategory":"Furniture","itemValuation":"4000"
},{
  "id": "1",  "description": "Tea Table", "issueStatus" : "Y", "itemMake":"Wooden", "itemCategory":"Furniture","itemValuation":"4000"
} ]


  const handleAddItem = () => {
    // Show the add loan card form
  };

  const handleEditItem = (itemId) => {
    // Show the edit loan card form
  };

  const handleDeleteItem = (itemId) => {
    // Delete the loan card
  };

  return (
    <div className="container">
      <h1>Items</h1>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Description</th>
            <th>Issue Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.issueStatus}</td>
              <td>{item.itemMake}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemValuation}</td>
              <td className="actions">
                <Button variant="primary" onClick={() => handleEditItem(item.id)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="add-button">
        <Button variant="success" onClick={handleAddItem}>
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default Item;