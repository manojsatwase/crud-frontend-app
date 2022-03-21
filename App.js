import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NewPatient from "./Components/PatientInfo/NewPatient";
import Search from './Components/Search/Search';
import "./App.css";
import UpdatePatient from "./Components/Admin/UpdatePatient";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/dashboard" element={<Dashboard />} />
          <Route exact={true} path="/newpatient" element={<NewPatient />} />
          <Route exact={true} path="/dashboard/:id" element={<UpdatePatient />} />
          <Route exact={true} path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;