import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LoanMasterPage.css";

 const LoanCards = () => {
//   const [loanCards, setLoanCards] = useState([]);
const loanCards = [{
    "id": "1",  "loanType": "Furniture", "duration" : "20000"
}, { "id": "2",  "loanType": "Stationary", "duration" : "3000"}, { "id": "3",  "loanType": "Furniture", "duration" : "900"}]


  const handleAddLoanCard = () => {
    // Show the add loan card form
  };

  const handleEditLoanCard = (loanCardId) => {
    // Show the edit loan card form
  };

  const handleDeleteLoanCard = (loanCardId) => {
    // Delete the loan card
  };

  return (
    <div className="container">
      <h1>Loan Cards</h1>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loanCards.map((loanCard) => (
            <tr key={loanCard.id}>
              <td>{loanCard.id}</td>
              <td>{loanCard.loanType}</td>
              <td>{loanCard.duration}</td>
              <td className="actions">
                <Button variant="primary" onClick={() => handleEditLoanCard(loanCard.id)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteLoanCard(loanCard.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="add-button">
        <Button variant="success" onClick={handleAddLoanCard}>
          Add Loan Card
        </Button>
      </div>
    </div>
  );
};

export default LoanCards;