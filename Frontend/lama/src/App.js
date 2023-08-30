import CustomerMasterPage from './Pages/customerMasterPage';
import LoanMasterPage from './Pages/loanMasterPage';
import PendingLoansAdmin from './Pages/PendingLoansAdmin';
import ItemMasterPage from './Pages/itemMasterPage';
import AdminLayout from './layouts/admin/index.js';
import EmployeeLayout from './layouts/employee/index.js'
import AuthLayout from "./layouts/auth/index.js";
import RtlLayout from "./layouts/rtl/index.js"
import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AddCustomerComponent from './Pages/AddCustomerComponent';
import UpdateCustomerComponent from './Pages/UpdateCustomerComponent';
import AddLoanComponent from './Pages/AddLoanComponent';
import UpdateLoanComponent from './Pages/UpdateLoanComponent';
import { isLoggedIn } from './auth';
import ApplyForLoan from './Pages/ApplyForLoan';
import ProtectedRoute from './services/ProtectedRotue';
import ItemsPage from './Pages/ItemsPage';
import EmployeeItemPage from './Pages/EmployeeItemPage'
import ProtectedRouteUser from './services/ProtectedRouteUser';
import UpdateItemMasterPage from './Pages/UpdateItemMasterPage';
import AddItemMaster from './Pages/AddItemMaster';
import EmployeeLoanPage from './Pages/EmployeeLoanPage';
import LoansViewAdmin from './Pages/LoansViewPage';

function App() {

  return (
	<BrowserRouter>
		<Switch>
			<Route path={`/auth`} component={AuthLayout} /> 			
			<ProtectedRouteUser path={`/employee`} component={EmployeeLayout} />
			<ProtectedRouteUser path={'/itemsPage'} component={ItemsPage} />
			<ProtectedRouteUser path = {'/user/item/:id'} component = {EmployeeItemPage}/>
			<ProtectedRouteUser path="/viewloan" component={EmployeeLoanPage} />
			<ProtectedRouteUser path={`/loan/apply`} component={ApplyForLoan} />
			<ProtectedRoute path={`/admin`} component={AdminLayout} />
			<ProtectedRoute path={`/rtl`} component={RtlLayout} />
			<ProtectedRoute path={`/customermap`} component={CustomerMasterPage} />
			<ProtectedRoute path={'/loanviewmap'} component={LoansViewAdmin} />
			<ProtectedRoute path={`/user/add`} component={AddCustomerComponent} />
			<ProtectedRoute path={'/pendingLoans'} component={PendingLoansAdmin}/>
			<ProtectedRoute path="/user/:id" component={UpdateCustomerComponent } />
			<ProtectedRoute path={`/loanmap`} component={LoanMasterPage } />
			<ProtectedRoute path={`/loan/add`} component={AddLoanComponent } />
			<ProtectedRoute path="/loan/:id" component={UpdateLoanComponent } />	
			<ProtectedRoute path={`/itemmap`} component={ItemMasterPage} />
			<ProtectedRoute path={`/item/add`} component={AddItemMaster} />
			<ProtectedRoute path="/item/:id" component={UpdateItemMasterPage} />
			<Redirect from='/' to='/admin/default' />

		</Switch>
	</BrowserRouter>


  );
}

export default App;

