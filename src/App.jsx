import "./App.css";
import Gallery from "./components/Gallery";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "./components/Box";
import Nature from "./components/Nature";

const App = () => {
  return (
    <Router>
      <div className="app">
      <h1>Picture Gallery</h1>
      <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/box" element={<Box />} />
          <Route path="/nature" element={<Nature />} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;
