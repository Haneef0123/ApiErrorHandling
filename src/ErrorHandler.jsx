import React from "react";
import { useSelector } from "react-redux";

// import { useLocation } from "react-router-dom";
// import { get } from "lodash";
import Page404 from "./Page404";

const ErrorHandler = ({ children }) => {
  // const location = useLocation();
  const apiStatus = useSelector((state) => state.api.errorStatus);

  // switch (get(location.state, "errorStatusCode")) {   //getting the errorStatusCode from address bar.
  switch (apiStatus) {
    case 404:
      return <Page404 />;

    // ... cases for other types of errors

    default:
      return children;
  }
};

export default ErrorHandler;
