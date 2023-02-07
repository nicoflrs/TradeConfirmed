import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage.jsx'
import Form from './components/Form.jsx'
import Log from './components/Log.jsx'

const App = () => (
  <div id="divApp">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Form />} />
        <Route path="/homepage/log" element={<Log />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;