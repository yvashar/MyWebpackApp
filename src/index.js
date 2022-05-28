import React from "react";
import ReactDOM from "react-dom";
import HomeScreen from './components/HomeScreen.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./indexStyle.css"
import Kollywood from "./components/Kollywood.js";
import Mollywood from "./components/Mollywood.js";
import Bollywood from "./components/Bollywood.js";
import Tollywood from "./components/Tollywood.js";
import Hollywood from "./components/Hollywood.js";
// class Welcome extends React.Component {
//   render() {
//     return <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<HomeScreen/>} />
//                 <Route path="/kollywood" element={<Kollywood/>} />
//             </Routes>
//             </BrowserRouter>;
//   }
// }
ReactDOM.render(<BrowserRouter>
  <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/kollywood" element={<Kollywood/>} />
      <Route path="/mollywood" element={<Mollywood/>} />
      <Route path="/bollywood" element={<Bollywood/>} />
      <Route path="/tollywood" element={<Tollywood/>} />
      <Route path="/hollywood" element={<Hollywood/>} />
  </Routes>
  </BrowserRouter>, document.getElementById("root"));