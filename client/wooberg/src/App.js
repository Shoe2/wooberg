import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormatComponent from "./components/format.component";
import BlogComponent from "./components/blog.component";
import AddFormatComponent from "./components/add-format.component";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import navBar from "./assets/banner.jpg";


function App() {
  return (

    <Router>
      <div className="">

      </div>
      <div className="container">
        <a href="/" target="_blank">
          <img id="banner" src={navBar} alt="WOOBERG: The Encyclopedia of Magic Variant Formats" />
        </a>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">WOOBERG: The Encyclopedia of Magic Variant Formats</Link>
          <br/>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
              <li className="navbar-item">
                <Link to="/add-format" className="nav-link">Add Format</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />

        <Route path="/" exact component={BlogComponent} />
        <Route path="/format/:id" component={FormatComponent} />
        <Route path="/add-format" component={AddFormatComponent} />
      </div>

    </Router>

  );
}

export default App;
