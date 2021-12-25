import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
  const user = window.sessionStorage.getItem("token");
  if (user === null) {
    window.sessionStorage.setItem("loginError", true);
    window.sessionStorage.setItem("errorMessage", "You must login first.");
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? (
          <Component {...props} user={user} handleChildFunc={handleChildFunc} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
