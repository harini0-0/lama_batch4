// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import AdminPage from './Pages/AdminLandingPage';
import CustomerMasterPage from './Pages/customerMasterPage';
import LoanMasterPage from './Pages/loanMasterPage';
// import LoginPage from './Pages/Login';
import AdminLayout from './layouts/admin/index.js';
import EmployeeLayout from './layouts/employee/index.js'
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

import ApplyForLoan from './Pages/ApplyForLoan';
import ProtectedRoute from './services/ProtectedRotue';
import { BrowserRouter } from 'react-router-dom';
function App() {

 const loggedIn = isLoggedIn()	
 
  return (
	<BrowserRouter>
		<Switch>
			<Route path={`/auth`} component={AuthLayout} />

			<Route path={`/loan/apply`} component={ApplyForLoan} />
			{/* <Route path={`/apply`} component={Apply} /> */}
 			
			<Route path={`/employee`} component={EmployeeLayout} />
			

			<ProtectedRoute path={`/admin`} component={AdminLayout} />
			<ProtectedRoute path={`/rtl`} component={RtlLayout} />
			<ProtectedRoute path={`/customermap`} component={CustomerMasterPage} />
			<ProtectedRoute path={`/user/add`} component={AddCustomerComponent} />
			<ProtectedRoute path="/user/:id" component={UpdateCustomerComponent } />
			<Route path={`/loanmap`} component={LoanMasterPage } />

			<Route path={`/loan/add`} component={AddLoanComponent } />
			<Route path="/loan/:id" component={UpdateLoanComponent } />
 			<Redirect from='/' to='/admin/default' />
		</Switch>
	</BrowserRouter>


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
