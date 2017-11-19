import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/header.js";
import Footer from "./components/layout/footer.js";
import "./App.css";

import routes from "./routes";

const App = () => (
  <Router>
    <div className="layout">
      <Header />

      <div className="main">{routes}</div>

      <Footer />
    </div>
  </Router>
);
export default App;
