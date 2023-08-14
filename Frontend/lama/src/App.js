import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminPage from './Pages/AdminLandingPage';
import EmployeePage from './Pages/EmployeeLandingPage';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adminpage" element={<AdminPage />} />
    {/* <Route render={() => <Navigate to="/" />} /> */}
  </Routes>
</BrowserRouter>
  );
}

export default App;
