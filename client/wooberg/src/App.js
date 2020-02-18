import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormatComponent from "components/format.component";
import BlogComponent from "components/blog.component";
import AddFormatComponent from "components/add-format.component";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          test
      </header>
      </div>
      <Route path="/" exact component={BlogComponent} />
      <Route path="/format/:id" component={FormatComponent} />
      <Route path="/add-format" component={AddFormatComponent} />
    </Router>

  );
}

export default App;
