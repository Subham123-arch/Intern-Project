import React from "react";
import { useState } from "react";
import viteLogo from "./assets/react/react.svg";
import "./App.css";
import LoginBox from "@/app/login/part/LoginBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Update the import path to match your actual folder structure
import Page from '../app/dashboard/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginBox />}/>
        <Route path="/page" element={<Page/>}/>
      </Routes>
    </Router>
  )
}

export default App
