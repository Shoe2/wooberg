import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormatComponent from "./components/format.component";
import BlogComponent from "./components/blog.component";
import AddFormatComponent from "./components/add-format.component";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import navBar from "./assets/banner.jpg";
import FormatsEncyclopediaComponent from './components/formatEncyclopedia.component';


function App() {
  return (

    <Router>
      <div className="">

      </div>
      <div className="container">
        <a href="/" target="_blank">
          <img id="banner" src={navBar} alt="WOOBERG: The Encyclopedia of Magic Variant Formats" />
          <Link to="/" className="navbar-brand">WOOBERG: The Encyclopedia of Magic Variant Formats</Link>
        </a>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-item">
            <Link to="/" className="nav-link">Blog</Link>
          </div>
          <div className="navbar-item">
            <Link to="/add-format" className="nav-link">Add Format</Link>
          </div>
          <div className="navbar-item">
            <Link to="/formats" className="nav-link">Format Encyclopedia</Link>
          </div>
        </nav>
        <br />

        <Route path="/" exact component={BlogComponent} />
        <Route exact path="/format/:id" component={FormatComponent} />
        <Route path="/add-format" component={AddFormatComponent} />
        <Route path="/formats" component={FormatsEncyclopediaComponent} />
      </div>

    </Router>

  );
}

export default App;
