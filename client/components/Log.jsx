import React, { useEffect, useState } from 'react';
import TradingData from './TradingData.jsx';
import ReturnButton from './ReturnButton.jsx'
import { fetchRecords } from './helpers/logInteractionMethods';
import Cookies from 'js-cookie';

const Log = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      const user_id = Cookies.get('user')
      const data = await fetchRecords(user_id)
      setResult(data);    
    })()
  }, []);
  return !result.length
    ? (
      <div id="notrades">
        You have no trades logged.&nbsp;
        <ReturnButton />
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
        <ReturnButton />
      </div>
    );
};

export default Log;