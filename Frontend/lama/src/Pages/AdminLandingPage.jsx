// import React from "react";
// import NavbarComponent from "./Navbar";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import CardComponent from "../components/CardComponent";
// import "./AdminLandingPage.css";
// import LineChartComponent from "../components/Linechart";

// function AdminPage(){
//     const navigate = useNavigate();
//     return (
//         <div className="App">
//             <NavbarComponent page= '1'></NavbarComponent>
//             <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-green-200 via-indigo-200 to-pink-200">
//                 <h5>Dashboard</h5>
//                 <div className="statcard">
//                     <CardComponent title="Unresolved" text="23"></CardComponent>
//                     <CardComponent title="Unresolved" text="25"></CardComponent>
//                     <CardComponent title="Unresolved" text="24"></CardComponent>
//                 </div>
//                 <div>
//                     <LineChartComponent></LineChartComponent>
//                 </div>
//                 <div className="adminOptions">
//                     <Button variant="secondary" 
//                         style={{margin: "10px", color: "black"}}
//                         onClick={()=>{navigate('/customermap')}}
//                     >
//                             Customer Data Management
//                     </Button>
//                     <Button variant="secondary" style={{margin: "10px", color: "black"}}>Loan Card Management</Button>
//                     <Button variant="secondary" style={{margin: "10px", color: "black"}}>Items Master Data</Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminPage;