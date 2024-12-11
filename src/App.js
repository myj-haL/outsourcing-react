// import logo from './logo.svg';
import { lazy } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"))

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Routes>
        <>
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
