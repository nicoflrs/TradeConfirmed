import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TradingData from "./TradingData.jsx";

const Log = () => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate()
  
  const returnToForm = () => {
    navigate('/homepage');
  };

  useEffect(async () => {
    const data = await fetch('/log');
    const parsedData = await data.json();
    setResult(parsedData);
  }, []);

  return !result.length
    ? (
      <div id="notrades">
        You have no trades logged.&nbsp;
        {/* <Link to='/'> */}
          <button id="homebutton" onClick={returnToForm}>Return to Homepage</button>
        {/* </Link> */}
      </div>
    )
    : (
      <div id="table">
        <table id="innerTable" border='1'>
          <thead>
            <tr>
              <th>Position</th>
              <th>Number of Contracts</th>
              <th>Strategy</th>
              <th>Date of BTO/STO</th>
              <th>Date of BTC/STC</th>
            </tr>
          </thead>
          <TradingData
            result={result}
            setResult={setResult}
          />
        </table>
        <br />
        {/* <Link to='/'> */}
          <button id="homebutton" onClick={returnToForm}>Return to Homepage</button>
        {/* </Link> */}
      </div>
    );
};

export default Log;