import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage.jsx'
import Form from './components/Form.jsx'
import Log from './components/Log.jsx'

const AppRoutes = () => 
  <div id="divApp">
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/homepage" element={<Form />} />
        <Route exact path="/homepage/log" element={<Log />} />
      </Routes>
    </Router>
  </div>
  
export default AppRoutes;