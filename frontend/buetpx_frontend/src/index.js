import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About'; 
import Homefeed from './Homefeed';
import Post from "./Post";
import Header from "./Contents/Header"
// import {
//   Navigation,
//   Footer,
//   Home,
//   About,
//   Contact,
//   Blog,
//   Posts,
//   Post,
// } from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homefeed />} />
      <Route path="/post" element={<Post />} />
      
    </Routes>
    
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
