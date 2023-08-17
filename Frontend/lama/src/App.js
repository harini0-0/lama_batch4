import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminPage from './Pages/AdminLandingPage';
import CustomerMasterPage from './Pages/customerMasterPage';
import LoginPage from './Pages/Login';
import LoanMasterPage from './Pages/LoanMasterPage';
import ItemMasterPage from './Pages/ItemMasterPage';
// import EmployeePage from './Pages/EmployeeLandingPage';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adminpage" element={<AdminPage />} />
    <Route path="/customermap" element={<CustomerMasterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loan" element={<LoanMasterPage />} />
        <Route path="/item" element={<ItemMasterPage/>}/>
    {/* <Route render={() => <Navigate to="/" />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
