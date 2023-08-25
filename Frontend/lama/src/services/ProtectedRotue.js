import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";


function ProtectedRoute({ component: Component, ...restOfProps }) {
    const history = useHistory();
  const isAuthenticated = localStorage.getItem('data');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   if(!isAuthenticated || isAuthenticated == undefined) 
//   islogin = false;
      const checkUserToken = () => {
        const userToken = JSON.parse(localStorage.getItem("data"));
        if (!userToken || userToken === 'undefined'|| userToken.roles[0] != "ROLE_ADMIN") {
            setIsLoggedIn(false);
            history.push("/auth/sign-in");
        }
        setIsLoggedIn(true);

    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);

  console.log("login is ", isLoggedIn);

  
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : null
      }
    />
  );
}

export default ProtectedRoute;