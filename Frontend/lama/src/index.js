import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/App.css';
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RtlLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import CustomerMasterPage from "./Pages/customerMasterPage"
import AddCustomerComponent from './Pages/AddCustomerComponent';
import UpdateCustomerComponent from './Pages/UpdateCustomerComponent';
import UserProvider from './contexts/UserProvider';
import App from './App';


ReactDOM.render(
	<UserProvider>
		<ChakraProvider theme={theme}>
		<ThemeEditorProvider>
			<App />
		</ThemeEditorProvider>
		</ChakraProvider>
	</UserProvider>,
	document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ChakraProvider } from '@chakra-ui/react';
// import theme from './theme/theme'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ChakraProvider theme={theme}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </ChakraProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
