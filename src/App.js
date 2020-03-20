import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/layouts/Lyrics";
import { Provider } from "./context";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <ToastContainer />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
