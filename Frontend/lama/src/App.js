import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminPage from './Pages/AdminLandingPage';
import CustomerMasterPage from './Pages/customerMasterPage';
// import EmployeePage from './Pages/EmployeeLandingPage';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<AdminPage />} />
    <Route path="/adminpage" element={<AdminPage />} />
    <Route path="/customermap" element={<CustomerMasterPage />} />
    {/* <Route render={() => <Navigate to="/" />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
