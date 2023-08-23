// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import AdminPage from './Pages/AdminLandingPage';
import CustomerMasterPage from './Pages/customerMasterPage';
import LoanMasterPage from './Pages/loanMasterPage';
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
import AddCustomerComponent from './Pages/AddCustomerComponent';
import UpdateCustomerComponent from './Pages/UpdateCustomerComponent';

import AddLoanComponent from './Pages/AddLoanComponent';
import UpdateLoanComponent from './Pages/UpdateLoanComponent';

import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { isLoggedIn } from './auth';
function App() {

 const loggedIn = isLoggedIn()	
  return (
	<HashRouter>
		<Switch>
			<Route path={`/auth`} component={AuthLayout} />
			<Route path={`/admin`} component={AdminLayout} />
			<Route path={`/rtl`} component={RtlLayout} />
			<Route path={`/customermap`} component={CustomerMasterPage } />
			<Route path={`/loanmap`} component={LoanMasterPage } />
			<Route path={`/employee/add`} component={AddCustomerComponent } />
			<Route path="/employee/:id" component={UpdateCustomerComponent } />
			<Route path={`/loan/add`} component={AddLoanComponent } />
			<Route path="/loan/:id" component={UpdateLoanComponent } />
			<Redirect from='/' to='/admin/default' />
		</Switch>
	</HashRouter>


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
