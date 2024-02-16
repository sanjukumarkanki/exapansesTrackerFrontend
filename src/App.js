import React from "react";
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
