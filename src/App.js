import './App.css';
import DimmiPerche from './components/DimmiPerché';
import Apple from './components/Apple';
import Bmw from './components/Bmw';
import SottoCassa from './components/SottoCassa';
import Antartide from './components/Antartide';

import { Projects } from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<DimmiPerche/>} />
          <Route exact path="/Apple" element={<Apple/>} />
          <Route exact path="/Bmw" element={<Bmw/>} />
          <Route exact path="/SottoCassa" element={<SottoCassa/>} />
          <Route exact path="/Antartide" element={<Antartide/>} />
        </Routes>
        <Projects />
    </BrowserRouter>
   
  );
}

export default App;
