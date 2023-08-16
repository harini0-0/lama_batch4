import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminPage from './Pages/AdminLandingPage';
import CustomerMasterPage from './Pages/customerMasterPage';
import LoginPage from './Pages/Login';
// import EmployeePage from './Pages/EmployeeLandingPage';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/adminpage" element={<AdminPage />} />
    <Route path="/customermap" element={<CustomerMasterPage />} />
    <Route path="/login" element={<LoginPage/>} />
    {/* <Route render={() => <Navigate to="/" />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
