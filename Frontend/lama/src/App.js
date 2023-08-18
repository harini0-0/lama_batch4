// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import AdminPage from './Pages/AdminLandingPage';
// import CustomerMasterPage from './Pages/customerMasterPage';
// import LoginPage from './Pages/Login';
import AdminLayout from './layouts/admin/index.js';
import AuthLayout from "./layouts/auth/index.js";
import RtlLayout from "./layouts/rtl/index.js"
// import EmployeePage from './Pages/EmployeeLandingPage';
import React from 'react';
// import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import AuthLayout from 'layouts/auth';
// import AdminLayout from 'layouts/admin';
// import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
// import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
function App() {
  return (
    <ThemeEditorProvider>
				<HashRouter>
					<Switch>
						<Route path="/auth" component={AuthLayout} />
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/rtl`} component={RtlLayout} />
						<Route path={'/'} component={AdminLayout} />
            <Route path={'/admin/default'} element={<AdminLayout />} />
					</Switch>
				</HashRouter>
			</ThemeEditorProvider>

  );
}

export default App;

{/* //     <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<AdminLayout />} />
//     <Route path="/adminpage" element={<AdminPage />} />
//     <Route path="/customermap" element={<CustomerMasterPage />} />
//     <Route path="/login" element={<LoginPage/>} />
//     <Route path="/admin" element={<AdminLayout />} />
//     <Route path="/auth" element={<AuthLayout />} />
//     <Route render={() => <Navigate to="/" />} />
//   </Routes>
// </BrowserRouter> */}
