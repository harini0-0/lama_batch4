import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";
import MainDashboard from "./views/admin/default";
import EmployeeDashboard from "./views/employee/default";
import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Admin Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Employee Dashboard",
    layout: "/employee",
    path: "/default",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: EmployeeDashboard,
  },
  {
    name: "Sign Out",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  
];

export default routes;
