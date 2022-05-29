import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import ErrorHandler from "./ErrorHandler";
import DogPage from "./DogPage";
import IndexPage from "./IndexPage";
import Page404 from "./Page404";

function App() {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/dogs/:breed/" component={DogPage} />
          <Route component={Page404} />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
